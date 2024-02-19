/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        // Color de texto negro
        text_primary: "#1E1E1E",
        // Color de text morado-claro
        text_secondary: "#5A0084",
        // Color de texto blanco
        text_third: "#FFFFFF",
        // Color de texto  cards-transparent
        text_four: "#878DA1",
        // Color de texto  nosotros 40 años
        text_five: "#C60B6F",
        // Color de texto transparente (Inicio-cards)
        text_transparent: "#A27BD1",
        // Color de texto links
        link_nav: "#6C6C7A",
      },
      backgroundColor: {
        // button background morado-claro
        btn_primary: "#C60B6F",
        // button color transparente blanco
        btn_secondary: "#DADADA",
        // button background morado-oscuro
        btn_third: "#5A0084",
        // background productos destacados
        background_productos: "#E1E3E5",
      },
      screens: {
        "medium-desktop": "926px",
        "desktop-min": "1200px",
      },
    },
  },
  plugins: [],
};
