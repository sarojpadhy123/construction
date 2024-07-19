import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react'
import React, { useState } from 'react'

const UploadProject = () => {

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
        // const imageurl = form.imageurl.value;
        const category = form.categoryName.value;
        const imagedesc = form.imagedesc.value;
        const place = form.place.value;
        // const image = form.image.value;
       
      
        // const projectObject ={
        //   projecttitle,imageurl,category,imagedesc,place
        // }
        // console.log(projectObject);

        const formData = new FormData();
        formData.append('projecttitle', projecttitle);
        formData.append('category', category);
        formData.append('imagedesc', imagedesc);
        formData.append('place', place);
        formData.append('image', form.image.files[0]);
      
        fetch("http://localhost:8000/upload-private-project", {
          method: "POST",
          body: formData, // Using FormData to send file and text data
        })
        .then(res => res.json())
        .then(data => {
          alert("Project upload successful");
          form.reset();
        })
        .catch(error => {
          console.error('Error uploading project:', error);
        });
      };
      
      
      
        return (
          <div className='px-2 my-5'>
            <h2 className='mb-8 text-3xl font-bold'>Upload Private Project</h2>
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
      {/* Place */}
      <div className='lg:w-1/2'>
        <div className='mb-2 block'>
          <Label
          htmlFor='place'
          value='place'
          />
      
        </div>
        <TextInput
        id='place'
        name='place'
        placeholder='enter place '
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
        <input
            id='image'
            name='image'
            placeholder='Choose Image'
            required
            type='file' 
            accept='image/*' 
          />
          
      </div>
      {/* Category */}
      <div className='lg:w-1/2'>
       <div className='mb-2 block'>
      <Label
      htmlFor='InputState'
      value='Project Category'
      />
       </div>
       <Select id='inputState' name='categoryName' className='w-full rounded-sm' value={selectedProjectCategory}
       onChange={handleChangeSelectedValue}>
      {
        projectCategories.map((option)=><option key={option} value={option}>{option}</option>)
      }
       </Select>
          
      </div>
      
      
      
      </div>
      
      {/* Description */}
      <div>
        <div className='mb-2 block'>
          <Label
          htmlFor='imagedesc'
          value='Image Description'
          />
        </div>
        <Textarea
        id='imagedesc'
        name='imagedesc'
        placeholder='Describe Your Project'
        required
        className='w-full'
        rows={5}
        />
      </div>
      <Button type='submit' className='mt-5 w-1/4 '>
        Upload Project
      </Button>
      
      </form>
          </div>
        )
}

export default UploadProject
