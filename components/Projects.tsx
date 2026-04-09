"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

const jobProjects = [
  {
    imagePath: "/practice-dilly.png",
    title: "Practice Dilly - Dental software",
    description:
      "A platform that helps dental and medical practices streamline operations by integrating tools for scheduling, patient communication, and workflow automation.",
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
    link: "https://www.practicedilly.com/",
  },
  {
    imagePath: "/eso.PNG",
    title: "EasyStreetOffer - Real Estate",
    description:
      "A real estate platform that provides users with a seamless experience for buying, selling, and renting properties. It offers features such as property listings, virtual tours, and a user-friendly interface to connect buyers and sellers.",
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
    link: "https://www.easystreetoffers.com/",
  },
  {
    imagePath: "/ascenda.png",
    title: "Ascenda - Search API provider",
    description:
      "Ascenda is redeem flights search API provider that allows you to search for flights and book them across dozens of world leading airlines.",
    skills: [
      "Python",
      "Selenium",
      "CapSolver",
      "Playwright",
      "Zenrows",
      "CAPTCHA",
      "Akamai Bot Manager",
      "Kasada",
    ],
    link: "https://ascenda.com",
  },
  {
    imagePath: "/amazon.png",
    title: "Amazon Instock Monitor",
    description:
      "Amazon Instock Monitor is a tool that monitors the stock of products on Amazon and sends an discord embed message when the stock is available.",
    skills: [
      "Python",
      "CapSolver",
      "Zenrows",
      "JS",
      "CAPTCHA",
      "Akamai Bot Manager",
    ],
    // link: "https://amazon-instock-monitor.com",
  },
  {
    imagePath: "/ebay.png",
    title: "Ebay Instock Monitor",
    description:
      "Ebay Instock Monitor is a tool that monitors the stock of products on Ebay and sends an discord embed message when the stock is available.",
    skills: [
      "Python",
      "CapSolver",
      "Zenrows",
      "JS",
      "CAPTCHA",
      "Akamai Bot Manager",
    ],
    // link: "https://ebay-instock-monitor.com",
  },
  
  // {
  //   imagePath: "/argos.png",
  //   title: "Argos Instock Monitor",
  //   description:
  //     "Argos Instock Monitor is a tool that monitors the stock of products on Argos and sends an discord embed message when the stock is available.",
  //   skills: ["Python", "CapSolver", "Zenrows", "JS", "CAPTCHA", "Akamai Bot Manager"],
  //   // link: "https://github.com/0xAlexander/my-website",
  // },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}
