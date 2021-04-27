function getSubdomain(host) {
  if (host.includes(".")) {
    return host.split(".")[0];
  }

  return "";
}

function getPath(query) {
  if (query.path) {
    return query.path[0];
  }

  return "";
}

export { getSubdomain, getPath };
