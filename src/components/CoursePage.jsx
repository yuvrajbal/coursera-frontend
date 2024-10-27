import { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import axios from "axios";
import {useParams} from "react-router-dom"
import { ClockLoader } from "react-spinners";
export default function CoursePage(){
  const token = localStorage.getItem("token");
  const {courseId } = useParams();
  const [course, setCourse] = useState()
  const [isLoading,setIsLoading] = useState(true)
  useEffect(() => {
    const fetchCourse = async () => {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/course/${courseId}`, {
        headers: {
          authorization: token
        }
      })
      setCourse(response.data.course)
      setIsLoading(false)
    } 

    fetchCourse()
  }, [token , courseId])

  if (!course) {
    return (
      <div className='flex justify-center items-center pt-32'>
      <ClockLoader
      color="#737373"
      size={100}
        />
  </div>
    );
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