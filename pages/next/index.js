import NextNav from "../../components/NextNav";
import { getSubdomain, getPath } from "../../utils";

function Next({ subdomain, username }) {
  return (
    <div>
      <NextNav subdomain={subdomain} username={username} />
      <h1>
        Next subdomain: {subdomain} username: {username}
      </h1>
    </div>
  );
}

Next.getInitialProps = async ({ req, query }) => {
  const { host } = req.headers;
  return { subdomain: getSubdomain(host), username: getPath(query) };
};

export default Next;
