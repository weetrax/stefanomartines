import * as React from "react";
import PropTypes from "prop-types";

type ProjectTripstiProps = {
  //
};

const ProjectTripsti: React.FC<ProjectTripstiProps> = () => {
  return <>
    <div className="py-10 my-10">
      <h1 className="hero-title mb-5 md:mb-20">
        🏕 <span className="text-gradient">Tripsti</span>
      </h1>
      <div className="text-gray-700 dark:text-gray-300 grid grid-cols-2 gap-3">
        <div className="col-span-2 md:col-span-1 order-1 md:order-2">
          <span className="block font-bold italic text-black dark:text-gray-300 text-xs">
            Projet personnel
          </span>
          <p>Plateforme web de mise en relation entre voyageur.<br /><br />
            <a href="https://tripsti.com/" target="_blank" rel="noopener noreferrer" className="text-primary-500">Tripsti</a> est LA platforme de mise en relation entre les voyageurs du monde entier, permettant de rencontrer des covoyageurs
            qui font le même trajet, ou qui veulent partir ensemble aux mêmes endroits.<br />

            Grâce aux différentes discussions créés par les utilisateurs,
            il est possible d’organiser des activités ensemble ou tout simplement de faire connaissance.<br /><br />
            Étude et rédaction des spécifications, planification des tâches, prototypage,
            maquettage, définition de {`l'architecture`}, modélisation des schémas de
            données, développement du back-end et front-end.<br /><br />
          </p>
          <p className="mb-2 border-b border-primary-500">
            Technologies {`&`} Frameworks
          </p>
          <div className="text-sm italic lowercase">
            <div>
              JavaScript, React.JS, Next.js, NoSQL, JSON, HTML/CSS, Tailwind.css, MongoDB, Socket.io, passport.js, nodemailer, git, gitlab, trello
            </div>
            <div className="mt-2">2020 - 2021</div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 order-2 md:order-1">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-1">
              <img src="assets/img/projects/tripsti-search.png" alt="Image projet 1" style={{ height: "200px" }} className="bg-dark rounded-2xl object-cover h-full w-full"></img>
            </div>
            <div className="col-span-1">
              <img src="assets/img/projects/tripsti-card.png" alt="Image projet 1" style={{ height: "200px" }} className="bg-dark rounded-2xl object-cover h-full w-full"></img>
            </div>
            <div className="col-span-2">
              <img src="assets/img/projects/tripsti.png" alt="Image projet 1" style={{ height: "200px" }} className="bg-dark rounded-2xl object-cover h-full w-full"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
};

ProjectTripsti.propTypes = {
  //
};

export default ProjectTripsti;
