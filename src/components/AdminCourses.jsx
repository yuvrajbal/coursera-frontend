import axios from "axios"
import { useState, useEffect } from "react"
import CourseCard from "./CourseCard";

export default function AdminCourses(){
  const token = localStorage.getItem("token");
  const [courses,setCourses] = useState([])
  // fetch courses created by admin
  useEffect(() => {
    const fetchCourses = async () => {
      try{
        const response = await axios.get("https://coursera-backend-b8tx.onrender.com/admin/courses", {
          headers: {
            authorization: token
          }
        })
  
        setCourses(response.data.courses);
      } catch(err){
        console.log("error while getting admin created courses")
      }
     
      }

    fetchCourses()
    }, []
  )

  return (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-10">
    {courses.map((course) => (
      <CourseCard 
        key={course._id}
        id={course._id} 
        title={course.title} 
        description={course.description} 
        price={course.price} 
        imageUrl={course.imageUrl}
        mode={"edit"} />
    ))}
  </div>)
}