const { User, Product, Category } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        user: async (parent, { email }) => {
            return User.findOne({ email }).select('-__v -password');
        },
        users: async () => {
            return User.find().select('-__v -password')
        },
        product: async (parent, { _id }) => {
            return await Product.findById(_id)
        },
        products: async (parent, { name, category }) => {
            const params = {};
            if (name) {
                params.name = {
                    $regex: name
                };
            }
            if (category) {
                params.category = category;
            }

            return await Product.find(params).populate('category');
        },
        categories: async () => {
            return await Category.find();
        }
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        addProduct: async (parent, args) => {
            const product = await Product.create(args);

            return product;
        }
    }
};

module.exports = resolvers;