import { MenubarUI } from "@/components/Menu";

const Header: React.FC = () => {
  return (
    <header
      className="flex w-screen h-[20vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('header.png')" }}
    >
      <div className="flex pl-12 pr-12 justify-center">
        <img
          src="logo_hdf.png"
          alt="Logo"
          className="drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        />
      </div>

      <div className="flex pl-12 pr-12 justify-end items-end h-full">
        <MenubarUI />
      </div>
    </header>
  );
};

export default Header;
