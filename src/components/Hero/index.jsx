import Button from "../Button";
import ProfileDetail from "../profileDetails";

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
      <ul className="flex justify-between items-center gap-6">
        <ProfileDetail title="LOCALISATION" text="Royan, France" />
        <ProfileDetail title="FORMATION" text="Intégrateur Web" />
        <ProfileDetail title="DISPONIBILITÉ" text="Immédiate" />
      </ul>
    </section>
  );
};

export default Hero;
