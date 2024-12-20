// courses code here
import React, { useEffect, useState } from 'react'
import CourseCard from './CourseCard'
import axios from "axios";
import {ClockLoader} from "react-spinners"
// use axios here, similar to register and login
const Courses = () => {
  const token = localStorage.getItem("token");
  const [courses, setCourses] = useState([]);
  const [loading,setLoading]= useState(true);
  const [error,setError ] = useState("");
  
  useEffect(() => {

    const fetchCourses = async () => {
      try { 
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/courses`, {
          headers: {
            authorization: token
        }   
        })
        setCourses(response.data.courses);
        setLoading(false);
      }
      catch(err){
        console.log("error fetching courses", err);
        setError ("failed to load courses");
        setLoading(false);

      }
    }

    fetchCourses();
  },[]);

  if(loading) return (<div className='flex justify-center items-center pt-32'>
      <ClockLoader
      color="#737373"
      size={100}
        />
  </div>)
  if(error) return <p>{error}</p>  
  
  return (
    <div className='flex pt-6 items-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 max-w-7xl'>
    
      {courses.map((course) => (
        <CourseCard key={course._id} id={course._id} title = {course.title} price = {course.price} imageUrl = {course.imageUrl} description={course.description} mode={"buy"}/>
      ))}
      </div>
     

    </div>
  )
}

export default Courses