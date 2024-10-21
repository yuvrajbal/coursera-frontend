import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import axios from 'axios';
import { UploadButton } from "@uploadthing/react";
import CourseForm from './CourseForm';

export default function CreateCourse (){
  
  return (
     <div className='sm:w-full sm:mx-auto sm:max-w-md '>
        <h2 
        className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-200 mt-10 ">
        Create Course 
      </h2>
      <CreateCourseForm/>
    </div>
  )

}

function CreateCourseForm() {
  const token = localStorage.getItem("token");
  const [error, setError] = useState("");
  const [course, setCourse] = useState({title:"" , description:"" , price:"" , imageUrl:""})
  

  const handleFormSubmission = async (event) => {
    event.preventDefault()

    if (!course.title || !course.description || !course.price || !course.imageUrl){
      setError("All fields are required")
      return;
    }

    setError("")
    try{
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/admin/courses`, course, {
        headers:{
          authorization: token
        }
      })
      console.log(response.data)
      setCourse({title:"", description:"", price:"", imageUrl:""});
      setError("")

    } catch(err){
        console.log("Error while creating course on client side",err)
    }
  }

  const handleCancel = async (event) => {
    event.preventDefault()
    setCourse({title:"", description:"", price:"", imageUrl:""});
    setError("")
  }

  return (
    <CourseForm course={course} setCourse={setCourse} handleCancel={handleCancel} handleSubmission={handleFormSubmission} error={error}/>
 
  )
}

