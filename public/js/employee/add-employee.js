ext.afterRender = function() {
	let emp = new Employee();
	
	Ext.create('Ext.form.Panel', {
		title: 'Simple Form',
		bodyPadding: 5,
		width: 350,
		
		// Fields will be arranged vertically, stretched to full width
		layout: 'anchor',
		defaults: {
			anchor: '100%'
		},
		
		// The fields
		defaultType: 'textfield',
		items: [{
			fieldLabel: 'First Name',
			id: 'fname',
			name: 'first',
			allowBlank: false
		}, {
			fieldLabel: 'Last Name',
			id: 'lname',
			name: 'last',
			allowBlank: false
		}],

		// Reset and Submit buttons
		buttons: [{
			text: 'Reset',
			handler: function() {
				this.up('form').getForm().reset();
			}
		}, {
			text: 'Submit',
			formBind: true, // only enabled once the form is valid
			disabled: true,
			handler: function() {
				let form = this.up('form').getForm();
				if (form.isValid()) {
					emp.create(form);
				}
			}
		}],
		renderTo: 'center-region-holder-outerCt'
	});
}();
