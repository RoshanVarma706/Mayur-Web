import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import App from "./App";
import { menu } from "./data/menu";

const html = renderToStaticMarkup(<App />);

/** Markup with the entities React escapes turned back into plain text. */
const text = html.replace(/&amp;/g, "&").replace(/&#x27;/g, "'");

const countOf = (needle: string) => html.split(needle).length - 1;

describe("Mayur Restaurant landing page", () => {
  it("renders without throwing", () => {
    expect(html.length).toBeGreaterThan(2000);
  });

  it("carries the correct restaurant identity", () => {
    expect(text).toContain("Mayur Restaurant");
    expect(text).toContain("+91 95125 54440");
    expect(text).toContain("Khokhra Circle");
    // The previous restaurant this repo described must be fully gone.
    expect(text).not.toContain("Sher E Punjab");
  });

  it("renders every section of the printed menu", () => {
    for (const section of menu) {
      expect(text).toContain(section.title);
    }
    // 84 dishes across the nine sections photographed from the carte.
    const menuItemCount = menu.reduce((sum, section) => sum + section.items.length, 0);
    expect(menuItemCount).toBe(84);
    expect(countOf('class="dish"')).toBe(menuItemCount);
  });

  it("shows prices, MRP lines and the GST note", () => {
    expect(text).toContain("₹170"); // Dal Fry
    expect(text).toContain("₹300"); // Paneer Bhurjee
    expect(text).toContain("MRP"); // mineral water / soft drinks
    expect(text).toContain("Taxes (GST) extra as applicable.");
  });
});
