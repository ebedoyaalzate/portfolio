import ServiceItem from './components/ServiceItem'
import {SERVICES} from './constants'

function OfferServices() {
  return (
    <>
      <div>
        <h3 className="text-3xl py-1 ">Services I offer</h3>
        <p className="text-md py-2 leading-8 text-gray-800 ">
          Since the beginning of my journey as a freelance designer and
          developer, I've done remote work for
          <span className="text-teal-500"> agencies </span>
          consulted for <span className="text-teal-500">startups </span>
          and collaborated with talanted people to create digital products for
          both business and consumer use.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      <div>
        {SERVICES.map(service => (
          <ServiceItem service={service} key={service.id} />
        ))}
      </div>
    </>
  )
}

export default OfferServices
