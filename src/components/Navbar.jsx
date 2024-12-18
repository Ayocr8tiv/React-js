

const Navbar = () => {
  return (
    <nav className="w-full h-12 shadow flex items-center justify-around bg-gradient-to-r from-cyan-500 to-blue-500">
        <div>
            <p className="text-xl font-bold text-black">Technovus.</p>
        </div>
        <div>
            <a href="" className="me-4 hover:underline hover:text-red-500">Home</a>
            <a href="" className="me-4 hover:underline hover:text-red-500">About</a>
            <a href="" className="me-4 hover:underline hover:text-red-500">Products</a>
            <a href="" className="me-4 hover:underline hover:text-red-500">Testimonials</a>
            <a href="" className="me-4 hover:underline hover:text-red-500">Contacts</a>
        </div>

        <div>
            <button className="py-1 px-4 border rounded-full hover:animate-bounce hover:bg-gray-800 hover:text-white">Register</button>
            <button className="py-1 px-4 border rounded-full hover:animate-bounce hover:bg-gray-800 hover:text-white">Login</button>
        </div>
    </nav>
  )
}

export default Navbar

