import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Nav from "./components/Nav";
import SplashPage from "./components/SplashPage";
import JoinPage from "./components/JoinPage";
import TheBuzz from "./components/TheBuzz";
import TheBusyBee from "./components/TheBusyBee";
import TheHive from "./components/TheHive";
import TheColony from "./components/TheColony";
// import ThoughtList from "./components/ThoughtList";
import Buzzings from "./components/Buzzings";
import Bee from "./components/Bee";
import NoMatch404 from "./components/NoMatch404";
import Footer from "./components/Footer";
import "./style.css";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <div>
          <Router>
            <Nav></Nav>
            <Routes>
              <Route path="/" element={<SplashPage />} />
              <Route path="/join" element={<JoinPage />} />{" "}
              {/* Join / Signup */}
              <Route path="/the-hive" element={<TheHive />} />{" "}
              {/* Main Page / Dashboard */}
              <Route path="/the-buzz" element={<TheBuzz />} /> {/* Newsfeed */}
              <Route path="/the-busy-bee" element={<TheBusyBee />} />{" "}
              {/* Journaling */}
              <Route path="/the-colony" element={<TheColony />} />{" "}
              {/* User Page */}
              <Route path="/buzzings">
                <Route path="/buzzings/:id" element={<Buzzings />} />
                <Route path="" element={<Buzzings />} />
              </Route>{" "}
              {/* Single Post */}
              <Route path="/bee">
                <Route path=":username" element={<Bee />} />
                <Route path="" element={<Bee />} />
              </Route>
              <Route path="*" element={<NoMatch404 />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
