module.exports = {
  syntax: "postcss-scss",
  plugins: [
    require("postcss-easy-import")({
      extensions: ".scss"
    }),
    require("autoprefixer")({
      browsers: ["last 2 versions"],
      cascade: false
    }),
    require("postcss-advanced-variables")({
      variables: require("./src/assets/styles/variables")
    }),
    require("math-calc"),
    require("postcss-extend"),
    require("postcss-nested"),
    require("postcss-rgb"),
    require("postcss-inline-comment"),
    require("postcss-inline-svg")({
      removeFill: true,
      path: "./src/assets/images/bg-svg"
    }),
    require("postcss-svgo"),
    require("cssnano")()
  ]
};
