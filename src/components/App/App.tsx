import { useAppClasses } from "@components/App";
import Footer from "@layout/Footer";
import Header from "@layout/Header";
import Navigation from "@layout/Navigation";
import { Outlet } from "react-router";

export function App() {
  const classes = useAppClasses();

  return (
    <>
      <Header />
      <div className={classes.root}>
        <Navigation />
        <main className={classes.content}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}
