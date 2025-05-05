
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
        </div>
    );
  }
  