module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    options: {
      safelist: ["animate-spin"],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#B2D234",
      },
      ringColor: {
        primary: "#B2D234",
      },
      fontFamily: {
        pop: ["Poppins"],
        quest: ["Questrial"],
      },
      fontSize: {
        xs: "14px",
        sm: "16px",
        md: "18px",
        "md-lh": ["18px", "36px"],
        lg: ["20px", "30px"],
      },
      letterSpacing: {
        two: "2px",
      },
      spacing: {
        30: "7.5rem",
        45: "11.5rem",
        "15px": "15px",
        "20px": "20px",
      },
      maxWidth: {
        btn: "215px",
      },
      width: {
        "250px": "250px",
        "slider-img-default-sm": "320px",
      },
      height: {
        hero: "calc(100vh + 100px)",
      },
      borderRadius: {
        "30px": "30px",
      },
      screens: {
        "2xl": "1400px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
