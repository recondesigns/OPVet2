export function setButtonStyle(style) {
  switch (style) {
    case "primary":
      return {
        background: `#F4B860`,
        color: `#403926`,
        border: `2px solid #F4B860`
      };

    case "secondary":
      return {
        background: `#F4B860`,
        color: `#403926`,
        border: `2px solid #F4B860`
      };
    default:
      return "Default case";
  }
}
