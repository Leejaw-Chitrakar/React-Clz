// 10. Use forEach to build an HTML unordered list string from an array of items.

const items = ["Home", "About", "Contact"];

let htmlList = "<ul>\n";
items.forEach(item => {
  htmlList += `  <li>${item}</li>\n`;
});
htmlList += "</ul>";

console.log("Items:", items);
console.log("HTML List String:\n" + htmlList);
