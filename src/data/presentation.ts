type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "dustin@dustinbturner.com",
  title: "Hi, I’m Dustin",
  // profile: "/profile.webp",
  description:
    "I'm a *machine learning engineer* focused on using innovative technology to improve the *healthcare* space. I am currently working with *NextJS and Typescript*. Outside of work I complete my pokemon card collection and learning TypeScript.",
  socials: [
    {
      label: "Kaggle",
      link: "https://twitter.com/itsstormzz_",
    },
    {
      label: "Github",
      link: "https://github.com/dustinbturner",
    },
  ],
};

export default presentation;
