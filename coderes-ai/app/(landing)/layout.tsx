export default function LandingLayout({
    children
}: {
    children: React.ReactNode;
}
){
    return(
        <main className="h-full overflow-auto bg-[#111827]">
            <div className="mx-auto max-w-screen-xl h-full w-full">
                {children}
            </div>

        </main>
    )

}
