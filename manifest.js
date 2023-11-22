addEventListener("fetch", event => {
  const data = {
    name: "rafraf plage",
    short_name: "rafraf plage",
    description: "Install Now The Web Trick - Let's fuel creativity",
    display: "standalone",
    prefer_related_applications: false,
    start_url: "\/?utm_source=homescreen",
    scope: "\/",
    background_color: "#ffd929",
    theme_color: "#ffd929",
    icons: [
      {
      src: "\/main\/android-icon-512x512.png",
      sizes: "512x512",
      type: "image\/png"
      },
      {
      src: "\/main\/android-icon-192x192.png",
      sizes: "192x192",
      type: "image\/png"
      },
      {
      src: "\/main\/apple-icon-144x144.png",
      sizes: "144x144",
      type: "image\/png"
      },
      {
      src: "\/main\/android-icon-96x96.png",
      sizes: "96x96",
      type: "image\/png"
      },
      {
      src: "\/main\/android-icon-72x72.png",
      sizes: "72x72",
      type: "image\/png"
      },
      {
      src: "\/main\/android-icon-48x48.png",
      sizes: "48x48",
      type: "image\/png"
      },
      {
      src: "\/main\/android-icon-36x36.png",
      sizes: "36x36",
      type: "image\/png"
      }
    ],
    shortcuts: [
      {
      name: "The Web Trick",
      short_name: "The Web Trick",
      description: "The Best Website where you can find Blogger Widgets, Tech News, Tech Reviews, Coding related Tutorials and many more.",
      url: "\/?utm_source=homescreen",
      icons: [
          {
          src: "\/main\/android-icon-192x192.png",
          sizes: "192x192"
          }
        ]
      },
      {
      name: "The Web Trick - Blog",
      short_name: "The Web Trick - Blog",
      description: "Explore The Web Trick Blog.",
      url: "\/search?utm_source=homescreen",
      icons: [
          {
          src: "\/main\/android-icon-192x192.png",
          sizes: "192x192"
          }
        ]
      },
      {
      name: "Blogger Widgets",
      short_name: "Blogger Widgets",
      description: "Useful Widgets for your Blog.",
      url: "\/search\/label\/Widgets?utm_source=homescreen",
      icons: [
          {
          src: "\/main\/android-icon-192x192.png",
          sizes: "192x192"
          }
        ]
      }
    ],
    screenshots: [
      {
      src: "\/main\/scr1.png",
      type: "image\/png",
      sizes: "540x720"
      },
      {
      src: "\/main\/scr2.png",
      type: "image\/png",
      sizes: "540x720"
      },
      {
      src: "\/main\/scr3.png",
      type: "image\/png",
      sizes: "540x720"
      },
      {
      src: "\/main\/scr4.png",
      type: "image\/png",
      sizes: "540x720"
      },
      {
      src: "\/main\/scr5.png",
      type: "image\/png",
      sizes: "540x720"
      }
    ],
    serviceworker: {
      src: "\/sw.js"
    }
  }

  const json = JSON.stringify(data, null, 2)

  return event.respondWith(
    new Response(json, {
      headers: {
        "content-type": "application/json;charset=UTF-8"
      }
    })
  )
})
