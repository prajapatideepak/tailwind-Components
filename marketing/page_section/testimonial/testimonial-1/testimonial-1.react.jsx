// npm install pure-react-carousel
import "pure-react-carousel/dist/react-carousel.es.css";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import { useState, useEffect } from "react";
const index = (props) => {
    const [testimonials] = useState([
        {
            quote: "Absolutely love this kit guys, you've done an incredible job and it's saved me countless hours in getting my V1 out Keep up the amazing work!",
            author: "Joe Perkins",
            role: "Founder",
            company: "Landscape Ventures",
        },
        {
            quote: "I use TUK almost daily - from quick copy-paste solutions for prototyping, to inspiration in my own designs. The prebuilt components allow for rapid prototyping, saving me hours in pixel perfect design time. Efficient, clean cut, and allround badass!",
            author: "Cas du Plessis",
            role: "Product guy and problem solver",
            company: null,
        },
        {
            quote: "I've been using TUK to completely map out entire layouts, but also as a inspiration and as a building block. Taking the ready made designs and hacking them down into what works for me. Having a template and a building block has radically cut down my time to get to where I want with my layouts!",
            author: "Jonathan Fager",
            role: "IT Product Manager",
            company: "Homebrewer",
        },
    ]);

    return (
        <div className="flex justify-center w-full py-12">
            <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={testimonials.length} infinite={true} isIntrinsicHeight={true} isPlaying={true}>
                <Slider>
                    {testimonials &&
                        testimonials.map((sin, i) => {
                            return (
                                <Slide key={i} index={i}>
                                    <div className={"mx-auto container px-4 py-10 lg:py-16 lg:px-16 rounded-xl bg-gradient-to-r " + (i === 0 && "from-red-500 to-pink-600 ") + (i === 1 && " from-green-500 via-blue-600 to-purple-600 ") + (i === 2 && " from-red-400 via-pink-600 to-purple-600")}>
                                        <h3 style={{ minHeight: "180px", lineHeight: "140%" }} className="lg:text-4xl font-bold leading-10 lg:tracking-tight text-center text-gray-100">
                                            &ldquo; {sin.quote} &rdquo;
                                        </h3>
                                        <div className="sm:mt-16 lg:mt-20 pt-4">
                                            <h4 className="lg:text-4xl font-bold lg:font-black leading-6 lg:leading-8 text-center tracking-wide lg:tracking-normal text-white">{sin.author}</h4>
                                            <div className="text-xs lg:text-lg lg:font-semibold leading-4 text-center text-gray-200 flex items-center lg:mt-3 w-full justify-center">
                                                <span>{sin.role}</span>
                                                {sin.company && <div className="w-1 h-1 mx-2 bg-gray-200 rounded-full"></div>}
                                                <span>{sin.company}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            );
                        })}
                </Slider>
            </CarouselProvider>
        </div>
    );
};
export default index;
