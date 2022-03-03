const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ["pngimg.com", "links.papareact.com", "fakestoreapi.com"],
  },

  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
});
