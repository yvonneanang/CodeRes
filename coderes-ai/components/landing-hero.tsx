"use client";
import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const LandingHero = () => {
    return(
        <div className="text-white font-bold py-36 text-center space-y-5">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5
            font-bold">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    <TypewriterComponent
                    options={{
                        strings: [
                            "Review", 
                            "Generate",
                        ], 
                        autoStart: true,
                        loop: true
                    }}
                    />
                </div>
                <h1>scientific literature CODE with speed and clarity</h1>
            </div>

            <div className="text-sm md:text-xl font-light text-zinc-400">
                Get a headstart in replicating computational piplines used to generate figures in scientific papers with a Gemini-powered click.
            </div>

            <div>
                <Link href={"/upload"}>
                    <Button variant="premium" className="md:text-md p-4 md:p-6 rounded-full font-semibold">
                        Try it Now!
                    </Button>
                </Link>
            </div>
        </div>
    )
}