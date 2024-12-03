"use client";
import { useRouter } from "next/navigation";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { navigateToMenu, MenuRouter } from "@/utils/routing";

export function MenubarUI() {
  const router = useRouter();

  const handleClick = (menu: MenuRouter) => {
    navigateToMenu(menu, router);
  };

  const menuItems = Object.values(MenuRouter);

  return (
    <Menubar>
      {menuItems.map((menuItem) => (
        <MenubarMenu key={menuItem}>
          <MenubarTrigger onClick={() => handleClick(menuItem)}>
            {menuItem}
          </MenubarTrigger>
        </MenubarMenu>
      ))}
    </Menubar>
  );
}
