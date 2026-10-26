const Button = (bgcolor, bghover, bordercolor, textcolor, texthover, content, link) => {
  return (
    <div>
        <a href={link} className={`inline-block px-6 py-3.5 bg-${bgcolor} border border-solid border-${bordercolor} rounded-full text-${textcolor} hover:bg-${bghover} hover:text-${texthover} hover:scale-105 transition-all duration-300 `}>{content}</a>
    </div>
  )
}

export default Button