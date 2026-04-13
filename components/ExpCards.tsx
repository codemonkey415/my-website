"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "Jul '25 — Present",
    currentPosition: "Team Leader",
    place: "Practice Dilly",
    previousPositions: [""],
    description:
      "Leading a team of four developers in building and maintaining a dental billing platform serving hundreds of dental offices and multiple insurance providers. Oversaw system architecture, task delegation, and integration with third-party APIs to ensure accurate claim processing and efficient data management.",
    skills: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "GCP",
      "Supabase",
      "Google Document AI",
      "Python",
      "Github",
      "Railways"
    ],
  },
  {
    timeline: "Jun '23 — Jul '25",
    currentPosition: "Senior Web Scraper",
    place: "Ascenda",
    previousPositions: [""],
    description:
      "Developed and maintained web scrapers using Python and Selenium to extract data from complex, dynamic, and highly secured sources. My role involves setting technical standards, overseeing data integration processes, and actively contributing to the design and implementation of secure automated solutions for user account information extraction.",
    skills: [
      "Python",
      "Selenium",
      "CapSolver",
      "Playwright",
      "Zenrows",
      "CAPTCHA",
      "Akamai Bot Manager",
      "Kasada",
      "Microsoft Azure",
      "Team Leadership",
    ],
  },
  {
    timeline: "Jun '22 — May '23",
    currentPosition: "Full Stack Developer",
    place: "Neurala",
    previousPositions: [""],
    description:
      "Developed and maintained full-stack web applications using Django and Vue.js for a catering platform and an ed-tech startup, delivering feature updates to enhance user experience and engagement. Designed and implemented a React/Next.js application for group gift exchanges, integrating customizable rules and automated notifications to streamline coordination.",
    skills: [
      "Django",
      "Vue.js",
      "Next.js",
      "NestJS",
      "API Development",
      "DB Mangagement",
      "AWS",
    ],
  },
  {
    timeline: "Sep '20 — May '22",
    currentPosition: "Full Stack Developer",
    place: "Truesec",
    previousPositions: [""],
    description:
      "Developed key features for a decentralized cryptocurrency exchange, including front-end trading interfaces, portfolio management, and back-end functionality. Designed user-friendly tools like a referral tracking system and an administrative dashboard for monitoring metrics and managing backend tasks. Configured and maintained AWS services using both the console and infrastructure-as-code, while resolving critical bugs and executing infrastructure deployments under tight deadlines.",
    skills: [
      "Typescript",
      "Tailwind CSS",
      "React.js",
      "AWS",
      "Next.js",
      "Express.js",
      "GraphQL",
      "Docker",
      "Blockchain tech",
      "Project Management"
    ],
  },
  {
    timeline: "Apr '17 - Mar '20",
    currentPosition: "Software Engineer",
    place: "Slash",
    previousPositions: [""],
    description:
      "Developed and enhanced patient health tracking tools using Angular, Node.js, and PHP, supporting over 200 healthcare facilities. Designed and deployed RESTful APIs in Flask and PHP for seamless third-party integration, improving data synchronization and reducing errors by 25%. Collaborated with the UX team to create responsive and accessible web pages that met healthcare accessibility standards, boosting usability by 20%.",
    skills: [
      "Angular",
      "Node.js",
      "PHP",
      "RESTful API",
      "Flask",
      "React.js",
      "Vue.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Redux",
    ],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-foreground font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
    </section>
  );
}
