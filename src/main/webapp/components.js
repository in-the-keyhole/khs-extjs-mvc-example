Ext.onReady(function() {
	Ext.application({
	    appFolder: 'app',
	    autoCreateViewport: true,
		name: 'Dst',
		
		requires: ['Dst.components.controller'],				

	    launch: function() {
	        var controller = this.getController( 'Dst.components.controller' );
	    }	    

	});
});
