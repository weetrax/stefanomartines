import * as React from "react";
import PropTypes from "prop-types";

type ProjectSnearkArtsMarketplaceProps = {
  //
};

const ProjectSnearkArtsMarketplace: React.FC<ProjectSnearkArtsMarketplaceProps> = () => {
  return <>
    <div className="py-10 my-10">
      <h1 className="hero-title mb-5 md:mb-20">
        👟 <span className="text-gradient">Marketplace SneakArts</span>
      </h1>
      <div className="text-gray-700 dark:text-gray-300 grid grid-cols-2 gap-3">
        <div className="col-span-2 md:col-span-1 order-1 md:order-2">
          <span className="block font-bold italic text-black dark:text-gray-300 text-xs">
            Freelance
          </span>
          <p>Marketplace pour le site SnearkArts.<br /><br />
            La <a href="https://custom.sneakarts.com/" target="_blank" rel="noopener noreferrer" className="text-primary-500">Marketplace</a> de SneakArts regroupe tout les artistes et leurs produits présent sur le site  <a href="https://sneakarts.com/" target="_blank" rel="noopener noreferrer" className="text-primary-500">Sneakarts</a>.
            <br /><br />
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
              <img src="assets/img/projects/sa-home.png" alt="Badgetor badge" style={{ height: "200px" }} className="bg-dark rounded-2xl object-cover h-full w-full"></img>
            </div>
            <div className="col-span-1">
              <img src="assets/img/projects/sa-1.png" alt="Badgetor editor" style={{ height: "200px" }} className="bg-dark rounded-2xl object-cover h-full w-full"></img>
            </div>
            <div className="col-span-1">
              <img src="assets/img/projects/sa-2.png" alt="Badgetor site" style={{ height: "200px" }} className="bg-dark rounded-2xl object-cover h-full w-full"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
};

ProjectSnearkArtsMarketplace.propTypes = {
  //
};

export default ProjectSnearkArtsMarketplace;
