const { User, Book } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    books: async () => {
      return Book.find({});
    },
    book: async (parent, { _id }) => {
      return Book.find({ _id });
    },
  },
  Mutation: {},
};

module.exports = resolvers;
