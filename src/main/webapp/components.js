Ext.onReady(function() {
	Ext.application({
	    appFolder: 'app',
	    autoCreateViewport: true,
		name: 'Keyhole',
		
		requires: ['Keyhole.components.controller'],				

	    launch: function() {
	        var controller = this.getController( 'Keyhole.components.controller' );
	    }	    

	});
});
