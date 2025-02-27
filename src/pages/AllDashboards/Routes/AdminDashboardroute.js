import { Outlet } from "react-router-dom";
import AdminDashboardLayout from "../components/Layouts/AdminDashboardLayout";

const AdminDashboardRoute = () => {
  return (
    <AdminDashboardLayout>
      <Outlet /> {/* This renders the nested routes inside the layout */}
    </AdminDashboardLayout>
  );
};

export default AdminDashboardRoute;
