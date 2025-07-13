import { Carousel } from "@material-tailwind/react";
import image2 from './images/image2.jpeg'
 import image3 from './images/image3.jpg'
 import image4 from './images/image4.jpg'
const Caro= ()=> {
  return (
    <Carousel autoplay loop autoplayDelay={2000}className="rounded-2xl h-[500px] w-[1000px] mt-4 ml-72 overflow-hidden mb-6 ">
      <img
       src={image3} alt="image1"
        className="object-cover"
      />
     <img src={image2} alt="image2"
        className=" object-cover"
      />
      <img
        src={image4} alt="image3"
        className="object-cover"
      />
    </Carousel>
  );
}
export default Caro