function Header() {

    return (
        <>
            <header className="w-full bg-black text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-gray-700 rounded-full" viewBox="0 0 24 24">
                            <path d="M 12 2 L 3 7 L 3 17 L 12 22 L 21 17 L 21 7 L 12 2 M 12 11 L 3 7 M 12 11 L 21 7 M 12 11 L 12 22"></path>
                        </svg>
                        <span className="ml-3 text-xl text-white">Chess</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-blue-300 text-gray-300">First Link</a>
                        <a className="mr-5 hover:text-blue-300 text-gray-300">Second Link</a>
                        <a className="mr-5 hover:text-blue-300 text-gray-300">Third Link</a>
                        <a className="mr-5 hover:text-blue-300 text-gray-300">Fourth Link</a>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header
