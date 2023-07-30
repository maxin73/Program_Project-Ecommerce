// Remove commentout later
// imort prismadb from "@/lib/prismadb";

interface DashboardPageProps {
  params: { storeId: string }
};

const DashboardPage: React.FC<DashboardPageProps> = async ({
  params
}) => {

// Remove commentout later
// const store = await prismadb.store.findFirst({
//   where: {
//     id: params.storeId
//   }
// });

  return (
    <div>
      {/* Remove commentout later */}
      {/* Active Store: {store?.name}; */}
    </div>
  );
}

export default DashboardPage;