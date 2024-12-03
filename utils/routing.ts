// utils/routing.ts

export enum MenuRouter {
  ACTUS = "Actus",
  COMPTESRENDUS = "Comptes-rendus",
  RESULTATS = "Résultats",
  CALENDRIER = "Calendrier",
  CODESPORTIF = "Code sportif",
}

export const navigateToMenu = (menu: MenuRouter, router: any) => {
  switch (menu) {
    case MenuRouter.ACTUS:
      router.push("/actus");
      break;
    case MenuRouter.COMPTESRENDUS:
      router.push("/comptes-rendus");
      break;
    case MenuRouter.RESULTATS:
      router.push("/resultats");
      break;
    case MenuRouter.CALENDRIER:
      router.push("/calendrier");
      break;
    case MenuRouter.CODESPORTIF:
      router.push("/code-sportif");
      break;
    default:
      console.error("Invalid menu option");
  }
};
