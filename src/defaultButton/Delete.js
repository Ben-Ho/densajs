Ext.define('Densa.defaultButton.Delete', {
    extend: 'Ext.button.Button',
    alias: 'widget.densa.defaultButton.delete',
    defaultText: 'Delete',
    constructor: function(config)
    {
        if (!config) config = {};
        if (!config.text) config.text = this.defaultText;
        if (!config.itemId) config.itemId = 'deleteButton';
        this.callParent([config]);
    }
});
