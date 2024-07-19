import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react'
import React, { useState } from 'react'

const UploadPhoto = () => {
  const projectCategories = [
    "ongoing",
    "upcoming",
    "completed",

  ]
  const [selectedProjectCategory, setSelectedProjectCategory]= useState(projectCategories[0]);
  
  const handleChangeSelectedValue=(event) => {
    // console.log(event.target.value);
    setSelectedProjectCategory(event.target.value);
  }
  
  //Handle Project Submission
  const handleProjectSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const projecttitle = form.projecttitle.value;
    // console.log(projecttitle);
    const imageurl = form.imageurl.value;
    // const category = form.categoryName.value;
    // const imagedesc = form.imagedesc.value;
    // const place = form.place.value;
   
  
    const projectObject ={
      projecttitle,imageurl
    }
    // console.log(projectObject);
  
  fetch("http://localhost:8000/upload-photos",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
  
    },
    body: JSON.stringify(projectObject)
  }).then(res=> res.json()).then(data=> {
    alert("Image upload successful");
    form.reset();
  })
  }
  
  
  
    return (
      <div className='px-2 my-5'>
        <h2 className='mb-8 text-3xl font-bold'>Upload Images</h2>
  <form onSubmit={handleProjectSubmit} className='flex lg:w-[1180px] flex-col flex-wrap gap-2'>
  <div className='flex gap-3'>
    {/* Title */}
  <div className='lg:w-1/2'>
    <div className='mb-2 block'>
      <Label
      htmlFor='projecttitle'
      value='Project title'
      />
  
    </div>
    <TextInput
    id='projecttitle'
    name='projecttitle'
    placeholder='enter Project Title'
    required
    type='text'
    />
      
  </div>
 
  </div>
  <div className='flex gap-3'>
    {/* Image */}
  <div className='lg:w-1/2'>
    <div className='mb-2 block'>
      <Label
      htmlFor='imageurl'
      value='imageurl'
      />
  
    </div>
    <TextInput
    id='imageurl'
    name='imageurl'
    placeholder='Choose Image'
    required
    type='text'
    />
      
  </div>
  

  
  
  
  </div>
  

  <Button type='submit' className='mt-5 w-1/4 '>
    Upload Image
  </Button>
  
  </form>
      </div>
    )
}

export default UploadPhoto
