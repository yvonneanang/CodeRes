'use client';
//import { useSearchParams } from "next/navigation";
import {
    Card, 
    CardContent, 
    CardDescription, 
    CardFooter, 
    CardHeader, 
    CardTitle,
} from "@/components/ui/card";

interface ViewFileProp{
    fileUrl: string;
}
export default function ViewFile({fileUrl}: ViewFileProp){
    // const searchParams = useSearchParams();
    // const pdfUrl = searchParams.get('pdfUrl');
    

    // if (!pdfUrl || typeof pdfUrl !== 'string'){
    //     return <div>No PDF found</div>;
    // }
    
    return (
        <div className="mx-auto mt-0 max-w-screen-lg">
              {/* <iframe 
              src={pdfUrl}
              className="w-full h-screen border-2 border-gray-300"
              title="PDF Preview"></iframe> */}
            
            
            {<embed
                // src = {decodeURIComponent(pdfUrl)}
                id = "pdfViewer"
                src = {fileUrl}
                type='application/pdf'
                className="rounded-2xl w-full h-screen border-3 border-gray-300"
                style={{minHeight:'600px'}}
            /> &&

            <embed
                id = "pdfViewer"    
                src = {fileUrl}
                type='image/png'
                className="rounded-2xl w-full border-3 border-gray-300"
                style={{minHeight:'300px'}}
            />
            // &&

            // <embed
            //     src = {fileUrl}
            //     type='image/jpeg'
            //     className="rounded-2xl w-full border-3 border-gray-300"
            //     style={{minHeight:'300px'}}
            // />
            }
                
                
        </div>
    )
}
