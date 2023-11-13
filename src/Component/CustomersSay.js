import TestCard from "./TestCard";
import rating from '../assets/images/rating.png'
import profile1 from "../assets/images/profile1.jpg";
import profile2 from "../assets/images/profile2-copy-0.jpg";
import profile3 from "../assets/images/profile3.jpg";
import profile4 from "../assets/images/profile2.jpg";
import { useRef } from "react";


function Testimonials() {
  const testRef = useRef(null);

  return (
    <>
      <div className="testimonials" id="testimonials" ref={testRef}>
        <div className="testimonial-header">
          <h1>Testimonials</h1>
        </div>
      <div  className="card-cont">
        <TestCard
        image={profile1}
        title={'Sara Lopez'}
        rating={rating}
        description={'“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”'}
        />
        <TestCard
        image={profile4}
        title={'Helen Kerr'}
        rating={rating}
        description={'“Such a chilled out atmosphere - love it!”'}
        />
        <TestCard
        image={profile2}
        title={'Jon Do'}
        rating={rating}
        description={'“We had such a great time celebrating my grandmothers bitthday!”'}
        />
        <TestCard
        image={profile3}
        title={'James tilly'}
        rating={rating}
        description={'“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”'}
        />
       
        </div>
      </div>
    </>
  );
}

export default Testimonials;


