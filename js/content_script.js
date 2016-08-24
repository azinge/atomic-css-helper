var backgroundPageConnection = chrome.runtime.connect({
    name: "contentScript"
});

var selectedElement;
var originalStyles = {};
var tabId;

var setSelectedElement = function(el) {
    selectedElement = el;
    for (prop in selectedElement.style) {
        originalStyles[prop] = selectedElement.style[prop];
    }
    chrome.runtime.sendMessage({
        name: "element_query_response",
        info: {
            acss: selectedElement.className,
            css: selectedElement.style.color
        },
        tabId: tabId
    });
}
var editSelectedElement = function(info) {
    var newStyle = info.newStyle, newClassName = info.newClassName;
    for (prop in originalStyles) {
        selectedElement.style[prop] = originalStyles[prop];
    }
    for (prop in newStyle) {
        selectedElement.style[prop] = newStyle[prop];
    }
    selectedElement.className = newClassName;
};

backgroundPageConnection.onMessage.addListener(function (message) {
    message.name === 'style_change' &&
        editSelectedElement(message.info);
});

chrome.runtime.sendMessage({name: "idCheck"}, function (response) {
    tabId = response.tabId;
    backgroundPageConnection.postMessage({
        name: 'contentScript_init',
        tabId: tabId
    });
});
