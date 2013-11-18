Ext.define('Dst.components.UserStore', {
	    extend: 'Ext.data.Store', 
	    model: 'Dst.components.User',
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