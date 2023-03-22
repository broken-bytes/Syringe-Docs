import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '0ad'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '460'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'd8b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '095'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '57a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '24e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'ce7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '4fe'),
    routes: [
      {
        path: '/docs/category/usage',
        component: ComponentCreator('/docs/category/usage', '26f'),
        exact: true,
        sidebar: "DocumentationSidebar"
      },
      {
        path: '/docs/introduction',
        component: ComponentCreator('/docs/introduction', '20e'),
        exact: true,
        sidebar: "DocumentationSidebar"
      },
      {
        path: '/docs/setup',
        component: ComponentCreator('/docs/setup', 'dd7'),
        exact: true,
        sidebar: "DocumentationSidebar"
      },
      {
        path: '/docs/Usage/containers',
        component: ComponentCreator('/docs/Usage/containers', '4f2'),
        exact: true,
        sidebar: "DocumentationSidebar"
      },
      {
        path: '/docs/Usage/first_steps',
        component: ComponentCreator('/docs/Usage/first_steps', '4ad'),
        exact: true,
        sidebar: "DocumentationSidebar"
      },
      {
        path: '/docs/Usage/modules',
        component: ComponentCreator('/docs/Usage/modules', '168'),
        exact: true,
        sidebar: "DocumentationSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '50e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
