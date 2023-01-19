import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai'
function SocialMedia() {
  return (
    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
      <AiFillTwitterCircle />
      <AiFillLinkedin />
      <AiFillYoutube />
    </div>
  )
}

export default SocialMedia
