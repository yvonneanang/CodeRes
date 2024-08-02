import Link from "next/link";
import config from "@/config";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const font = Montserrat({
    weight: "600", 
    subsets: ['latin']
});

const PrivacyPolicy = () => {
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
          </svg>{" "}
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
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Effective Date: August 1, 2024

Welcome to CodeRes.ai! This Privacy Policy explains how we collect, use, and protect your information when you use our web app, accessible at https://coderes.ai ("Website").

Description of Service
CodeRes is a web app designed to generate code from scientific figures.

User Data Collected
We do not collect any personal data from users.

Non-Personal Data Collection
We collect non-personal data through web cookies to enhance website functionality.

Purpose of Data Collection
The non-personal data collected is used solely for website functionality.

Data Sharing
We do not share the data with any other parties.

Children's Privacy
We do not collect any data from children.

Updates to the Privacy Policy
We may update this Privacy Policy from time to time. Users are responsible for reviewing the Privacy Policy periodically to stay informed of any changes. Continued use of the Website after any updates constitutes acceptance of the new Privacy Policy.

Contact Information
If you have any questions or concerns, please contact us at yonnie@coderes.ai or yonneanang@gmail.com.

By using our Website, you acknowledge that you have read, understood, and agree to this Privacy Policy.

Thank you for using CodeRes!`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
