import React from 'react';

const SplitSection = ({ id, primarySlot, secondarySlot, reverseOrder }) => (
  <section id={id} className="my-16">
    <div className="md:container md:mx-auto md:px-16 items-center flex flex-col lg:flex-row">
      <div className={`lg:w-1/2 ${reverseOrder && 'md:pl-16'}`}>{primarySlot}</div>
      <div
        className={`mt-10 lg:mt-0 w-full lg:w-1/2 ${reverseOrder && `order-last lg:order-first`}`}
      >
        {secondarySlot}
      </div>
    </div>
  </section>
);

export default SplitSection;
