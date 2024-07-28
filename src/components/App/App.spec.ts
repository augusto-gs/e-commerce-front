import { describe, test, expect } from "vitest";
import { screen, render } from "@testing-library/vue";
import App from "./App.vue";

import { homeRouter } from "@/testUtils/mockRouter";

describe("Given an App component", () => {
  describe("When it is rendered on the HomeView", () => {
    test("Then it should show an image with a 'shop.co logo on black letters' as an alternative text", async () => {
      const altText = "shop.co logo on black letters";

      render(App, {
        global: {
          plugins: [homeRouter],
        },
      });

      await homeRouter.isReady();

      const logo = screen.getByRole("img", { name: altText });

      expect(logo).toBeInTheDocument();
    });
  });
});
