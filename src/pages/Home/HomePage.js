import { ChangeTitle } from "../../hooks/ChangeTitle";
import {Hero} from "./components/Hero" ; 
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Testimonials } from "./components/Testimonials";
import {Faq} from "./components/Faq" ;
export const HomePage = () => {
 ChangeTitle("Access the Latest cs eBooks");
  return (
    <main>
       <Hero />
       <FeaturedProducts/>
       <Testimonials/>
       <Faq/>
      
    </main>
  )
}

