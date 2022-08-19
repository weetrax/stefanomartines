import * as React from "react";
import PropTypes from "prop-types";

type ProjectJexchangeProps = {
  //
};

const ProjectJexchange: React.FC<ProjectJexchangeProps> = () => {
  return <>
    <div className="py-10 my-10">
      <h1 className="hero-title mb-5 md:mb-20">
        ☄️ <span className="text-gradient">JEXchange</span>
      </h1>
      <div className="text-gray-300 grid grid-cols-2 gap-3">
        <div className="col-span-2 md:col-span-1 order-1 md:order-2">
          <span className="block font-bold italic text-gray-300 text-xs">
            Freelance
          </span>
          <p>Site commercial pour le projet JEXchange.<br /><br />
            <a href="https://jexchange.io/" target="_blank" rel="noopener noreferrer" className="text-primary-500">JEXchange</a> est un échangeur décentralisé permettant aux utilisateurs de s’échanger des tokens de l’éco-système Elrond en toute sécurité.
            Il s’agit ici de proposer une plateforme simple et intuitive ayant pour objectif principal la création d’offres d’échange de tokens, le tout géré par un contrat intelligent (Smart Contract)<br /><br />
            Développement des différentes pages, mise en place de stats via requêtes API Rest, développement d'interfaces {'&'} de composants React.JS pour la partie <a href="https://app.jexchange.io/" target="_blank" rel="noopener noreferrer" className="text-primary-500">app</a>.<br /><br />
          </p>
          <p className="mb-2 border-b border-primary-500">
            Technologies {`&`} Frameworks
          </p>
          <div className="text-sm italic lowercase">
            <div>
              TypeScript, React.JS, Next.js, REST API, JSON, HTML/CSS, Tailwind.css, git, github
            </div>
            <div className="mt-2">2022</div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 order-2 md:order-1">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-1">
              <img src="assets/img/projects/jexchange.png" alt="Badgetor editor" style={{ height: "200px" }} className="bg-dark rounded-2xl object-cover h-full w-full"></img>
            </div>
            <div className="col-span-1">
              <img src="assets/img/projects/jex-offers.png" alt="Badgetor site" style={{ height: "200px" }} className="bg-dark rounded-2xl object-cover h-full w-full"></img>
            </div>
            <div className="col-span-2">
              <img src="assets/img/projects/jex-community.png" alt="Badgetor badge" style={{ height: "200px" }} className="bg-dark rounded-2xl object-cover h-full w-full"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
};

ProjectJexchange.propTypes = {
  //
};

export default ProjectJexchange;
