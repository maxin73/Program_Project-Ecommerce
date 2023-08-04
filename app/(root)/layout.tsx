import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

// Remove commentout later
// import prismadb from '@/lib/prismadb';

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  // Remove commentout later
  // const store = await prismadb.store.findFirst({
  //   where: {
  //     userId,
  //   }
  // });

  // if (store) {
  //   redirect(`/${store.id}`);
  // };

  return (
    <>
      {children}
    </>
  );
};