import { useLocation } from "react-router-dom"
import { NavBar } from "./componets/nav/NavBar"
import { ApplicationViews } from "./views/ApplicationViews"

export const Chronos = () => {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/register'];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <NavBar />}
      <ApplicationViews />

    </>
  )
}
