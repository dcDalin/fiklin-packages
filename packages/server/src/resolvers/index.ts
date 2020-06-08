const resolvers = {
  Query: {
    user: () => {
      return {
        name: 'Dalin',
      };
    },
  },
};

export default resolvers;
