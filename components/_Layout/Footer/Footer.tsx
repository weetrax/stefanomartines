import * as React from 'react';
import Container from '../Container';
import PropTypes from 'prop-types';
import { faGithub, faGitlab, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


type FooterProps = {
  //
};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-dark-600 backdrop-filter backdrop-blur bg-opacity-70">
      <Container>
        <ul className="py-12 text-center flex flex-col gap-2">
          <li>
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <span className="font-bold text-primary-500">Stefano Martines </span> - {" "}
              <span className='text-sm'>
                Développé avec ❤️ sous NextJS
                <svg viewBox="0 0 128 128" width="15" fill="#0070f3" data-name="next" height="15" style={{ display: "inline", margin: "0px 4px 4px 4px" }}>
                  <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"></path>
                </svg>
                {`& Tailwind CSS`}

                <svg viewBox="0 0 128 128" width="15" data-name="tailwind" height="15" style={{ display: "inline", margin: "0px 4px 4px 4px" }}>
                  <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38b2ac"></path>
                </svg>
              </span>

            </p>
          </li>
          <li className='flex gap-4 justify-center'>
            <a href="https://gitlab.com/weetrax" rel="noreferrer" target="_blank" className="hover:text-primary-500 transition-colors duration-200 ease-in-out">
              <FontAwesomeIcon icon={faGitlab} className="w-4 h-4"></FontAwesomeIcon>
            </a>
            <a href="https://github.com/weetrax" rel="noreferrer" target="_blank" className="hover:text-primary-500 transition-colors duration-200 ease-in-out">
              <FontAwesomeIcon icon={faGithub} className="w-4 h-4"></FontAwesomeIcon>
            </a>
            <a href="https://www.linkedin.com/in/stefano-martines-2484a7123/" rel="noreferrer" target="_blank" className="hover:text-primary-500 transition-colors duration-200 ease-in-out">
              <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4"></FontAwesomeIcon>
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  //
};

export default Footer;