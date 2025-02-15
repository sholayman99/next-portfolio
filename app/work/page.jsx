"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Image from "next/image";
import WorkSliderBtns from "../../components/WorkSliderBtns";
//projects data
const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "E-commerce Website",
    description:
      "A fully functional e-commerce platform where users can browse products, add them to the cart, and complete transactions.",
    image: "/assets/work/thumb1.png",
    live: "https://www.example-ecommerce.com",
    github: "https://github.com/username/ecommerce-website",
    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "Stripe" },
    ],
  },
  {
    num: "02",
    category: "Front End",
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my skills, projects, and achievements as a MERN stack developer.",
    image: "/assets/work/thumb2.png",
    live: "https://www.example-portfolio.com",
    github: "https://github.com/username/portfolio-website",
    stack: [
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
  },
  {
    num: "03",
    category: "Back End",
    title: "RESTful API for Blogging Platform",
    description:
      "A RESTful API built with Node.js and Express that supports CRUD operations for a blogging platform.",
    image: "/assets/work/thumb3.png",
    live: "https://www.example-blog-api.com",
    github: "https://github.com/username/blog-api",
    stack: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "JWT" },
    ],
  },
  {
    num: "04",
    category: "Full Stack",
    title: "Social Media Application",
    description:
      "A social media platform that allows users to create profiles, post updates, and connect with others.",
    image: "/assets/work/thumb2.png",
    live: "https://www.example-social-media.com",
    github: "https://github.com/username/social-media-app",
    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "Socket.io" },
    ],
  },
];

function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className={"min-h-[100vh] flex flex-col justify-center py-12 xl:px-0"}
    >
      <div className={"container mx-auto"}>
        <div className={"flex flex-col xl:flex-row xl:gap-[30px]"}>
          <div
            className={
              "w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none"
            }
          >
            <div className={"flex flex-col gap-[30px] h-[50%]"}>
              {/*outline num*/}
              <div
                className={
                  "text-8xl leading-none font-extrabold text-transparent text-outline"
                }
              >
                {project.num}
              </div>
              {/*project category*/}
              <h2
                className={
                  "text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize"
                }
              >
                {project.category} project
              </h2>
              {/*project description*/}
              <p className={"text-white/60"}>{project.description}</p>
              {/*project stack*/}
              <ul className={"flex gap-4"}>
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className={"text-xl text-accent"}>
                      {item.name}
                      {/*remove the last coma*/}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/*border*/}
              <div className={"border border-white/20"}></div>
              {/*buttons*/}
              <div className={"flex items-center gap-4"}>
                {/*live button*/}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className={
                          "w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                        }
                      >
                        <BsArrowUpRight
                          className={
                            "text-white text-3xl group-hover:text-accent"
                          }
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/*github button*/}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className={
                          "w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                        }
                      >
                        <BsGithub
                          className={
                            "text-white text-3xl group-hover:text-accent"
                          }
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className={"w-full xl:w-[50%]"}>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className={"xl:h-[520px] mb-12"}
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={item.image}
                          alt=""
                          className="object-cover"
                          fill
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider btns */}
              <WorkSliderBtns
                containerStyles={`flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full 
                justify-between xl:w-max xl:justify-none`}
                btnStyles={`bg-accent hover:bg-accent-hover text-primary text-[22px] h-[44px] w-[44px]
                flex justify-center items-center transition-all`}
                iconStyles={``}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Work;
