document.addEventListener('DOMContentLoaded', function () {
    window.executer = document.getElementById("simpleGetPluginId").SimpleGetPlugin();
});
chrome.extension.onMessage.addListener(function(msg, sender){
	executer.callApplication(msg.command, msg.arguments_);
});
