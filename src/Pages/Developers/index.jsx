
// import Tutorials from '../Tutorials';
import Slider from 'react-slick'; //create carrousel functionality
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import StoresRandoom from '../../Components/Stores';
import { FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const settings={
  dots:true,
  isFinite:true,
  speed:2000,
  slideToShow:3,
  slideToScroll:1,
  autoplaySpeed: 10,
  autoplay: true
}
const data=
[
  {
    key:`1`,
    name:`Mayuko Inoue`,    
    profession:'Ingeniera de software',
    nationality:'Estadounidense',
    review:` Desarrolladora de software que comparte contenido sobre programación y tecnología en su canal de YouTube.`,
    flag:'../src/imgs/flag_1.png',
    img: '../src/imgs/img1.jpg',
    youtube:`https://www.youtube.com/@hellomayuko`,
    twitter:`https://twitter.com/hellomayuko?lang=es`,
    linkedin:`https://www.linkedin.com/in/mayukoinoue`
  },
  {
    key:`2`,
    name:`Joma Tech`,    
    profession:'Ingeniero de software',
    nationality:'Estadounidense',
    review:` Desarrollador de software que crea contenido educativo sobre programación, carreras en tecnología y consejos para desarrolladores en su canal de YouTube.`,
    flag:'../src/imgs/flag_1.png',
    img: '../src/imgs/img2.jpg',
    youtube:`https://www.youtube.com/@jomakaze/`,
    twitter:`https://twitter.com/jomakaze?lang=es`,
    linkedin:`https://www.linkedin.com/in/jonathanma2/`
  },
  {
    key:`3`,
    name:`The Net Ninja`,    
    profession:'Desarrollador web',
    nationality:'Británica',
    review:`Desarrollador web que ofrece tutoriales sobre desarrollo web, tecnologías front-end y back-end en su canal de YouTube.`,
    flag:'../src/imgs/flag_2.png',
    img: '../src/imgs/img3.jpg',
    youtube:`https://www.youtube.com/@NetNinja/videos`,
    twitter:`https://twitter.com/thenetninjauk?lang=es`,
    linkedin:`https://www.linkedin.com/in/shaun-pelling-net-ninja/?originalSubdomain=uk`
  },
  {
    key:`4`,
    name:`TechLead`,    
    profession:'Ingeniera de software',
    nationality:'Estadounidense',
    review:`Desarrollador de software que comparte contenido sobre programación, desarrollo profesional y consejos de carrera en tecnología en su canal de YouTube.`,
    flag:'../src/imgs/flag_1.png',
    img: '../src/imgs/img4.jpg',
    youtube:`https://www.youtube.com/@TechLead`,
    twitter:`https://twitter.com/techleadhd?lang=es`,
    linkedin:`https://www.linkedin.com/in/techleadhd/`
  }
]
export default function Developers() {
  return (
    <>
<div className="min-h-screen flex flex-col">
  <div className="flex-grow bg-gradient-to-r from-blue-400 to-indigo-500 text-white p-8">
    <h1 className="text-4xl font-bold mb-4 mt-9">Developers</h1>
    <hr className="border-white border-b-2 mb-6" />
    <div className="container mx-auto mt-9"> 
      <Slider {...settings} className="mt-9"> 
        {data.map((d) => (
          <div key={d.key} className="rounded-lg shadow-lg overflow-hidden mb-4">
            <div className="flex justify-center">
              <img src={d.img} alt={d.name} className="h-48 w-auto object-cover" />
            </div>
            <div className="p-4 flex flex-col justify-center items-center">
              <h2 className="text-xl font-semibold mb-2">{d.name}</h2>
              <img src={d.flag} alt="Flag" className="w-12 h-12 mb-2" />
              <p className="text-gray-300 text-center mb-4">{d.review}</p>
              <div className="flex space-x-4">
                <a href={d.youtube} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center">
                  <FaYoutube className="mr-2" />
                  YouTube
                </a>
                <a href={d.twitter} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
                  <FaTwitter className="mr-2" />
                  Twitter
                </a>
                <a href={d.linkedin} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded flex items-center">
                  <FaLinkedin className="mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>  
</div>


    </>
  );
}
