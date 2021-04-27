# Guide

Attempt to [Incrementally Adopting Next.js](https://nextjs.org/docs/migrating/incremental-adoption) within an existing SPA (routed by [@reach/router](https://reach.tech/router/), if you use other solutions, it shouldn't matter).

This covers both for subdomains (username.example.com) and paths (example.com/username). These should be equivalent:

## Root

- http://localhost:3000/username
- http://username.localhost:3000

## Client routes

- http://localhost:3000/username/dashboard
- http://username.localhost:3000/dashboard

## Next routes

- http://localhost:3000/username/next
- http://username.localhost:3000/next

# Notes

Transitioning from SPA to Next and back will fire an hard reload, that's expected
