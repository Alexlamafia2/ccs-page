import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/NavigationBar/MainNavigation";
import Footer from "../components/Footer/Footer";

export default function RootLayout() {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </Fragment>
  );
}
