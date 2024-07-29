
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";


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

        if (!process.env.GEMINI_API_KEY){
            return NextResponse.json({output:"Gemini API Key not configured."}, { status: 500 });
        }

        if (!messages){
            return NextResponse.json({output: "Prompt is required"}, { status: 400 });
        }

        if (!file){
            return NextResponse.json({output:"File is not configured"}, {status: 400});
        }
        
        

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = messages;
        const imageParts = [fileToGenerativePart(file, base64EncodedDataPromise)];

        const result = await model.generateContent([prompt, ...imageParts]);
        console.log("This is the result", result);
        const response = await result.response;
        const output = response.text();
        
        return NextResponse.json({output: output});

    }

    catch (error){
        console.log("[FIGURE-CODE_ERROR]", error);
        
        return NextResponse.json({output:"Internal error"}, {status: 500});

    }
    
}
