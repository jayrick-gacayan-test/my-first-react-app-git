import React from 'react';

/* Component parts */
import { ContentSection } from '../parts/ContentSection';
import { HeaderTitle } from '../parts/HeaderTitle';

export default function ContactusPage(){
  return (
    <div className="container-fluid margin-big-top">
      <HeaderTitle title="Contact Us" />     
      <ContentSection />
    </div>
  );
}