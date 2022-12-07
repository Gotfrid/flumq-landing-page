import "../styles/globals.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "centered",
  backgrounds: {
    default: "white",
    values: [
      {
        name: "gray",
        value: "#d3d3d3",
      },
      {
        name: "white",
        value: "#ffffff",
      },
    ],
  },
};
