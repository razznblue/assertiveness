/* eslint-disable no-param-reassign */
const Button = ({ text, link, backgroundColor, clickFunction, disableLink }) => {
  const handleClick = async () => {
    if (clickFunction) {
      await clickFunction()
    }

    if (!disableLink) {
      window.location.href = link
    }
  }

  return (
    <div
      className={`${backgroundColor} text-center p-2 px-4 m-2 rounded-md min-w-32 cursor-pointer font-bold`}
      onClick={handleClick}
    >
      <p>{text}</p>
    </div>
  )
}

export default Button
