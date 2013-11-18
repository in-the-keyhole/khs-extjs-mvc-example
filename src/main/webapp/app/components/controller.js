Ext.define( 'Keyhole.components.controller' , {
	extend: 'Ext.app.Controller' ,
	
	stores:[
	    'Keyhole.components.UserStore'
	],
	views: [
	    'Keyhole.components.view'
	],
	requires: [
	    'Keyhole.components.formController'
	],
	refs: [
		{ 
			ref: 'editButton' ,
			selector: 'button#editButton' 
		},
		{
			ref: 'addButton' ,
			selector: 'button#addButton'
		}
	],
	
	grid: undefined,
	
	init: function () {
		var store = this.getStore( 'Keyhole.components.UserStore' );
		var Grid = this.getView( 'Keyhole.components.view' );
		this.grid = Ext.create(Grid);
		this.addComponent(this.grid);
		this.getAddButton().on( 'click' ,this.add, this );
		this.getEditButton().on( 'click' ,this.edit, this );
	},
	add: function (button) {
		var controller = this.application.getController('Keyhole.components.formController');
		controller.show();
		
		this.application.on('FORM_CONTROLLER_ADD', this.onFormControllerAdd, this);
		this.application.on('FORM_CONTROLLER_CLOSED', this.onFormControllerClosed, this);
	},
	edit: function (button) {
		var controller = this.application.getController('Keyhole.components.formController');
		var data = this.getSelectedRecord().getData();
		controller.show(data);
		
		this.application.on('FORM_CONTROLLER_EDIT', this.onFormControllerEdit, this);
		this.application.on('FORM_CONTROLLER_CLOSED', this.onFormControllerClosed, this);
	},
	
	getSelectedRecord: function () {
		return this.grid.getSelectionModel().getSelection()[0];
	},
	
	onFormControllerAdd: function (values) {
		this.grid.store.add(values);
	},
	
	onFormControllerEdit: function (values) {
		var selectedRecord = this.getSelectedRecord();
		Ext.Object.each(values, function (key, value) {
			selectedRecord.set(key, value);
		}, this);
	},
	
	onFormControllerClosed: function () {
		this.application.un('FORM_CONTROLLER_ADD', this.onFormControllerAdd, this);
		this.application.un('FORM_CONTROLLER_EDIT', this.onFormControllerEdit, this);
		this.application.un('FORM_CONTROLLER_CLOSED', this.onFormControllerClosed, this);
	},
	
	addComponent : function (component) {
		var viewport = Ext.ComponentQuery.query( 'component_viewport' )[0];
		viewport.add(component);
		viewport.doLayout(); 
	}
});