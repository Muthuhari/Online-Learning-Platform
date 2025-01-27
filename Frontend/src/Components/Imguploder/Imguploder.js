import React from 'react'
import Nav from '../Nav/Nav';
import { useState, useEffect } from 'react';
import axios from "axios";
import { createRoutesFromChildren } from 'react-router-dom';

function Imguploder() {

    const [image, setImage] = useState(null);
    const [allImage, setAllImage] = useState(null);

    const submitImg = async (e) => {
        e.preventDefault();
        const formData = new FormData(); // Correctly instantiate FormData
        formData.append("image", image); // Append the file to FormData
    
        try {
            const result = await axios.post(
                "http://localhost:5000/uplodeImg",
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );
            console.log("Image upload response:", result);
            getImage(); // Fetch updated images
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };
    
      const onImgChange = (e) =>{
        setImage(e.target.files[0])
      }
      const getImage = async () =>{
        try{ 
          const result = await axios.get("http://localhost:5000/getImage")
            setAllImage(result.data.data)
          }  catch (e){
            console.error("Error getting image", e)

        }
      }
      useEffect(() => {
        getImage()
      }, [])


 return (

    <div>
        <Nav/>
        <h1>Imguploder</h1>
        <form onSubmit={submitImg}>
            <input 
            type="file"
            accept="image/*" 
            onChange={onImgChange}></input>
            <button
            type="submit">Upload</button>
        </form>

        {allImage === null 
        ? " "
        : allImage.map((data) =>(
            <img 
            key={data._id}
            src={`http://localhost:5000/files/${data.image}`}
            height={100}
            width={100}
            alt="photos"
            >

            </img>
            
        ))}
        
    </div>
  )
}

export default Imguploder