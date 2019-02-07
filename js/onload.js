chrome.storage.sync.get(['enable'], function (val) {
    console.log(val);

    if (val["enable"]) {
        const link = document.createElement("link");
        const a = chrome.extension.getURL("css/style.css");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = a;
        console.log(link);
        document.head ? document.head.appendChild(link) : document.documentElement.appendChild(link);
    }
});
