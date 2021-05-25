import React, { useState } from 'react';
import axios from 'axios';
import $ from 'jquery'

function Upload() {
  const [uploadFile, setUploadFile] = useState([]);
  const [srcFile, setSrcFile] = useState([{}]);
  // const [file, setFile] = useState("");
  const [urlFile, setUrlFile] = useState([]);
  const [url,setUrl] = useState([]);
  const [flag,setFlag] = useState(false);
  let userName = "HadasaRozner"


  function onChangeHandler(event) {
    // Update the state 
   for(let i=0;i<event.target.files.length;i++)  { 
    
    uploadFile.push(event.target.files[i])
  }
  console.log(uploadFile);
    // setUploadFile(newState);
    //  setUploadFile(event.target.files[0])
    const text = (event.target.result)
    console.log(text)
    let reader = new FileReader();
// reader.onloadend=handleFileRead;

// console.log(reader.readAsDataURL(event.target.files[0]));
    // console.log(reader.readAsText(event.target.files[0]))

  };


  function uploadMulti() {

    var formData = new FormData

    var myFiles = Object.values(uploadFile)
    if (myFiles.length < 1) { alert("ooops... not files to upload") }
    else {
      myFiles.forEach((file, index) => {
        formData.append("files" + index, file)


      })
      console.log(myFiles)

      if (!!formData.entries().next().value == true) {
        
                fetch("https://files.codes/api/" + userName +  "/savedMultiFilesDB", {
                    method: 'POST',
                    body: formData,
          headers: {"authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJWaVg5TzB3VUc4VTA2cnBpOXg4ckRRN3JGQUIyIiwiZW1haWwiOiJoYWRhc2Fyb3puZXJAbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjIxNzY4NTE2fQ.C8mlRJSkf4Bnbbwka1BW6ZU2Acjcl2f45v0lriGr8Xw" },

          })
          
        // $.ajax({
        //   url: "https://files.codes/api/HadasaRozner/uploadMultipleFiles",
        //   method: 'post',
        //   contentType: false,
        //   processData: false,
        //   headers: {"authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJWaVg5TzB3VUc4VTA2cnBpOXg4ckRRN3JGQUIyIiwiZW1haWwiOiJoYWRhc2Fyb3puZXJAbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjIxNzY4NTE2fQ.C8mlRJSkf4Bnbbwka1BW6ZU2Acjcl2f45v0lriGr8Xw" },

        //   data: formData,
        .then(data => {
          // success: (data) => {
            var myData = { "files": data.filesData }
            console.log("finish first ajax  " + JSON.stringify(myData));
            // console.log(formData)
            debugger
        //  setFile(myData.files.files0.url)
          //  setFile(file.url)
    //       const newState = [...srcFile, myData.files];
    // setSrcFile(newState);


//  setSrcFile( srcFile.push(myData.files))
//  console.log(srcFile);

            // setTimeout(() => {

             setTimeout(() => {
                fetch("https://files.codes/api/" + userName +  "/savedMultiFilesDB", {
                  url: "https://files.codes/api/HadasaRozner/savedMultiFilesDB",
                  method: 'POST',
                  headers: {"authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJWaVg5TzB3VUc4VTA2cnBpOXg4ckRRN3JGQUIyIiwiZW1haWwiOiJoYWRhc2Fyb3puZXJAbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjIxNzY4NTE2fQ.C8mlRJSkf4Bnbbwka1BW6ZU2Acjcl2f45v0lriGr8Xw" },
                body:myData })
              // $.ajax({
              //   url: "https://files.codes/api/HadasaRozner/savedMultiFilesDB",
              //   method: 'POST',
              //  headers: {"authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJWaVg5TzB3VUc4VTA2cnBpOXg4ckRRN3JGQUIyIiwiZW1haWwiOiJoYWRhc2Fyb3puZXJAbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjIxNzY4NTE2fQ.C8mlRJSkf4Bnbbwka1BW6ZU2Acjcl2f45v0lriGr8Xw" },
              //   data: myData,
                .then (data => {
                  alert("upload success");
                  
                  console.log("upload success", data)


              
              })
            })
            }, 2000);
          
        
      }
    }

  }

  function readFiles() {
 
    $.ajax({
      type: "GET",
      url: "https://files.codes/api/HadasaRozner",
      headers: {"authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJWaVg5TzB3VUc4VTA2cnBpOXg4ckRRN3JGQUIyIiwiZW1haWwiOiJoYWRhc2Fyb3puZXJAbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjIxNzY4NTE2fQ.C8mlRJSkf4Bnbbwka1BW6ZU2Acjcl2f45v0lriGr8Xw" },

      success: (data) => {
        // setSrcFile(data)
     console.log(data)
    //  console.log(url)
     debugger
     for(let i=0;i<data.length;i++)
     urlFile.push(data[i].url)
      setFlag(true)
    }

    })

  }

  function download(){
    debugger
    $.ajax({
      type: "GET",
      url: "https://files.codes/api/HadasaRozner/download/"+"",
      headers: {"authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJWaVg5TzB3VUc4VTA2cnBpOXg4ckRRN3JGQUIyIiwiZW1haWwiOiJoYWRhc2Fyb3puZXJAbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjIxNzY4NTE2fQ.C8mlRJSkf4Bnbbwka1BW6ZU2Acjcl2f45v0lriGr8Xw" },
      success: function (data) {
 
      },
      error: function (err) {
        alert(err);
      },
    });

  }

  return (
    <>
      <input type="file" name="file" onChange={onChangeHandler} multiple />

      {/* <button onClick={onClickHandler}>upload</button> */}
      <button onClick={uploadMulti}>upload</button>
      <button onClick={readFiles}>show</button>
      <button onClick={()=>setFlag(false)}>dont show</button>
 
      {/* <img src=></img> */}
      {/* <iframe src="https://files.codes/uploads/HadasaRozner/others/1621842535036__text.txt"/> */}
      {/* {srcFile&&
        srcFile.map((file,index)=>{
          key={index}
          {console.log(file);}
     {file} 
     <iframe src={file}/> 
        })
      } */}
        {/* {srcFile&&srcFile.map((file, index) => (
          // console.log(file.files+index.url),
        // <iframe src= {file.files+index.url}/>,
       
        <iframe src= {file.files0.url} key={index}/>
        
        ))} */}
        {/* {url&&url.map((url, index) => (
           
        <iframe src= {url} key={index}/>
        
        ))} */}
  {flag&&urlFile.map((url, index) => (
           
        <iframe src= {url} key={index}/>
        
        ))}
    </>
  );
};


export default Upload;
