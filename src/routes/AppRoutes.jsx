import { Routes, Route } from "react-router-dom";
import { adminRoutes, publicRoutes, userRoutes } from "./routes";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import NotFound from "../pages/NotFound";
import DashboardLayout from "../layouts/DashboardLayout";


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
                    {userRoutes.map(({ path, component: Component }) => (
                        <Route
                            key={path}
                            path={path}
                            element={<Component />}
                        />
                    ))}
                </Route>
            </Route>

            {/* Admin Routes */}
            <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
                <Route element={<DashboardLayout />}>
                    {adminRoutes.map(({ path, component: Component }) => (
                        <Route
                            key={path}
                            path={path}
                            element={<Component />}
                        />
                    ))}
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