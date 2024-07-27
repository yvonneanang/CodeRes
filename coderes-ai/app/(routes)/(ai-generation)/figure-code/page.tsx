'use client';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { URL, URLSearchParams } from 'url';

import { Navbar } from '@/components/navbar';
import ViewFile from '@/components/view-file';

export default function FigureCodePage(){
    const searchParams = useSearchParams();
    const fileUrl = searchParams.get('fileUrl');
    const [output, setOutput] = useState("Code goes here...");
    const prompt = "Give me sample code to generate the plots in the uploaded image figure in python, and identify which code snippet belongs to which plot descriptively";
    
    if (!fileUrl || typeof fileUrl != 'string'){
        return <div className= "text-white">No file found</div>;
    }


    const generateText = async () => {
        try{
            
            const blobUrl = fileUrl;
            const blob_response = await fetch(blobUrl);
            const blob = await blob_response.blob();

            //turning the file into a generative part for GenerateContent()
            const base64EncodedDataPromise = new Promise<string>((resolve) => {
                const reader = new FileReader();
                
                reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
                reader.readAsDataURL(blob);
              });

            const promise = await base64EncodedDataPromise;

            //formdata for the jsonData and the blob
            const formData = new FormData();
            formData.append('prompt', prompt);
            formData.append('file', blob);
            formData.append('promise-string', promise); 


            const response = await fetch('/api/figure-code', {
                method: 'POST',
                body: formData
            });
            const data = await response.json(); 
            setOutput(data.output);

        }
        catch(error){
            console.error(error);
        }
    }

    return (
        <div>
            <Navbar/>
            <div className="border border-b-0 border-gray-500"></div>

            <div>
                <div className="py-3 text-white">Upload New File Bar or Card</div>

                <p className = "py-3 text-white font-bold">Name of File: </p>

                <div className ="grid grid-cols-7 gap-2 p-3 border rounded-2xl border-gray-400">
                    <div className = "col-span-4">
                        <ViewFile fileUrl={fileUrl}/>
                    </div>
                    <div className="text-white col-span-3">
                        {}
                        <p onClick={generateText}>{output}</p>
                        

                    </div>
                </div>

            </div>
            
            
        </div>
    )
}

