/* eslint-disable no-param-reassign */
import { primaryColor } from '@/util/constants'

const Button = ({ text, link, backgroundColor, onClick }) => {
  let bgColor = 'bg-white'
  if (backgroundColor === 'primary') {
    bgColor = primaryColor(false)
    console.log(`bgColor is now ${bgColor}`)
  }

  return (
    <div
      className={`text-white ${bgColor} text-center p-2 px-4 m-2 rounded-md min-w-32 cursor-pointer`}
      onClick={onClick ? () => onClick() : null}
    >
      <p>
        <a href={link}>{text}</a>
      </p>
    </div>
  )
}

export default Button
