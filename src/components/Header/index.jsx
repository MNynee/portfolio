const Header = () => {
  return (
    <header className="flex justify-between items-center px-18 py-8">
      <div className="text-[26px] font-fraunces">Matheus Faustino</div>
      <div>
        <nav>
          <ul className="flex gap-x-6 text-[15px]">
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
