"use client";

import React from "react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiExpress,
  SiFlutter,
  SiDart,
  SiClerk,
} from "react-icons/si";
import { FaDatabase, FaLink, FaAws, FaCode } from "react-icons/fa";

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "NextJs", icon: SiNextdotjs },
  //   { name: "Express", icon: SiExpress },
  { name: "Flutter", icon: SiFlutter },
  { name: "Dart", icon: SiDart },
  { name: "Clerk", icon: SiClerk },

  // { name: "Nodejs", icon: SiNodedotjs },
  // { name: "Python", icon: SiPython },
  // { name: "Langchain", icon: FaLink },
  // { name: "Langgraph", icon: FaLink },
  // { name: "Postgres", icon: SiPostgresql },
  // { name: "Prisma", icon: SiPrisma },
  // { name: "C", icon: FaCode },
  // { name: "Docker", icon: SiDocker },
  // { name: "Kubernetes", icon: SiKubernetes },
  // { name: "AWS", icon: FaAws },
  { name: "Git", icon: SiGit },
];

export default function Skills() {
  return (
    <div className="relative mt-4 w-full">
      <div className="-mx-2 mb-2 w-auto border-t border-solid border-[var(--pattern-fg)] opacity-100 md:-mx-14 dark:opacity-15"></div>
      <div className="flex flex-col items-start space-y-3">
        <h1 className="font-custom py-2 text-3xl font-bold tracking-tight text-neutral-900 md:text-3xl dark:text-neutral-50">
          <span className="link--elara">Skills</span>
        </h1>
      </div>
      <div className="-mx-2 mb-4 w-auto border-t border-solid border-[var(--pattern-fg)] opacity-100 md:-mx-14 dark:opacity-15"></div>

      <div className="flex flex-col items-start space-y-3">
        <p className="font-custom2 mt-3 mb-6 inline-block border border-dashed border-neutral-300 bg-neutral-100 px-2 py-[7px] text-sm text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
          I love working with these technologies to build beautiful and
          functional applications.
        </p>

        <div className="flex flex-wrap items-center gap-2">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex cursor-default items-center gap-1.5 rounded-md border border-neutral-200 bg-neutral-100 px-2.5 py-1.5 transition-colors hover:border-neutral-300 dark:border-neutral-700/50 dark:bg-neutral-800/80 dark:hover:border-neutral-600"
            >
              <skill.icon className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
              <span className="text-xs font-medium text-neutral-700 dark:text-neutral-200">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
