import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'flowbite-react';

const ManageVideo = () => {

  const [allVideos, setAllVideos,] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/all-videos")
      .then(res => res.json())
      .then(data => setAllVideos(data));
  }, []);

  //Delete 
  const handleDelete = (id)=>{
    // console.log(id);
    fetch(`http://localhost:8000/videos-del/${id}`,{
      method: 'DELETE',

    }).then(res=>res.json()).then(data=>alert("Video Deleted Successfully!"))
  }

  return (
       <div className='px-4 my-12'>
      <h2 className="mb-8 text-3xl font-bold">Manage Videos</h2>

      <div className="overflow-x-auto">
        <Table striped className='lg:w-[1180px]'>
          <Table.Head>
            <Table.HeadCell>No.</Table.HeadCell>
            <Table.HeadCell>Video Title</Table.HeadCell>
            <Table.HeadCell>img url</Table.HeadCell>
            <Table.HeadCell>Video Links</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
          
            <Table.HeadCell>
              <span>Edit</span>
            </Table.HeadCell>
          </Table.Head>

          <Table.Body>
            {allVideos.map((video, index) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={video._id}>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell>{video.videotitle}</Table.Cell>
                <Table.Cell>{video.imageurl}</Table.Cell>
                <Table.Cell>{video.videourl}</Table.Cell>
                <Table.Cell className='text-sm overflow-x-auto'>{video.videodesc}</Table.Cell>
          
                <Table.Cell>
                  <Link to={`/admin/dashboard/videos-edit/${video._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                    Edit
                  </Link>
                  <button onClick={() =>handleDelete(video._id)} className='bg-rose-400 px-4 py-1 font-semibold text-white rounded-sm'>Delete</button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}

export default ManageVideo
