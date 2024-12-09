import { useAppClasses } from "@components/App";
import Footer from "@layout/Footer";
import Navigation from "@layout/Navigation";
import { Outlet } from "react-router";

export function App() {
  const classes = useAppClasses();

  return (
    <>
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
