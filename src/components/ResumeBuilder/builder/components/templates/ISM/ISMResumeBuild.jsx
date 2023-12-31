import React from "react";
import BuildResume from "../config/BuildResume";

const ISMResumeBuild = () => {
  const config = {
    name: "Untitled",
    language: "en",
    direction: "ltr",
    sections: [
      {
        name: "Personal Details",
        key: "sections.profile.data",
        type: "static",
        displayKey: "sections.profile.data.name",
        fields: [
          {
            name: "name",
            key: "sections.profile.data.name",
            label: "Name",
            placeholder: "",
            type: "text",
          },
          {
            name: "photo",
            key: "sections.profile.data.photo",
            label: "Upload Photo",
            placeholder: "",
            type: "image",
          },
          {
            name: "degree",
            key: "sections.profile.data.degree",
            label: "Degree",
            placeholder: "",
            type: "text",
          },
          {
            name: "branch",
            key: "sections.profile.data.branch",
            label: "Branch",
            placeholder: "",
            type: "dropdown",
            options: [
              "Applied Geology",
              "Applied Geophysics",
              "Chemical Engineering",
              "Civil Engineering",
              "Computer Science & Engineering",
              "Electrical Engineering",
              "Electronics & Communication Engineering",
              "Electronics & Instrumentation Engineering",
              "Engineering Physics",
              "Environmental Engineering",
              "Mathematics & Computing",
              "Mineral & Metallurgical Engineering",
              "Mechanical Engineering",
              "Mining Engineering",
              "Mining Machinery Engineering",
              "Petroleum Engineering",
            ],
          },
          {
            name: "college",
            key: "sections.profile.data.college",
            label: "College",
            placeholder: "",
            type: "text",
            defaultValue: "IIT (ISM), Dhanbad",
          },
          {
            name: "admissionNumber",
            key: "sections.profile.data.admissionNumber",
            label: "Admission Number",
            placeholder: "",
            type: "text",
          },
          {
            name: "email",
            key: "sections.profile.data.email",
            label: "Email",
            placeholder: "",
            type: "text",
          },
          {
            name: "githubUsername",
            key: "sections.profile.data.githubUsername",
            label: "Github Username",
            placeholder: "",
            type: "text",
          },
          {
            name: "phone",
            key: "sections.profile.data.phone",
            label: "Phone",
            placeholder: "",
            type: "text",
          },
          {
            name: "linkedinUsername",
            key: "sections.profile.data.linkedinUsername",
            label: "LinkedIn Username",
            placeholder: "",
            type: "text",
          },
        ],
      },
      {
        name: "Experience",
        key: "sections.experience.data",
        description: "Experience always counts! Add your experience here.",
        type: "dynamic",
        displayKey: "company",
        fields: [
          {
            name: "company",
            key: "company",
            label: "Company Name",
            placeholder: "",
            type: "text",
          },
          {
            name: "role",
            key: "role",
            label: "Role",
            placeholder: "",
            type: "text",
          },
          {
            name: "timePeriod",
            key: "timePeriod",
            label: "Time Period",
            placeholder: "e.g. (Jan 2020 - Feb 2021)",
            type: "text",
          },
          {
            name: "description",
            key: "description",
            label: "Description",
            placeholder: "e.g. (Worked on ...)",
            type: "textarea",
          },
          {
            name: "points",
            key: "points",
            label: "Key Points",
            placeholder: "",
            type: "list-string",
          },
        ],
      },
      {
        name: "Projects",
        key: "sections.projects.data",
        description: "Good and relevant projects are always a plus!",
        type: "dynamic",
        displayKey: "title",
        fields: [
          {
            name: "title",
            key: "title",
            label: "Title",
            placeholder: "",
            type: "text",
          },
          {
            name: "platform",
            key: "platform",
            label: "Platform",
            placeholder: "e.g. Web Application, etc.",
            type: "text",
          },
          {
            name: "year",
            key: "year",
            label: "Time Period",
            placeholder: "",
            type: "text",
          },
          {
            name: "description",
            key: "description",
            label: "Description",
            placeholder: "",
            type: "textarea",
          },
          {
            name: "points",
            key: "points",
            label: "Feature Points",
            placeholder: "",
            type: "list-string",
          },
          {
            name: "techStack",
            key: "techStack",
            label: "Tech Stack",
            placeholder: "",
            type: "list-string",
          },
          {
            name: "links",
            key: "links",
            label: "Links",
            placeholder: "",
            type: "list",
            displayKey: "name",
            fields: [
              {
                name: "name",
                key: "name",
                label: "Name",
                placeholder: "",
                type: "text",
              },
              {
                name: "url",
                key: "url",
                label: "URL",
                placeholder: "",
                type: "text",
              },
              {
                name: "urlPlaceholder",
                key: "urlPlaceholder",
                label: "URL Placeholder",
                placeholder: "",
                type: "text",
              },
            ],
          },
        ],
      },
      {
        name: "Education",
        key: "sections.education.data",
        description: "Your academic achievements",
        type: "dynamic",
        displayKey: "degree",
        fields: [
          {
            name: "degree",
            key: "degree",
            label: "Degree",
            placeholder: "e.g. B.Tech, Class 12th, etc.",
            type: "text",
          },
          {
            name: "branch",
            key: "branch",
            label: "Branch",
            placeholder: "e.g. Computer Science, Science (PCM), etc.",
            type: "text",
          },
          {
            name: "college",
            key: "college",
            label: "College",
            placeholder: "",
            type: "text",
          },
          {
            name: "year",
            key: "year",
            label: "Year",
            placeholder: "",
            type: "text",
          },
          {
            name: "cgpa",
            key: "cgpa",
            label: "CGPA",
            placeholder: "",
            type: "text",
          },
          {
            name: "percentage",
            key: "percentage",
            label: "Percentage",
            placeholder: "",
            type: "text",
          },
        ],
      },
      {
        name: "Sports Programming",
        key: "sections.sportsProgramming.data",
        description: "Your achievements in competitive programming",
        type: "dynamic",
        displayKey: "platform",
        fields: [
          {
            name: "platform",
            key: "platform",
            label: "Platform",
            placeholder: "",
            type: "text",
          },
          {
            name: "username",
            key: "username",
            label: "Username",
            placeholder: "",
            type: "text",
          },
          {
            name: "rating",
            key: "rating",
            label: "Rating",
            placeholder: "",
            type: "text",
          },
          {
            name: "profileUrl",
            key: "profileUrl",
            label: "Profile URL",
            placeholder: "",
            type: "text",
          },
          {
            name: "questionsSolved",
            key: "questionsSolved",
            label: "Questions Solved",
            placeholder: "",
            type: "text",
          },
        ],
      },
      {
        name: "Technical Skills",
        key: "sections.technicalSkills.data",
        description: "Your technical skills",
        type: "dynamic",
        displayKey: "name",
        fields: [
          {
            name: "name",
            key: "name",
            label: "Name",
            placeholder: "",
            type: "text",
          },
          {
            name: "skills",
            key: "skills",
            label: "Skills",
            placeholder: "",
            type: "list-string",
          },
        ],
      },
      {
        name: "Extra Curriculars",
        key: "sections.extraCurriculars.data",
        description: "Your extra curricular activities",
        type: "list-string",
      },
      {
        name: "Achievements",
        key: "sections.achievements.data",
        description: "Your achievements",
        placeholder: "e.g. Hackathon Winner, etc. (markdown supported)",
        type: "list-string",
      },
      {
        name: "Positions of Responsibility",
        key: "sections.positionsOfResponsibility.data",
        description: "Your positions of responsibility",
        type: "list-string",
      },
    ],
  };
  return <BuildResume config={config} />;
};

export default ISMResumeBuild;
