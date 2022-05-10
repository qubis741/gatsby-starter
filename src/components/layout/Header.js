import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import React, { useContext, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useTranslation } from 'react-i18next';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { MyContext } from '../../context';
import LogoIcon from '../../svg/LogoIcon';

const Header = () => {
  const { languages, originalPath, language } = useI18next();
  const { t } = useTranslation();
  const { project } = useContext(MyContext);
  const [showLangs, setShowLangs] = useState(false);
  return (
    <header className="sticky top-0 bg-white shadow">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <div className="flex items-center text-2xl">
          <div className="w-12 mr-3">
            <AnchorLink href="#home">
              <LogoIcon />
            </AnchorLink>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center py-4 px-8">
          <div className="flex mt-4 sm:mt-0">
            {project.pages.map((page) => (
              <AnchorLink className="px-4" href={`#${page}`} key={page}>
                {t(`pages.${page}`)}
              </AnchorLink>
            ))}
          </div>
          <div className="relative">
            <a
              className="cursor-pointer flex flex-row items-center"
              onClick={() => setShowLangs((prev) => !prev)}
              onKeyDown={() => setShowLangs((prev) => !prev)}
              role="button"
              tabIndex={0}
            >
              {language.toUpperCase()}{' '}
              <div className="">{showLangs ? <MdArrowDropUp /> : <MdArrowDropDown />}</div>
            </a>
            {showLangs && (
              <ul className="languages absolute bg-white w-full flex flex-col shadow">
                {languages.map((lng) => (
                  <li key={lng} className="flex">
                    <Link
                      to={originalPath}
                      language={lng}
                      className="py-2 w-full"
                      onClick={() => setShowLangs((prev) => !prev)}
                      onKeyDown={() => setShowLangs((prev) => !prev)}
                    >
                      {lng.toUpperCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
