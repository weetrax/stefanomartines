import * as React from "react";
import PropTypes from "prop-types";

type ProjectSeekgamersProps = {
  //
};

const ProjectSeekgamers: React.FC<ProjectSeekgamersProps> = () => {
  return <>
    <div className="py-10 my-10">
      <h1 className="hero-title mb-5 md:mb-20">
        🎮 <span className="text-gradient">SeekGamers</span>
      </h1>
      <div className="text-gray-300 grid grid-cols-2 gap-3">
        <div className="col-span-2 md:col-span-1">
          <span className="block font-bold italic text-gray-300 text-xs">
            Projet personnel
          </span>
          <p>Plateforme web de mise en relation entre joueurs de jeux vidéo.<br /><br />
            <a href="https://seekgamers.fr/" target="_blank" rel="noopener noreferrer" className="text-primary-500">SeekGamers</a> est LE réseau social POUR joueurs compétitifs, leur permettant de libérer
            leur skill, en formant des lobbies pour leurs modes de jeux multijoueurs préférés.<br />
            Dôté de SeekEngine : le moteur de recherche avancé et personnalisable développé
            sur-mesure au service des gamers exigeants.<br /><br />
            Planification des tâches, prototypage,
            maquettage, modélisation des schémas de
            données, développement du back-end (30%) et front-end (70%).<br /><br />
          </p>
          <div className="flex items-center gap-3">
            <img src="assets/img/anthony-gomez.png" className="rounded-full h-12 w-12"></img>
            <div className="inline-block text-sm">
              <span> En collaboration avec </span><a href="https://anthonygomez.fr/" rel="noopener noreferrer" className="text-primary-500">Anthony Gomez</a><span>, développeur back-end.</span>
            </div>
          </div>
          <p className="mt-3 mb-2 border-b border-primary-500">
            Technologies {`&`} Frameworks
          </p>
          <div className="text-sm italic lowercase">
            <div>JavaScript, NoSQL, JSON, HTML/CSS, Node.js, MongoDB, Socket.io, jQuery, EJS, passport.js, multer, nodemailer, git, gitlab, trello</div>
            <div className="mt-2">2019 - 2020</div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <img src="assets/img/projects/seekgamers.png" alt="Image projet 1" style={{ height: "200px" }} className="bg-dark rounded-2xl object-cover h-full w-full"></img>
            </div>
            <div className="col-span-1">
              <img src="assets/img/projects/seekgamers-home.png" alt="Image projet 1" style={{ height: "200px" }} className="bg-dark rounded-2xl object-cover h-full w-full"></img>
            </div>
            <div className="col-span-1">
              <img src="assets/img/projects/seekgamers-create-lobby.png" alt="Image projet 1" style={{ height: "200px" }} className="bg-dark rounded-2xl object-cover h-full w-full"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
};

ProjectSeekgamers.propTypes = {
  //
};

export default ProjectSeekgamers;
