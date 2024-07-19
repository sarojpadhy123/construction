import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react'
import React, { useState } from 'react'
import {useLoaderData,useParams} from 'react-router-dom'

const EditVideo = () => {



    
  const {id} = useParams();
  const { videotitle,imageurl,videodesc,videourl}=useLoaderData();

  

  
  //Handle Project Submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const videotitle = form.videotitle.value;
    const imageurl = form.imageurl.value;
    const videourl = form.videourl.value;
    const videodesc = form.videodesc.value;

 
  
    const updateVideObj ={
      videotitle,imageurl,videodesc,videourl
    }
    

    // Update Project Data

    fetch(`http://localhost:8000/videos-edit/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateVideObj)

    }).then(res=>res.json()).then(data=>{
      alert("Video Updated Successfully!");
      form.reset();
    })
  


  }
  
  return (
    <div className='px-2 my-5'>
    <h2 className='mb-8 text-3xl font-bold'>Edit Videos</h2>
<form onSubmit={handleUpdate} className='flex lg:w-[1180px] flex-col flex-wrap gap-2'>
<div className='flex gap-3'>
{/* Title */}
<div className='lg:w-1/2'>
<div className='mb-2 block'>
  <Label
  htmlFor='videotitle'
  value='videotitle'
  />

</div>
<TextInput
id='videotitle'
name='videotitle'
placeholder='Enter Video Title'
required
type='text'
defaultValue={videotitle}
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
defaultValue={imageurl}
/>
  
</div>

{/* Video */}
<div className='lg:w-1/2'>
<div className='mb-2 block'>
  <Label
  htmlFor='videourl'
  value='videourl'
  />

</div>
<TextInput
id='videourl'
name='videourl'
placeholder='Enter video Link'
required
type='text'
defaultValue={videourl}
/>
  
</div>


</div>

{/* Description */}
<div>
<div className='mb-2 block'>
  <Label
  htmlFor='videodesc'
  value='Video Description'
  />
</div>
<Textarea
id='videodesc'
name='videodesc'
placeholder='Describe Your Video'
required
className='w-full'
defaultValue={videodesc}
rows={5}
/>
</div>
<Button type='submit' className='mt-5 w-1/4 '>
Upload Video
</Button>

</form>
  </div>
  )
}

export default EditVideo
