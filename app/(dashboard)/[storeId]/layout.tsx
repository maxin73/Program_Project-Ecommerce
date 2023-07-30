import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import Navbar from '@/components/navbar'
// Remove commentout later
// import prismadb from '@/lib/prismadb';

export default async function DashboardLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { storeId: string }
}) {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  // Remove commentout later
  // const store = await prismadb.store.findFirst({ 
  //   where: {
  //     id: params.storeId,
  //     userId,
  //   }
  // });

  // if (!store) {
  //   redirect('/');
  // };

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};