import Button from "../Button";
import ProfileDetail from "../profileDetails";

const Hero = () => {
  return (
    <section className="flex flex-col text-center gap-16 px-18 py-9.5">
      <div className="flex flex-col items-center gap-8">
        <p className="text-[14px] font-semibold text-highlight">DÉVELOPPEUR WEB</p>
        <h1 className="text-main-title font-light text-[108px] leading-[0.98] font-fraunces w-7/10">
          Des interfaces pensées avec <span className="italic">soin</span>.
        </h1>
        <p className="text-secondary-text text-[20px] w-34/100">
          Développeur specialisé au front-end, je conçois des sites clairs,
          accessibles et agréables à utiliser.
        </p>
        <div className="flex gap-12">
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
