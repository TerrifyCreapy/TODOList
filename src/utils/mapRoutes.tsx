import React from "react";
import { Route } from "react-router";
import { IBrowserRouter } from "../interfaces/common/IBrowserRouter";

const mapRoutes = (routes: IBrowserRouter[]) =>
    routes.map((route: IBrowserRouter) => {
        if (!route.outlet) {
            return (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                    exact={route.exact}
                />
            );
        } else {
            const outlet = mapRoutes(route.outlet);
            return (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                    exact={route.exact}
                >
                    {outlet}
                </Route>
            );
        }
    });

export default mapRoutes;
