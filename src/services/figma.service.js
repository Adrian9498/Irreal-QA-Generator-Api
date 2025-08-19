
const BASE_URL = "http://localhost:3001"
const CONTENT_TYPE =  "application/json"

export async function figmaImageGenerator(figma_url){

    let figmaImageEndpoint = `${BASE_URL}/figma/v1/image`

    return await fetch(figmaImageEndpoint,{
        method: 'POST',
        headers: {
            "Content-Type": CONTENT_TYPE,
        },
        body: JSON.stringify({
            "figma_url":figma_url,
        })
    })
}