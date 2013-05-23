var runtimeOrExtension = chrome.runtime && chrome.runtime.sendMessage ? 'runtime' : 'extension';
document.addEventListener('execute', function(e){
    chrome[runtimeOrExtension].sendMessage(
        {'command':e.detail.command, 'arguments_':e.detail.args});
});
