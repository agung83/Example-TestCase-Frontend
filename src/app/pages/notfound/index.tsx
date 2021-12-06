export const NotFound = () => {
    return (
        <div className="container bg-white flex flex-wrap justify-center p-16">
            {/* <div className="shadow-lg rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="animate-pulse  space-x-4">
                    <div className=" space-y-4 py-1">
                        <div className="rounded-t-lg bg-gray-300 w-full h-20"></div>
                        <div className="h-4 bg-gray-300 rounded w-2/4"></div>
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-300 rounded w-16"></div>
                            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                        </div>
                    </div>
                </div>
            </div> */}
            <img className="h-4/6 mx-auto" src="/notfound.svg" alt="" />
            <div className="text-center ">
                <p className="font-bold  ">Hmm.. halaman yang kamu cari ga <br /> ketemu, yuk balik ke tempat sebelumnya</p>
                <button className="p-2 border-2 mt-2 border-blue-300 rounded-lg w-36" onClick={() => window.location.href = "/"}>Kembali</button>
            </div>
        </div>
    )
}
