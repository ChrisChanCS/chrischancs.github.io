export interface ResearchAuthor {
  name: string;
  url?: string;
  isSelf?: boolean;
}

export interface ResearchLink {
  label: string;
  url: string;
}

export type PublicationStatus =
  | 'Preprint'
  | 'Accepted'
  | 'Published'
  | 'To appear';

export interface Publication {
  title: string;
  year: number;
  authors: ResearchAuthor[];
  status: PublicationStatus;
  venue?: string;
  venueDetails?: string;
  links: ResearchLink[];
}

export const publications: Publication[] = [
  {
    title:
      'Borges: A Low-Latency Distributed Shared Log on a CXL Memory/SSD Hybrid',
    year: 2026,
    authors: [
      { name: 'Haowei Chen', isSelf: true },
      { name: 'Yiming Xiang' },
      { name: 'Zhipeng Jia' },
      { name: 'Yan Sun' },
      { name: 'Nam Sung Kim' },
      { name: 'Emmett Witchel' },
    ],
    status: 'To appear',
    venue: 'SOSP',
    links: [],
  },
  {
    title: 'Tigon: A Distributed Database for a CXL Pod',
    year: 2025,
    authors: [
      { name: 'Yibo Huang' },
      { name: 'Haowei Chen', isSelf: true },
      { name: 'Newton Ni' },
      { name: 'Yan Sun' },
      { name: 'Vijay Chidambaram' },
      { name: 'Dixin Tang' },
      { name: 'Emmett Witchel' },
    ],
    status: 'Published',
    venue: 'OSDI',
    links: [
      {
        label: 'OSDI',
        url: 'https://www.usenix.org/system/files/osdi25-huang-yibo.pdf',
      },
    ],
  },
  {
    title:
      'Mobility-Aware Offloading and Resource Allocation for Distributed Services Collaboration',
    year: 2022,
    authors: [
      { name: 'Haowei Chen', isSelf: true },
      { name: 'Shuiguang Deng' },
      { name: 'Hongze Zhu' },
      { name: 'Hailiang Zhao' },
      { name: 'Rong Jiang' },
      { name: 'Schahram Dustdar' },
      { name: 'Albert Y. Zomaya' },
    ],
    status: 'Published',
    venue: 'TPDS',
    links: [
      {
        label: 'TPDS',
        url: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9681614',
      },
    ],
  },
  {
    title:
      'Online Pricing-based Content Cache Trading for Multi-Provider Vehicular Networks',
    year: 2022,
    authors: [
      { name: 'Haowei Chen', isSelf: true },
      { name: 'Shuiguang Deng' },
      { name: 'Hongze Zhu' },
      { name: 'Cheng Zhang' },
    ],
    status: 'Published',
    venue: 'ICWS',
    links: [
      {
        label: 'ICWS',
        url: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9885756',
      },
    ],
  },
];
