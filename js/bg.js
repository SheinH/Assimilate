chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.storage.sync.get(['enable'], function(val){
        let en = !val['enable']
        chrome.storage.sync.set({enable: en}, function() {
            console.log('Value is set to ' + !enable);
        });
    })
});
