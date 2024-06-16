import { useRoutes } from "react-router-dom";
import React, { Suspense } from "react";
import {
  routeConfigCommon,
  routeConfigPrivate,
  routeConfigPublic,
} from "../lib";
import { SuspenseLoader, useTheme } from "../../../shared";
import { Sidebar } from "../../../widgets";

function RoutesFunction() {
  const token = localStorage.getItem("token");
  return useRoutes(
    token?.length
      ? [...routeConfigPrivate, ...routeConfigCommon]
      : [...routeConfigPublic, ...routeConfigCommon],
  );
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  return <div className={`app ${theme}`}>{children}</div>;
};

const AppRouter = () => {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <Layout>
        <Sidebar />
        <div className="container">
          <RoutesFunction />
        </div>
      </Layout>
    </Suspense>
  );
};

export default AppRouter;
