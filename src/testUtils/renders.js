import { render as rtl } from "@testing-library/react";

/**
 * Extensible rtl render function
 * @param {*} ui
 * @returns
 */
function render(ui) {
  return {
    ...rtl(ui),
  };
}
export default render;
