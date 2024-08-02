import { Navbar } from "@/components/navbar";
import { LandingHero } from "@/components/landing-hero";
import { FeaturesGrid } from "@/components/features-grid";
import { Footer } from "@/components/footer";

export default function LandingPage(){
    return(
        <div className="h-full">
            <Navbar/>
            <LandingHero/>
           
            <div className = "rounded-lg">
                <FeaturesGrid/>
            </div>
            <div className ="text-gray-300">
                <Footer/>

            </div>
            
        </div>
        
    )
}

//bg-[#1f293f]