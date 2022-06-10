import React from 'react';
import { FaEnvelope, FaGithub, FaTelegram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="footer-left">
          <p>&copy; 2022</p>
        </div>
        <div className="footer-right">
          <a href="https://www.t.me/anvarjke">
            <FaTelegram size="2em" />
          </a>
          <a href="mailto: anvar.nurullin@yandex.ru">
            {/* <FontAwesomeIcon icon="fa-solid fa-envelope" size="2x" /> */}
            <FaEnvelope size="2em" />
          </a>
          <a href="https://www.github.com/anvarnurullin">
            <FaGithub size="2em" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
