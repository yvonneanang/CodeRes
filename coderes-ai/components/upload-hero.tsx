"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UploadFile } from '@/components/upload-file';

export const UploadHero = () => {
    return(
        <div className="text-white font-bold py-36 text-center space-y-5">
            <div className="relative h-28 w-28 mx-auto">
                <Image 
                    fill 
                    alt="CodeRes Logo"
                    src="/logo_crop.png"
        
                    />
            </div>

            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl space-y-5
            font-bold">
                <h1>CodeRes.ai</h1>
            </div>

            <div className="text-sm md:text-xl font-light text-zinc-400">
                Begin by uploading your file below
            </div>

            <div>
                <UploadFile/>
            </div>
        </div>
    )
}