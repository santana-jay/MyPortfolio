import {
    SiMongodb,
    SiBootstrap,
    SiFastapi, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiDjango,
    SiTailwindcss,
    SiTypescript,
    SiPlanetscale,
    SiOpenai,
    SiMysql,
    SiPython,
    SiGit,
    SiZod,
    SiRabbitmq,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiAuth0,
    SiNodedotjs,
    SiZig,
    SiGithub,
    SiGitlab,
    SiPostgresql,
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Mood Journal",
        description:
            "A user-friendly mood tracking journal website enhanced with AI integration, designed to blend self-reflection with insightful analysis. This innovative platform not only captures your daily emotions but also provides intelligent summaries and mood assessments, enabling you to gain deeper self-awareness. This was also my first app integrating with an AI API. I am very excited to see what else I can do with AI.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiPlanetscale, SiZod, SiOpenai, SiGit],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "PlanetScale DB", "Zod", "OpenAI", "Git"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://planetscale.com/", "https://zod.dev/", "https://platform.openai.com/docs/api-reference", "https://js.langchain.com/"],
        github: "https://github.com/santana-jay/smart-journal.git",
        demo: "https://smart-journal-git-main-jay-santanas-projects.vercel.app/",
        image: "/MoodJournalScreenShot.png",
        available: true,
    },
    {
        id: 1,
        name: "MyDealership",
        description:
            "This dynamic application is designed to help dealerships manage their inventory, service appointments, and customer information. The application is built with Python, Django, and React. I also used PostgreSQL for the database. I am currently working on adding more features to this application.",
        technologies: [SiPython, SiDjango, SiReact, SiHtml5, SiCss3, SiPostgresql, SiGit],
        techNames: ["Python", "Django", "React", "HTML5", "CSS3", "PostgreSQL", "Git"],
        techLinks: ["https://python.org/", "https://www.djangoproject.com/", "https://reactjs.org/", "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5", "https://developer.mozilla.org/en-US/docs/Web/CSS", "https://www.postgresql.org/", "https://git-scm.com/"],
        github: "https://gitlab.com/santana.jazel/My-Dealership-App/",
        demo: "NA",
        image: "/MyDealership.png",
        available: true,
    },
    {
        id: 2,
        name: "Coming Soon",
        description:
            "I'm currently working on a couple of projects. I'll update this section as soon as I'm done.",
        technologies: [SiGitlab, SiGithub, SiGit],
        techNames: ["Gitlab", "Github"],
        techLinks: ["https://gitlab.com/santana.jazel", "https://github.com/santana-jay/"],
        github: "https://gitlab.com/santana.jazel",
        demo: "https://github.com/santana-jay/",
        image: "/projects/construction.webp",
        available: false,
    },
];
