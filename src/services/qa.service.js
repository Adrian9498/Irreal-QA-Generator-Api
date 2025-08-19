import { genaiFigmaRequest } from "./genai.service.js"
import { figmaImageGenerator } from "./figma.service.js"

// This prompts are related to the name of the function without the `Prompt` word. 
const qaToFigmaImagePrompt = `La siguiente imagen es un prototipo para una web hecho en figma, necesito un analisis QA de toda esta seccion en cuestiones de diseño, necesito saber que puede mejorar y enlistarlo dentro del documento, me lo puedes mandar en formato de lista con el siguiente formato [{'seccion':'','mejora':'',posicion:{x:numbrer,y:number}},{'seccion':'','mejora':'',posicion:{x:numbrer,y:number}}] donde x y y son las coordenadas en pixeles donde se debe aplicar la mejor. Ten en cuneta que la imagen mide $1px de ancho y $2px de alto. Es importante que lo que me contestes solo sea en este formato.`

export async function qaToFigmaImage(figma_url){

    /*
        First we need to get the image url from the node base url that we get from figma explorer
        and get the image url from our figma service.
    */
    let imageUrl = await figmaImageGenerator(figma_url)
    imageUrl = await imageUrl.json()
    
    // Here we get the image url that we can send to openai
    imageUrl = imageUrl.image_url
    /*return await fetch(genaiEndpoint,{
        method: 'POST',
        headers: {
            "Content-Type": CONTENT_TYPE,
        },
        body: JSON.stringify({
            "prompt":prompt,
            "imageUrl":imageUrl
        })
    })*/
}