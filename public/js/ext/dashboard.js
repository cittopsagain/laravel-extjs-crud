Ext.define('Dashboard', {
	extend: 'Ext.container.Viewport',
	layout: 'border',
	items: [
		{
			region: 'north',
			html: '<h3 class="x-panel-header">The quick brown fox jumps over the lazy dog</h3>',
			border: false,
			margin: '0 0 0 0'
		}, {
			region: 'west',
			collapsible: true,
			title: 'Navigation',
			split: true,
			width: 150,
			xtype: 'treepanel'
		}, {
			region: 'center',
			xtype: 'tabpanel',
			activeTab: 0,
			items: {
				id: 'center-region-holder',
				title: 'Default Tab'
			}
		}
	]
});

Ext.create('Dashboard');
