let rect = document.querySelector("svg rect");
rect = rect.getAttribute("height");
rect = parseInt(rect, 10);
console.log(rect);

let text = document.querySelector("svg text").textContent;
text = text.replaceAll("%", "");
text = parseInt(text, 10);
text = text / 100;
console.log(text);

let wedge = text * rect;
console.log(wedge);

const cssRulesList = document.styleSheets[0].cssRules;
console.log(cssRulesList)

let svgActiveRule;
for (let i = 0; i < cssRulesList.length; i ++) {
    if(cssRulesList[i].selectorText == "svg:active #wedge") {
        svgActiveRule = cssRulesList[i];
    }
}

let propertyValue = wedge + "px";
console.log(propertyValue);

svgActiveRule.style.setProperty("height", propertyValue);

