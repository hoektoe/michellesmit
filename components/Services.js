import React from "react";
import SbEditable from "storyblok-react";
import { render } from "storyblok-rich-text-react-renderer";
import Link from "next/link";
import Image from "next/image";

import { StarIcon } from "@heroicons/react/solid";
const features = [
  {
    name: "Assessments",
    description:
      "Determine the level of care utilizing various assessment tools (tools such as ASSIST, CAGE, DAST etc.)",
    icon: StarIcon,
  },
  {
    name: "Brief Intervention",
    description:
      "Short, focused counseling sessions to address specific issues and promote positive change",
    icon: StarIcon,
  },
  {
    name: "Counselling",
    description:
      "One-on-one or group therapy sessions to support individuals in overcoming challenges and achieving personal growth",
    icon: StarIcon,
  },
  {
    name: "Referrals to practitioners",
    description:
      "psychologists, social workers, psychiatrists, and treatment facilities",
    icon: StarIcon,
  },
  {
    name: "Functional / Relapse analysis",
    description:
      "Identify triggers and develop strategies to prevent relapse and maintain recovery",
    icon: StarIcon,
  },
  {
    name: "Employee Wellness Practitioner",
    description:
      "EAP / HR assistance & development as well as workplace support",
    icon: StarIcon,
  },
  {
    name: "Workplace policy development",
    description:
      "Create and implement comprehensive policies to promote a healthy and supportive work environment",
    icon: StarIcon,
  },
  {
    name: "Family Support Services",
    description:
      "Provide guidance and resources to help families cope with and support loved ones facing challenges",
    icon: StarIcon,
  },
  {
    name: "Program development for workplace and treatment facilities.",
    description:
      "Design and implement tailored programs to address specific needs in various settings",
    icon: StarIcon,
  },
  {
    name: "Training / Workshops",
    description:
      "Workplace support groups, SUD sponsors, health care practitioner & clinic managers, school counselors, etc.",
    icon: StarIcon,
  },
];
export default function Services({ blok }) {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="pb-24 bg-white">
        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-bold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 rounded-lg bg-brand-800">
                    <feature.icon
                      aria-hidden="true"
                      className="w-6 h-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </SbEditable>
  );
}
