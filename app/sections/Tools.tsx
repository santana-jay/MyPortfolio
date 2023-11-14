import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import {
    SiAstro,
    SiPython,
    SiFigma,
    SiGit,
    SiGithub,
    SiGitlab,
    SiGooglechrome,
    SiGooglefonts,
    SiJavascript,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTypescript,
    SiDjango,
    SiFastapi,
    SiOracle,
    SiPostgresql,
    SiMongodb,
    SiPrisma,
    SiPlanetscale,
    SiZod,
    SiMysql,
    SiHtml5,
    SiCss3,
    SiCsharp,
    SiRedux,
    SiTailwindcss,
    SiBootstrap,
    SiRabbitmq,
    SiDocker,
    SiVercel,
    SiLinux,
    SiOpenai,
    SiVisualstudiocode,
    SiNodedotjs,
} from "react-icons/si";
import AnimatedTools from "../animations/AnimatedTools.tsx";

const Tools = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="tools"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"TOOLS IM USING."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto w-[100%] lg:max-w-[1200px] justify-center">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.1} text="Development" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.1} stepSize={0.1} iconSize={50}>
                                <SiVisualstudiocode size={50} name={'Visual Studio'}/>
                                <SiGit size={50} name={'Git'}/>
                                <SiGithub size={50} name={'GitHub'}/>
                                <SiGitlab size={50} name={'GitLab'}/>
                                <SiDocker size={50} name={'Docker'}/>
                                <SiVercel size={50} name={'Vercel'}/>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.2} text="Frontend" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.2} stepSize={0.1} iconSize={50}>
                                <SiTypescript size={50} name={'Typescript'}/>
                                <SiJavascript size={50} name={'Javascript'}/>
                                <SiReact size={50} name={'React'}/>
                                <SiRedux size={50} name={'Redux'}/>
                                <SiNodedotjs size={50} name={'Node.js'}/>
                                <SiNextdotjs size={50} name={'Next'}/>
                                <SiHtml5 size={50} name={'HTML5'}/>
                                <SiCss3 size={50} name={'CSS3'}/>
                                <SiTailwindcss size={50} name={'Tailwind CSS'}/>
                                <SiBootstrap size={50} name={'Bootstrap'}/>
                                <SiFigma size={50} name={'Figma'}/>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.3} text="Backend" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.3} stepSize={0.1} iconSize={50}>
                                <SiPython size={50} name={'Python'}/>
                                <SiCsharp size={50} name={'C#'}/>
                                <SiDjango size={50} name={'Django'}/>
                                <SiFastapi size={50} name={'FastAPI'}/>
                                <SiMysql size={50} name={'MySQL'}/>
                                <SiPostgresql size={50} name={'Postgresql'}/>
                                <SiMongodb size={50} name={'MongoDB'}/>
                                <SiPrisma size={50} name={'Prisma'}/>
                                <SiPlanetscale size={50} name={'PlanetScale'}/>
                                <SiZod size={50} name={'Zod'}/>
                                <SiRabbitmq size={50} name={'RabbitMQ'}/>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.4} text="Other" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.4} stepSize={0.1} iconSize={50}>
                                <SiOpenai size={50} name={'OpenAI'}/>
                                <SiLinux size={50} name={'Linux'}/>
                                <SiOracle size={50} name={'Oracle'}/>
                            </AnimatedTools>
                        </div>
                    </div>
                </div>




            </div>
        </section>
    );
};

export default Tools;
