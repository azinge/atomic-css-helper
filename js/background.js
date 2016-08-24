// background.js
var popupConnections = {};
var devToolsConnections = {};
var contentScriptConnections = {};

var queryConnections = function (request, destination) {
    var connectionsList = {
        popup: popupConnections,
        devTools: devToolsConnections,
        contentScript: contentScriptConnections
    }
    var connections = connectionsList[destination];
    var tabId = request.tabId;
    if (tabId) {
      if (tabId in connections) {
        connections[tabId].postMessage(request);
      } else {
        console.log("Tab not found in connection list.");
      }
    } else {
      console.log("sender.tab not defined.");
    }
    return true;
}

var requestElementInfo = function (tabId) {
    queryConnections({
        name: "element_query",
        info: "black",
        tabId: tabId
    }, "devTools");
};

var changePageStyle = function (tabId, info) {
    queryConnections({
        name: "style_change",
        info: info,
        tabId: tabId
    }, "contentScript");
};

var dispatchElementInfo = function (tabId, info) {
    queryConnections({
        name: "element_query_response",
        info: info,
        tabId: tabId
    }, "popup");
}

chrome.runtime.onConnect.addListener(function (port) {
    var extensionListener = function (message, sender, sendResponse) {
        if (message.name == "popup_init") {
            popupConnections[message.tabId] = port;
            return;
        } else if (message.name == "devTools_init") {
            devToolsConnections[message.tabId] = port;
            return;
        } else if (message.name == "contentScript_init") {
            contentScriptConnections[message.tabId] = port;
            return;
        }
    };
    port.onMessage.addListener(extensionListener);

    port.onDisconnect.addListener(function(port) {
        port.onMessage.removeListener(extensionListener);

        var popupTabs = Object.keys(popupConnections);
        for (var i=0, len=popupTabs.length; i < len; i++) {
            if (popupConnections[popupTabs[i]] == port) {
                delete popupConnections[popupTabs[i]]
                break;
            }
        }

        var devToolsTabs = Object.keys(devToolsConnections);
        for (var i=0, len=devToolsTabs.length; i < len; i++) {
            if (devToolsConnections[devToolsTabs[i]] == port) {
                delete devToolsConnections[devToolsTabs[i]]
                break;
            }
        }

        var contentScriptTabs = Object.keys(contentScriptConnections);
        for (var i=0, len=contentScriptTabs.length; i < len; i++) {
            if (contentScriptConnections[contentScriptTabs[i]] == port) {
                delete contentScriptConnections[contentScriptTabs[i]]
                break;
            }
        }
    });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    request.name === "element_query_response" &&
        dispatchElementInfo(request.tabId, request.info);
    request.name === "idCheck" &&
        sendResponse({tabId:sender.tab.id});
});
