module.exports = {
  content: ['./src/**/*.html' /* ... */],
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [],
};
