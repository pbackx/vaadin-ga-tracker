(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

window.org_vaadin_googleanalytics_tracking_GoogleAnalyticsTracker = function() {

	this.create = function(trackerId, domainName) {
		ga('create', trackerId, domainName);		
	}
	
	this.track = function(pageId) {
		if (pageId) {
			ga('send', 'pageview', pageId);
		} else {
			ga('send', 'pageview');
		}
	};
};
