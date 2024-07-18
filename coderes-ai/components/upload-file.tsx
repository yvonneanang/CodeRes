/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

"use client";
import { useState, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import Link from "next/link";
import { useRouter } from "next/navigation";

// import PDFViewer from "tailwind-pdf-viewer";
import "tailwind-pdf-viewer/style.css";
import ViewPdf from '@/components/view-pdf';

export const UploadFile = () => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const router = useRouter();
  console.log("This is the beginning, and this is the pdfUrl = ", pdfUrl);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type == 'application/pdf'){
      const fileUrl = URL.createObjectURL(file);
      setPdfUrl(fileUrl);
      if (fileUrl){
        router.push(`/upload?pdfUrl=${encodeURIComponent(fileUrl)}`);
      }
    }
    else{
      alert('Please upload a valid PDF file.')
    }
  };

  const handleFigurePagePdfView = () => {
    if (pdfUrl){
      router.push(`/figure-code?pdfUrl=${encodeURIComponent(pdfUrl)}`);
    }
  }

  

  return (
    <form>
      <div className="space-y-12">

      {/* <div className="border-b border-white-900/10 pb-12">          */}
        <div className="mt-10 mx-10 grid grid-cols-1 gap-x-6 gap-y-6">

            <div className="col-start-1 col-span-4">
              
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-silver-900/25 px-6 py-10">
                <div className="text-center">
                 
                  <div className="mt-4 flex text-sm leading-6 text-white-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-gradient-to-r from-purple-500 to-pink-500 font-semibold text-white-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-purple-300
                      p-1">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" 
                        accept="application/pdf" onChange={handleFileChange}
                      />
                    </label>
                    <p className="p-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600 p-2">PDF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div>  */}

      {pdfUrl && (
        <>
          {/* <div className="border-b border-white-900/10 pb-12"></div> */}
          <div className="border-b border-white-900/10 pb-12">
            <div className="p-4">
                {/* <Link href={"/figure-code"}> */}
                    <Button variant="premium" onClick={() => {
                      router.push(`/figure-code?pdfUrl=${encodeURIComponent(pdfUrl)}`)
                    }} className="md:text-md p-4 md:p-4 rounded-md font-semibold">
                        Generate Code
                    </Button>
                {/* </Link> */}
            </div>
            <p className = "py-3">File Preview: </p>
            <ViewPdf/>
          </div>
        </>
      )}
     

    </form>
  )
}
