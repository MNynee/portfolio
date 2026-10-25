const Button = (bgcolor, bordercolor, textcolor, content, link) => {
  return (
    <div>
        <a href={link} className={`inline-block px-6 py-3.5 bg-${bgcolor} border border-solid border-${bordercolor} rounded-full text-${textcolor}`}>{content}</a>
    </div>
  )
}

export default Button