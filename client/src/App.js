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
import SplashPage from "./pages/SplashPage";
import JoinPage from "./pages/JoinPage";
import TheBuzz from "./pages/TheBuzz";
import TheBusyBee from "./pages/TheBusyBee";
import TheHive from "./pages/TheHive";
import TheColony from "./pages/TheColony";
import Buzzings from "./pages/Buzzings";
import Bee from "./pages/Bee";
import Footer from "./components/Footer";
import Links from "./pages/Links";
import Contact from "./pages/Contact";
import Devs from "./pages/Devs";
import ComingSoon from "./pages/ComingSoon";
import PrivateRoutes from "./components/PrivateRoutes";
import NoMatch404 from "./pages/NoMatch404";
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
              <Route element={<PrivateRoutes />}>
                <Route path="/the-hive" element={<TheHive />} />{" "}
                {/* Main Page / Dashboard */}
                <Route path="/the-buzz" element={<TheBuzz />} />{" "}
                {/* Newsfeed */}
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
                  <Route path="/bee/:username" element={<Bee />} />
                  <Route path="" element={<Bee />} />
                </Route>
              </Route>
              <Route path="/links" element={<Links />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/devs" element={<Devs />} />
              <Route path="/donation" element={<ComingSoon />} />
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
