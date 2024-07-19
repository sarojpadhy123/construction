import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react'
import React, { useState } from 'react'

const UploadVideo = () => {


 
  
  //Handle Project Submission
  const handleProjectSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const videotitle = form.videotitle.value;
    const imageurl = form.imageurl.value;
   const videourl = form.videourl.value;
    const videodesc = form.videodesc.value;

   
  
    const videoObj ={
      videotitle,imageurl,videodesc,videourl
    }
    // console.log(projectObject);
  
  fetch("http://localhost:8000/upload-video",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
  
    },
    body: JSON.stringify(videoObj)
  }).then(res=> res.json()).then(data=> {
    alert("Video uploaded successfully");
    form.reset();
  })
  }
  
  
  return (
    <div className='px-2 my-5'>
    <h2 className='mb-8 text-3xl font-bold'>Upload Videos</h2>
<form onSubmit={handleProjectSubmit} className='flex lg:w-[1180px] flex-col flex-wrap gap-2'>
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

export default UploadVideo
