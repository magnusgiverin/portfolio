const navigationLinks = [
    {
        title: "Home",
        path: "/",
        sublinks: [],
      },
    {
      title: "About",
      path: "/about#",
      sublinks: [
        { title: "Timeline", path: "/about#timeline" },
        { title: "Education", path: "/about#education" },
      ],
    },
    {
      title: "Career",
      path: "/career#",
      sublinks: [
        { title: "Current Position", path: "/career#current-positions" },
        { title: "Past Experiences", path: "/career#past-experiences" },
      ],
    },
    {
      title: "Projects",
      path: "/projects#",
      sublinks: [
        { title: "Academic Projects", path: "/projects#academic" },
        { title: "Personal Projects", path: "/projects#personal" },
        { title: "Freelance Work", path: "/projects#freelance" },
      ],
    },
  ];
  
  export default navigationLinks;