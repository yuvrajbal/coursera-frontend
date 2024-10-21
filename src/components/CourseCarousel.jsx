import { useEffect, useState } from "react";
import axios from "axios"
export default function ScrollContainer(){
  const [imageUrls, setImageUrls] = useState([])
  useEffect(() => {

    const fetchCourses  = async () => {
      try{
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/course/allcourses`)
        const urls = response.data.courses.map((course) => course.imageUrl);
        setImageUrls(urls)
      } catch(err){
        console.log("error while fetching courses from client", err)
      }
    
    }
    fetchCourses()
  }, [])
  return (
    <div className="w-full h-full flex items-center justify-center bg-neutral-900 py-6">
      <div className="overflow-x-auto w-full max-w-7xl">
        <div className=" flex space-x-4">
          {imageUrls.map((image , index) => (
            <div
              key={index}
              className="min-w-[300px] h-[200px] md:min-w-[400px] md:h-[300px] bg-neutral-800 rounded-lg shadow-lg relative" 
              style={{backgroundImage: `url(${image})` , backgroundSize :"cover" , backgroundPosition:"centre"}}
              >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    {/* <h2 className="text-white text-xl font-bold">{course.title}</h2> */}
              </div>
            </div>
          ))}
      
        </div>
      </div>
    </div>
  )
}