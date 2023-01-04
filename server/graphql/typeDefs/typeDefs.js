const typeDefs = `#graphql
	type Food {
		id: ID!
		title: String!
		desc: String!
		price: Int!
		kit: Boolean
		category: String!
		ingredients: [String]!
	}
	
	type Category {
		id: ID!
		name: String!
		popular: Boolean
	}

	type Query {
		getFoods: [Food]
		getFood(foodId: ID!): Food

		getCategories: [Category]
	}
`;

export default typeDefs;
