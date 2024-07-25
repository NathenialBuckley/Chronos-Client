import { useLocation } from "react-router-dom"
import { NavBar } from "./componets/nav/NavBar"
import { ApplicationViews } from "./views/ApplicationViews"
import { DarkMode } from "./componets/darkmode/DarkMode"

export const Chronos = () => {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/register'];

  return (
    <>
      <DarkMode />
      {!hideNavbarRoutes.includes(location.pathname) && <NavBar />}
      <ApplicationViews />
    </>
  )
}
