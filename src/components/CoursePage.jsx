import { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import axios from "axios";
import {useParams} from "react-router-dom"

export default function CoursePage(){
  const token = localStorage.getItem("token");
  const {courseId } = useParams();
  const [course, setCourse] = useState()
  useEffect(() => {
    const fetchCourse = async () => {
      const response = await axios.get(`http://localhost:5000/user/course/${courseId}`, {
        headers: {
          authorization: token
        }
      })
      setCourse(response.data.course)
    } 

    fetchCourse()
  }, [token , courseId])

  if (!course) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mt-4">
      <CourseCard 
        id={course._id} 
        title={course.title} 
        description={course.description} 
        price={course.price}
        imageUrl={course.imageUrl} 
        />
    </div>
  )



}