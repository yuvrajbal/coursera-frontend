import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PurchasedCourses from "./components/PurchasedCourses";
import CoursePage from "./components/CoursePage";
import Header from "./components/Header";
import Courses from "./components/Courses";
import AdminCourses from "./components/AdminCourses";
import CreateCourse from "./components/CreateCourse";
import { FileUploader } from "./components/FileUpload";
import EditCourse from "./components/EditCourse";
import Layout from "./Layout";
import AdminLayout from "./AdminLayout";
import AdminSignin from "./components/AdminSignin";
import AdminSignup from "./components/AdminSignup";
import ErrorPage from "./components/ErrorPage";
import UserSignup from "./components/UserSignup";
import UserSignin from "./components/UserSignin";
import AdminHero from "./components/AdminHero";
// import { UploadButton } from "@uploadthing/react";
function App() {
  const UserToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MDQyOTUyM2U2OWNkNGI4ZDliMTA3MiIsImlhdCI6MTcyODMyNTk3MX0.-29hQZlPIrxeSZQrs-h2eciDPv4ZgQtw78vEYOhAYqY";

  const adminToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MDQyY2ZkYjNlZjAxNjhiOTA2YzYxNyIsImlhdCI6MTcyODMyNjkxMH0.18bgx81zlqK4zTLQCXeyI90DFd4ND67qqIMAqrHA6jk";
  // localStorage.setItem("token", UserToken);

  return (
    <div className="bg-neutral-950">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<UserSignup />} />
            <Route path="/signin" element={<UserSignin />} />
            <Route path="/purchasedCourses" element={<PurchasedCourses />} />
            <Route path="/course/:courseId" element={<CoursePage />} />
            <Route path="/courses" element={<Courses />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="" element={<AdminHero />} />
            <Route path="home" element={<AdminHero />} />
            <Route path="signup" element={<AdminSignup />} />
            <Route path="signin" element={<AdminSignin />} />
            <Route path="courses" element={<AdminCourses />} />
            <Route path="createCourse" element={<CreateCourse />} />
            <Route path="editCourse/:courseId" element={<EditCourse />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
