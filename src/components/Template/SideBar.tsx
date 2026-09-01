import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SideBar: React.FC = () => (
  <section id="sidebar">
    <section id="intro">
      <Link href="/" className="logo" aria-label="Haowei Chen, home">
        <Image
          src="/images/cat-avatar-original.png"
          alt="White cat avatar"
          width={200}
          height={200}
          priority
        />
      </Link>
      <header>
        <h1>Haowei Chen</h1>
        <p className="profile-contact">
          <a href="mailto:hwchen@cs.utexas.edu">
            hwchen[at]cs[dot]utexas[dot]edu
          </a>
          <a
            href="https://scholar.google.com/citations?view_op=list_works&hl=zh-CN&user=UEjR8WoAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar
          </a>
        </p>
      </header>
      <p className="profile-affiliation">
        Department of Computer Science
        <br />
        The University of Texas at Austin
        <br />
        2317 Speedway, Austin, TX
      </p>
    </section>

    <section id="footer">
      <p className="copyright">
        Source code of this website is available{' '}
        <a
          href="https://github.com/mldangelo/personal-site"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
        <br />
        Last updated Sep 2026
      </p>
    </section>
  </section>
);

export default SideBar;
