export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}
){
    return(
        <main className="h-full bg-[#111827] overflow-auto">
            <div className="mx-auo max-w-screen-xl h-full w-full">
                {children}
            </div>

        </main>
    )

}