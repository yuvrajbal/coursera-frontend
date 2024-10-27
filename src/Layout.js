import Header from "./components/Header";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div className="min-h-screen bg-neutral-950 pb-24 ">
      <Header />
      <div className="mx-auto max-w-7xl">
        <Outlet />
      </div>
    </div>
  );
}
