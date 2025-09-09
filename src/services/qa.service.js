import { genaiFigmaRequest } from "./genai.service.js"
import { figmaImageGenerator, figmaCommentGenerator } from "./figma.service.js"

// This prompts are related to the name of the function without the `Prompt` word. 
const qaToFigmaImagePrompt = `La siguiente imagen es un prototipo para una web hecho en figma, necesito un analisis QA de toda esta seccion en cuestiones de diseño, necesito saber que puede mejorar y enlistarlo dentro del documento, me lo puedes mandar en formato de lista con el siguiente formato [{'seccion':'','mejora':'',posicion:{x:numbrer,y:number}},{'seccion':'','mejora':'',posicion:{x:numbrer,y:number}}] donde x y y son las coordenadas en pixeles donde se debe aplicar la mejor. Ten en cuneta que las dimensiones en pixeles de la imagen. Es importante que lo que me contestes solo sea en este formato y que ademas sea valido para pasarlo a la funcion JSON.parse.`
const spellCheckToFigmaImagePrompt = `La siguiente imagen es un prototipo para una web hecho en figma, necesito un analisis QA de toda esta seccion que revise la ortografia , no te centres en lo que esta bien si no solo en las areas de mejora, revisa acentos, escpacios, tiempos y signos de puntuacion, necesito enlistarlo dentro del documento, me lo puedes mandar en formato de lista con el siguiente formato [{'seccion':'','mejora':'',posicion:{x:numbrer,y:number}},{'seccion':'','mejora':'',posicion:{x:numbrer,y:number}}] donde x y y son las coordenadas en pixeles donde se debe aplicar la mejor. Ten en cuneta que las dimensiones en pixeles de la imagen. Es importante que lo que me contestes solo sea en este formato y que ademas sea valido para pasarlo a la funcion JSON.parse.`
export async function qaToFigmaImage(figma_url,figma_token){

    /*
        First we need to get the image url from the node base url that we get from figma explorer
        and get the image url from our figma service.
    */
    let imageUrl = await figmaImageGenerator(figma_url,figma_token)
    let resobj = await imageUrl.json()
    
    // Here we get the image url that we can send to openai
    imageUrl = resobj.image_url

    console.log(imageUrl)


    // Once you got the url you can send the image and prompt to openai
    let openai = await genaiFigmaRequest(qaToFigmaImagePrompt,imageUrl)

    openai = await openai.json()


    let observations = JSON.parse(openai.answer)


    observations.forEach(async (observation) => {
        await figmaCommentGenerator(resobj.fileKey,resobj.nodeId,observation.mejora,observation.posicion,figma_token)
    });

    return openai
}

export async function spellCheckToFigmaImage(figma_url,figma_token){

    /*
        First we need to get the image url from the node base url that we get from figma explorer
        and get the image url from our figma service.
    */
    let imageUrl = await figmaImageGenerator(figma_url,figma_token)
    let resobj = await imageUrl.json()
    
    // Here we get the image url that we can send to openai
    imageUrl = resobj.image_url

    console.log(imageUrl)


    // Once you got the url you can send the image and prompt to openai
    let openai = await genaiFigmaRequest(spellCheckToFigmaImagePrompt,imageUrl)

    openai = await openai.json()


    let observations = JSON.parse(openai.answer)


    observations.forEach(async (observation) => {
        await figmaCommentGenerator(resobj.fileKey,resobj.nodeId,observation.mejora,observation.posicion,figma_token)
    });

    return openai
}


