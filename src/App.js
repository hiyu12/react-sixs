import "./App.css";
import Home from "./Home";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Mutation from "./Mutation";

function App() {
  const client = new ApolloClient({
    uri: "https://graphqlzero.almansi.me/api",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1 style={{ color: "blue" }}>Graph Ql Demo </h1>
        {/* <Home /> */}
        <Mutation />
      </div>
    </ApolloProvider>
  );
}

export default App;
