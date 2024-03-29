module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        blue_gray: { 900: "#302f2f" },
        black: {
          900: "#000000",
          "900_94": "#00000094",
          "900_89": "#00000089",
          "900_60": "#00000060",
          "900_dd": "#000000dd",
        },
        green: { A700: "#20b15a" },
        blue: { 900: "#0d47a1" },
        green_800: "#168944",
      },
      boxShadow: { xs: "0px 3px  49px 9px #0000000f" },
      fontFamily: { roboto: "Roboto" },
      opacity: { 0.64: 0.64 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
