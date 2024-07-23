//import dotenv from "dotenv";
//dotenv.config();
import * as fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { URL, URLSearchParams } from "url";
//import multer from 'multer';
import { Formidable } from "formidable";

// export const config = {
//     api: {
//         bodyParser: false
//     }
// };

// function fileToGenerativePart(path: fs.PathOrFileDescriptor , mimeType:string) {
//     return {
//         inlineData: {
//             data: Buffer.from(fs.readFileSync(path)).toString("base64"),
//             mimeType,
//         },
//     };
// }

async function fileToGenerativePart(file: Blob) {
    const base64EncodedDataPromise = new Promise((resolve) => {
        const reader = new FileReader();
        
        reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
        reader.readAsDataURL(file);
      });
      return {
        inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
      };
}

export async function POST(
    req: NextApiRequest,
) {
    try{
        
        // const body = await req.formData(); 
        // console.log("This is the body", body);
        // const messages = body.get("json");
        // const blob = body.get("file");
        // console.log("this is the message", messages);
        // const blob = body.file;
        // console.log("this is the body, the messages/prompt and the blob", body, messages, blob);
        // const messages = body.prompt;
        // //const fileUrl = body.fileUrl;
        // const blob = body.blob;

        // console.log("this is the body", body);
        // console.log("This is the prompt", messages);
        //console.log("This is the type of fileUrl", typeof(fileUrl));

        //moving the following code to client side (page.tsx)
        //fetch blob data from blob url, check if fetch is successful, extract the blob data from the response
        // const blobUrl = new URL(fileUrl);
        // // console.log("this is my new url, ", blobUrl);
        // // const fileUploadUrl = blobUrl.pathname;
        // // console.log("this is the path name", fileUploadUrl);

        // //const blob_response = await fetch(fileUrl); //fetch failed
        // const blob_response = await fetch(blobUrl);
        // if (!blob_response.ok){
        //     return NextResponse.json({output: "Network response was not ok"});
        // }
        // const blob = await blob_response.blob();
        // const fileUploadUrl = URL.createObjectURL(blob);
        

        //console.log("This is the url after conversion:", fileUploadUrl, typeof(fileUploadUrl));
        

        //or const data = await req.json();
        //const prompt = data.body;

        const form = new Formidable();
        const [fields, files] = await form.parse(req);
        const jsonData = fields.json;
        if(!jsonData){
            return NextResponse.json("JSON data in the form is not defined");
        }
        const messages = JSON.parse(jsonData[0] as string);
        //const prompt = messages;
        // form.parse(req, (err, fields, files) => {
        //     if (err){
        //         console.error("Error passing form:", err);
        //         return NextResponse.json("Error with form", {status: 500});

        //     }

        //     //parse the prompt string
        //     const jsonData = fields.json;
        //     if (!jsonData){
        //         return NextResponse.json("json data is not defined");
        //     }
        //     const messages = JSON.parse(jsonData[0] as string);

        //     const prompt = messages;
        //     console.log(prompt);


        // })
        

        if (!process.env.GEMINI_API_KEY){
            return NextResponse.json({output:"Gemini API Key not configured."}, { status: 500 });
        }

        if (!messages){
            return NextResponse.json({output: "Prompt is required"}, { status: 400 });
        }

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

        // const prompt =
        //     //"Describe the given scientific figure";
        //     "Give me sample code to generate the plots in this figure in python, and identify which code snippet belongs to which plot descriptively";
        const prompt = messages;

        // const imageParts = [
        //     fileToGenerativePart(fileUploadUrl),
        //     //fileToGenerativePart("paper-fig-1.png", "image/png"),
        //     //fileToGenerativePart("page-and-pen.jpg", "image/jpeg"),
        // ];

        //const fileInputEl = document.querySelector<HTMLEmbedElement>("input[type=file]");
        //const imageParts = await Promise.all([...fileInputEl.src].map(fileToGenerativePart));

        // const fileInputEl = document.querySelector<HTMLEmbedElement>("#pdfViewer");
        // console.log("fileInputEl", fileInputEl);
        // if (!fileInputEl){
        //     return NextResponse.json({output: "Error with file input"});

        // }

        //const embed_src_response = await fetch(fileInputEl.src);
        //const embed_blob = await embed_src_response.blob()
        //const imageParts = await fileToGenerativePart(blob);
        

        // //const result = await model.generateContent([prompt, imageParts]);
        // const result = await model.generateContent([prompt]);
        // console.log("This is the result", result);
        // const response = await result.response;
        // const output = response.text();
        
        // return NextResponse.json({output: output});
        // //return NextResponse.json(responseorresult.data.choices[0].message);

    }

    catch (error){
        console.log("[FIGURE-CODE_ERROR]", error);
        
        return NextResponse.json({output:"Internal error"}, {status: 500});

    }
    
}
