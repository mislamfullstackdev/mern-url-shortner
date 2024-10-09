import express from "express";
import { urlModel } from "../model/shortUrl";

export const createUrl = async (
    req: express.Request, 
    res: express.Response
) => {
    const {fullUrl} = req.body;
    try {
        console.log("The fullUrl is : ", fullUrl);
        const urlFound = await urlModel.find({ fullUrl });
        if (urlFound.length > 0) {
            res.status(409);
            res.send(urlFound);
        }else{
            const shortUrl = await urlModel.create({ fullUrl });
            res.status(201).send(shortUrl);
        }
    } catch (error) {
        res.status(500).send({ message : "Something went wrong"});
    }
};

export const getAllUrl  = async (
    req: express.Request, 
    res: express.Response
) => {
    try {
        const urls = await urlModel.find();
        if(!urls){
            res.status(404).send({message: "url not found"});
        }else{
            res.status(200).send(urls);
        }
    } catch (error) {
        res.status(500).send({ message : "Something went wrong"});
    }
}
export const getUrl  = async (
    req: express.Request, 
    res: express.Response
) => {
    try {
        const shortUrl = await urlModel.findOne({ shortUrl: req.params.id });
        if(!shortUrl){
            res.status(404).send({message: "url not found"});
        }else{
            res.status(200).send(shortUrl);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message : "Something went wrong"});
    }
    
}
export const deleteUrl  = async (req: express.Request, res: express.Response) => {
    
}