import React, { Suspense } from "react";
import FormSkeleton from "../Common/Skeleton/Skeletons";
const Projects = React.lazy(() => import("../Projects/Projects"));
const Education = React.lazy(() => import("../Education/Education"));
const Certifications = React.lazy(
  () => import("../Certifications/Certifications")
);
const LanguageKnown = React.lazy(
  () => import("../LanguageKnown/LanguageKnown")
);
const PersonalInfo = React.lazy(() => import("../PersonalInfo/PersonalInfo"));
const ProfessionalExperience = React.lazy(
  () => import("../ProfessionalExperience/ProfessionalExperience")
);
const Skills = React.lazy(() => import("../Skills/Skills"));

export const SwitchResumeComponent = ({
  activeStep,
}: {
  activeStep: number;
}) => {
  switch (activeStep) {
    case 0:
      return (
        <Suspense fallback={<FormSkeleton />}>
          <PersonalInfo />
        </Suspense>
      );
    case 1:
      return (
        <Suspense fallback={<FormSkeleton />}>
          <ProfessionalExperience />
        </Suspense>
      );
    case 2:
      return (
        <Suspense fallback={<FormSkeleton />}>
          <Skills />
        </Suspense>
      );
    case 3:
      return (
        <Suspense fallback={<FormSkeleton />}>
          <Projects />
        </Suspense>
      );
    case 4:
      return (
        <Suspense fallback={<FormSkeleton />}>
          <Education />
        </Suspense>
      );
    case 5:
      return (
        <Suspense fallback={<FormSkeleton />}>
          <Certifications />
        </Suspense>
      );
    case 6:
      return (
        <Suspense fallback={<FormSkeleton />}>
          <LanguageKnown />
        </Suspense>
      );
    default:
      return <div>Error: Invalid User Role</div>;
  }
};
