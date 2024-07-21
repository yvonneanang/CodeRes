'use client';
import { useSearchParams } from 'next/navigation';

import { Navbar } from '@/components/navbar';
import ViewFile from '@/components/view-file';

export default function FigureCodePage(){
    const searchParams = useSearchParams();
    const fileUrl = searchParams.get('fileUrl');
    console.log("This is view file, and the pdf url,", fileUrl);

    if (!fileUrl || typeof fileUrl !== 'string'){
        return <div className= "text-white">No PDF found</div>;
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
                <div className="text-white">Add stuff here for the code - React markdown</div>
                </div>

            </div>
            
            
        </div>
    )
}

