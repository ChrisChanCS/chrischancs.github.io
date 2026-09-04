import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'mailto:hwchen@cs.utexas.edu',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://github.com/ChrisChanCS/chrischancs.github.io',
    label: 'GitHub',
    icon: faGithub,
  },
];

export default data;
