import React from 'react';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { initializeApp } from "firebase/app";
import { getFirestore,collection, addDoc } from "firebase/firestore";
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"


function Career(){

    const [file, setFile] = useState("");
    const [data, setData] = useState({
        fName: "",
        lName: "",
        email: "",
        contact: ""
    })
    const [percent, setPercent] = useState(0);

    function handleChange(event) {
        const {value,name} = event.target
        if (name === "filename") {
            setFile(event.target.files[0]);
          }else{
            setData(prevValue => ({
                ...prevValue,
                [name]: value
            }));
          }
        
    }

    const app = initializeApp({
        apiKey: "AIzaSyA-LH5FENVYmvOGg6N70ZzH-fx_E0k_2zc",
        authDomain: "school-link-16363.firebaseapp.com",
        projectId: "school-link-16363",
        storageBucket: "school-link-16363.appspot.com",
        messagingSenderId: "951960375344",
    appId: "1:951960375344:web:ed87c7d0cbe160e4f7ddf5"
    })
  
    const storage = getStorage(app);
    const db = getFirestore(app);


    function handleUpload() {
        if (!file) {
          alert("Please choose a file first!");
          return;
        }
      
        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
      
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const percent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setPercent(percent);
          },
          (err) => console.log(err),
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              console.log(url);
      
              const usersRef = collection(db, "users");
              addDoc(usersRef, {
                firstName: data.fName,
                lastName: data.lName,
                email: data.email,
                contact: data.contact,
                fileUrl: url,
              })
                .then((ref) => {
                  console.log("Document written with ID: ", ref.id);
                  window.location.reload(true)
                })
                .catch((error) => {
                  console.error("Error adding document: ", error);
                });
            });
          }
        );
        
      }
      

    return(
        <div>
            <div id='Career'>
            <h2 className='join-us'>Want to join us?</h2>
            <TextField 
            onChange={handleChange}
            id="outlined-basic"
            className='fieldset'
            style={{margin: "2vh"}}
            label="First-name"
            variant="outlined"
            name="fName"
            value={data.fName}
             />
            <TextField 
            onChange={handleChange} 
            id="outlined-basic" 
            className='fieldset' 
            style={{margin: "2vh"}} 
            label="Last-name" 
            variant="outlined" 
            name="lName" 
            value={data.lName}   
            />
            <TextField 
            onChange={handleChange} 
            id="outlined-basic" 
            className='fieldset' 
            style={{margin: "2vh"}} 
            label="Email" 
            variant="outlined" 
            name="email" 
            value={data.email}   
            />
            <TextField 
            onChange={handleChange} 
            id="outlined-basic" 
            className='fieldset' 
            style={{margin: "2vh"}} 
            label="Contact-no" 
            variant="outlined" 
            name="contact"
            value={data.contact}
            />
            <p>*Upload your resume below*</p>
            <input 
            onChange={handleChange} 
            type="file" 
            id="myFile" 
            name="filename" 
            style={{margin: "2vh"}}
            />
            <Button onClick={handleUpload} variant="contained" style={{backgroundColor: "#005450"}}>Submit</Button>
            <p>{percent} "% done"</p>
            </div>
        </div>
    )
}

export default Career