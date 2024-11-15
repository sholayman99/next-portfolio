import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats"; // Ensure this path is correct



const Home = () => {
  return (
    <section className={"h-full"}>
      <div className={"container mx-auto"}>
        <div
          className={
            "flex flex-col xl:flex-row items-center justify-between xl:pt-8 mx:pb-24"
          }
        >
          {/*text*/}
          <div className={"text-center xl:text-left order-2 xl:order-none"}>
            <span className={"text-xl"}>Mern Stack Developer</span>
            <h1 className={"h1"}>
              Hello I'm <br />
              <span className={"text-accent"}>Md.Sholayman</span>
            </h1>
            <p className={"max-w-[500px] mb-9 text-white/80"}>
              lorem ipsum lorem lorem lorem lorem ipsum ipsum ipsum
            </p>
            {/*buttons & socials*/}
            <div className={"flex flex-col xl:flex-row items-center gap-8"}>
              <Button
                variant={"outline"}
                size={"lg"}
                className={"uppercase flex items-center gap-2"}
              >
                Download CV
                <FiDownload />
              </Button>
              {/*socials*/}
              <div className={"mb-8 xl:mb-0"}>
                <Socials
                  containerStyles={"flex gap-8"}
                  iconStyles={
                    "w-9 h-9 border border-accent rounded-full flex justify-center" +
                    " items-center text-accent hover:bg-accent hover:text-primary" +
                    " hover:transition-all duration-500"
                  }
                />
              </div>
            </div>
          </div>

          {/*photo*/}
          <div className={"order-1 xl:order-none mb-8 xl:mb-0"}>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
