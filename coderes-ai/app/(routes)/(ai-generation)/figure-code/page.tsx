'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { useState } from 'react';
import { FileImage, FileCode2 } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import { Navbar } from '@/components/navbar';
import ViewFile from '@/components/view-file';
import { Button } from '@/components/ui/button';
import { Empty } from '@/components/empty';
import { Loader } from '@/components/loader';
import CopyButton from '@/components/ui/copy-button';
import { ComboBox } from '@/components/combo-box';


export default function FigureCodePage(){
    const searchParams = useSearchParams();
    const fileUrl = searchParams.get('fileUrl');
    const [output, setOutput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [language, setLanguage] = useState("python");
    //const base_instruction = "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations.";
    const question = `Give me sample code to generate the plots in the uploaded image figure in ${language} and identify which code snippet belongs to which plot descriptively`;
    const prompt = question;

    if (!fileUrl || typeof fileUrl != 'string'){
        return <div className= "text-white">No file found</div>;
    }

    const handleLanguageChange = (language_value: string) => {
        setLanguage(language_value);
        generateText();
    }

    const generateText = async () => {
        setIsLoading(true);
        setOutput("");
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
        setIsLoading(false);
    }

    return (
        <div>
            <Navbar/>
            <div className="border border-b-0 border-gray-500"></div>

            <div className = "text-white font-bold py-3">
                <div className="flex flex-row items-center justify-center">
                    <Link href="/upload" className="p-2">
                        <Button variant="premium" className="md:text-md p-4 md:p-4 rounded-md font-semibold">
                            Upload New File
                        </Button>
                    </Link>
                    <Button variant="premium" className="md:text-md p-4 md:p-4 rounded-md font-semibold" 
                        onClick={generateText}
                        disabled={isLoading}>
                            Generate Code
                    </Button>
                </div>
                
                
                <div className ="grid grid-cols-7 gap-2 p-3 border rounded-2xl border-gray-400">
                    <p className = "p-2 col-span-4 flex flex-row"> <FileImage/> File: </p>
                    <div className = "p-2 col-span-1 flex flex-row">
                         <FileCode2/> 
                         Code:
                         {/* <ComboBox onLanguageChange={handleLanguageChange}/> */}
                    </div>
                    <div className="col-span-1 flex flex-row">
                        <ComboBox onLanguageChange={handleLanguageChange}/>
                    </div>
                    
                    <div className="col-span-1 flex flex-row">
                        <CopyButton copyInput={output}/>
                    </div>

                    <div className = "col-span-4">
                        <Suspense>
                            <ViewFile fileUrl={fileUrl}/>
                        </Suspense>
                        
                    </div>
                    
                    <div className="text-black col-span-3">
                        {isLoading && (
                            <div className = "p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                                <Loader/>
                            </div>
                        )}
                        {output.length == 0 && !isLoading && (
                            <Empty label="Code goes here..."/>
                        )}
                        
                        {/* <div className = "p-8 w-full flex items-start gap-x-8 rounded-lg border border-black/10 bg-muted"> */}
                        {!isLoading && output.length !=0 && (
                        <div className = "p-3 w-full flex items-start gap-x-8 rounded-lg border border-black/10 bg-muted">
                            <ReactMarkdown
                            components={{
                                pre: ({node, ...props}) =>(
                                    <div className="overflow-auto w-full m-2 bg-black/10 p-2 rounded-lg">
                                        <pre {...props}/>
                                    </div>
                                ), 
                                //distinguish codesnippets from explanation
                                code: ({node, ...props}) => (
                                    <code className="bg-black/10 rounded-lg p-1"
                                    {...props}/>
                                )
                            }}
                            className = "text-sm overflow-hidden leading-7"
                            >
                                {output || ""}
                            </ReactMarkdown>
                        </div>)}
                        

                    </div>
                </div>

            </div>
            
            
        </div>
    )
}

