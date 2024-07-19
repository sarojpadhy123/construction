import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import About from "../pages/home/about/About";
import Contact from "../pages/home/Contact/Contact";
import Govt from "../pages/home/Projects/Govt/Govt";
import Private from "../pages/home/Projects/Private/Private";
import RealEstate from "../pages/home/Projects/RealEstate/RealEstate";
import Services from "../pages/home/services/Services";
// import Pricing from "../pages/home/Pricing/Pricing";
import Photos from "../pages/home/Gallery/Photos/Photos";
import Video from "../pages/home/Gallery/Videos/Video";
import Standard from "../pages/home/Pricing/Standard";
import Advance from "../pages/home/Pricing/Advance";
import Premium from "../pages/home/Pricing/Premium";

import SinglePage from "../pages/home/SinglePage";
//backend 
import UploadProject from "../dashboard/UploadProject";
import Dashboard from "../dashboard/Dashboard";
import DashboardLayout from "../dashboard/DashboardLayout";
import ManageProject from "../dashboard/ManageProject";
import EditProject from "../dashboard/EditProject";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";
import UploadGovtProject from "../dashboard/UploadGovtProject";
import ManageGovtProject from "../dashboard/ManageGovtProject";
import EditGovtProject from "../dashboard/EditGovtProject";
import UploadRealestateProject from "../dashboard/UploadRealestateProject";
import ManageRealestateProject from "../dashboard/ManageRealestateProject";
import EditRealestate from "../dashboard/EditRealestate";
import UploadPhoto from "../dashboard/UploadPhoto";
import ManagePhoto from "../dashboard/ManagePhoto";
import EditPhoto from "../dashboard/EditPhoto";
import UploadVideo from "../dashboard/UploadVideo";
import ManageVideo from "../dashboard/ManageVideo";
import EditVideo from "../dashboard/EditVideo";
import SingleGovt from "../pages/home/SingleGovt";
import SingleRealEstate from "../pages/home/SingleRealEstate";
import FloorRateStandard from "../pages/home/Pricing/FloorRateStandard";
import FloorRateAdvance from "../pages/home/Pricing/FloorRateAdvance";
import FloorRatePremium from "../pages/home/Pricing/FloorRatePremium";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/govt",
        element: <Govt/>,
      },
      {
        path: "/private",
        element: <Private/>,
      },
      {
        path: "/realestate",
        element: <RealEstate/>,
      },
      {
        path: "/service",
        element: <Services/>,
      },
      {
        path: "/standard",
        element: <Standard/>,

      },
      {
        path: "/advance",
        element: <Advance/>,

      },
      {
        path: "/premium",
        element: <Premium/>,

      },
      {
        path: "/standardflooring",
        element: <FloorRateStandard/>,

      },
      {
        path: "/advancedflooring",
        element: <FloorRateAdvance/>,

      },
      {
        path: "/premiumflooring",
        element: <FloorRatePremium/>,

      },
     
      {
        path: "/photo",
        element: <Photos/>,
      },
      {
        path: "/video",
        element: <Video/>,
      },
     
      {
        path: "/projects-private/:id",
        element: <SinglePage />,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:8000/projects-private/${params.id}`);
          const data = await response.json();
      
          return { ...data }; // Return the fetched data as an object
        }
      },
      {
        path: "/projects-govt/:id",
        element: <SingleGovt />,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:8000/projects-govt/${params.id}`);
          const data = await response.json();
      
          return { ...data }; // Return the fetched data as an object
        }
      },
      {
        path: "/projects-realestate/:id",
        element: <SingleRealEstate />,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:8000/projects-realestate/${params.id}`);
          const data = await response.json();
      
          return { ...data }; // Return the fetched data as an object
        }
      }
      
      // {
      //   path: "/update-profile",
      //   element: <UpdateProfile/>
      // }
    ],
  },

//Backend Routes

{
  path:"/admin/dashboard",
  element:<DashboardLayout/>,
  children: [
    {
      path:"/admin/dashboard",
      element: <PrivateRoute><Dashboard/></PrivateRoute>
    },
    // private 
    {
      path:"/admin/dashboard/upload-private-project",
      element:<UploadProject/>
    },
    {
      path:"/admin/dashboard/manage-private-project",
      element:<ManageProject/>
    },
    {
      path:"/admin/dashboard/projects-edit-private/:id",
      element:<EditProject/>,
      loader:({params})=>fetch(`http://localhost:8000/projects-edit-private/${params.id}`)
    },
    // govt
    {
      path:"/admin/dashboard/upload-govt-project",
      element:<UploadGovtProject/>
    },
    {
      path:"/admin/dashboard/manage-govt-project",
      element:<ManageGovtProject/>
    },
    {
      path:"/admin/dashboard/projects-edit-govt/:id",
      element:<EditGovtProject/>,
      loader:({params})=>fetch(`http://localhost:8000/projects-edit-govt/${params.id}`)
    },

    // Real estate
    {
      path:"/admin/dashboard/upload-realestate-project",
      element:<UploadRealestateProject/>
    },
    {
      path:"/admin/dashboard/manage-realestate-project",
      element:<ManageRealestateProject/>
    },
    {
      path:"/admin/dashboard/projects-edit-realestate/:id",
      element:<EditRealestate/>,
      loader:({params})=>fetch(`http://localhost:8000/projects-edit-realestate/${params.id}`)
    },

    //Photos
    {
      path:"/admin/dashboard/upload-photos",
      element:<UploadPhoto/>
    },
    {
      path:"/admin/dashboard/manage-photos",
      element:<ManagePhoto/>
    },
    {
      path:"/admin/dashboard/photos-edit/:id",
      element:<EditPhoto/>,
      loader:({params})=>fetch(`http://localhost:8000/photos-edit/${params.id}`)
    },

    // Videos
    {
      path:"/admin/dashboard/upload-video",
      element:<UploadVideo/>
    },
    {
      path:"/admin/dashboard/manage-videos",
      element:<ManageVideo/>
    },
    {
      path:"/admin/dashboard/videos-edit/:id",
      element:<EditVideo/>,
      loader:({params})=>fetch(`http://localhost:8000/videos-edit/${params.id}`)
    },
   
  ]
},
{
  path:"sign-up",
  element:<Signup/>
},
{
  path:"login",
  element:<Login/>
},
{
  path:"logout",
  element:<Logout/>
}
]);

  export default router;