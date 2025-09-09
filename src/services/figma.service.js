import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.FIGMA_BASE_URL
const CONTENT_TYPE =  "application/json"

export async function figmaImageGenerator(figma_url,figma_token){

    let figmaImageEndpoint = `${BASE_URL}/figma/v1/image`

    return await fetch(figmaImageEndpoint,{
        method: 'POST',
        headers: {
            "Content-Type": CONTENT_TYPE,
        },
        body: JSON.stringify({
            "figma_url":figma_url,
            "figma_token":figma_token
        })
    })
}

export async function figmaCommentGenerator(fileKey,nodeId,comment,coordinates,figma_token){

    let figmaCommentEndpoint = `${BASE_URL}/figma/v1/comment`
    
    
    let result = await fetch(figmaCommentEndpoint,{
        method: 'POST',
        headers: {
            "Content-Type": CONTENT_TYPE,
        },
        body: JSON.stringify({
            "fileKey":fileKey,
            "nodeId":nodeId,
            "comment":comment,
            "coordinates":{
                "x":coordinates.x,
                "y":coordinates.y
            },
            "figma_token": figma_token
        })
    })


    result = await result.json()



    return result
}