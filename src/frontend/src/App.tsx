import { Skeleton } from "@/components/ui/skeleton";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const CareerPath = lazy(() => import("./pages/CareerPath"));
const CareerDetail = lazy(() => import("./pages/CareerDetail"));
const GlobalRegistry = lazy(() => import("./pages/GlobalRegistry"));
const GovernmentJobs = lazy(() => import("./pages/GovernmentJobs"));
const Business = lazy(() => import("./pages/Business"));
const Archives = lazy(() => import("./pages/Archives"));
const Inspiration = lazy(() => import("./pages/Inspiration"));
const Enterprise = lazy(() => import("./pages/Enterprise"));

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="space-y-4 w-full max-w-lg mx-auto px-8">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-32 w-full mt-6" />
    </div>
  </div>
);

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const careerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/career",
  component: CareerPath,
});
const careerDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/career/$id",
  component: CareerDetail,
});
const globalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/global",
  component: GlobalRegistry,
});
const govJobsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/government",
  component: GovernmentJobs,
});
const businessRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/business",
  component: Business,
});
const archivesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/archives",
  component: Archives,
});
const inspirationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/inspiration",
  component: Inspiration,
});
const enterpriseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/enterprise",
  component: Enterprise,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  careerRoute,
  careerDetailRoute,
  globalRoute,
  govJobsRoute,
  businessRoute,
  archivesRoute,
  inspirationRoute,
  enterpriseRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
