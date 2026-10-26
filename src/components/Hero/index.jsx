import Button from "../Button";

const Hero = () => {
  return (
    <section>
      <div>
        <p>Développeur Web</p>
        <h1>
          Des interfaces pensées avec <span>soin</span>.
        </h1>
        <p>
          Développeur specialisé au front-end, je conçois des sites clairs,
          accessibles et agréables à utiliser.
        </p>
        <div>
          <Button
            variant="primary"
            content="Découvrir mes projets"
            link="#projects"
          />
          <Button
            variant="secondary"
            content="Me contacter"
            link="#contact"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
