import { DataTableUI } from "@/components/DataTable";

const ActusPage: React.FC = () => {
  return (
    <main
      className="w-screen h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('background.jpg')" }}
    >
      <div className="text-center">{<DataTableUI />}</div>
    </main>
  );
};

export default ActusPage;
