import Image from 'next/image'
import deved from '../public/dev-ed-wave.png'

function Avatar() {
  return (
    <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
      <Image src={deved} alt="" fill style={{objectFit: 'cover'}} />
    </div>
  )
}

export default Avatar
