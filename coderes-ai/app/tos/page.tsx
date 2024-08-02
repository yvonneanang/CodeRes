import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const font = Montserrat({
    weight: "600", 
    subsets: ['latin']
});


const TOS = () => {
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
          Terms and Conditions
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: Aug 1, 2024

Welcome to CodeRes.ai!

These Terms & Services ("Terms") govern your use of our web app, accessible at https://coderes.ai ("Website"). By using our Website, you agree to these Terms.

1. Description of Service
CodeRes is a web app designed to generate code from scientific figures.

2. Ownership and Use of Generated Code
Users are allowed to copy the code generated from CodeRes for their work. Users must reference the paper from which the code was generated in their work.

3. User Data Collection
We do not collect any personal data from users.

4. Non-Personal Data Collection
We collect non-personal data through web cookies. For more details, please refer to our Privacy Policy at https://coderes.ai/privacy-policy.

5. Contact Information
If you have any questions or concerns, please contact us at yonnie@coderes.ai.

6. Governing Law
These Terms are governed by the laws of the United States.

7. Updates to Terms
We may update these Terms from time to time. Users are responsible for reviewing the Terms periodically to stay informed of any changes. Continued use of the Website after any updates constitutes acceptance of the new Terms.

By using our Website, you acknowledge that you have read, understood, and agree to be bound by these Terms.

Thank you for using CodeRes!`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
