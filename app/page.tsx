import type { Metadata } from 'next';
import React from 'react';

import ResearchProfile from '@/components/Research/Profile';

import PageWrapper from './components/PageWrapper';

export const metadata: Metadata = {
  description:
    'Haowei Chen is a Ph.D. student in Computer Science at UT Austin working in distributed systems.',
};

export default function HomePage() {
  return (
    <PageWrapper>
      <article className="post" id="index">
        <header>
          <div className="title">
            <p
              className="home-intro"
              style={{ textTransform: 'none', fontWeight: 'bold' }}
            >
              Hi! I am a third-year Ph.D. student in Computer Science at UT
              Austin, fortunately advised by Professor{' '}
              <a
                href="https://www.cs.utexas.edu/~witchel/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Emmett Witchel
              </a>
              . I also work closely with{' '}
              <a
                href="https://yuhanliu11.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yuhan Liu
              </a>
              . My research interests broadly lie in LLM serving systems,
              including inference scheduling and KV cache management, and
              low-latency fault-tolerant distributed systems.
            </p>
            <p
              className="home-intro"
              style={{ textTransform: 'none', fontWeight: 'bold' }}
            >
              I received my M.S. in Computer Science from Zhejiang University in
              2024, where I was advised by Professor{' '}
              <a
                href="https://person.zju.edu.cn/en/shuiguang"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shuiguang Deng
              </a>
              .
            </p>
          </div>
        </header>

        <ResearchProfile />
      </article>
    </PageWrapper>
  );
}
