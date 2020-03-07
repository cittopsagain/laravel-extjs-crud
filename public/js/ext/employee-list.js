// Ext.data.Store is required in grid
let itemsPerPage = 5;

let store = Ext.create('Ext.data.Store', {
	storeId: 'employeesStore',
	fields: [ 'id', 'fname', 'lname', 'created_at' ], // Must equal to the table column name
	pageSize: itemsPerPage,
	proxy: {
		type: 'ajax',
		url: 'employee/all',
		reader: {
			type: 'json',
			rootProperty: 'data', // Note: root value must equal to the response of your controller
			totalProperty: 'total'
		}
	}
});

store.load({
	params: {
		start: 0,
		limit: itemsPerPage
	},
	callback: function (records, options, success) {
		// Do something after the load finishes
		if (!success) {
			alert('Problem while getting employees!');
		}
	}
});

Ext.define('Employee', {
	extend: 'Ext.grid.Panel',
	width: 900,
	height: 500,
	draggable: true,
	center: true,
	renderTo: 'center-region-holder-innerCt',
	title: 'Employees',
	store: Ext.data.StoreManager.lookup('employeesStore'),
	// Note:
	// Column dataIndex value must equal to the store fields
	columns: [
		{
			text: 'Id',
			width: 100,
			sortable: false,
			hideable: false,
			dataIndex: 'id'
		},
		{
			text: 'First Name',
			width: 150,
			dataIndex: 'fname'
		},
		{
			text: 'Last Name',
			flex: 1,
			dataIndex: 'lname'
		},
		{
			text: 'Date Created',
			flex: 1,
			dataIndex: 'created_at'
		}
	],
	// Pagination
	// https://docs.sencha.com/extjs/6.2.0/classic/Ext.toolbar.Paging.html
	bbar: {
		xtype: 'pagingtoolbar',
		displayInfo: true
	}
});

let panel = Ext.create('Employee');

// Topbar
// https://www.sencha.com/forum/showthread.php?270733-Adding-Toolbar-Topbar-Docked-Items-dynamically
panel.addDocked({
	xtype: 'toolbar',
	dock: 'top',
	items: [{
		xtype: 'textfield',
		fieldLabel: 'Name',
		id: 'fname'
	}, {
		xtype: 'button',
		text: 'Search',
		id: 'btn-search',
		handler: function () {
			let fName = $('#fname-inputEl').val();
			store.load({
				params: {
					start: 0,
					limit: itemsPerPage,
					fname: fName
				},
				callback: function (records, options, success) {
					// Do something after the load finishes
					if (!success) {
						alert('Problem while getting employees!');
					}
				}
			});
		}
	}]
});