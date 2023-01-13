import React,{useState,useEffect} from 'react'
import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import {setDoc, doc,serverTimestamp} from 'firebase/firestore'
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { db,auth,storage } from '../../hooks/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function New({inputs,title}) {
  let [file, setFile] = useState('');
  let [data,setData] = useState({});

  useEffect(() => {

    const uploadFile = () => {

      let randomName = new Date().getTime() + file.name;
      const storageRef = ref(storage, randomName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on('state_changed', 
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
          // Handle unsuccessful uploads
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            setData((prev) =>({...prev,img:downloadURL}));
          });
        }
      );


    }

    file && uploadFile()

  },[file])

  function handleInput(e) {
    let id = e.target.id;
    let value = e.target.value;
    setData({...data,[id]:value});
  }
  
  console.log(data)
  const handleAdd = async (e) => {
    e.preventDefault();
    try{
      const user = await createUserWithEmailAndPassword(auth,data.email,data.password);
      await setDoc(doc(db,'users',user.user.uid),{
        ...data,
        timeStamp:serverTimestamp()
      })
    } catch(err) {
      console.log(err.message);
    }
  }

  return (
    <div className='new'>
        <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="upload image" className='img'/>
          </div>
          <div className="right">
            <form onSubmit={handleAdd}>
            <div className="formInput">
                <label htmlFor="file">Upload image :<DriveFolderUploadIcon className='icon' /></label>
                <input type="file" name="file" onChange={e => setFile(e.target.files[0])} id="file" style={{display:'none'}}/>
              </div>
              {inputs.map(item => {
                return <div className="formInput" key={item.id}>
                  <label htmlFor={item.id}>{item.label}</label>
                  <input type={item.type} id={item.id} placeholder={item.placeholder} onChange={(e) => handleInput(e)}/>
                </div>
              })}
              <button type='submit'>Submit</button>
            </form>

            {/* <form>
              <div className="formInput">
                <label htmlFor="file">Upload image :<DriveFolderUploadIcon className='icon' /></label>
                <input type="file" name="file"  id="file" style={{display:'none'}}/>
              </div>
              <div className="formInput">
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" placeholder='Triple_mmm' id="username" />
              </div>
              <div className="formInput">
                <label htmlFor="name_surename">Name and sureName: </label>
                <input type="text" name="name_surename" placeholder='Mirakhmedov Mirsaid' id="name_surename" />
              </div>
              <div className="formInput">
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" placeholder='mir21.07.2004@gmail.com' id="email" />
              </div>
              <div className="formInput">
                <label htmlFor="phoneNumber">Phone number: </label>
                <input type="text" name="phoneNumber" placeholder='+998935430714' id="phoneNumber" />
              </div>
              <div className="formInput">
                <label htmlFor="password">Password: </label>
                <input type="text" name="password" placeholder='GTB9fe51@' id="password" />
              </div>
              <div className="formInput">
                <label htmlFor="address"> Address: </label>
                <input type="text" name="address" placeholder='Tashkent City, Akhmad Yugnakiy str, 100142' id="address" />
              </div>
              <div className="formInput">
                <label htmlFor="country">Country: </label>
                <input type="text" name="country" placeholder='Uzbekistan' id="country" />
              </div>
              <button type='submit'>Submit</button>
            </form> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default New