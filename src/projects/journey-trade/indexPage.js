import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useContext } from 'react';
import toast, { Toaster, useToaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { MdContentCopy } from 'react-icons/md';
import Button from '../../components/Button';
import CustomerCard from '../../components/CustomerCard';
import LabelText from '../../components/LabelText';
import SplitSection from '../../components/SplitSection';
import { MyContext } from '../../context';
import customerData from '../../data/customer-data';
import SvgCharts from '../../svg/SvgCharts';

const useProjectAssets = () => {
  const data = useStaticQuery(
    graphql`
      query JTProjectAssets {
        allFile(filter: { sourceInstanceName: { eq: "assets" } }) {
          nodes {
            name
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    `
  );
  return data.allFile.nodes;
};

const SplitSectionJourney = ({ id, title, description, reverse = false, img }) => (
  <SplitSection
    id={id}
    primarySlot={
      <div className="lg:pr-32 xl:pr-48">
        <h3 className="text-3xl font-semibold leading-tight text-primary">{title}</h3>
        <p className="mt-8 text-xl font-light leading-relaxed">{description}</p>
      </div>
    }
    secondarySlot={img}
    reverseOrder={reverse}
  />
);

const IndexPage = () => {
  const {
    project: { pages },
  } = useContext(MyContext);
  const { t } = useTranslation();
  const assets = useProjectAssets();
  const hero = getImage(assets.find((asset) => asset.name === 'hero'));
  const placeholder = getImage(assets.find((asset) => asset.name === 'placeholder'));
  const email = 'email@email.com';
  const phone = '+421905999999';
  return (
    <div>
      <div>
        <Toaster />
      </div>
      <section className="">
        <GatsbyImage image={hero} alt="TODO META" objectFit="cover" className="md:h-128 h-64" />
      </section>
      <SplitSectionJourney
        id={pages[0]}
        title={t(`sections.${pages[0]}.title`)}
        description={t(`sections.${pages[0]}.description`)}
        img={
          <GatsbyImage
            image={placeholder}
            alt="TODO META"
            objectFit="cover"
            className="sm:h-128 h-64"
          />
        }
      />
      <SplitSectionJourney
        id={pages[1]}
        title={t(`sections.${pages[1]}.title`)}
        description={t(`sections.${pages[1]}.description`)}
        img={
          <GatsbyImage
            image={placeholder}
            alt="TODO META"
            objectFit="cover"
            className="sm:h-128 h-64"
          />
        }
        reverse
      />
      <SplitSectionJourney
        id={pages[2]}
        title={t(`sections.${pages[2]}.title`)}
        description={t(`sections.${pages[2]}.description`)}
        img={
          <GatsbyImage
            image={placeholder}
            alt="TODO META"
            objectFit="cover"
            className="sm:h-128 h-64"
          />
        }
      />
      {/* <section id="testimonials" className="py-20 lg:py-40">
        <div className="container mx-auto">
          <LabelText className="mb-8 text-gray-600 text-center">
            What customers are saying
          </LabelText>
          <div className="flex flex-col md:flex-row md:-mx-3">
            {customerData.map((customer) => (
              <div key={customer.customerName} className="flex-1 px-3">
                <CustomerCard customer={customer} />
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section
        className="container mx-auto my-16 sm:py-24 py-12 bg-gray-200 rounded-lg text-center"
        id={pages[3]}
      >
        <h3 className="text-5xl font-semibold">{t(`sections.${pages[3]}.title`)}</h3>
        <p className="mt-8 text-xl font-light mb-4">{t(`sections.${pages[3]}.description`)}</p>
        <div className="flex justify-around items-center sm:flex-row flex-col">
          <div className="flex text-primary text-xl sm:mb-0 mb-3 items-center">
            <a href={`mailto:${email}`} className="mr-2" title="TODO META">
              {email}
            </a>
            <MdContentCopy
              className="hover:cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(email);
                toast(t(`sections.${pages[3]}.copy.email`), {
                  position: 'bottom-right',
                });
              }}
            />
          </div>
          <div className="flex text-primary text-xl sm:mb-0 mb-3 items-center">
            <a href={`tel:${phone}`} className="mr-2" title="TODO META">
              {phone}
            </a>
            <MdContentCopy
              className="hover:cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(phone);
                toast(t(`sections.${pages[3]}.copy.phone`), {
                  position: 'bottom-right',
                });
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
