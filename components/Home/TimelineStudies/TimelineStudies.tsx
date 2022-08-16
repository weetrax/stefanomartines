import * as React from "react";
import PropTypes from "prop-types";

type TimelineStudiesProps = {
  //
};

const TimelineStudies: React.FC<TimelineStudiesProps> = () => {
  return <>
    <div className="py-10 my-10">
      <h1 className="hero-title mb-5 md:mb-20">
        👨🏻‍🎓 <span className="text-gradient">Étude {`&`} formations</span>
      </h1>
      <div className="mt-10">
        <div className="flex flex-col md:grid grid-cols-9 mx-auto text-gray-200">
          <div className="flex flex-row-reverse md:contents">
            <div className="col-start-1 col-end-5 p-4 rounded-2xl my-4 ml-auto w-full border border-primary-500 transition-all duration-200 ease-in-out hover:shadow-[0_0_70px_-30px] hover:shadow-primary-500">
              <h3 className="font-semibold text-lg text-gray-100">Formation + Certification React JS</h3>
              <small className="block">Fév 2020, <a rel="noreferrer" className="text-primary-500" target="_blank" href="https://www.m2iformation.fr/">M2i Formation</a>, Sophia Antipolis - France</small>
              <p className="leading-tight text-justify mt-2">
                Score de 70/100, correspondant au niveau Confirmé
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gradient pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gradient shadow"></div>
            </div>
          </div>
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gradient-i pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gradient-i shadow"></div>
            </div>
            <div className="col-start-6 col-end-10 p-4 rounded-2xl my-4 mr-auto w-full border border-primary-500 transition-all duration-200 ease-in-out hover:shadow-[0_0_70px_-30px] hover:shadow-primary-500">
              <h3 className="font-semibold text-lg text-gray-100">Licence Professionnelle Systèmes Informatiques et Logiciels</h3>
              <small className="block">Sep 2016 - Juin 2017, <a rel="noreferrer" className="text-primary-500" target="_blank" href="https://univ-cotedazur.fr/">Université Nice Sophia Antipolis</a>, France</small>
              <p className="leading-tight text-justify mt-2">
                Option Informatique Distribuée et Systèmes d{`'`}information d{`'`}Entreprise
                {`d'information d'Entreprise`}
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <div className="col-start-1 col-end-5 p-4 rounded-2xl my-4 ml-auto w-full border border-primary-500 transition-all duration-200 ease-in-out hover:shadow-[0_0_70px_-30px] hover:shadow-primary-500">
              <h3 className="font-semibold text-lg text-gray-100">BTS Service Informatique aux Organisations</h3>
              <small className="block">Sep 2014 - Juin 2016, <a rel="noreferrer" className="text-primary-500" target="_blank" href="https://www.onisep.fr/Ressources/Univers-Formation/Formations/Post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers">{`Lycée d'Estienne d'Orves`}</a>, Nice - France</small>
              <p className="leading-tight text-justify mt-2">
                Option Solutions Logicielles et Applications Métiers
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gradient pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gradient shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
};

TimelineStudies.propTypes = {
  //
};

export default TimelineStudies;
