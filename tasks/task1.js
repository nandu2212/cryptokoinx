const express=require('express')
const app=express();
const axios=require('axios')

const detailmoidel=require('../models/transactionmodel');
const { get } = require('mongoose');


    app.post("/getaddress", async (req, res) => {
        try {
            let address = req.query.address
            let response = axios({
                method: "get",
                url: `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=GG2R8NBQWBI9PSSNY3Y343FBCU4SB8Z84R`,
            })
            let respo = await response
            detailmoidel.create({ transactiondetail: respo.data.result }).then((data) => {
                res.status(200).send(data);
            })
        }
        catch (err) {
            console.log(err);
            res.status(500).send({ err })
        }
    })

module.exports=app