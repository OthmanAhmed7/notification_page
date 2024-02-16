/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mark: "hsl(1, 90%, 64%)",
        counter: "hsl(219, 85%, 26%)",
        container: "hsl(0, 0%, 100%)",
        background: "hsl(211, 68%, 94%)",
        notification: "hsl(205, 33%, 90%)",
        time: "hsl(219, 14%, 63%)",
        paragraph: "hsl(219, 12%, 42%)",
        names: "hsl(224, 21%, 14%)",
      },
    },
  },
  plugins: [],
};
