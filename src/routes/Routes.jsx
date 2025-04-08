import { Outlet } from "react-router-dom";
import React from "react";
import { Suspense } from "react";
import Navbar from "../components/navbar/Navbar";
import MobileNav from "../components/navbar/mobileNav";
import Profile from "../components/profile/Profile";
import AnalyticsDashboard from "../components/analytics/AnalyticsDashboard";
import Sidebar from "../components/sidebar/Sidebar";

export const Routes = ()=>{
    const list = {
        path:'/profile',
        element:<Mainlayout />,

        children:[
            {path:'/profile', element: <Profile/>},
            { path: 'analytics', element: <AnalyticsDashboard /> }
        ],
    }

    return list;
}


export const Mainlayout = () =>{
    return<div className="h-[100vh]" >
        <Navbar />
        <div className="flex h-[calc(100vh-60px)]">
            <Sidebar/>
            <Suspense fallback={<div>Loading...</div>}>
              {/* <Header /> */}
              <Outlet/>
            </Suspense>
        </div>
        <MobileNav/>
    </div>
}


