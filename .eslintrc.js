module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "@vue/typescript/recommended"],
  parserOptions: {
    ecmaVersion: 2020,
    resolveJsonModule: true,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "linebreak-style": 0,
    "vue/multi-word-component-names": "off",
  },
};

