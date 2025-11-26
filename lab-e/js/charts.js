// get height of rect
let rect = document.querySelector("svg rect");
rect = rect.getAttribute("height");
rect = parseInt(rect, 10);
console.log(rect);

// capture value as an integer
let text = document.querySelector("svg text").textContent;
text = text.replaceAll("%", "");
text = parseInt(text, 10);
text = text / 100;
console.log(text);

// calculate height
let wedge = text * rect;
console.log(wedge);

// grab the external css
const cssRulesList = document.styleSheets[0].cssRules;
console.log(cssRulesList)

// loop through the css
let svgActiveRule;
for (let i = 0; i < cssRulesList.length; i ++) {
    if(cssRulesList[i].selectorText == "svg:active #wedge") {
        svgActiveRule = cssRulesList[i];
    }
}

// update the css declaration
let propertyValue = wedge + "px";
console.log(propertyValue);
svgActiveRule.style.setProperty("height", propertyValue);

