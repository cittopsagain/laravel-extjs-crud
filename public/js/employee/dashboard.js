let ext = Ext.create('Ext.container.Viewport', {
	layout: 'border',
	items: [{
		region: 'north',
		html: '<h1 class="x-panel-header">Employee</h1>',
		border: false,
		margin: '0 0 5 0'
	}, {
		region: 'west',
		collapsible: true,
		title: 'Navigation',
		split: true,
		width: 150,
		xtype: 'treepanel'
		// could use a TreePanel or AccordionLayout for navigational items
	}, {
		region: 'south',
		title: 'South Panel',
		collapsible: true,
		html: 'Information goes here',
		split: true,
		height: 100,
		minHeight: 100
	}, {
		region: 'east',
		title: 'East Panel',
		collapsible: true,
		split: true,
		width: 150
	}, {
		region: 'center',
		xtype: 'tabpanel', // TabPanel itself has no title
		activeTab: 0,      // First tab active by default
		items: {
			id: 'center-region-holder',
			title: 'Default Tab'
		}
	}]
});
