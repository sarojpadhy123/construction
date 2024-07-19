import React,{useState}from 'react'
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react'
import {useLoaderData,useParams} from 'react-router-dom'

const EditProject = () => {
  const {id} = useParams();
  const {projecttitle,imageurl,category,imagedesc,place}=useLoaderData();
  const projectCategories = [
    "pvt-ongoing",
    "pvt-upcoming",
    "pvt-completed",
    "govt-ongoing",
    "govt-upcoming",
    "govt-completed",
    "realestate-ongoing",
    "realestate-upcoming",
    "realestate-completed"
  ]
  const [selectedProjectCategory, setSelectedProjectCategory]= useState(projectCategories[0]);
  
  const handleChangeSelectedValue=(event) => {
    // console.log(event.target.value);
    setSelectedProjectCategory(event.target.value);
  }
  
  //Handle Project Submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const projecttitle = form.projecttitle.value;
    // console.log(projecttitle);
    const imageurl = form.imageurl.value;
    const category = form.categoryName.value;
    const imagedesc = form.imagedesc.value;
    const place = form.place.value;
    // const imagerating = form.imagerating.value;
    // console.log(projecttitle);
    // console.log(imageurl);
    // console.log(category);
    // console.log(imagedesc);
    // console.log(place);
    // console.log(imagerating);
  
    const updateProjectObj ={
      projecttitle,imageurl,category,imagedesc,place
    }
    

    // Update Project Data

    fetch(`http://localhost:8000/projects-edit-private/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateProjectObj)

    }).then(res=>res.json()).then(data=>{
      alert("Project is Updated Successfully!");
      form.reset();
    })
  


  }
  
  
  return (
    <div className='px-2 my-5'>
    <h2 className='mb-8 text-3xl font-bold'>Update Your Project</h2>
<form onSubmit={handleUpdate} className='flex lg:w-[1180px] flex-col flex-wrap gap-2'>
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
defaultValue={projecttitle}
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
defaultValue={place}
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
defaultValue={imagedesc}

/>
</div>
<Button type='submit' className='mt-5 w-1/4 '>
Update Project
</Button>

</form>
  </div>
  )
}

export default EditProject
