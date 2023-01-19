import {StaticImageData} from 'next/image'
import design from '../../../public/design.png'
import code from '../../../public/code.png'
import consulting from '../../../public/consulting.png'

export interface Service {
  id: number
  image: StaticImageData
  title: string
  description: string
  toolsTitle: string
  tools: string[]
}
export const SERVICES: Service[] = [
  {
    id: 1,
    image: design,
    title: 'Beautiful Designs',
    description:
      'Creating elegant designs suited for your needs following core design theory.',
    toolsTitle: 'Design tools I use',
    tools: ['Photoshop', 'Figma', 'Ilustrator'],
  },
  {
    id: 2,
    image: code,
    title: 'Code your dream project',
    description: `Do you have an idea for your next great website? Let's make it a reality.`,
    toolsTitle: 'Develop frameworks and libraries I use',
    tools: ['Angular', 'React', 'Vue'],
  },
  {
    id: 3,
    image: consulting,
    title: 'Consulting',
    description:
      'Are you interested in feedback for your current project? I can give you tips and tricks to level it up.',
    toolsTitle: 'Design tools I use',
    tools: ['Photoshop', 'Figma', 'Ilustrator'],
  },
]
