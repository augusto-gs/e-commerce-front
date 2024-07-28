import { describe, expect, test } from "vitest";
import MainHeader from "./MainHeader.vue";
import { render, screen } from "@testing-library/vue";

describe("Given a MainHeader component", () => {
  describe("When it is rendered on screen", () => {
    test("Then it should show an image with a 'shop.co logo on black letters' as an alternative text", () => {
      const altText = "shop.co logo on black letters";

      render(MainHeader);

      const image = screen.getByRole("img", { name: altText });

      expect(image).toBeInTheDocument();
    });
  });
});
