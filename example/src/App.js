import React from "react";
import { Setup } from "adplist-react-lib";

export default () => {
  return (
    // <Layout
    //   navItems={{
    //     router: (link) => console.log(link),
    //     items: [
    //       {
    //         name: "Explore",
    //         menu: [
    //           {
    //             name: "Adplist",
    //             link: "https://adplist.org",
    //             target: "adplist",
    //           },
    //           {
    //             name: "Adplist",
    //             link: "https://adplist.org",
    //           },
    //         ],
    //       },
    //       { name: "For mentors", link: "/mentors" },
    //       { name: "Find projects", link: "/projects" },
    //     ],
    //   }}
    //   footerItems={{
    //     impact: true,
    //     newsletter: true,
    //     firstItems: [
    //       { name: "hire designers", link: "https://hire.com" },
    //       { name: "get mentorship", link: "https://hire.com" },
    //       { name: "find jobs", link: "https://hire.com" },
    //       { name: "community resources", link: "https://hire.com" },
    //       { name: "designing for change", link: "https://hire.com" },
    //     ],
    //     secondItems: [
    //       { name: "join adplist", link: "" },
    //       { name: "community standards", link: "" },
    //       { name: "partnerships", link: "" },
    //       { name: "support us", link: "" },
    //       { name: "get help", link: "" },
    //     ],
    //   }}
    // >
    <Setup
      steps={[
        { name: "Hello", key: 1 },
        { name: "World", key: 2 },
        { name: "This", key: 3 },
        { name: "Is", key: 4 },
        { name: "Larry", key: 5 },
      ]}
      header="Hello world"
      active={{ key: 2 }}
      handleSwitch={(e) => console.log(e)}
      handleBack={() => console.log("hi")}
    ></Setup>
    // </Layout>
  );
};
