"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const font = Montserrat({
    weight: "600", 
    subsets: ['latin']
});

const links= [
    {
        name: "Home", 
        path: "/",
    },

    {
        name: "Features",
        path: "#features",
    },

    // {
    //     name: "FAQs",
    //     path: "/faqs",
    // },

    {
        name: "Contact", 
        path: "/contact",
    },
];

export const Navbar = () => {
    return(
        <nav className="p-4 bg-transparent flex items-center justify-between bg-[#111827]">
            <Link href="/" className="flex items-center">
                <div className="relative h-14 w-14 mr-4">
                    <Image 
                    fill 
                    alt="CodeRes Logo"
                    src="/logo_crop.png"
                    />
                </div>
                <h1 className = {cn("text-2xl font-bold text-white", font.className)}>CodeRes.ai</h1>
            </Link>
            
            <div className="items-center">
                {
                links.map((link, index) =>{
                    return (
                        <Link href={link.path} key={index} className="text-zinc-200 p-8">
                            {link.name}
                        </Link>
                    )
                })
            }  
            </div>
            {/* <div className="flex items-center gap-x-2">
                <Link href={"/dashboard"}>
                    <Button variant="outline">
                        Get Started
                    </Button>
                </Link>

            </div> */}

        </nav>
    )
}