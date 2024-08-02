export default function TOSLayout({
    children
}: {
    children: React.ReactNode;
}
){
    return(
        <main className="h-full overflow-auto bg-[#111827] text-gray-400">
            <div className="mx-auto max-w-screen-xl h-full w-full">
                {children}
            </div>

        </main>
    )

}