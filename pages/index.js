import Head from "next/head";
import { Router, Link } from "@reach/router";

import Nav from "../components/Nav";

import { getSubdomain, getPath } from "../utils";

function Root({ children }) {
  return children;
}

function Home({ subdomain, username }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav subdomain={subdomain} username={username} />

      <main>
        <h1>
          Home subdomain: {subdomain} username: {username}
        </h1>
      </main>
    </div>
  );
}

function Dashboard({ subdomain, username }) {
  return (
    <div>
      <Nav subdomain={subdomain} username={username} />
      <h1>
        Dashboard subdomain: {subdomain} username: {username}
      </h1>
    </div>
  );
}

function Index({ subdomain, username }) {
  let root = "/";
  let props = {};

  if (subdomain) {
    props.subdomain = subdomain;
  }
  if (username) {
    props.username = username;
    root = `/${username}`;
  }

  return (
    <Router>
      <Root path={root}>
        <Home path="/" {...props} />
        <Home path="/:route" {...props} default />
        <Dashboard path="dashboard" {...props} />
      </Root>
    </Router>
  );
}

Index.getInitialProps = async ({ req, query }) => {
  const { host } = req.headers;
  return { subdomain: getSubdomain(host), username: getPath(query) };
};

export default Index;
