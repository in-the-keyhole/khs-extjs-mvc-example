
Ext.define('Dst.components.formController', {
	extend: 'Ext.app.Controller',
    alias: 'wdiget.edit',
	
    views: ['Dst.components.formView'],
    models: ['Dst.components.User'],
    
    view: undefined,
    values: undefined,
    
      show: function(values) {
		
	    var Form = this.getView('Dst.components.formView');
	    this.view = Ext.create(Form);
	    this.view.show();
	    
	    this.values = values;
	    
	    if (this.values) {
	    	this.getFormPanel().getForm().setValues(this.values);
	    }
	    
	    this.view.on('close', this.onViewClose, this);
         
        this.getCancelButton().on('click', this.onCancelButtonClick, this);
        this.getSaveButton().on('click', this.onSaveButtonClick, this);
    },


     refs: [
    {    
       ref: 'cancelButton',
       selector: 'button#cancelButton'    
    },
    
    {
       ref: 'saveButton',
       selector: 'button#saveButton'
    },
    {
    	ref: 'formPanel',
    	selector: '#formPanel'
    }],

    onCancelButtonClick: function () {
    	this.cancel();
    },
    
    onSaveButtonClick: function () {
    	this.save();
    },
    
    cancel: function () {
    	this.view.close();
    },
    
    save: function () {
    	var formPanel = this.getFormPanel();
    	
    	if (!formPanel.isValid()) {
    		Ext.MessageBox.alert('Error', 'Please complete the form before saving.');
    		return;
    	}
    	
		var values = formPanel.getValues();
		if (this.values) {
			this.application.fireEvent('FORM_CONTROLLER_EDIT', values);
		}
		else {
			this.application.fireEvent('FORM_CONTROLLER_ADD', values);
		}
		
    	
    	this.cancel();
    },
    
    onViewClose: function () {
    	this.application.fireEvent('FORM_CONTROLLER_VIEW_CLOSED');
    }
});
