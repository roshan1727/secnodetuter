const cds=require('@sap/cds');
const cdse = require('cdse');

module.exports = cds.service.impl(async function () {
	const {
		Businesspartner,Address,bankpartner
	} = this.entities;	
	const service = await cdse.connect.to('S42022-S12');

	this.on('READ', Products, async () => {
		const result = await service.run({ url: 'Businesspartner' });
		return result.value;
	});
});



