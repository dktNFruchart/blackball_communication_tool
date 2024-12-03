import { ReactNode } from "react";

const Body: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main
      className="w-screen h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('background.jpg')" }}
    >
      <div className="text-center">{children}</div>
    </main>
  );
};

export default Body;
