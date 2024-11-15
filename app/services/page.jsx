"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Front End Web Development",
    description:
      "Create stunning and responsive user interfaces using HTML, CSS, and JavaScript. This service includes developing engaging layouts, optimizing for various devices, and ensuring a seamless user experience.",
    href: "",
  },
  {
    num: "02",
    title: "Full Stack Web Development",
    description:
      "Build complete web applications by integrating front-end and back-end technologies. This service covers everything from designing user interfaces with React to managing databases and server-side logic with Node.js.",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX Development",
    description:
      "Enhance the user experience by focusing on user-centered design principles. This service involves conducting user research, creating wireframes and prototypes, and ensuring the final product is both visually appealing and highly usable.",
    href: "",
  },
  {
    num: "04",
    title: "BackEnd Web Development",
    description:
      "Develop robust server-side applications that power your web solutions. This service includes API development, database management, and server logic implementation, ensuring efficient data handling and seamless communication between client and server.",
    href: "",
  },
];

function Services() {
  return (
    <section
      className={"min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"}
    >
      <div className={"container mx-auto"}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className={"grid grid-cols-1 md:grid-cols-2 gap-[60px]"}
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className={"flex-1 flex flex-col justify-center gap-6 group"}
              >
                {/*top*/}
                <div className={"w-full flex justify-between items-center"}>
                  <div
                    className={`text-5xl font-extrabold text-outline text-transparent group-hover:[-webkit-text-stroke:1px_#00ff99]
                                transition-all duration-500`}
                  >
                    {service.num}
                  </div>
                  <Link
                    className={`w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent
                                 transition-all duration-500 flex justify-center items-center hover:-rotate-45`}
                    href={service.href || "/"}
                  >
                    <BsArrowDownRight className={"text-primary text-3xl"} />
                  </Link>
                </div>
                {/*heading*/}
                <h2
                  className={
                    "text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500"
                  }
                >
                  {service.title}
                </h2>
                {/*subtitle*/}
                <p className={"text-white/60"}>{service.description}</p>
                {/*border*/}
                <div className={"border-b border-white/20 w-full"}></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
