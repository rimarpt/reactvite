import { RiGalleryView2 } from "react-icons/ri";
import { MdDinnerDining } from "react-icons/md";
import { MdLunchDining } from "react-icons/md";
import { MdFreeBreakfast } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa";
const Catagory = [
    {   id: 1, 
        name: "All", 
        image: <RiGalleryView2 /> 
    },
    {   id: 2, 
        name: "Breakfast", 
        image: <MdFreeBreakfast />    
    },
    {   id: 3, 
        name: "Lunch", 
        image: <MdLunchDining />
    },
    {   id: 4, 
        name: "Snacks",
        image: <FaPizzaSlice />
    },
    {   id: 5,  
        name: "Dinner", 
        image: <MdDinnerDining /> 
    },


]

export default Catagory;
