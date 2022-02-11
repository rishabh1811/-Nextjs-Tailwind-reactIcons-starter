
import { FaReact, FaSass } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss } from "react-icons/si"

export default function Home() {
  return (<>
  <div className=" p-6 space-y-4">
    <h1 className="text-4xl"><span className='text-sky-500 font-bold'>Tailwind</span> Starter</h1>
    <h2 className="text-3xl underline underline-offset-4">Features</h2>
      <ul className="text-lg">
        <li className="flex items-center gap-x-2"><SiNextdotjs className='text-black' /> Next.js 12.0.10</li>
        <li className="flex items-center gap-x-2"><SiTailwindcss className='text-blue-600' /> Tailwind 3.0.21</li>
        <li className="flex items-center gap-x-2"><FaSass  className='text-pink-600' /> Sass </li>
        <li className="flex items-center gap-x-2"><FaReact className='text-fuchsia-600' /> react-icons</li>
      </ul>
  </div>
  
  </>)
}
