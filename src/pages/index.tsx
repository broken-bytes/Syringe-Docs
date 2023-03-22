import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import AnnouncementBox from '../components/AnnouncementBox';
import GetStartedBox from '../components/GetStartedBox';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - The Swift dependency injection framework where dependencies are a breeze`}
      description="Description will go into a meta tag in <head />">
      <main>
        <AnnouncementBox/>
        <GetStartedBox/>
      </main>
    </Layout>
  );
}
