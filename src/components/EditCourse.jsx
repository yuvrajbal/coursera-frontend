import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UploadButton } from "@uploadthing/react";
import CourseForm from "./CourseForm";
export default function EditCourse(){
  const token = localStorage.getItem("token")
  const [course,setCourse] = useState({
    title:"",
    description:"",
    price:"",
    imageUrl:""
  });
  const [error,setError] = useState("")
  // const courseId = "67042d9ab3ef0168b906c619"; 
  const {courseId }= useParams();
  useEffect(() => {
    const fetchCourseData = async () => {
      try{
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/admin/course/${courseId}`, {
          headers: {
            authorization:token
          }
        })
        const courseData = response.data.course[0];
        setCourse(courseData);
        console.log(course)
        
      }
      catch(err){
        console.error("error fetching course details", err)
        setError(err)
      }
    }

    fetchCourseData();
  },[])

  const handleCancel = async (event)=>{
    event.preventDefault();
    setCourse({title:"" , description:"" , price: "" , imageUrl:""})
  }

  const handleSubmission = async (event) => {
    event.preventDefault();
    try{
        const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/admin/courses/${courseId}`, course , {
          headers: {
            authorization:token
          }
        })
        console.log("Sent new course data", course)
        console.log(response.data.message)

    } catch(err){
      console.log("error while updating the course", err)
      setError(err);
    }

  }
  return (
    
    <div className="sm:w-full sm:mx-auto sm:max-w-md">
      <h2 
         className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-200 mt-10 ">
         Edit Course {course.title}
      </h2>
      <CourseForm course={course} setCourse={setCourse} handleCancel={handleCancel} handleSubmission={handleSubmission} error={error}/>
    </div>
  )

}