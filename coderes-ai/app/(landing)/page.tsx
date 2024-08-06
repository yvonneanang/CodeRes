import { Navbar } from "@/components/navbar";
import { LandingHero } from "@/components/landing-hero";
import { FeaturesGrid } from "@/components/features-grid";
import { Footer } from "@/components/footer";

export default function LandingPage(){
    return(
        <div className="h-full">
            <Navbar/>
            <LandingHero/>
           
            <div className = "rounded-lg bg-[#233150]">
                <FeaturesGrid/>
            </div>
            <div className ="text-gray-300 pt-10">
                <Footer/>

            </div>
            
        </div>
        
    )
}

//#28395c 
//bg-[#1f293f]
//#d3dbed
//#586fa1