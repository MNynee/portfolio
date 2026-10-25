const Footer = () => {
  return (
    <footer className="flex justify-between px-18 py-8 text-[14px]">
        <div>
            <p>&copy; {new Date().getFullYear()} Matheus Faustino. All rights reserved.</p>
        </div>
        <div className="pt-3">
            <p>Haut de page <span className="font-inter">↑</span></p>
        </div>
    </footer>
  )
}

export default Footer