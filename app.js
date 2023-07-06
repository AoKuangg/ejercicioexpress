import dotenv from "dotenv";
import express from "express";
dotenv.config();

const expressapp = express();

expressapp.use(express.json());

expressapp.post("/:nombre",(req,res)=>{
    let obj = {
        DATA: req.body,
        URL: req.query,
        PARAMETROS: req.params
    }
    res.send(obj);
});




let config = JSON.parse(process.env.MY_CONFIG);
expressapp.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});
