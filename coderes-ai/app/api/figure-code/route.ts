//import dotenv from "dotenv";
//dotenv.config();
import * as fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
//import { NextApiRequest, NextApiResponse } from "next";
import { URL, URLSearchParams } from "url";
//import multer from 'multer';
//import { Formidable } from "formidable";

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

// async function fileToGenerativePart(file: any) {
//     const base64EncodedDataPromise = new Promise<string>((resolve) => {
//         const reader = new FileReader();
        
//         reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
//         reader.readAsDataURL(file);
//       });
    
//       return {
//         inlineData: { data: base64EncodedDataPromise, mimeType: file.type },
//       };
// }


function fileToGenerativePart(file: any, base64EncodedDataPromise: string) {
    
      return {
        inlineData: { data: base64EncodedDataPromise, mimeType: file.type },
      };
}

export async function POST(
    req: NextRequest,
) {
    try{
        
        const body = await req.formData(); 
        if (!body){
            return NextResponse.json("Request is null");
        }

        const messages = body.get('prompt') as string;
        const file = body.get('file') as File;
        const base64EncodedDataPromise = body.get('promise-string') as string;
        //const base64EncodedDataString = body.get('generativepart') as string;
        //const base64EncodedDataPromise = new Promise<string>(base64EncodedDataString);
        console.log("this is the body (formdata), the messages/prompt and the blob", body, messages, file);
        console.log("This is the type of message,", typeof(messages));
        console.log("This is the type of file,", typeof(file));
        console.log("This is the type of base encoding,", typeof(base64EncodedDataPromise));
        
        

        if (!process.env.GEMINI_API_KEY){
            return NextResponse.json({output:"Gemini API Key not configured."}, { status: 500 });
        }

        if (!messages){
            return NextResponse.json({output: "Prompt is required"}, { status: 400 });
        }

        if (!file){
            return NextResponse.json({output:"File is not configured"}, {status: 400});
        }

        // if (!base64EncodedDataPromise){
        //     return NextResponse.json({output: "base 64 promise encoding failed"}, {status: 400})
        // }
        
        

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // const prompt =
        //     //"Describe the given scientific figure";
        //     "Give me sample code to generate the plots in this figure in python, and identify which code snippet belongs to which plot descriptively";
        const prompt = messages;
        const imageParts = [fileToGenerativePart(file, base64EncodedDataPromise)];
        

        const result = await model.generateContent([prompt, ...imageParts]);
        console.log("This is the result", result);
        const response = await result.response;
        const output = response.text();
        
        return NextResponse.json({output: output});
        // //return NextResponse.json(responseorresult.data.choices[0].message);

    }

    catch (error){
        console.log("[FIGURE-CODE_ERROR]", error);
        
        return NextResponse.json({output:"Internal error"}, {status: 500});

    }
    
}
