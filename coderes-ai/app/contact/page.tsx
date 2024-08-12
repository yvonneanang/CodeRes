import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const font = Montserrat({
    weight: "600", 
    subsets: ['latin']
});


const Contact = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <div className="flex items-center">
            <div className="relative h-14 w-14 mr-4">
                        <Image 
                        fill 
                        alt="CodeRes Logo"
                        src="/logo_crop.png"
                        />
            </div>
            <h1 className = {cn("text-2xl font-bold text-white", font.className)}>CodeRes.ai</h1>
        </div>
        
        <h1 className="text-3xl font-extrabold pb-6 flex pt-6">
          Contact Us
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Contact Us: yonneanang@gmail.com

Thank you for using CodeRes!`}
        </pre>
      </div>
    </main>
  );
};

export default Contact;
