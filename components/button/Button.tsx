const Button = ({ text, link }) => {
  return (
    <div className="button">
      <p>
        <a href={link}>{text}</a>
      </p>
    </div>
  )
}

export default Button
