import React, { useState } from 'react'
import Add from "../img/icon.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 

const Register = () => {
  const [err, setErr] = useState(false)

  const submitHandler = async(e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{
      const res = createUserWithEmailAndPassword(auth, email, password)

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
            await updateProfile((await res).user, {
              displayName,
              photoURL: downloadURL,
            });
          });
        }
      );

      //creating documents
      await setDoc(doc(db, "cities", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
      });
      
    }catch(err){
      setErr(true)
    }

  }



  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>Byte Talk</span>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='your name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style={{display: "none"}} type="file" id='file'/>
                <label htmlFor="file">
                    <img src={Add} alt="" className='add-img'/>
                    <h2>Upload profile picture</h2>
                </label>
                <button>Sign Up</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>Already have an account? <span className='login'>Login</span></p>
        </div>
    </div>
  )
}

export default Register