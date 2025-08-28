
export default function Navbars() {
    return (
        <div>
            <div className="m-5" /> 
            
            <nav className="bg-purple-600 text-white py-4">
                <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
                    <div className="text-2xl font-semibold">
                    <a href="/">LoveBites</a>
                    </div>
                    <ul className="flex space-x-8">
                    <li>
                        <a href="/">Shopping List</a>
                    </li>
                    <li>
                        <a href="/recipes">Recipes</a>
                    </li>
                    </ul>
                </div>
            </nav>

            <div className="m-5" />      

            <nav className="bg-gray-500 text-white py-4">
                <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center border-dotted border-1">
                    <div className="text-2xl font-semibold border-dotted border-1">
                    <a href="/">Title</a>
                    </div>
                    <ul className="flex space-x-8 border-dotted border-1">
                    <li>
                        <a href="/">Page</a>
                    </li>
                    <li>
                        <a href="/">Page</a>
                    </li>
                    </ul>
                </div>
            </nav>

            <div className="m-5" />

            <nav className="border border-red-200 w-full bg-background text-foreground px-6 py-4 flex items-center justify-between">
                {/* Logo / Name */}
                <div className="text-xl font-bold">Temp navbar</div>

                {/* Links */}
                <ul className="flex space-x-6 text-sm font-medium">
                    <li><a href="#about" className="hover:text-red-400">About</a></li>
                    <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
                    <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
                </ul>
            </nav>

            
        </div>
    );
  }
  