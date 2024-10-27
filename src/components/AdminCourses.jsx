import axios from "axios"
import { useState, useEffect } from "react"
import CourseCard from "./CourseCard";
import { ClockLoader } from "react-spinners";
export default function AdminCourses(){
  const token = localStorage.getItem("token");
  const [courses,setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  // fetch courses created by admin
  useEffect(() => {
    const fetchCourses = async () => {
      try{
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/admin/courses`, {
          headers: {
            authorization: token
          }
        })
  
        setCourses(response.data.courses);
        setIsLoading(false)
      } catch(err){
        console.log("error while getting admin created courses")
      }
     
      }

    fetchCourses()
    }, []
  )

  if (isLoading) return (<div className='flex justify-center items-center pt-32'>
    <ClockLoader
    color="#737373"
    size={100}
      />
</div>)
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