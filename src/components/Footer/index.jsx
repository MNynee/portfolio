const Footer = () => {
  return (
    <footer className="flex justify-between px-18 py-8 text-[14px] text-secondary-text">
        <div>
            <p>&copy; {new Date().getFullYear()} Matheus Faustino. All rights reserved.</p>
        </div>
        <div className="pt-4">
            <a href="#header">
                <p>Haut de page <span className="font-inter">↑</span></p>
            </a>
        </div>
    </footer>
  )
}

export default Footer