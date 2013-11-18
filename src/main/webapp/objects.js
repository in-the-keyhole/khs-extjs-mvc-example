Ext.onReady(function() {
	
       Ext.define('Primer.Address',  { 
    	   
    	   config: {
    	   	
    	   	  street:'street',
    	   	  city: 'city',
    	   	  state: 'state',
    	   	  zip: 'zip'
   	   	  
	
       		}

 
       });	

	    Ext.define('Primer.Contact', {
              alias: 'Contact',
	          requires: ['Primer.Address'],
	    
              constructor: function(name) {
	             this.name = name;
	    	  },
	    	  
	          statics: {	         		
	                helpDeskEmail: function() {return 'help@dst.com';}	
	    	  },

	    	  mixins: {
	    		  address: 'Primer.Address'
	    	  },

              config: {
	    		name: 'name',
	    		email: 'email',
	    		phone: 'phone' 
	    	  },
	    	  
	    	  formatted : function() {
	            return this.getName() + ' phone: ' + this.getPhone() + ' email: '+this.getEmail()+ ' city: '+this.getCity()+' state: '+this.getState();
	    	  }
        });
 
	//    var persona = new Primer.Contact(); 

        var contact = Ext.create('Contact');
        contact.setName('Clifford Squidlow');
        contact.setPhone('(123) 222-3333');
        contact.setEmail('csquidlow@gmail.com');
        contact.setCity('Kansas City');
        contact.setState('MO');
        document.write(contact.formatted());
        
        document.write(' Help Desk = '+Primer.Contact.helpDeskEmail());
        
});
