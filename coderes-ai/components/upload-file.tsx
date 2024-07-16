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
import { useState, useRef, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import Link from "next/link";
import PDFViewer from "tailwind-pdf-viewer";
import "tailwind-pdf-viewer/style.css";

export const UploadFile = () => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type == 'application/pdf'){
      const fileUrl = URL.createObjectURL(file);
      setPdfUrl(fileUrl);
    }
    else{
      alert('Please upload a valid PDF file.')
    }
  };

  

  return (
    <form>
      <div className="space-y-12">

      <div className="border-b border-white-900/10 pb-12">         
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">

            <div className="col-start-2 col-span-4">
              
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
      </div> 

      <div className="border-b border-white-900/10 pb-12">
         {pdfUrl && (
          <>
            <div className="p-4">
                <Link href={"/upload"}>
                    <Button variant="premium" className="md:text-md p-4 md:p-4 rounded-md font-semibold">
                        Generate Code
                    </Button>
                </Link>
            </div>
            <div className="mt-4 w-full max-w-screen-lg">
              {/* <iframe 
              src={pdfUrl}
              className="w-full h-screen border-2 border-gray-300"
              title="PDF Preview"></iframe> 
              <embed
                src= {pdfUrl}
                type='application/pdf'
                className="w-full h-screen border-2 border-gray-300"
                style={{minHeight:'600px'}}
                /> */}
                <PDFViewer pdfURL={pdfUrl} />
            </div>
          </>
         )}
      </div>

    </form>
  )
}
