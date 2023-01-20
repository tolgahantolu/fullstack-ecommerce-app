const typeDefs = `#graphql
	type Food {
		id: ID!
		title: String!
		desc: String!
		price: Int!
		kit: Boolean
		category: String!
		ingredients: [String]!
		image: String!
	}
	
	type Category {
		id: ID!
		name: String!
		popular: Boolean
		image: String!
	}

	type User {
		id: ID!
		name: String!
		surname: String!
		email: String!
		password: String!
		token: String
	}

	input RegisterInput {
		name: String!
		surname: String!
		email: String!
		password: String!
	}
	
	input LoginInput {
		email: String!
		password: String!
	}

	type Query {
		getFoods: [Food]
		getFood(foodId: ID!): Food
		getCategories: [Category]
		getUser(id: ID!): User
	}

	type Mutation {
	    registerUser(registerInput: RegisterInput): User
		loginUser(loginInput: LoginInput): User
  	}
`;

export default typeDefs;
