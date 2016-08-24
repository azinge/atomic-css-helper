var cache = {};
var acssValue;
var cssValue;
var tabId;
var backgroundPage = chrome.extension.getBackgroundPage()

var backgroundPageConnection = chrome.runtime.connect({
    name: "popup"
});

const Acss_to_Css = require("../data/acss_to_css.json");
const Css_to_Acss = require("../data/css_to_acss.json");

var cache = {};

var convertToAcss = function (text) {
    var result, name, value, element, style_name, errorLog;
    result = [];
    errorLog = [];
    text = text.split(/\n\nErrors Parsing/).filter(x=>x!=="")[0];
    for (var style of text.split("\n").filter(x=>(x!==""&&x!=="\n"))) {
        if (style[style.length-1]!==';') style += ";";
        if (!/\((.*)\)/.test(style)) {
            name = ((style.match(/(.*):/) || [])[1] || "").trim();
            value = ((style.match(/:(.*);/) || [])[1] || "").trim();
        } else {
            name = ((style.match(/(.*)\(/) || [])[1] || "").trim();
            value = ((style.match(/\((.*)\)/) || [])[1] || "").trim();
        }
        if (value[0] === "#") value = value.toLowerCase();
        element = Css_to_Acss[name] || {};
        style_name = element.style_name;
        value = (element.modifiers ? (element.modifiers[value] || value) : value);

        style_name ? result.push(`${style_name}(${value})`) : errorLog.push(style);
    }
    return result.join(" ") + (errorLog.length ? "\n\nErrors Parsing:\n" + errorLog.join("\n") : "");
}

var convertToCss = function (text) {
    var result, name, value, element, style_name, errorLog;
    result = [];
    errorLog = [];
    text = text.split(/\n\nErrors Parsing/).filter(x=>x!=="")[0];
    for (var style of text.split(/ (.+?\(.+?\))(?:\:.)?/).filter(x=>(x!==""))) {
        name = ((style.match(/(.+)\(/) || [])[1] || "").trim();
        value = ((style.match(/\((.+)\)/) || [])[1] || "").trim();

        element = Acss_to_Css[name] || {};
        style_name = element.style_name;
        value = (element.modifiers ? (element.modifiers[value] || value) : value);
        if (element.isMultiLine) {
            for (var prop of element.style_name) {
                result.push(`${prop}: ${value};`);
            }
        } else if (element.isFuncStyle) {
            result.push(`${style_name}(${value});`);
        } else if (style_name){
            result.push(`${style_name}: ${value};`);
        } else {
            errorLog.push(style);
        }
    }
    return result.join("\n") + (errorLog.length ? "\n\nErrors Parsing:\n" + errorLog.join("\n") : "");
}

var editPageStyle = function (text) {
    function hyphenLowerToUpper(match) {
        return match[1].toUpperCase();
    };

    var result, name, value, element, style_name, errorLog;
    result = {};
    text = text.split(/\n\nErrors Parsing/).filter(x=>x!=="")[0];
    for (var style of text.split("\n").filter(x=>(x!==""&&x!=="\n"))) {
        if (style[style.length-1]!==';') style += ";";
        if (!/\((.*)\)/.test(style)) {
            name = ((style.match(/(.*):/) || [])[1] || "").trim();
            value = ((style.match(/:(.*);/) || [])[1] || "").trim();
        } else {
            name = ((style.match(/(.*)\(/) || [])[1] || "").trim();
            value = ((style.match(/\((.*)\)/) || [])[1] || "").trim();
        }
        if (value[0] === "#") value = value.toLowerCase();
        name = name.replace(/-[a-z]/, hyphenLowerToUpper);
        result[name] = value;

    }
    console.log(result);
    return result;
}

backgroundPageConnection.onMessage.addListener(function (message) {
    const ACSSbox = document.getElementById("ACSSbox");
    const CSSbox = document.getElementById("CSSbox");

    if (message.name === 'element_query_response') {
        ACSSbox.value = message.info.acss;
        CSSbox.value = message.info.css;
        CSSbox.value = convertToCss(ACSSbox.value);
    }
});

chrome.tabs.query({active: true}, function (tabs) {
    chrome.tabs.executeScript(null, {file: "js/content_script.js"});
    tabId = tabs[0].id
    backgroundPageConnection.postMessage({
        name: 'popup_init',
        tabId: tabId
    });
});


var handler = function (button) {
    const ACSSbox = document.getElementById("ACSSbox");
    const CSSbox = document.getElementById("CSSbox");

    if (button === "update") {
        backgroundPage.requestElementInfo(tabId);

    } else if (button === "Undo") {
        backgroundPage.changePageStyle(tabId, {
            newStyle: editPageStyle(CSSbox.value),
            newClassName: ACSSbox.value.split(/\n\nErrors Parsing/).filter(x=>x!=="")[0]
        });
    } else if (button === "CtoA") {
        ACSSbox.value = convertToAcss(CSSbox.value);
    } else if (button === "AtoC") {
        CSSbox.value = convertToCss(ACSSbox.value);
    }
}

document.addEventListener('DOMContentLoaded',function () {
    document.getElementById("CtoA").addEventListener("click",handler.bind(this, "CtoA"));
    document.getElementById("AtoC").addEventListener("click",handler.bind(this, "AtoC"));
    document.getElementById("Undo").addEventListener("click",handler.bind(this, "Undo"));
    document.getElementById("update").addEventListener("click",handler.bind(this, "update"));
});
