export default function Navbar() {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between item-center">
                <h1 className="text-white text xl">Home</h1>
                <a href="./components/Dashboard" className="text-white text xl">Users</a>
            </div>
        </nav>
    );
}