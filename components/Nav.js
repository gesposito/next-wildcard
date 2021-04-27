import { Link } from "@reach/router";

function Nav({ subdomain, username }) {
  if (subdomain) {
    return (
      <nav>
        <Link to={`/`}>Home</Link> | <Link to={`/dashboard`}>Dashboard</Link> |{" "}
        <a href={`/next`}>Next</a>
      </nav>
    );
  }

  return (
    <nav>
      <Link to={`/${username}`}>Home</Link> |{" "}
      <Link to={`/${username}/dashboard`}>Dashboard</Link> |{" "}
      <a href={`/${username}/next`}>Next</a>
    </nav>
  );
}

export default Nav;
