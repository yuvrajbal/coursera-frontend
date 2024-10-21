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
        const response = await axios.get(`http://localhost:5000/admin/course/${courseId}`, {
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
        const response = await axios.put(`http://localhost:5000/admin/courses/${courseId}`, course , {
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
    // <div className="flex flex-col items-center ">
  
    //   <h2 
    //     className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-200 mt-10 ">
    //     Edit Course {course.title}
    //   </h2>
    //   {error && <p className="text-red-500">{error}</p>}
    //   <div className="sm:w-full sm:mx-auto sm:max-w-md mb-12" >
    //     <form onSubmit={handleSubmission} className="">
    //       <div className="space-y-12  ">
    //         <div className="border-b pb-12   ">
    //           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 text-gray-200 px-6">
                
    //             {/*COURSE TITLE  */}
    //             <div className="sm:col-span-full">
    //               <label htmlFor="title" className="block text-sm font-medium leading-6">
    //                 Course Title
    //               </label>
    //               <div className="mt-2">
    //                 <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
    //                   {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span> */}
    //                   <input
    //                     id="title"
    //                     name="title"
    //                     type="text"
    //                     placeholder=""
    //                     value={course.title}
    //                     autoComplete="title"
    //                     className="block flex-1 border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md"
    //                     onChange={(e) => setCourse({...course , title:e.target.value})}
    //                   />
    //                 </div>
    //               </div>
    //             </div>

    //             {/* COURSE DESCRIPTION */}
    //             <div className="col-span-full">
    //               <label htmlFor="description" className="block text-sm font-medium leading-6 ">
    //                 Course Description
    //               </label>
    //               <div className="mt-2">
    //                 <textarea
    //                   id="description"
    //                   name="description"
    //                   value={course.description}
    //                   rows={1}
    //                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 sm:max-w-md"
    //                   // defaultValue={''}
    //                   onChange={(e) => setCourse({...course , description: e.target.value })}
    //                 />
    //               </div>
    //             </div>

    //             {/* COURSE PRICE */}
    //             <div className="col-span-full">
    //               <label htmlFor="price" className="block text-sm font-medium leading-6 ">
    //                 Course Price
    //               </label>
    //               <div className="mt-2">
    //                 <input
    //                   type="text"
    //                   id="price"
    //                   name="price"
    //                   value={course.price || ""}
    //                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 sm:max-w-md"
    //                   onChange={(e) => {
    //                       setCourse({...course ,price:parseInt(e.target.value)})      
    //                       console.log(course.price);
    //                     }}
    //                 />
    //               </div>
    //             </div>

    //             {/* COURSE IMAGE */}
    //             <div className="col-span-full">
    //               <label htmlFor="cover-photo" className="block text-sm font-medium leading-6  mb-4">
    //                 Course Image
    //               </label>
    //               <UploadButton
    //                   url="http://localhost:5000/api/uploadthing"
    //                   endpoint="imageUploader"
    //                   onClientUploadComplete={(res) => {
    //                     console.log("Files: ", res);
    //                     setCourse({...course, imageUrl:res[0].url})
    //                     // alert("Upload Completed");
    //                   }}
    //                   onUploadError={(error) => {
    //                     // Do something with the error.
    //                     alert(`ERROR! ${error.message}`);
    //                   }}
    //                   onBeforeUploadBegin={(files) => {
    //                     // Preprocess files before uploading (e.g. rename them)
    //                     return files.map(
    //                       (f) => new File([f], "coursera" + f.name, { type: f.type })
    //                     );
    //                   }}
    //                   onUploadBegin={(name) => {
    //                     // Do something once upload begins
    //                     console.log("Uploading: ", name);
    //                   }}
                    
    //                 />

    //                   {course.imageUrl && <img className="mt-6 rounded-lg w-full" src={course.imageUrl} alt="course"></img>}

    //             </div>

    //           </div>
    //         </div> 
    //       </div>

    //       {error &&  <p className='text-red-500 text-sm mt-2'>{error}</p>}
    //       <div className="mt-6 flex justify-between sm:justify-end gap-10 px-6">
    //         <button onClick={handleCancel} type="button" className="text-sm font-semibold  text-gray-900 bg-gray-200 hover:bg-gray-100 px-6 py-2 rounded-md">
    //           Cancel
    //         </button>
    //         <button
    //           type="submit"
    //           className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

    //         >
    //           Save
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    
    // </div>
    <div className="sm:w-full sm:mx-auto sm:max-w-md">
      <h2 
         className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-200 mt-10 ">
         Edit Course {course.title}
      </h2>
      <CourseForm course={course} setCourse={setCourse} handleCancel={handleCancel} handleSubmission={handleSubmission} error={error}/>
    </div>
  )

}