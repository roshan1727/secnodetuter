var controller=require("../controller/odatahandle.controller")


module.exports=(app)=>{
    app.get("/odata",controller.getOdata)
}