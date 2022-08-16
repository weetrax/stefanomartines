import * as React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faFilm, faFlask, faMicrochip, faPlane, faRunning, } from "@fortawesome/free-solid-svg-icons";


type InterestProps = {
  //
};

const interests = [
  {
    name: "Nouvelles technologies",
    icon: faMicrochip,
  }, {
    name: "Voyages",
    icon: faPlane,
  }, {
    name: "Science",
    icon: faFlask,
  }, {
    name: "Sport",
    icon: faRunning,
  },
  {
    name: "Finance",
    icon: faChartLine,
  },
  {
    name: "Netflix",
    icon: faFilm,
  }
]

const Interest: React.FC<InterestProps> = () => {
  return <>
    <div className="py-10 my-10">
      <h1 className="hero-title mb-5 md:mb-20">
        🎯 <span className="text-gradient">Centres {`d’intérêt`}</span>
      </h1>
      <div className="grid grid-cols-6 gap-4 text-gray-200">
        {
          interests.map((interest, index) => {
            return <>
              <div className="col-span-2 lg:col-span-1 text-center p-4 rounded-2xl text-2xl border hover:-translate-y-2 border-primary-500 transition-all duration-200 ease-in-out hover:shadow-[0_0_70px_-30px] hover:shadow-primary-500">
                <span className="block text-xs mb-2">{interest.name}</span>
                <div className="flex justify-center">
                  <FontAwesomeIcon className="text-white w-8 h-8" icon={interest.icon} />
                </div>
              </div>
            </>
          })
        }
      </div>
    </div>
  </>;
};

Interest.propTypes = {
  //
};

export default Interest;
