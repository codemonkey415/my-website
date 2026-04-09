"use client";
/* eslint-disable */

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          Multilingual Senior Full Stack Developer with{" "}
          <span className="text-white">9 years of experience</span> in
          designing and implementing web applications across diverse frameworks
          and architectures.
        </p>
        <p className="text-start  text-muted-foreground lg:px-6">
          Currently, I'm leading a complex dental billing project at{" "}
          <span className="text-white">Practice Dilly</span> that enables financial
          services companies to grow revenue with world-class rewards.
        </p>
        <p className="text-start  text-muted-foreground lg:px-6">
          <span className="text-white">Proven leadership</span> in guiding
          development teams, managing product lifecycles, and building scalable
          front-end and back-end components.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Expertise in robust unit testing, efficient debugging, and code
          maintenance.
        </p>
      </div>
    </section>
  );
}
