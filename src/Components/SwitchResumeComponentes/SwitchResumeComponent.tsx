import React, { Suspense } from "react";
import FormSkeleton from "../Common/Skeleton/Skeletons";
import Template1 from "../ResumeTemplates/Template1";
import Template2 from "../ResumeTemplates/Template2";
const Projects = React.lazy(() => import("../Projects/Projects"));
const Education = React.lazy(() => import("../Education/Education"));
const Certifications = React.lazy(
  () => import("../Certifications/Certifications")
);
const LanguageKnown = React.lazy(
  () => import("../LanguageKnown/LanguageKnown")
);
const Summary = React.lazy(() => import("../Summary/Summary"));
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
          {/* <PersonalInfo /> */}
          <Template1 />
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
    case 7:
      return (
        <Suspense fallback={<FormSkeleton />}>
          <Summary />
        </Suspense>
      );
    default:
      return <div>Error: Invalid User Role</div>;
  }
};
