import { Routes, Route } from "react-router-dom";
import { adminRoutes, publicRoutes, userRoutes } from "./routes";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import NotFound from "../pages/NotFound";
import DashboardLayout from "../layouts/DashboardLayout";

const renderRoutes = (routes) => {
    return routes.flatMap((route) => {
        const routeElement = [];

        // Normal route
        if (route.path && route.component) {
            const Component = route.component;

            routeElement.push(
                <Route
                    key={route.path}
                    path={route.path}
                    element={<Component />}
                />
            );
        }

        // Nested options
        if (route.options?.length) {
            route.options.forEach((option) => {
                if (option.path && option.component) {
                    const Component = option.component;

                    routeElement.push(
                        <Route
                            key={option.path}
                            path={option.path}
                            element={<Component />}
                        />
                    );
                }
            });
        }

        return routeElement;
    });
};

const AppRoutes = () => {
    return (
        <Routes>

            {/* Public Routes */}
            {publicRoutes.map(({ path, component: Component }) => (
                <Route
                    key={path}
                    path={path}
                    element={<Component />}
                />
            ))}

            {/* User Routes */}
            <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
                <Route element={<DashboardLayout />}>
                    {renderRoutes(userRoutes)}
                </Route>
            </Route>

            {/* Admin Routes */}
            <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
                <Route element={<DashboardLayout />}>
                    {renderRoutes(adminRoutes)}
                </Route>
            </Route>

            {/* 404 */}
            <Route
                path="*"
                element={<NotFound />}
            />

        </Routes>
    );
};

export default AppRoutes;