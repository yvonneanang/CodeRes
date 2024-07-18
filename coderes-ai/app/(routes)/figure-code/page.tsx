import { Navbar } from '@/components/navbar';
import ViewPdf from '@/components/view-pdf';

export default function FigureCodePage(){

    return (
        <div className="h-full">
            <Navbar/>
            <ViewPdf/>
            <div className="text-white">Add a View pdf component, which is interactive</div>
            <div className="text-white">Add a drawer component for the code</div>
        </div>
    )
}

