 Ext.define('Keyhole.components.formView', {
    extend: 'Ext.window.Window',
    
    id: 'confirmWindow',
    border: 0,
    height: 270,
    width:480,
    resizable: false,
    modal: true,
    closable: false,
    title: 'Edit',
    
    layout: 'fit',
    items: [
        {
        	xtype: 'form',
		    layout: 'column',
		    itemId: 'formPanel',
		    defaults: {
		    	columnWidth: 1,
		    	allowBlank: false,
		    	style: {
		    		marginBottom: '5px'
		    	}
		    },
		    bodyStyle: {
		    	padding: '5px'
		    },
		    items: [
		        {
		        	xtype: 'textfield',
		        	fieldLabel: '*Name',
		        	itemId: 'name',
		        	name: 'name'
		        },
		        {
		        	xtype: 'textfield',
		        	fieldLabel: '*Email Address',
		        	itemId: 'email',
		        	name: 'email'
		        },
		        {
		        	xtype: 'textfield',
		        	fieldLabel: '*Phone Number',
		        	itemId: 'phone',
		        	name: 'phone'
		        }
		    ]
        }
    ],
    
     buttons: [{
            text: 'Save',
            itemId: 'saveButton',
            handler: function() {
                
            }
        }, {
            text: 'Cancel',
            itemId: 'cancelButton',
            handler: function() {
                       
        	
            }
        }]    


});