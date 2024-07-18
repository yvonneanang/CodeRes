'use client';
//import { useSearchParams } from "next/navigation";

interface ViewPdfProp{
    pdfUrl: string
}
export default function ViewPdf({pdfUrl}: ViewPdfProp){
    // const searchParams = useSearchParams();
    // const pdfUrl = searchParams.get('pdfUrl');
    // console.log("This is view pdf, and the pdf url,", pdfUrl);

    // if (!pdfUrl || typeof pdfUrl !== 'string'){
    //     return <div>No PDF found</div>;
    // }

    return (
        <div className="mx-auto mt-0 w-full max-w-screen-lg">
              {/* <iframe 
              src={pdfUrl}
              className="w-full h-screen border-2 border-gray-300"
              title="PDF Preview"></iframe> */}
              <embed
                // src = {decodeURIComponent(pdfUrl)}
                src = {pdfUrl}
                type='application/pdf'
                className="w-full h-screen border-2 border-gray-300"
                style={{minHeight:'600px'}}
                />
                
        </div>
    )
}
