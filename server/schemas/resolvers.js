const { User, Product, Category } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        user: async (parent, { email }) => {
            return User.findOne({ email }).select('-__v -password');
        },
        product: async (parent, { _id }) => {
            return await Product.findById(_id)
        },
        products: async (parent, { name }) => {
            const params = {};
            return await Product.find(params);
        },
        categories: async () => {
            return await Category.find();
        }
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Unable to login: Incorrect credentials')
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