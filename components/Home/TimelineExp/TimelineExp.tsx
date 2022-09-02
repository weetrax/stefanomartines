import * as React from "react";
import PropTypes from "prop-types";

type TimelineExpProps = {
  //
};

const TimelineExp: React.FC<TimelineExpProps> = () => {
  return <>
    <div className="py-10 my-10">
      <h1 className="hero-title mb-5 md:mb-20">
        💼 <span className="text-gradient">Expériences professionnelles</span>
      </h1>
      <div className="mt-10">
        <div className="flex flex-col md:grid grid-cols-9 mx-auto text-gray-700 dark:text-gray-200">
          <div className="flex flex-row-reverse md:contents">
            <div className="col-start-1 col-end-5 p-4 rounded-2xl my-4 ml-auto w-full border border-primary-500 transition-all duration-200 ease-in-out hover:shadow-[0_0_70px_-30px] hover:shadow-primary-500">
              <h3 className="font-semibold text-lg text-black dark:text-gray-100">Développeur Full Stack React {`&`} NodeJS (Projet personnel)</h3>
              <small className="block">Depuis Nov 2020, <a rel="noreferrer" className="text-primary-500" target="_blank" href="https://tripsti.herokuapp.com/">tripsti</a>, Cannes - France</small>
              <p className="leading-tight text-justify mt-2">
                <ul className="list-disc list-inside">
                  <li>
                    Développement et gestion du site from scratch avec utilisation de la bibliothèque React.js pour le côté Front-end et Node.js {`&`} Express.js pour le Back-end et serveur.
                  </li>
                  <li>
                    Conception du backoffice et de la base de données sous MongoDB.
                  </li>
                  <li>
                    Gestion de {`l’Authentification `}via Passport.js {`&`} JsonWebToken.
                  </li>
                  <li>
                    Création {`d'un`} chat en temps réel en utilisant Socket.io.
                  </li>
                  <li>
                    Gestion du code source via GitLab.
                  </li>
                </ul>
              </p>
              <small className="block mt-3 italic">
                javascript, react.js, html, css, node.js, express, mongodb, passport.js, socket.io, tailwind.css, jwt, git
              </small>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gradient-i pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gradient-i shadow"></div>
            </div>
          </div>
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gradient pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gradient shadow"></div>
            </div>
            <div className="col-start-6 col-end-10 p-4 rounded-2xl my-4 mr-auto w-full border border-primary-500 transition-all duration-200 ease-in-out hover:shadow-[0_0_70px_-30px] hover:shadow-primary-500">
              <h3 className="font-semibold text-lg text-black dark:text-gray-100">Développeur web FullStack C# .NET</h3>
              <small className="block">Sep 2016 - Nov 2020, <a rel="noreferrer" className="text-primary-500" target="_blank" href="https://www.bnetwork.com/">bnetwork</a>, Cannes - France</small>
              <p className="leading-tight text-justify mt-2">
                <ul className="list-disc list-inside">
                  <li>
                    Lead Developer sur la refonte de projets web existants.
                  </li>
                  <li>
                    Proposition et développement de nouvelles solutions pour les besoins de {`l’entreprise`}.
                  </li>
                  <li>
                    Construction d’API SOAP.
                  </li>
                  <li>
                    Manipulation d’APIs tel que SignRequest pour les signatures électronique ou bien GoogleMap pour les cartes et Navitia.io pour les routes.
                  </li>
                  <li>
                    Gestion du responsive design sur différents sites.
                  </li>
                  <li>
                    Mise en production.
                  </li>
                  <li>
                    Correction de bugs {`&`} codereview.
                  </li>
                  <li>
                    Participation aux réunions avec les clients.
                  </li>
                  <li>
                    Support client.
                  </li>
                </ul>
              </p>
              <small className="block mt-3 italic">
                c#, html, css, javascript, jquery, sql server, webforms, wcf, bootstrap, entity framework
              </small>
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <div className="col-start-1 col-end-5 p-4 rounded-2xl my-4 ml-auto w-full border border-primary-500 transition-all duration-200 ease-in-out hover:shadow-[0_0_70px_-30px] hover:shadow-primary-500">
              <h3 className="font-semibold text-lg text-black dark:text-gray-100">Développeur web FullStack C# .NET (Stage)</h3>
              <small className="block">Jan 2016 - Mars 2016, <a rel="noreferrer" className="text-primary-500" target="_blank" href="https://locallbiz.com/">Locallbiz</a>, Cannes, France</small>
              <p className="leading-tight text-justify mt-2">
                Option Solutions Logicielles et Applications Métiers
              </p>
              <p className="leading-tight text-justify mt-2">
                <ul className="list-disc list-inside">
                  <li>
                    Création {`d'une`} plateforme de partage de frais en ASP.NET WebForms (en collaboration avec un autre stagiaire)
                  </li>
                  <li>
                    Conception de la base de données sous MySQL
                  </li>
                  <li>
                    Développement des différentes couches (front {`&`} back)
                  </li>
                  <li>
                    Ecriture de classes pour la manipulation {`d'APIs`} (FlightStats, QPX Express)
                  </li>
                </ul>
              </p>
              <small className="block mt-3 italic">
                c#, html, css, javascript, jquery, mysql, webforms, bootstrap, entity framework
              </small>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gradient-i pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gradient-i shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
};

TimelineExp.propTypes = {
  //
};

export default TimelineExp;
