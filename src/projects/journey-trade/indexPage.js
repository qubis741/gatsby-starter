import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
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
        file(name: { eq: "hero" }, sourceInstanceName: { eq: "assets" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    `
  );
  return data;
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
  const data = useProjectAssets();
  const hero = getImage(data.file);
  return (
    <div>
      <section className="">
        <GatsbyImage image={hero} alt="TODO META" objectFit="cover" className="md:h-128 h-64" />
      </section>
      <SplitSectionJourney
        id={pages[0]}
        title={t(`sections.${pages[0]}.title`)}
        description={t(`sections.${pages[0]}.description`)}
        img={<SvgCharts />}
      />
      <SplitSectionJourney
        id={pages[1]}
        title={t(`sections.${pages[1]}.title`)}
        description={t(`sections.${pages[1]}.description`)}
        img={<SvgCharts />}
        reverse
      />
      <SplitSectionJourney
        id={pages[2]}
        title={t(`sections.${pages[2]}.title`)}
        description={t(`sections.${pages[2]}.description`)}
        img={<SvgCharts />}
      />
      <section id="testimonials" className="py-20 lg:py-40">
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
      </section>
      <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
        <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
        <p className="mt-8 text-xl font-light">
          Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus
          in.
        </p>
        <p className="mt-8">
          <Button size="xl">Get Started Now</Button>
        </p>
      </section>
    </div>
  );
};

export default IndexPage;
