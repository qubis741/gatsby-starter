import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import React, { useContext, useEffect, useRef, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useTranslation } from 'react-i18next';
import { MdArrowDropDown, MdArrowDropUp, MdClose, MdMenu } from 'react-icons/md';
import { MyContext } from '../../context';
import LogoIcon from '../../svg/LogoIcon';

const Header = () => {
  const { languages, originalPath, language } = useI18next();
  const { t } = useTranslation();
  const { project } = useContext(MyContext);
  const [showLangs, setShowLangs] = useState(false);
  const [showRespoMenu, setShowRespoMenu] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    const handleClickOutsideLang = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setShowLangs(false);
      }
    };
    document.addEventListener('click', handleClickOutsideLang, true);
    return () => {
      document.removeEventListener('click', handleClickOutsideLang, true);
    };
  }, []);
  return (
    <header className="sticky top-0 bg-background shadow h-20">
      <div className="md:container flex justify-between items-stretch md:mx-auto md:mx-0 px-5 h-full">
        <div className="flex items-stretch text-2xl">
          <AnchorLink href="#home" className="w-12 mr-3 flex items-center">
            <LogoIcon />
          </AnchorLink>
        </div>
        <div
          className="flex items-stretch md:px-8 px-6 md:py-0 py-4 md:static absolute md:flex-row flex-col md:bg-transparent bg-white md:shadow-none shadow right-0"
          style={{ top: showRespoMenu ? '100%' : '-1000%' }}
        >
          <div className="flex items-stretch md:flex-row flex-col md:space-y-0 space-y-3 ">
            {project.pages.map((page) => (
              <AnchorLink
                className="md:px-3 flex items-center md:justify-center justify-end "
                href={`#${page}`}
                key={page}
              >
                <span>{t(`sections.${page}.menuTitle`)}</span>
              </AnchorLink>
            ))}
            <div
              className="relative flex items-stretch md:justify-stretch justify-end"
              ref={langRef}
            >
              <a
                className="cursor-pointer flex-row items-center px-3 md:justify-center justify-end md:flex hidden"
                onClick={() => setShowLangs((prev) => !prev)}
                onKeyDown={() => setShowLangs((prev) => !prev)}
                role="button"
                tabIndex={0}
              >
                {language.toUpperCase()}{' '}
                <div className="">{showLangs ? <MdArrowDropUp /> : <MdArrowDropDown />}</div>
              </a>
              {(showLangs || showRespoMenu) && (
                <ul
                  className="languages md:absolute static md:bg-white bg-transparent w-full flex flex-col md:shadow shadow-none md:space-y-0 space-y-3"
                  style={{ top: '100%' }}
                >
                  {languages.map((lng) => (
                    <li key={lng} className="flex md:text-center text-right">
                      <Link
                        to={originalPath}
                        language={lng}
                        className="md:py-2 w-full"
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
        <a
          className="cursor-pointer flex-row items-center md:hidden flex text-3xl"
          onClick={() => setShowRespoMenu((prev) => !prev)}
          onKeyDown={() => setShowRespoMenu((prev) => !prev)}
          role="button"
          tabIndex={0}
        >
          {!showRespoMenu ? <MdMenu /> : <MdClose />}
        </a>
      </div>
    </header>
  );
};

export default Header;
