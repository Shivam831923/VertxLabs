import { Link, useLocation } from "react-router-dom"
import { FaTachometerAlt, FaChartBar, FaPlug, FaHistory, FaHandshake, FaCog } from "react-icons/fa"
import ProfileImage from "../ui/ProfileImage"

const Sidebar = () => {
 const location = useLocation()

 const navItems = [
  { name: "Dashboard", icon: <FaTachometerAlt />, path: "/", hasIndicator: true },
  { name: "Analytics", icon: <FaChartBar />, path: "/analytics", hasIndicator: true },
  { name: "Connect", icon: <FaPlug />, path: "/", hasIndicator: true },
  { name: "Dealroom", icon: <FaHandshake />, path: "/", hasIndicator: false },
  { name: "Profile", icon: <FaHistory />, path: "/profile", hasIndicator: false },
  { name: "Settings", icon: <FaCog />, path: "/", hasIndicator: false },
 ]

 return (
  <>
  <div className="hidden md:flex flex-col items-center w-[65px] h-[calc(100vh-60px)] bg-black border-r border-gray-600">

 <div className="flex flex-col gap-2 pt-4">
  <ProfileImage
   imageUrl="https://images.unsplash.com/photo-1678138091332-432d4a1ac407?w=500&auto=format&fit=crop&q=60"
   isOnline={true}
  />
  <ProfileImage
   imageUrl="https://plus.unsplash.com/premium_photo-1664008628916-3b72a2136e22?w=500&auto=format&fit=crop&q=60"
   isOnline={false}
  />
  <ProfileImage
   imageUrl="https://plus.unsplash.com/premium_photo-1668116307088-583ee0d4aaf7?w=500&auto=format&fit=crop&q=60"
   isOnline={true}
  />
 </div>
</div>

   <div className="hidden md:flex flex-col w-[191px] h-[calc(100vh-60px)] bg-black border-r border-gray-600">
    <nav className="flex-1 pt-4">
     <ul className="space-y-4 px-4">
      {navItems.map((item) => (
       <li key={item.name}>
        <Link
         to={item.path}
         className={`flex items-center gap-3 px-2 py-2 transition-colors ${
          location.pathname === item.path ? "text-white" : "text-gray-400 hover:text-white"
         }`}
        >
         
         {/* {item.hasIndicator && <div className="w-4 h-4 bg-white rounded-full flex-shrink-0"></div>} */}
         {/* {!item.hasIndicator && <div className="w-4 h-4 flex-shrink-0"></div>} */}
         <span className="font-manrope font-semibold text-[16px] leading-none tracking-[-0.04em]">{item.name}</span>
        </Link>
       </li>
      ))}
     </ul>
    </nav>
   </div>

   {/* Mobile Bottom Navigation - Icons only */}
   <div className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-gray-600 flex justify-around items-center h-[60px] md:hidden">
    {navItems.map((item) => (
     <Link
      key={item.name}
      to={item.path}
      className={`flex flex-col items-center text-sm ${
       location.pathname === item.path ? "text-white" : "text-gray-400 hover:text-white"
      }`}
     >
      <span className="text-lg">{item.icon}</span>
      <span className="text-xs mt-1">{item.name}</span>
     </Link>
    ))}
   </div>
  </>
 )
}

export default Sidebar

