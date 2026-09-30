import { render, screen, within } from '@testing-library/react';
import React from 'react';

import ResearchProfile from '@/components/Research/Profile';
import { publications } from '@/data/research';

describe('ResearchProfile', () => {
  it('renders publications with academic metadata and resources', () => {
    const { container } = render(<ResearchProfile />);

    expect(
      screen.getByRole('heading', { name: 'Publications' }),
    ).toBeInTheDocument();
    expect(container.querySelectorAll('.simple-publication')).toHaveLength(
      publications.length,
    );
    expect(screen.queryAllByRole('link', { name: 'Paper' })).toHaveLength(
      publications.filter((publication) => publication.links[0]?.url).length,
    );

    const borgesPublication = screen
      .getByRole('heading', { name: /Borges:/ })
      .closest('article');
    expect(borgesPublication).not.toBeNull();
    expect(
      within(borgesPublication as HTMLElement).getByRole('link', {
        name: 'Paper',
      }),
    ).toHaveAttribute(
      'href',
      'https://dl.acm.org/doi/epdf/10.1145/3830418.3843906',
    );
    expect(screen.getByText('SOSP 2026 (to appear)')).toBeInTheDocument();
  });

  it('highlights the profile owner', () => {
    const { container } = render(<ResearchProfile />);

    const ownerNames = container.querySelectorAll(
      '.simple-publication__authors strong',
    );
    expect(ownerNames).toHaveLength(
      publications.filter((publication) =>
        publication.authors.some((author) => author.isSelf),
      ).length,
    );
  });
});
