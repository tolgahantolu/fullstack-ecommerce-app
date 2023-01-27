import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";
import { addMocksToSchema } from "@graphql-tools/mock";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { schema } from "./schema";

export function render(component, { mocks } = {}) {
  const mockSchema = addMocksToSchema({
    schema,
    resolvers: () => mocks,
  });

  const client = new ApolloClient({
    link: new SchemaLink({ schema: mockSchema }),
    cache: new InMemoryCache(),
  });

  return rtlRender(
    <ApolloProvider client={client}>
      <Provider store={store}>{component}</Provider>
    </ApolloProvider>
  );
}
