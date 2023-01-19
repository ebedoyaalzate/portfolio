import Image from 'next/image'
import design from '../../../../public/design.png'
import {Service, SERVICES} from '../../constants'

interface Prop {
  service: Service
}
function ServiceItem({service}: Prop) {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 ">
      <Image
        src={service.image}
        alt=""
        width={100}
        height={100}
        className="mx-auto"
      />
      <h3 className="text-lg font-medium pt-8 pb-2">{service.title}</h3>
      <p className="py-2">{service.description}</p>
      <h4 className="py-4 text-teal-600">{service.toolsTitle}</h4>
      {service.tools.map((tool, index) => (
        <p className="text-gray-800 py-1" key={index}>
          {tool}
        </p>
      ))}
    </div>
  )
}

export default ServiceItem
