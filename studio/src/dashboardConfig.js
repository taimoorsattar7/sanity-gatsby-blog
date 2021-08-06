export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "610ce20b185b206f9a91c26e",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-vybmkahx",
                  apiId: "6f3d7278-7b6a-4427-94f2-d0140120445a",
                },
                {
                  buildHookId: "610ce20b1ec7267e51b9c427",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-jpy535k3",
                  apiId: "c6e3794a-3204-4295-8beb-849d719a187f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/taimoorsattar7/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-jpy535k3.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
