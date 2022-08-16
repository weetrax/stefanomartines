import * as React from "react";
import PropTypes from "prop-types";

type ProjectAbsMedicalProps = {
  //
};

const ProjectAbsMedical: React.FC<ProjectAbsMedicalProps> = () => {
  return <>
    <div className="py-10 my-10">
      <h1 className="hero-title mb-5 md:mb-20">
        🩺 <span className="text-gradient">AbsMedical</span>
      </h1>
      <div className="text-gray-300 grid grid-cols-2 gap-3">
        <div className="col-span-2 md:col-span-1">
          <span className="block font-bold italic text-gray-300 text-xs">
            Projet universitaire
          </span>
          <p>Application bureau.<br /><br />
            <a href="https://github.com/weetrax/AbsMedicalWPF/" target="_blank" rel="noopener noreferrer" className="text-primary">AbsMedical</a> est une application bureau à destination des médecins et établissements scolaire
            permettant de justifier numériquement les absences {`d'un`} étudiant à travers une carte numérique avec puce RFID pour {`l'authentification`} de celui-ci.<br /><br />
            Planification des tâches, prototypage des IHM,
            maquettage, modélisation des schémas de
            données, développement des interfaces, génération de PDF et envoi {`d'email`}.<br /><br />
          </p>
          <div className="flex items-center gap-3">
            <img src="https://avatars.githubusercontent.com/u/17111928?v=4" className="rounded-full h-12 w-12"></img>
            <div className="inline-block text-sm">
              <span> En collaboration avec </span><span className="text-primary-500">Adrien Magnin</span>
            </div>
          </div>
          <p className="mt-3 mb-2 border-b border-primary-500">
            Technologies {`&`} Frameworks
          </p>
          <div className="text-sm italic lowercase">
            <div>C#, .NET, WPF, WCF, MahApps.Metro, git, github, trello</div>
            <div className="mt-2">2017</div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-1">
              <img src="assets/img/projects/absmedical.png" alt="Image projet 1" style={{ height: "200px" }} className="bg-dark rounded-2xl object-cover h-full w-full"></img>
            </div>
            <div className="col-span-1">
              <img src="assets/img/projects/absmedical-home2.png" alt="Image projet 2" style={{ height: "200px" }} className="bg-dark rounded-2xl object-cover h-full w-full"></img>
            </div>
            <div className="col-span-2">
              <img src="assets/img/projects/absmedical-home.png" alt="Image projet 3" style={{ height: "200px" }} className="bg-dark rounded-2xl object-cover h-full w-full"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
};

ProjectAbsMedical.propTypes = {
  //
};

export default ProjectAbsMedical;
