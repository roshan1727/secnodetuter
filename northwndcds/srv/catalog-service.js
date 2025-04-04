const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
    const { Product } = this.entities;
    const service = await cds.connect.to('northwind');

    this.on('READ', Product, async (req) => {
        try {
            return await service.tx(req).run(req.query);
        } catch (err) {
            console.error("Error fetching Products: ", err);
            req.reject(500, "Failed to fetch Products");
        }
    });
});
