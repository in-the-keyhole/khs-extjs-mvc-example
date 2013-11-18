Ext.onReady(function() {
	Ext.application({
	    appFolder: 'app',
		name: 'Dst',
		
		init: function() {
	     console.log('hello');
	       
     	},
		
		requires: ['Dst.primer.login.model.LoginRequest',
		           'Dst.primer.login.view.LoginView','Dst.primer.login.controller.LoginController']
			
		,
		
		loadController: function(controllerName){
			var controller = this.getController( controllerName );
		},
	
	    launch: function() {
			// Viewport Controller will need to be from the common project
			this.loadController('Dst.primer.viewport.MainController');
	    }
	    

	});
});
