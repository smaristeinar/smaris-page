export function getPortFolioItems() {
  return {
    data: [{
        id: 1,
        title: "Vadfanskajagkopa",
        image: {
          url: "images/vadfan.jpg"
        },
        content: "At Coolstuff me and another intern got the chance to build Vadfanskajagkopa, a marketing application built with Svelte-Kit and Typescript on the frontend. The backend uses Cloudflare workers to gather data from separate graphQl APIs (datoCMS and jetshop) and araing the data into Cloudflare’s KV storage. With this project we got to experience building a full stack application with the expectations of delivering a production worthy project as well as setting up a CD/CI pipeline for the project.",
        links: {
          github: undefined,
          url: "https://vadfanskajagkopa.se/",
        },
        tags: ["Clouflare", "Svlete-kit", "Typescript", "GraphQl", "Github actions"]
      },
      {
        id: 2,
        title: "Skateblog",
        image: {
          url: "images/skateblog.jpg"
        },
        content: "My final project for medieinstitutet i wanted to create a blog application using familiare the tech of Vadfanskajagkopa. I decided to use Cloudflare’s kv and edge hosting, algon with Svelte-kit, trying to maximize response time for the user wanting to read the newest skateboarding news. Using Cloudflare workers to manage data in to kv stores",
        links: {
          github: "https://github.com/smaristeinar/Skate-blog",
          url: "https://skate-blog.pages.dev/",
        },
        tags: ["Clouflare", "Svlete-kit", "GraphQl"]
      },
    ],
  };
}