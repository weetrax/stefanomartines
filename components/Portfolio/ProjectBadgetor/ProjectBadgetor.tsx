import * as React from "react";
import PropTypes from "prop-types";

type ProjectBadgetorProps = {
  //
};

const ProjectBadgetor: React.FC<ProjectBadgetorProps> = () => {
  return <>
    <div className="py-10 my-10">
      <h1 className="hero-title mb-5 md:mb-20">
        🖼 <span className="text-gradient">Badgetor</span>
      </h1>
      <div className="text-gray-300 grid grid-cols-2 gap-3">
        <div className="col-span-2 md:col-span-1 order-1 md:order-2">
          <span className="block font-bold italic text-gray-300 text-xs">
            Projet personnel
          </span>
          <p>Plateforme web de génération de badge.<br /><br />
            <a href="https://badgetor.com/" target="_blank" rel="noopener noreferrer" className="text-primary-500">Badgetor</a> est une application web permettant de générer des badges téléchargeable 100% personnalisables pour vos NFT avec intégration de QR Code.<br />
            Seule la blockchain Elrond et quelques collections sont supportées pour le moment.<br /><br />
            Développement des différentes pages, interfaçage avec l'API Elrond pour les requêtes.<br /><br />
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
            <div className="col-span-2">
              <img src="assets/img/projects/badgetor.gif" alt="Badgetor badge" style={{ height: "200px" }} className="bg-dark rounded-2xl object-cover h-full w-full"></img>
            </div>
            <div className="col-span-1">
              <img src="assets/img/projects/badgetor-collections.png" alt="Badgetor site" style={{ height: "200px" }} className="bg-dark rounded-2xl object-cover h-full w-full"></img>
            </div>
            <div className="col-span-1">
              <img src="assets/img/projects/badgetor-editor.png" alt="Badgetor editor" style={{ height: "200px" }} className="bg-dark rounded-2xl object-cover h-full w-full"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
};

ProjectBadgetor.propTypes = {
  //
};

export default ProjectBadgetor;
