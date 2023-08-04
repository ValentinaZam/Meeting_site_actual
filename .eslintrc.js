module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        semi: [2, "always"],
        indent: [0, 4],
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        "space-before-function-paren": ["error", { anonymous: "always", named: "never" }],
        "multiline-ternary": ["off"]
    }
};
