const navigationLinks = [
    {
        title: "Home",
        path: "/",
        sublinks: [],
      },
    {
      title: "About",
      path: "/about",
      sublinks: [
        { title: "Timeline", path: "/about#history" },
        { title: "Education", path: "/about#education" },
        { title: "Passions", path: "/about#passions" },
      ],
    },
    {
      title: "Career",
      path: "/career",
      sublinks: [
        { title: "Current Position", path: "/career#current-position" },
        { title: "Past Experiences", path: "/career#past-experiences" },
      ],
    },
    {
      title: "Projects",
      path: "/projects",
      sublinks: [
        { title: "Web Development", path: "/projects#web-development" },
        { title: "Machine Learning", path: "/projects#machine-learning" },
      ],
    },
    {
      title: "Skills",
      path: "/skills",
      sublinks: [],
    },
  ];
  
  export default navigationLinks;