import CoursesSection from "@/components/CoursesSection";
import Herosection from "@/components/Herosection";
import Instructors from "@/components/Instructor";

import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
  <main >
      
      <Herosection/>
      <CoursesSection/>
      <Testimonial/>
      <Instructors/>
  </main>
  );
}
