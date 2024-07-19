import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

const SideBar = () => {
  return (
    <div>
       <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload-private-project" icon={HiViewBoards} className="bg-blue-300">
            Upload Pvt. Project
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage-private-project" icon={HiInbox} className="bg-blue-300">
            Manage Pvt. Project
          </Sidebar.Item>

          <Sidebar.Item href="/admin/dashboard/upload-govt-project" icon={HiViewBoards} className="bg-rose-300">
            Upload Gvt. Project
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage-govt-project" icon={HiInbox} className="bg-rose-300">
            Manage Gvt. Project
          </Sidebar.Item>


          <Sidebar.Item href="/admin/dashboard/upload-realestate-project" icon={HiViewBoards} className="bg-teal-400">
            Upload RealEstate Project
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage-realestate-project" icon={HiInbox} className="bg-teal-400">
            Manage RealEstate Project
          </Sidebar.Item>


          <Sidebar.Item href="/admin/dashboard/upload-photos" icon={HiViewBoards} className="bg-gray-400">
            Upload Photos
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage-photos" icon={HiInbox} className="bg-gray-400">
            Manage Photos
          </Sidebar.Item>


          <Sidebar.Item href="/admin/dashboard/upload-video" icon={HiViewBoards} className="bg-violet-400">
            Upload Videos
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage-videos" icon={HiInbox} className="bg-violet-400">
            Manage Videos
          </Sidebar.Item>
        


          <Sidebar.Item href="/login" icon={HiArrowSmRight} className="bg-zinc-600 text-white">
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable} className="bg-zinc-600 text-white">
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
 
      </Sidebar.Items>
    </Sidebar>
    </div>
  )
}

export default SideBar
