const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); 

let runners = [
    {
      id: "0",
      name: "name0",
      bio: "Embarking on a journey is not just about reaching a destination; it's about immersing ourselves in the transformative experience of travel. From the enchanting landscapes to the diverse cultures we encounter, every step ignites our sense of wanderlust. Let's delve into the joy of exploring new horizons, creating unforgettable memories, and embracing the remarkable adventure that travel brings.",
      suburb: "Epsom",
      verified: "yes",
      joined: "12/11/2020",
      nextRunDate: "06/20/2023",
      image: "https://source.unsplash.com/random",
      gender: "female"
    },
    {
      id: "1",
      name: "name1",
      bio: "Embarking on a journey is not just about reaching a destination; it's about immersing ourselves in the transformative experience of travel. From the enchanting landscapes to the diverse cultures we encounter, every step ignites our sense of wanderlust. Let's delve into the joy of exploring new horizons, creating unforgettable memories, and embracing the remarkable adventure that travel brings.",
      suburb: "Epsom",
      verified: "yes",
      joined: "12/11/2020",
      nextRunDate: "06/20/2023",
      image: "https://source.unsplash.com/random",
      gender: "male"
    }
  ];

  app.get("/", (req, res) => {
    res.send(runners);
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
