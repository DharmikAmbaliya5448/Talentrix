import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
//import { Button } from "./components/ui/button";
import AppLayout from "./layout/AppLayout";
import LandingPage from "./pages/LandingPage";
import Onboarding from "./pages/Onboarding";
import JobListing from "./pages/JobListing";
import Jobs from "./pages/Jobs";
import PostJobs from "./pages/postjobs";
import SavedJobs from "./pages/savedJobs";
import MyJobs from "./pages/myJobs";
import { ThemeProvider } from "./components/theme-provider";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <Onboarding />,
      },
      {
        path: "/jobs",
        element: <JobListing />,
      },
      {
        path: "/job/:id",
        element: <Jobs />,
      },
      {
        path: "/post-job",
        element: <PostJobs />,
      },
      {
        path: "/saved-job",
        element: <SavedJobs />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
