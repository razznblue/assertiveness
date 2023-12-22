/* eslint-disable no-param-reassign */
const Button = ({ text, link, backgroundColor }) => {
  return (
    <a
      className={`${backgroundColor} text-center p-2 px-4 m-2 rounded-md min-w-32 cursor-pointer font-bold`}
      href={link}
    >
      <p>{text}</p>
    </a>
  )
}

export default Button
