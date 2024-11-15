"use client";

import {
  FaCss3,
  FaDatabase,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

//about data
const about = {
  title: "About me",
  description:
    "Hi, I'm Md. Sholayman, a passionate MERN Stack Developer with a strong background in building dynamic, scalable web applications. With expertise in MongoDB, Express.js, React, and Node.js, I create seamless, responsive user experiences that are optimized for performance. I thrive in collaborative environments and enjoy tackling challenging projects, always staying up-to-date with the latest industry trends and best practices. My focus is on writing clean, maintainable code and delivering quality solutions that meet client needs. Let's build something amazing together!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Md. Sholayman",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+880) 1620565355",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years ",
    },
    {
      fieldName: "Skype",
      fieldValue: "cid.ffd19d0a89a7be9e",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Email",
      fieldValue: "sholayman.dev@gamil.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Not Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English,Bengali",
    },
  ],
};
//experience data
const experience = {
  icon: "/assets/badge.svg",
  title: "My Experience",
  description:
    "I am a skilled MERN Stack Developer with expertise in JavaScript, React, Node.js, and Express.js. I build responsive user interfaces with React, develop scalable backends using Node.js, and design REST APIs with Express. I’m proficient in modern JavaScript, asynchronous programming, and creating seamless full-stack web applications that deliver high performance and maintainability.",
  items: [
    {
      company: "Bd calling ltd.",
      position: "Jr. Mern Stack Developer",
      duration: "2024-Present",
    },
    {
      company: "Bd Cloud Academy",
      position: "Web Instructor",
      duration: "2023-2024",
    },
  ],
};
//education data
const education = {
  icon: "/assets/cap.svg",
  title: "My Education",
  description:
    "I have completed various online courses to enhance my skills in web development, including advanced courses in JavaScript, React, Node.js, and Express.js from platforms like Udemy, Coursera, and freeCodeCamp. These courses have helped me deepen my knowledge and stay up-to-date with industry best practices and emerging technologies.",
  items: [
    {
      institution: "Ostad",
      degree: "Full Stack Web Development With MERN",
      duration: "2023 Jun-2024 Mar",
    },
    {
      institution: "Programming Hero",
      degree: "Web Development With Jhankar Mahbub",
      duration: "2022 Jan-2022 Jun",
    },
  ],
};
//skills data
const skills = {
  title: "My Skills",
  description: "",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaDatabase />,
      name: "mongodb database",
    },
  ],
};

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className={"min-h-[80vh] flex items-center justify-center py-12 xl:py-0"}
    >
      <div className={"container mx-auto"}>
        <Tabs
          defaultValue={"experience"}
          className={"flex flex-col xl:flex-row gap-[60px]"}
        >
          <TabsList
            className={
              "flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6"
            }
          >
            <TabsTrigger value={"experience"}>Experience</TabsTrigger>
            <TabsTrigger value={"education"}>Education</TabsTrigger>
            <TabsTrigger value={"skills"}>Skills</TabsTrigger>
            <TabsTrigger value={"about"}>About me</TabsTrigger>
          </TabsList>
          {/*content*/}
          <div className={"min-h-[70vh] w-full"}>
            {/*experience*/}
            <TabsContent value={"experience"} className={"w-full"}>
              <div
                className={"flex flex-col gap-[30px] text-center xl:text-left"}
              >
                <h3 className={"text-4xl font-bold"}>{experience.title}</h3>
                <p className={"max-w-[600px] text-white/60 mx-auto xl:mx-0"}>
                  {experience.description}
                </p>
                <ScrollArea className={"h-[400px]"}>
                  <ul className={"grid grid-cols-1 lg:grid-cols-2 gap-[30px]"}>
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className={
                            "bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex " +
                            " flex-col justify-center items-center lg:items-start gap-1 "
                          }
                        >
                          <span className={"text-accent"}>{item.duration}</span>
                          <h3
                            className={
                              "text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"
                            }
                          >
                            {item.position}
                          </h3>
                          <div className={"flex items-center gap-3"}>
                            {/*dot*/}
                            <span
                              className={
                                "w-[6px] h-[6px] rounded-full bg-accent"
                              }
                            ></span>
                            <p className={"text-white/60"}>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*education*/}
            <TabsContent value={"education"} className={"w-full"}>
              <div
                className={"flex flex-col gap-[30px] text-center xl:text-left"}
              >
                <h3 className={"text-4xl font-bold"}>{education.title}</h3>
                <p className={"max-w-[600px] text-white/60 mx-auto xl:mx-0"}>
                  {education.description}
                </p>
                <ScrollArea className={"h-[400px]"}>
                  <ul className={"grid grid-cols-1 lg:grid-cols-2 gap-[30px]"}>
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className={
                            "bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex " +
                            " flex-col justify-center items-center lg:items-start gap-1 "
                          }
                        >
                          <span className={"text-accent"}>{item.duration}</span>
                          <h3
                            className={
                              "text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"
                            }
                          >
                            {item.degree}
                          </h3>
                          <div className={"flex items-center gap-3"}>
                            {/*dot*/}
                            <span
                              className={
                                "w-[6px] h-[6px] rounded-full bg-accent"
                              }
                            ></span>
                            <p className={"text-white/60"}>
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*skills*/}
            <TabsContent value={"skills"} className={"w-full"}>
              <div className={"flex flex-col gap-[30px]"}>
                <div
                  className={
                    "flex flex-col gap-[30px] text-center xl:text-left"
                  }
                >
                  <h3 className={"text-4xl font-bold"}>{skills.title}</h3>
                  <p className={"max-w-[600px] text-white/60 mx-auto xl:mx-0"}>
                    {skills.description}
                  </p>
                </div>
                <ul
                  className={
                    "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]"
                  }
                >
                  {skills.skillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger
                              className={
                                "w-full h-[150px] bg-[#232329] rounded-xl flex justify-center" +
                                " items-center group"
                              }
                            >
                              <div
                                className={
                                  "text-6xl group-hover:text-accent transition-all duration-300"
                                }
                              >
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className={"capitalize"}>{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/*about*/}
            <TabsContent
              value={"about"}
              className={"w-full text-center xl:text-left"}
            >
              <div className={"flex flex-col gap-[30px]"}>
                <h3 className={"text-4xl font-bold"}>{about.title}</h3>
                <p className={"max-w-[600px] text-white/60 mx-auto xl:mx-0"}>
                  {about.description}
                </p>
                <ul
                  className={
                    "grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0"
                  }
                >
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={
                          "flex items-center justify-center xl:justify-start gap-4"
                        }
                      >
                        <span className={"text-white/60"}>
                          {item.fieldName}
                        </span>
                        <span className={"text-lg"}> {item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
