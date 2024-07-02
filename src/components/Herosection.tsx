import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/spotlight";
import { AuroraBackground } from "./ui/aurora-background";
import { Button } from "./ui/moving-border";

import { FlipWords } from "./ui/flip-words";
const Herosection = () => {
  const words = ["art ",
    "Composition ",
    "Harmony ",
    "Expression "];
  return (
   <div className="w-full">
         <AuroraBackground
         className="z-0 w-100%"
         
        showRadialGradient={false}


         >
          
        <div className="p-4 relative z-10 w-full text-center">
            <h1  className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent
             bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Master the  <FlipWords words={words} /> <br /> of music.</h1>
            <p   className="mt-4 font-normal text-base md:text-lg
             text-neutral-300 max-w-lg mx-auto" 
            >Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Tempore quibusdam molestias atque illo neque esse!
                 Lorem ipsum dolor sit amet.</p>
                 <div className="mt-4">
                    <Link
                    href={"/courses"}>
                        <Button 
                        className="w-full
                        "
                        borderRadius="1.75rem"

                        >
                      Explore Courses
                      </Button>
                    </Link>
                 </div>
        </div>
        
        </AuroraBackground>
        </div>
   
  );
};

export default Herosection;
