import * as React from 'react';

import Sidebar from '@/components/layout/Sidebar/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
