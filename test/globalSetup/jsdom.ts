import { JSDOM } from "jsdom";
// import { beforeAll } from "vitest";

// beforeAll(() => {
const dom = new JSDOM("", { url: "http://localhost" });
global.window = dom.window;
global.document = dom.window.document;

Object.keys(global.window).forEach((property) => {
  if (typeof global[property] === "undefined") {
    global[property] = global.window[property];
  }
});

global.Element = window.Element;
global.Image = window.Image;
// maybe more of: global.Whatever = window.Whatever

global.navigator = {
  userAgent: "node.js",
} as Navigator;
// });
