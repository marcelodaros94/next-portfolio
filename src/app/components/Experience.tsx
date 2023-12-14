"use client"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useContent } from '../context/ContentContext';

const ExperienceSlider = () => {
  const { language, data } = useContent();
  const { jobs } = data[language];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
       {
          breakpoint: 768,
          settings: {      
            slidesToShow: 1.5,
            dots: false
          }
       }
    ]
  };

  const renderTxt = (txt: string) => {
    return { __html: txt };
  };

  return (
    <section id="experience" className="bg-[#64646454] flex flex-col justify-center">
      <Slider {...settings}>
        {jobs.map((job,index) => 
          <div key={index}>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-2">
                <h2 className="text-2xl font-bold mb-4">{job.company}</h2>
                <p className="text-base md:text-lg" dangerouslySetInnerHTML={renderTxt(job.description)}></p>
              </div>
              <div className="p-2 md:p-0 md:w-1/2">
                <img src={job.image} alt="Marcelo Da Ros" />
              </div>
            </div>
          </div>
        )}
      </Slider>
    </section>
  );
};

export default ExperienceSlider;
