import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => {
  const { languages, originalPath } = useI18next();
  console.log(languages)
  return (
    <header className="sticky top-0 bg-white shadow">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <div className="flex items-center text-2xl">
          <div className="w-12 mr-3">
            <Link to="/">
              <LogoIcon />
            </Link>
          </div>
        </div>
        <div className="flex mt-4 sm:mt-0">
          <AnchorLink className="px-4" href="#features">
            Features
          </AnchorLink>
          <AnchorLink className="px-4" href="#services">
            Services
          </AnchorLink>
          <AnchorLink className="px-4" href="#stats">
            Stats
          </AnchorLink>
          <AnchorLink className="px-4" href="#testimonials">
            Testimonials
          </AnchorLink>
        </div>
        <div className="hidden md:block">
          <Button className="text-sm">Start Free Trial</Button>
        </div>
        <ul className="languages">
          {languages.map((lng) => (
            <li key={lng}>
              <Link to={originalPath} language={lng}>
                {lng}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
