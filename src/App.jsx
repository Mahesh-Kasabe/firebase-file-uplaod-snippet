import React from 'react'
import { useState,useEffect } from 'react'
import './App.css'
import { storage } from "../firebase"
import { ref , uploadBytes, listAll,getDownloadURL } from "firebase/storage"
import { v4 } from "uuid"

function App() {

  const imglistRef = ref(storage, `images/`);

  const [image, setImage] = useState('')
  const [imgList, setimgList] = useState([]);

  const upload = ()=> {
    const imageref = ref(storage, `images/${image.name + v4()}`);
    uploadBytes(imageref, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setimgList((prev) => [...prev, url])
      })
    }) 
  }
  
  useEffect(() =>{
    listAll(imglistRef).then((data) => {
      data.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setimgList((prev) => [...prev,url]);
        })
      })
    })
  }, [])

  return (
    <div className="App">
      <center>
      <input type="file" onChange={(e) => {
        setImage(e.target.files[0]);
      }} />

      <button onClick={upload}> Upload Image </button>

      </center>
      {
        imgList.map((item) => {
          return  <img src={item} />
        })
      }

    </div>
  )
}

export default App
