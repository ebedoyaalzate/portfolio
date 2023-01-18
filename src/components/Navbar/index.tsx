import {BsFillMoonStarsFill} from 'react-icons/bs'

function Navbar() {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl font-burtons">developedbyed</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 border-none rounded-md ml-8"
            href="#"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
