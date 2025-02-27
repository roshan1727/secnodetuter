const SapCfAxios = require('sap-cf-axios').default;

const axios = SapCfAxios("northwind");
// const axios = require('axios');

exports.getOdata=async(req,res)=>{
    try{
        let response= await axios({
            method:"GET",
            url:"/Customers?$format=json",
            headers:{"Accept":"application/json"}
        })
        let data=response.data;
        console.log("response",response.data);
        res.status(200).send({data:data});
    }
    catch(err){
        res.status(500).send({"message":err.message});
    }

}