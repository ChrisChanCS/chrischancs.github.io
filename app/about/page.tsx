import Link from 'next/link';
import React from 'react';

import ResearchProfile from '@/components/Research/Profile';

import PageWrapper from '../components/PageWrapper';

export default function AboutPage() {
  return (
    <PageWrapper>
      <article className="post" id="about">
        <header>
          <div className="title">
            <h2>
              <Link href="/about">Academic profile</Link>
            </h2>
            <p>Research and publications</p>
          </div>
        </header>
        <ResearchProfile />
      </article>
    </PageWrapper>
  );
}
