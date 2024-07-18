'use client';
import { Navbar } from '@/components/navbar';
import ViewPdf from '@/components/view-pdf';
import { useSearchParams } from 'next/navigation';

export default function FigureCodePage(){
    const searchParams = useSearchParams();
    const pdfUrl = searchParams.get('pdfUrl');
    console.log("This is view pdf, and the pdf url,", pdfUrl);

    if (!pdfUrl || typeof pdfUrl !== 'string'){
        return <div>No PDF found</div>;
    }

    return (
        <div className="h-full">
            <Navbar/>
            <div className ="">
                <ViewPdf pdfUrl={pdfUrl}/>
            </div>
            
            <div className="text-white">Add a View pdf component, which is interactive</div>
            <div className="text-white">Add a drawer component for the code</div>
        </div>
    )
}

