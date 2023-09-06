// graphql-server/schema.js
const { gql } = require('apollo-server');

const typeDefs = gql`
  type NewsItem {
    category: String
    title: String
    description: String
    date: String
  }

  type Query {
    newsQuery: [NewsItem]
  }
`;


const newsData = [
  {
    category: 'BUSINESS',
    title: 'EventPanner Pro - Innovative Event Planner Company',
    description: 'In a world increasingly focused on environmental sustainability, EventPlanner Pro has taken significant strides to ensure that their event planning services align with eco-conscious values.',
    date: 'December 15, 2023',
  },
  {
    category: 'SUSTAINABILITY',
    title: 'Event Planner Pro Lauded for Sustainable Efforts',
    description: 'In a world where the boundaries of creativity are constantly being pushed, EventPlanner Pro, the innovative event planning company, made headlines on November 8th.',
    date: 'October 10, 2023',
  },
  {
    category: 'AWARDS',
    title: 'Revolutionizing Event Planning for the Modern Age',
    description: 'With a team of experienced event planners behind the scenes, EventPlanner Pro ensures that every tool and feature is designed with precision and practicality.',
    date: 'March 13, 2023',
  },
];

const resolvers = {
  Query: {
    newsQuery: () => newsData,
  },
};

module.exports = { typeDefs, resolvers };
