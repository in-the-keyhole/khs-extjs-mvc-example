Ext.define('Keyhole.components.UserStore', {
	    extend: 'Ext.data.Store', 
	    model: 'Keyhole.components.User',
	    proxy: {
			type: 'ajax',
			url : 'data/users.json',
			success: function(r) { alert(r); },
			reader: {   
				successProperty: 'success',
				type:'json',
				root: 'users'
  
			},
         },
      autoLoad: true
	});