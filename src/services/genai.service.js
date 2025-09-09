import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.GENAI_BASE_URL
const CONTENT_TYPE =  "application/json"

export async function genaiFigmaRequest(prompt,imageUrl){

    let genaiEndpoint = `${BASE_URL}/openai/prompt`

    return await fetch(genaiEndpoint,{
        method: 'POST',
        headers: {
            "Content-Type": CONTENT_TYPE,
        },
        body: JSON.stringify({
            "prompt":prompt,
            "imageUrl":imageUrl
        })
    })
}