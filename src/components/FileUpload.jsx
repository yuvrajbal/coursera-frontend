

import { UploadButton } from "@uploadthing/react";
import { UploadDropzone } from "@uploadthing/react";

export const OurUploadButton = () => (
  <UploadButton
    url="http://localhost:5000/api/uploadthing"
    endpoint="imageUploader"
    onClientUploadComplete={(res) => {
      console.log("Files: ", res);
      alert("Upload Completed");
    }}
    onUploadError={(error) => {
      // Do something with the error.
      alert(`ERROR! ${error.message}`);
    }}
    onBeforeUploadBegin={(files) => {
      // Preprocess files before uploading (e.g. rename them)
      return files.map(
        (f) => new File([f], "coursera" + f.name, { type: f.type })
      );
    }}
    onUploadBegin={(name) => {
      // Do something once upload begins
      console.log("Uploading: ", name);
    }}
    onDrop={(acceptedFiles) => {
      // Do something with the accepted files
      console.log("Accepted files: ", acceptedFiles);
    }}
  />
);

export const FileUploader = () => {
  return (
    <OurUploadButton/>
  )
}






// import { generateUploadButton } from "@uploadthing/react";
// import { useState } from "react";
// import { UploadButton } from "./uploadthing";

// const FileUpload = () => {
//   const [fileUrl, setFileUrl] = useState(null);

//   const handleUploadSuccess = (url) => {
//     setFileUrl(url);
//     console.log("file uploaded successfully", url);
//   };

//   return (
//     <UploadButton
//       endpoint="imageUploader"
//       url="/api/uploadthing"
//       onClientUploadComplete={(res) => {
//         if (res?.[0]?.fileUrl) {
//           handleUploadSuccess(res[0].fileUrl);
//         }
//       }}
//       onUploadError={(error) => {
//         console.log("upload failed", error);
//       }}
//     />

//     // {fileUrl && (
//     //   <div>
//     //     <p>uploaded file url</p>
//     //     <a href={fileUrl}>{fileUrl} </a>
//     //   </div>
//     // )}
//   );
// };

// // const UploadButton2 = generateUploadButton({
// //   endpoint:"imageUploader"
// // }) 

// export const FileUploader = () => {
//   return (
//     <>
//     {/* <div>file uploader</div> */}
//     <UploadButton2/>
//     {/* <div>file uploader</div> */}
//     </>
//   )
// }