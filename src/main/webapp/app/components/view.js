
Ext.define('Keyhole.components.view' ,{
	  extend: 'Ext.grid.Panel',
      alias: 'widget.grid',
	    store: { 
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
	     },   
	    width: 400,
	    height: 200,
	    title: 'Application Users',
	    columns: [
	        {
	            text: 'Name',
	            width: 100,
	            sortable: false,
	            hideable: false,
	            dataIndex: 'name'
	        },
	        {
	            text: 'Email Address',
	            width: 150,
	            dataIndex: 'email',
	            hidden: false
	        },
	        {
	            text: 'Phone Number',
	            flex: 1,
	            dataIndex: 'phone'
	        }
	    ],
	    
	    dockedItems: [{
	    	xtype: 'toolbar',
	    	dock: 'top',
	    	items: [
	    	      {
	    	    	  xtype: 'button',
	    	    	  name: 'add',
	    	    	  text: 'Add',
	    	    	  itemId: 'addButton'
	    	      },
	    	      {
	    	    	  xtype: 'button',
	    	    	  name: 'edit',
	    	    	  text: 'Edit',
	    	    	  itemId: 'editButton'
	    	      }
	    	      ] }]
	  

});