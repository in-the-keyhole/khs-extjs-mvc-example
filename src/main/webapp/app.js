Ext.onReady(function() {
	Ext.application({
	    appFolder: 'app',
		name: 'Keyhole',
		
		init: function() {
	     console.log('hello');
	       
     	},
		
		requires: ['Keyhole.primer.login.model.LoginRequest',
		           'Keyhole.primer.login.view.LoginView','Keyhole.primer.login.controller.LoginController']
			
		,
		
		loadController: function(controllerName){
			var controller = this.getController( controllerName );
		},
	
	    launch: function() {
			// Viewport Controller will need to be from the common project
			this.loadController('Keyhole.primer.viewport.MainController');
	    }
	    

	});
});
