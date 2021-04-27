import Link from "next/link";

function Nav({ subdomain, username }) {
  if (subdomain) {
    return (
      <nav>
        <a href={`/`}>Home</a> | <a href={`/dashboard`}>Dashboard</a> |{" "}
        <Link href={`/next`}>
          <a>Next</a>
        </Link>
      </nav>
    );
  }

  return (
    <nav>
      <a href={`${username}`}>Home</a> |{" "}
      <a href={`${username}/dashboard`}>Dashboard</a> |{" "}
      <Link href={`${username}/next`}>
        <a>Next</a>
      </Link>
    </nav>
  );
}

export default Nav;
