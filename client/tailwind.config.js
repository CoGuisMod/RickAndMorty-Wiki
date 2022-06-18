module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kalam: ["Kalam", "cursive"],
      },
      backgroundImage: {
        "home-hero": "url('/src/assets/home-hero.jpg')",
        "characters-hero": "url('/src/assets/characters-hero.jpg')",
        "locations-hero": "url('/src/assets/locations-hero.jpg')",
        "episodes-hero": "url('/src/assets/episodes-hero.jpg')",
      },
    },
  },
  plugins: [],
};
