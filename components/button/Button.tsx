/* eslint-disable no-param-reassign */
const Button = ({ text, link, backgroundColor, onClick }) => {
  return (
    <div
      className={`${backgroundColor} text-center p-2 px-4 m-2 rounded-md min-w-32 cursor-pointer`}
      onClick={onClick ? () => onClick() : null}
    >
      <p>
        <a href={link}>{text}</a>
      </p>
    </div>
  )
}

export default Button
