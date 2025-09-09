import { qaToFigmaImage, spellCheckToFigmaImage } from "../services/qa.service.js";



export async function analizefigmaQA(req,res){
    // The prompt sended by the client
    let { figma_url,figma_token } = req.body;

    
    let response_url = await qaToFigmaImage(figma_url,figma_token)


    // Response to  POST petition
    res.status(200).json({
        response_url,
    })
}

export async function spellChekfigmaQA(req,res){
    // The prompt sended by the client
    let { figma_url,figma_token } = req.body;

    
    let response_url = await spellCheckToFigmaImage(figma_url,figma_token)


    // Response to  POST petition
    res.status(200).json({
        response_url,
    })
}