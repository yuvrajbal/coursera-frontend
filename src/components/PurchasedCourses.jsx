import axios from "axios"
import { useEffect, useState } from "react"
import CourseCard from "./CourseCard"

export default function PurchasedCourses(){
  const token = localStorage.getItem("token");
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchPurchasedCourses = async () => {
      try{
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/purchasedCourses`, {
          headers: {
            authorization: token
          }
        })
        setPurchasedCourses(response.data.purchasedCourses)
        setLoading(false);
      } catch(err){
        console.log("error while fetching purchased courses");
        setError("failed to load courses");
        setLoading(false)
      }
      

    }

    fetchPurchasedCourses()
    
  }, [])

  if(loading) return <p>loading.....</p>
  if(error) return <p>{error}</p>
  return (
    <div className="flex items-center pt-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg-grid-cols-3 xl:grid-cols-4 gap-6 px-6 max-w-7xl">
      {purchasedCourses.map((course) => (
        <CourseCard 
          key={course._id} 
          id={course._id} 
          title={course.title} 
          description = {course.description} 
          imageUrl={course.imageUrl} 
          price = {course.price}
          mode={"view"}/>
      ))}
    </div>
    </div>
  )

}