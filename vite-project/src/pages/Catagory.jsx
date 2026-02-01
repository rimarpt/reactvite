import { RiGalleryView2 } from "react-icons/ri";
import { MdDinnerDining } from "react-icons/md";
import { MdLunchDining } from "react-icons/md";
import { MdFreeBreakfast } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa";
const Catagory = [
    {   id: 1, 
        name: "All", 
        image: <RiGalleryView2 className="w-15 h-15"/> 
    },
    {   id: 2, 
        name: "Breakfast", 
        image: <MdFreeBreakfast className="w-15 h-15"/>    
    },
    {   id: 3, 
        name: "Lunch", 
        image: <MdLunchDining className="w-15 h-15"/>
    },
    {   id: 4, 
        name: "Snacks",
        image: <FaPizzaSlice className="w-15 h-15"/>
    },
    {   id: 5,  
        name: "Dinner", 
        image: <MdDinnerDining className="w-15 h-15"/> 
    },


]

export default Catagory;
