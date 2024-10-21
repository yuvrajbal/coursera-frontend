import {useState, useEffect } from "react";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CourseCard({id , title, imageUrl ,description, price , mode}){
  const [courseId, setCourseId] = useState("");
  const token = localStorage.getItem("token");
  const navigate= useNavigate()

  function handleCourseId(id){
      setCourseId(id.toString())
      console.log(typeof(courseId))
  }

  useEffect(() => {
    const buyCourse = async () => {
      if(courseId){
        try{
          const response = await axios.post(`http://localhost:5000/user/courses/${courseId}`,null, {
            headers: {
              authorization: token
            }
          })
          console.log(response.data);
        }catch(err){
          console.log("error while purchasing course")
        }
      }
    }
    buyCourse()
    },[courseId])
    
  
  function viewCourse(){
    navigate(`/course/${id}`);
  }

  function editCourse (){
    navigate(`/admin/editCourse/${id}`);
  }

  return (
    <div className="flex flex-col  text-slate-200  bg-neutral-900  rounded-3xl overflow-hidden ">

      <img 
        src={imageUrl} 
        className="w-full max-h-48 object-cover border-r-2 cursor-pointer " 
        alt={"courseImage"}
        onClick={mode === "edit" ? editCourse : viewCourse}>

        </img>
      
      <div className="flex flex-col gap-6 p-4 my-4">
        <div className="text-xl font-bold ">{title}</div>
        
        <div className="">{description}</div>

        <div className="flex justify-between ">

          {mode === "buy" ? 
            (<div className="flex gap-1 items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <div>{price} </div> 
            </div>) : 
            null
          }
            {mode === "view" ? 
              (<Button 
                title="View Course" 
                calledFunction={() => viewCourse(id)}/>
              ): mode === "buy" ? (
                <Button 
                  title="Buy Now"
                  calledFunction= {() => handleCourseId(id)}/>
              ) : mode ==="edit" ? (
                <Button 
                  title="Edit course"
                  calledFunction ={() => editCourse()} />
              ) : null}

        </div>

      </div>
     
       

    </div>
  )

}