import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'flowbite-react';

const ManageRealestateProject = () => {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/all-realestate-projects")
      .then(res => res.json())
      .then(data => setAllProjects(data));
  }, []);

  //Delete 
  const handleDelete = (id)=>{
    // console.log(id);
    fetch(`http://localhost:8000/projects-del-realestate/${id}`,{
      method: 'DELETE',

    }).then(res=>res.json()).then(data=>alert("Project Deleted Successfully!"))
  }

  return (
    <div className='px-4 my-12'>
      <h2 className="mb-8 text-3xl font-bold">Manage Private Project</h2>

      <div className="overflow-x-auto">
        <Table striped className='lg:w-[1180px]'>
          <Table.Head>
            <Table.HeadCell>No.</Table.HeadCell>
            <Table.HeadCell>Project name</Table.HeadCell>
            <Table.HeadCell>img url</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
            <Table.HeadCell>Place</Table.HeadCell>
            <Table.HeadCell>
              <span>Edit</span>
            </Table.HeadCell>
          </Table.Head>

          <Table.Body>
            {allProjects.map((project, index) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={project._id}>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell>{project.projecttitle}</Table.Cell>
                <Table.Cell>{project.imageurl}</Table.Cell>
                <Table.Cell>{project.category}</Table.Cell>
                <Table.Cell className='text-sm overflow-x-auto'>{project.imagedesc}</Table.Cell>
                <Table.Cell>{project.place}</Table.Cell>
                <Table.Cell>
                  <Link to={`/admin/dashboard/projects-edit-realestate/${project._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                    Edit
                  </Link>
                  <button onClick={() =>handleDelete(project._id)} className='bg-rose-400 px-4 py-1 font-semibold text-white rounded-sm'>Delete</button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default ManageRealestateProject
