import { createBrowserRouter, redirect } from "react-router";
import App from "@components/App";
import ErrorPage from "@pages/ErrorPage";
import Home from "@pages/Home";
import JournalEntry from "@pages/JournalEntry";
import PageNotFound from "@pages/PageNotFound";
import entries from "@entries/index";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "entry",
        children: [
          {
            index: true,
            loader: () => redirect("/")
          },
          {
            path: ":day",
            element: <JournalEntry />,
            loader: async ({ params }) => {
              const day: number = params.day ? parseInt(params.day) : 0;

              if (day > 0 && day <= 25) {
                const data = entries[`day${day}`];
                if (data) return data;
                return { entry: <p>Entry not found.</p> };
              }

              return redirect("/");
            }
          }
        ]
      },
      {
        path: "*",
        element: <PageNotFound />
      }
    ]
  }
]);
