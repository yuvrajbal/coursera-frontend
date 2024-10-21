import AdminHeader from "./components/AdminHeader";
import { Outlet } from "react-router-dom";
export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <AdminHeader />
      {/* content */}
      <div className=" mx-auto max-w-7xl">
        <Outlet />
      </div>
    </div>
  );
}
