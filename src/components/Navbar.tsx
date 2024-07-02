"use client";
import React, { useState } from "react";
import { HoveredLink,Menu,MenuItem,ProductItem  } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
// yeh isiliye likha kyuki nexxt js ek
//  full stack fframe work hai toh agar incase hum react ke koi bhi hooks use kar rhe hai toh react ek
//  client site render framework hai mtlb only fornt end toh agar use client nahi hoga toh next js will 
// not allow us to use the hooks so thats why we hv that

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
  return  <div
  className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
>
   <Menu
   setActive={setActive}
 
   >
    <Link href={"/"}>
    <MenuItem  
    setActive={setActive}
    active={active}
    item="home"
    >
    
    </MenuItem>

    </Link>

    <MenuItem
    setActive={setActive}
    active={active}
    item="Courses"
    >
        <div className="flex flex-col space-y-6
       
        ">
        <HoveredLink
        href="/courses"
        >
        All Courses-1
        </HoveredLink>
        <HoveredLink
        href="/courses"
        >
        All Courses-2
        </HoveredLink>
        <HoveredLink
        href="/courses"
        >
        All Courses-3
        </HoveredLink>
        <HoveredLink
        href="/courses"
        >
        All Courses-4
        </HoveredLink>
        </div>
        </MenuItem>

        
        

        <Link href={"/contacts"}>
        <MenuItem  
    setActive={setActive}
    active={active}
    item="contacts"
    >
    
    </MenuItem>
        </Link>

    

   </Menu>
    </div>;
};

export default Navbar;
