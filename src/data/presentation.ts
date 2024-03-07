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
  profile: "/profile.webp",
  description:
    "I'm a *machine learning engineer* focused on using innovative technology to improve the *healthcare* space. ",
  socials: [
    {
      label: "Kaggle",
      link: "https://twitter.com/itsstormzz_",
    },
    {
      label: "Github",
      link: "https://github.com/dustinbturner",
    },
    {
      label: "Email",
      link: "mailto:dustin@dustinbturner.com",
    },
  ],
};

export default presentation;
