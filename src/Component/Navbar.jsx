import React, {useState} from 'react';

import wonted from "../../images/wonted-logo.png"

const Navbar = () => {
    const [hamburger,setHamburger]=useState(false);
    const ham=(e)=>{
        setHamburger(!hamburger);
        setLine2(!line2);
        setLine1(!line1);
        setLine3(!line3);
    }
    const [line1,setLine1]=useState(false);
    const [line2,setLine2]=useState(false);
    const [line3,setLine3]=useState(false);

    const line2toggle=line2? "opacity-0": "";
    const line1toggle=line1? "transform rotate-45 translate-x-0 translate-y-1.5": "";
    const line3toggle=line3? "transform -rotate-45 translate-x-0 -translate-y-2.5": "";

    return (
        <div className="md:container mx-auto bg-white flex justify-between p-3 overflow-hidden">
            <img src={wonted} alt="" className="w-36 select-none"/>

            <button onClick={ham} className="w-8 leading-[.3] md:hidden inline cursor-pointer">
                <span className={`w-full bg-red-600 h-0.5 inline-block ${line1toggle}`} />
                <span className={`w-full bg-red-600 h-0.5 inline-block ${line2toggle} transition duration-500`}/>
                <span className={`w-full bg-red-600 h-0.5 inline-block ${line3toggle}`}/>

            </button>
            {hamburger && (<ul className="md:flex gap-7 md:items-center select-none z-20
             left-0 md:w-auto w-full
             bg-white md:z-auto md:static absolute my-5 md:my-0 top-16">
                <li className="text-lg font-medium cursor-pointer nav-ani p-3 md:p-0 ">Home</li>
                <li className="text-lg font-medium cursor-pointer nav-ani p-3 md:p-0  ">Benefits</li>
                <li className="text-lg font-medium cursor-pointer nav-ani p-3 md:p-0 ">Chapter</li>
                <li className="text-lg font-medium cursor-pointer nav-ani p-3 md:p-0 ">Pricing</li>
                <li className="text-lg font-medium cursor-pointer nav-ani p-3 md:p-0 ">Author</li>
                <li className="text-lg font-medium cursor-pointer nav-ani p-3 md:p-0 ">Achievements</li>
                <li className="text-lg font-medium cursor-pointer nav-ani p-3 md:p-0 ">Reviews</li>
                <li className="text-lg font-medium cursor-pointer nav-ani p-3 md:p-0 ">Contact</li>
            </ul>)}
            <ul className="md:flex hidden gap-7 md:items-center select-none z-10
             left-0 md:w-auto w-full
             bg-white md:z-auto md:static absolute my-5 md:my-0 top-16">
                <li className="text-lg font-medium cursor-pointer nav-ani p-3 md:p-0 ">Home</li>
                <li className="text-lg font-medium cursor-pointer nav-ani p-3 md:p-0  ">Benefits</li>
                <li className="text-lg font-medium cursor-pointer nav-ani p-3 md:p-0 ">Chapter</li>
                <li className="text-lg font-medium cursor-pointer nav-ani p-3 md:p-0 ">Pricing</li>
                <li className="text-lg font-medium cursor-pointer nav-ani p-3 md:p-0 ">Author</li>
                <li className="text-lg font-medium cursor-pointer nav-ani p-3 md:p-0 ">Achievements</li>
                <li className="text-lg font-medium cursor-pointer nav-ani p-3 md:p-0 ">Reviews</li>
                <li className="text-lg font-medium cursor-pointer nav-ani p-3 md:p-0 ">Contact</li>
            </ul>
        </div>
    );
};

export default Navbar;