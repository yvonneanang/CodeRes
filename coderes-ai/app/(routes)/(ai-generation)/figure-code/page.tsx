'use client';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { URL, URLSearchParams } from "url";

import { Navbar } from '@/components/navbar';
import ViewFile from '@/components/view-file';

export default function FigureCodePage(){
    const searchParams = useSearchParams();
    const fileUrl = searchParams.get('fileUrl');
    const [output, setOutput] = useState("Code goes here...");
    const [file, setFile] = useState();
    console.log("This is the file url, ", fileUrl);

    if (fileUrl){
        //const fileUpload = URL.createObjectURL(fileUrl);
        console.log("this is the type of the file url,", typeof(fileUrl));
    }
    
    if (!fileUrl || typeof fileUrl !== 'string'){
        return <div className= "text-white">No file found</div>;
    }

    const prompt = "Give me sample code to generate the plots in the uploaded image figure in python, and identify which code snippet belongs to which plot descriptively";
    console.log(fileUrl, prompt);
    

    const generateText = async () => {
        try{
            
            const blobUrl = new URL(fileUrl);
            const blob_response = await fetch(blobUrl);
            const blob = await blob_response.blob();


            const response = await fetch('/api/figure-code', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                //body: JSON.stringify({prompt:prompt, fileUrl:fileUrl})
                //body: JSON.stringify({prompt:prompt, blob:blob})
                body: [JSON.stringify({prompt: prompt}), blob];
            });
            const data = await response.json(); 
            setOutput(data.output);

            // if (response.ok){
            //     setOutput(data.output);
            // }
            // else{
            //     setOutput(data.error);
            // }

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
                    <div className = "col-start-1 col-span-4 justify-center">
                        <ViewFile fileUrl={fileUrl}/>
                    </div>
                    <div className="text-white">
                        {/* <ScrollArea className="rounded-md border p-4">
                            <div>
                                Code and message content will go here
                            </div>

                        </ScrollArea> */}
                        <p onClick={generateText}>{output}</p>
                        <p>Hmm...</p>

                    </div>
                </div>

            </div>
            
            
        </div>
    )
}

