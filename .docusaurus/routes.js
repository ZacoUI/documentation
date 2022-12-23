import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/sensity-doc/blog',
    component: ComponentCreator('/sensity-doc/blog', '13c'),
    exact: true
  },
  {
    path: '/sensity-doc/blog/',
    component: ComponentCreator('/sensity-doc/blog/', 'e4c'),
    exact: true
  },
  {
    path: '/sensity-doc/blog/archive',
    component: ComponentCreator('/sensity-doc/blog/archive', '275'),
    exact: true
  },
  {
    path: '/sensity-doc/blog/tags',
    component: ComponentCreator('/sensity-doc/blog/tags', '7f8'),
    exact: true
  },
  {
    path: '/sensity-doc/blog/tags/formation',
    component: ComponentCreator('/sensity-doc/blog/tags/formation', '49c'),
    exact: true
  },
  {
    path: '/sensity-doc/blog/tags/sensity-v-2',
    component: ComponentCreator('/sensity-doc/blog/tags/sensity-v-2', 'e9f'),
    exact: true
  },
  {
    path: '/sensity-doc/markdown-page',
    component: ComponentCreator('/sensity-doc/markdown-page', '35c'),
    exact: true
  },
  {
    path: '/sensity-doc/docs',
    component: ComponentCreator('/sensity-doc/docs', 'c18'),
    routes: [
      {
        path: '/sensity-doc/docs/category/sensity---discord',
        component: ComponentCreator('/sensity-doc/docs/category/sensity---discord', 'ea3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sensity-doc/docs/category/sensity---in-game',
        component: ComponentCreator('/sensity-doc/docs/category/sensity---in-game', '332'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sensity-doc/docs/category/tutorial---extras',
        component: ComponentCreator('/sensity-doc/docs/category/tutorial---extras', 'fb9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sensity-doc/docs/intro',
        component: ComponentCreator('/sensity-doc/docs/intro', '919'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sensity-doc/docs/Sensity - Discord/les voc',
        component: ComponentCreator('/sensity-doc/docs/Sensity - Discord/les voc', '67f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sensity-doc/docs/Sensity - Discord/log',
        component: ComponentCreator('/sensity-doc/docs/Sensity - Discord/log', '87b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sensity-doc/docs/Sensity - Discord/profil et ga',
        component: ComponentCreator('/sensity-doc/docs/Sensity - Discord/profil et ga', '315'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sensity-doc/docs/Sensity - Discord/salon textuel',
        component: ComponentCreator('/sensity-doc/docs/Sensity - Discord/salon textuel', '84f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sensity-doc/docs/Sensity - ig/menu staff',
        component: ComponentCreator('/sensity-doc/docs/Sensity - ig/menu staff', 'a6c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sensity-doc/docs/Sensity - ig/report',
        component: ComponentCreator('/sensity-doc/docs/Sensity - ig/report', 'c1d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sensity-doc/docs/Sensity-extras/Admin Tools',
        component: ComponentCreator('/sensity-doc/docs/Sensity-extras/Admin Tools', '0d9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sensity-doc/docs/Sensity-extras/gigl Tools',
        component: ComponentCreator('/sensity-doc/docs/Sensity-extras/gigl Tools', '0ac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/sensity-doc/docs/Sensity-extras/Modérateur Tools',
        component: ComponentCreator('/sensity-doc/docs/Sensity-extras/Modérateur Tools', '8e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/sensity-doc/',
    component: ComponentCreator('/sensity-doc/', 'e30'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
