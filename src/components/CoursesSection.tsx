'use client'

import React from 'react'
import courseData from "../data/data.json"
import Link from 'next/link'
import { DirectionAwareHover } from './ui/direction-aware-hover'
import { BackgroundGradient } from './ui/background-gradient'
//creating a khudka data type 
interface Courses{
    
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
        image: string,
       
      
}
const CoursesSection = () => {
    const FeaturedC= courseData.courses.filter((course:Courses 
        //we defiend a data type :Courses karke
    )=>course.isFeatured)
  return (
    <div className="py-12 bg-gray-900">
        <div className='text-center '>
            <h2 
            className="text-4xl font-bold text-white">Featured Courses</h2>
            <p 
            className="mt-2 text-lg text-gray-400">Explore our courses</p>
        </div>
        <div className='mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
            
            FeaturedC.map((course:Courses)=> (
                    <div key={course.id} className="flex justify-center">
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                        <DirectionAwareHover 
                        
                        imageUrl={course.image}>
        <p className="font-bold text-xl">{course.title}</p>
        <p className="font-normal text-sm">{course.description}</p>
      </DirectionAwareHover>
      </BackgroundGradient>
                    </div>
                ))
                
                
                }
            </div>

        </div>
        <div className='mt-20 text-center'>
            <Link href={"/courses"}>
            <button className='bg-slate-300 text-gray-900 py-3 px-7 rounded-full'>View all courses</button></Link>
        </div>
      
    </div>
  )
}

export default CoursesSection
//   <BackgroundGradient
// className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
// <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
//     <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
//     <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
//     <Link href={`/courses/${course.slug}`}>
//     Learn More
    {/* </Link> */}
{/* </div> */}
// </BackgroundGradient>
