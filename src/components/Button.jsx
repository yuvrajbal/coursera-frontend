export default function Button ({title, calledFunction}){
  return (
    <button className="py-2 px-10 text-gray-200 rounded-md font-bold bg-violet-700" onClick={calledFunction}> {title} </button>
  )
}