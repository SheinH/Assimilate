chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.storage.sync.get(['disabled'], function(val){
        let nv = !val['disabled']
        chrome.storage.sync.set({disabled: nv}, function() {
            console.log('Value is set to ' + nv);
        });
    })
});
