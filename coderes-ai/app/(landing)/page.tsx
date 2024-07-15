import { Navbar } from "@/components/navbar";
import { LandingHero } from "@/components/landing-hero"

export default function LandingPage(){
    return(
        <div className = "h-full">
            <Navbar/>
            <LandingHero/>
        </div>
    )
}