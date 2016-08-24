var backgroundPageConnection = chrome.runtime.connect({
    name: "devTools"
});

backgroundPageConnection.postMessage({
    name: 'devTools_init',
    tabId: chrome.devtools.inspectedWindow.tabId
});

backgroundPageConnection.onMessage.addListener(function (message) {
    message.name === 'element_query' &&
        chrome.devtools.inspectedWindow.eval(`setSelectedElement($0)`,
        { useContentScriptContext: true });
});
