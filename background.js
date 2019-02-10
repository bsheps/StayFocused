chrome.runtime.onStartup.addListener(function(){
	//initial delay and recurrence
	chrome.alarms.create("alarm", {delayInMinutes: 1, periodInMinutes: 1}); 
});

chrome.alarms.onAlarm.addListener(function() {
	var tabIdArray = [];
	//Add additional urls to the array as needed
	chrome.tabs.query({url: ["*://*.youtube.com/*", "*://*.reddit.com/*"]}, function(tabs){
		for (let i=0; i < tabs.length; i++)
			tabIdArray.push(tabs[i].id);
		
		if(tabIdArray.length > 0)
			if(confirm("Click Ok to close distractions"))
				chrome.tabs.remove(tabIdArray);	
	})
});