import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank, MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { TiThSmallOutline } from "react-icons/ti";
import { GiFullPizza, GiHamburger } from "react-icons/gi";
          
 const Categories = [
    {
        id: 1,
        name:"All",
        icon:<TiThSmallOutline className="w-[30px] h-[30px] md:w-[60px] md:h-[60px] text-green-600 hover:text-green-700 font-bold text-[22px]"/>
    },
      {
        id: 2,
        name:"breakfast",
        icon:<MdOutlineFreeBreakfast className="w-[30px] h-[30px] md:w-[60px] md:h-[60px] text-green-600  hover:text-green-700 font-bold text-[22px]"/>
    },
      {
        id: 3,
        name:"soups",
        icon:<TbSoup className="w-[30px] h-[30px] md:w-[60px] md:h-[60px] text-green-600  hover:text-green-700 font-bold "/>
    },
      {
        id: 4,
        name:"pasta",
       icon:<CiBowlNoodles className="w-[30px] h-[30px] md:w-[60px] md:h-[60px] text-green-600  hover:text-green-700 font-bold text-[22px]"/>,
    },
      {
        id: 5,
        name:"main_course",
        icon:<MdOutlineFoodBank className="w-[30px] h-[30px] md:w-[60px] md:h-[60px] text-green-600  hover:text-green-700 font-bold "/>,
    },
      {
        id: 6,
        name:"pizza",
          icon:<GiFullPizza className="w-[30px] h-[30px] md:w-[60px] md:h-[60px] text-green-600  hover:text-green-700 font-bold text-[22px]"/>,
    },
      {
        id: 7,
        name:"burger",
        icon:<GiHamburger className="w-[30px] h-[30px] md:w-[60px] md:h-[60px] text-green-600  hover:text-green-700 font-bold text-[22px]"/>,
    }
    
]

export default Categories 