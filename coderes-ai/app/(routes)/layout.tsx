'use client';
import {Suspense } from 'react';

export default function UploadLayout({
    children
}: {
    children: React.ReactNode;
}
){
    return(
        <main className="h-full bg-[#111827] overflow-auto">
            <div className="mx-auto max-w-screen-xl h-full w-full">
                <Suspense fallback={null}>
                    {children}
                </Suspense>
                
            </div>
        </main>
    )

}