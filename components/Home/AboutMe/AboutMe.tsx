import * as React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGitlab, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


type AboutMeProps = {
  //
};

const AboutMe: React.FC<AboutMeProps> = () => {

  const calculateAge = () => {
    let ageDifMs = Date.now() - new Date("06-10-1995").getTime();
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    if (isNaN(age)) {
      return 26
    } else {
      return age
    }
  }

  return <>
    <div className="py-10 my-10">
      <h1 className="hero-title mb-5 md:mb-20">
        👨🏻‍💻 <span className="text-gradient">À propos de moi</span>
      </h1>
      <div className="text-gray-700 dark:text-gray-300 flex flex-wrap">
        <div className="w-full md:w-1/3 pb-5">
          <img alt="Image profil" className="h-36 w-36 mx-auto rounded-full relative" src="assets/img/stefano-martines.jpeg"></img>
          <div className="mt-5 flex flex-col gap-4 items-center text-sm">
            <div>
              <a href="mailto:stefano.martines@hotmail.com" className="italic"><strong>📧 E-mail</strong>: stefano.martines@hotmail.com</a>
            </div>
            <div>
              <span className="italic"><strong>🎂 Age</strong>: {calculateAge()} ans</span>
            </div>
            <div>
              <span className="italic"><strong>🏠 Ville</strong>: Mandelieu</span>
            </div>
            <div>
              <span className="italic"><strong>🚘 Permis B</strong>: ✅</span>
            </div>
            <div>
              <a href="https://github.com/weetrax" rel="noreferrer" target="_blank" className="inline px-2">
                <FontAwesomeIcon icon={faGithub} className="w-6 h-6"></FontAwesomeIcon>
              </a>
              <a href="https://gitlab.com/weetrax" rel="noreferrer" target="_blank" className="inline px-2">
                <FontAwesomeIcon icon={faGitlab} className="w-6 h-6"></FontAwesomeIcon>
              </a>
              <a href="https://www.linkedin.com/in/stefano-martines-2484a7123/" rel="noreferrer" target="_blank" className="inline px-2">
                <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6"></FontAwesomeIcon>
              </a>

            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <span className="block mb-5">
            👨🏻‍💻 Je suis Stefano Martines, développeur âgé de {calculateAge()} ans dans la région de la 🏝️ Côte {`d'Azur`}, en 🇫🇷 France.
          </span>
          <span className="block mb-5">
            👨🏻‍🎓 Diplômé {`d'une`} Licence Professionnelle Systèmes Informatiques à {`l'Université`} Nice Sophia Antipolis.
          </span>
          <span className="block mb-5">
            💼 Je suis actuellement à la recherche {`d'opportunités`} pro dans la région de Cannes / Sophia-Antipolis sur les technos <span className="text-primary-500">ReactJS</span> / <span className="text-primary-500">NextJS</span>
          </span>
          <span className="block mb-5">
            😙 Sur mon temps libre, je développe mes projets personnels ⌨️, fait un peu de trading 📈 et chill sur Netflix 📽.
          </span>
          <span className="block mb-5">
            🧡 Passionné par les nouvelles technologies 📡, la science 🧬, les voyages ✈️ ainsi que le sport 🏋️‍♀️.
          </span>
          <a href="assets/files/CV_Stefano_Martines.pdf" target={"_blank"} className="text-gray-200 bg-primary-500 border-0 py-2 px-6 focus:outline-none hover:bg-primary-600 rounded items-center duration-200">Voir mon CV</a>
        </div>
      </div>
    </div>
  </>;
};

AboutMe.propTypes = {
  //
};

export default AboutMe;
