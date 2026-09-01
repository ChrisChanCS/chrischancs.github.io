import React from 'react';

import { type Publication, publications } from '@/data/research';

const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const getPublicationLine = (publication: Publication) => {
  if (publication.status === 'Preprint') {
    return `arXiv ${publication.year}`;
  }

  if (publication.status === 'Accepted') {
    return `${publication.venue} (accepted) ${publication.year}`;
  }

  if (publication.status === 'To appear') {
    return `${publication.venue} ${publication.year} (to appear)`;
  }

  return `${publication.venue} ${publication.year}`;
};

export default function ResearchProfile() {
  return (
    <section className="simple-research" aria-labelledby="publication-heading">
      <h2 id="publication-heading">Publications</h2>

      <div className="simple-publication-list">
        {publications.map((publication) => {
          const paperUrl =
            publication.status === 'To appear'
              ? undefined
              : (publication.links.find((link) => link.label === 'Journal')
                  ?.url ?? publication.links[0]?.url);

          return (
            <article
              className="simple-publication"
              key={`${publication.title}-${publication.venue ?? publication.status}-${publication.year}`}
            >
              <h3>{publication.title}</h3>
              <p className="simple-publication__authors">
                {publication.authors.map((author, index) => (
                  <React.Fragment key={author.name}>
                    {index > 0 && ', '}
                    {author.isSelf ? (
                      <strong>{author.name}</strong>
                    ) : (
                      author.name
                    )}
                  </React.Fragment>
                ))}
              </p>
              <p className="simple-publication__details">
                <em>{getPublicationLine(publication)}</em>
                {paperUrl && (
                  <span className="simple-publication__paper-link">
                    [<ExternalLink href={paperUrl}>Paper</ExternalLink>]
                  </span>
                )}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
