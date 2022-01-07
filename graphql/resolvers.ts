import prisma from "../lib/prisma";

export const resolvers = {
  Query: {
    links: async (_parent, args, context) =>
      await context.prisma.link.findMany(),
  },
};
