import { useState } from 'react'
import avatar from '../img/U.png'
import './uploadfile.css'
import {useParams} from 'react-router-dom'

import axios from 'axios';


const url = "http://localhost:8080/uploads"

function UploadFile() {
  const { id } = useParams()

  const [userData, setUserData] = useState({
    profile : ""
  })
  
  const [postImage, setPostImage] = useState( { myFile : ""})
  const MAX_FILE_SIZE = 5 * 1024 * 1024;
 
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // createPost(postImage)

    console.log("userData",userData)
    const fileU = axios.put(`http://localhost:3000/updateUser/${id}`,userData)
    .then(fileU => {
      console.log(fileU)
    })
    .catch(err => {
      console.log(err)
    })

    console.log("Uploaded")
  }
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
  

    if (file.size > MAX_FILE_SIZE) {
      alert(`File size exceeds the limit of ${MAX_FILE_SIZE / (1024 * 1024)} MB.`);
      return;
    }
  
    const base64 = await convertToBase64(file);
    console.log(base64);

    setUserData({profile : base64})

    setPostImage({...postImage, myFile: base64 });
  };

  return (
    <div className="App">
      {console.log("your photo is uplaoded")}
      <form onSubmit={handleSubmit}>

        <label htmlFor="file-upload" className='custom-file-upload'>
          <img src={postImage.myFile || avatar} alt="" />
        </label>

        <input 
          type="file"
          lable="Image"
          name="myFile"
          id='file-upload'
          accept='.jpeg, .png, .jpg'
          onChange={(e) => handleFileUpload(e)}
         />

         {/* <h3>Doris Wilder</h3>
         <span>Designer</span> */}

         <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UploadFile


function convertToBase64(file){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}