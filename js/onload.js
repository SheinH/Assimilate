chrome.storage.sync.get(['disabled'], function(val) {
    console.log(val);

    if(!val["disabled"]) {
        document.querySelectorAll("body *").forEach((node) => {
            const style = getComputedStyle(node);
            const font = style.getPropertyValue("font-family");
            if(font.indexOf("monospace" == 1) && (font.indexOf("sans-serif") !== -1 || font.indexOf("system-ui") !== -1)){
                console.log(font);
                node.style.fontFamily = '-apple-system, BlinkMacSystemFont, system-ui, sans-serif';
            }
        });
    }
});
