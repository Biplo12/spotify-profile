import * as React from 'react';

import Auth from '@/components/Auth/Auth';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main className='bg-spotify-grey text-spotify-white flex min-h-screen flex-col items-center justify-center'>
        <Auth />
      </main>
    </Layout>
  );
}
