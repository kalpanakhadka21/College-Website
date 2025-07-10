import { Carousel } from "@material-tailwind/react";
import photo1 from './images/photo1.jpg'
 import photo2 from './images/photo2.jpg'
 import photo3 from './images/photo3.jpg'
const Caro= ()=> {
  return (
    <Carousel autoplay loop autoplayDelay={2000}className="rounded-2xl h-[800px] w-[1000px] mt-4 ml-52">
      <img
       src={photo2} alt="image1"
        className="object-cover"
      />
     <img src={photo1} alt="image2"
        className=" h-[600px] object-cover"
      />
      <img
        src={photo3} alt="image3"
        className="object-cover"
      />
    </Carousel>
  );
}
export default Caro