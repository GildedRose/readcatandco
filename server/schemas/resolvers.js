const { User, Product, Category } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc'); //test key

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
        },
        checkout: async (parent, args, context) => {
            const order = new Order({ products: args.products });
            const { products } = await order.populate('products').execPopulate();

            const line_items = [];

            for (let i = 0; i < products.length; i++) {
                // generate product id
                const product = await stripe.products.create({
                    name: products[i].name,
                    description: products[i].description
                });

                // generate price id using the product id
                const price = await stripe.prices.create({
                    product: product.id,
                    unit_amount: products[i].price * 100,
                    currency: 'usd',
                });

                // add price id to the line items array
                line_items.push({
                    price: price.id,
                    quantity: 1
                });
            }

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
                cancel_url: 'https://example.com/cancel'
            });

            return { session: session.id };
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