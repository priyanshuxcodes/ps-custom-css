const styleMap = {
  //Padding
  "Chai-p-0": "padding: 0;",
  "Chai-p-1": "padding: 4px;",
  "Chai-p-2": "padding: 8px;",
  "Chai-p-3": "padding: 12px;",
  "Chai-p-4": "padding: 16px;",
  "Chai-pt-2": "padding-top: 8px;",
  "Chai-pr-2": "padding-right: 8px;",
  "Chai-pb-2": "padding-bottom: 8px;",
  "Chai-pl-2": "padding-left: 8px;",

  //Margin
  "Chai-m-0": "margin: 0;",
  "Chai-m-1": "margin: 4px;",
  "Chai-m-2": "margin: 8px;",
  "Chai-m-3": "margin: 12px;",
  "Chai-m-4": "margin: 16px;",
  "Chai-mt-2": "margin-top: 8px;",
  "Chai-mr-2": "margin-right: 8px;",
  "Chai-mb-2": "margin-bottom: 8px;",
  "Chai-ml-2": "margin-left: 8px;",

  //Text Color
  "Chai-text-red": "color: red;",
  "Chai-text-blue": "color: blue;",
  "Chai-text-green": "color: green;",
  "Chai-text-white": "color: white;",
  "Chai-text-black": "color: black;",
  "Chai-text-gray": "color: gray;",

  //Background
  "Chai-bg-red": "background-color: red;",
  "Chai-bg-blue": "background-color: blue;",
  "Chai-bg-green": "background-color: green;",
  "Chai-bg-black": "background-color: black;",
  "Chai-bg-white": "background-color: white;",
  "Chai-bg-gray": "background-color: gray;",

  //Font Size
  "Chai-text-sm": "font-size: 12px;",
  "Chai-text-md": "font-size: 16px;",
  "Chai-text-lg": "font-size: 20px;",
  "Chai-text-xl": "font-size: 24px;",
  "Chai-text-2xl": "font-size: 32px;",

  //Font Weight
  "Chai-font-light": "font-weight: 300;",
  "Chai-font-normal": "font-weight: 400;",
  "Chai-font-bold": "font-weight: 700;",

  //Width
  "Chai-w-full": "width: 100%;",
  "Chai-w-half": "width: 50%;",
  "Chai-w-screen": "width: 100vw;",

  //Height
  "Chai-h-full": "height: 100%;",
  "Chai-h-screen": "height: 100vh;",

  //Display
  "Chai-block": "display: block;",
  "Chai-inline": "display: inline;",
  "Chai-flex": "display: flex;",
  "Chai-grid": "display: grid;",
  "Chai-hidden": "display: none;",

  //Flexbox
  "Chai-flex-row": "flex-direction: row;",
  "Chai-flex-col": "flex-direction: column;",
  "Chai-justify-center": "justify-content: center;",
  "Chai-justify-between": "justify-content: space-between;",
  "Chai-items-center": "align-items: center;",

  //Border
  "Chai-border": "border: 1px solid black;",
  "Chai-border-2": "border: 2px solid black;",
  "Chai-border-red": "border-color: red;",
  "Chai-rounded": "border-radius: 4px;",
  "Chai-rounded-lg": "border-radius: 12px;",
  "Chai-rounded-full": "border-radius: 9999px;",

  //Shadow
  "Chai-shadow": "box-shadow: 0 2px 4px rgba(0,0,0,0.2);",
  "Chai-shadow-lg": "box-shadow: 0 6px 12px rgba(0,0,0,0.3);",

  //Position
  "Chai-relative": "position: relative;",
  "Chai-absolute": "position: absolute;",
  "Chai-top-0": "top: 0;",
  "Chai-left-0": "left: 0;",
  "Chai-right-0": "right: 0;",
  "Chai-bottom-0": "bottom: 0;",

  //Overflow
  "Chai-overflow-hidden": "overflow: hidden;",
  "Chai-overflow-scroll": "overflow: scroll;",

  //Cursor
  "Chai-cursor-pointer": "cursor: pointer;",

  //Opacity
  "Chai-opacity-50": "opacity: 0.5;",
  "Chai-opacity-100": "opacity: 1;"
};

window.addEventListener("DOMContentLoaded", () => {
  const classNames = Object.keys(styleMap);
  const selector = classNames.map(cls => `.${cls}`).join(",");
  const elements = document.querySelectorAll(selector);

  elements.forEach(el => {
    el.classList.forEach(cls => {
      if (styleMap[cls]) {
        el.style.cssText += styleMap[cls];
      }
    });
  });
});