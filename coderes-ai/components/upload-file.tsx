"use client";
import { useState, ChangeEvent } from 'react';
import { Suspense } from 'react';
import Link from "next/link";

import { Button } from '@/components/ui/button';
import ViewFile from '@/components/view-file';

export const UploadFile = () => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);


  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && (file.type == 'application/pdf' || file.type == 'image/png')){
      const fileUrl = URL.createObjectURL(file);
      console.log("This is the fileurl in upload-file: ", fileUrl);
      setFileUrl(fileUrl);
    }
    else{
      alert('Please upload a valid PDF or image (PNG) file.')
    }
  };


  return (
    <form>
      <div className="space-y-12">

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
                        accept="application/pdf, image/png" onChange={handleFileChange}
                      />
                    </label>
                    <p className="p-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600 p-2">Image (PNG) or PDF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      {fileUrl && (
        <>
          <div className="border-b border-white-900/10 pb-12">
            <div className="p-4">
              <Suspense>
                <Link href={`/figure-code?fileUrl=${encodeURIComponent(fileUrl)}`}>
                    <Button variant="premium" className="md:text-md p-4 md:p-4 rounded-md font-semibold">
                        Get Code!
                    </Button>
                </Link>
              </Suspense>
            </div>
            <p className = "py-3">File Preview: </p>
            <ViewFile fileUrl={fileUrl}/>
          </div>
        </>
      )}
     

    </form>
  )
}
