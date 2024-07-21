import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { UploadHero } from '@/components/upload-hero'


export default function Upload() {
  return (
    //<Button variant="destructive" size="lg">Click Me</Button>
    <div className="h-full">
      <Navbar/>
      <div className="border border-b-0 border-gray-500"></div>
      <UploadHero/>
      
    </div>
  );
}

//OR
//const DashboardPage = () => {}
//export default DashboardPage
