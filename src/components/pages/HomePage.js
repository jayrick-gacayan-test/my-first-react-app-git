import React from 'react';
import { ContentSection } from '../parts/ContentSection';
import { HeaderTitle } from '../parts/HeaderTitle';

export default function HomePage(){
  return (
    <div className="container-fluid margin-big-top">
      <HeaderTitle title="Home" />

      <ContentSection />
      <ContentSection />
      <ContentSection />

    </div>
  );
}