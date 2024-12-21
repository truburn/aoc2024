import App from "@components/App";
import entryTitles from "@entries/entryTitles.json";
import ErrorPage from "@pages/ErrorPage";
import Home from "@pages/Home";
import JournalEntry from "@pages/JournalEntry";
import PageNotFound from "@pages/PageNotFound";
import { createBrowserRouter, redirect } from "react-router";

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
              const titles: Record<string, string> = entryTitles;

              if (day > 0 && day <= 25) {
                const dayKey: string = `day${day}`;
                const title: string = await titles[dayKey];

                if (title) {
                  return title;
                }
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
