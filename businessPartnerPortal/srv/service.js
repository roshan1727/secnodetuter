const cds=require('@sap/cds');

module.exports = cds.service.impl(async function () {
	const {
		Businesspartner,Address
	} = this.entities;
	const service = await cds.connect.to('businesspartner');
	this.on('READ', Businesspartner, request => {
		return service.tx(request).run(request.query);
	});

	this.on('READ',Address,request=>{
		return service.tx(request).run(request.query);
	})
});



