const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); 

let runners = [
    {
      id: "0",
      name: "Ella",
      bio: "I love my morning runs but it can feel a little lonely. Giving this a try to meet fellow runners and keep up the good work together!",
      suburb: "Epsom",
      verified: "yes",
      joined: "12/11/2020",
      nextRunDate: "06/20/2023",
      image: "https://xsgames.co/randomusers/avatar.php?g=female&uid=1",
      gender: "female"
    },
    {
      id: "1",
      name: "Ethan",
      bio: "I enjoy running in the mornings and would love to find a running partner to stay motivated and explore new routes together!",
      suburb: "Epsom",
      verified: "yes",
      joined: "12/11/2020",
      nextRunDate: "06/20/2023",
      image: "https://xsgames.co/randomusers/avatar.php?g=male&uid=4",
      gender: "male"
   }, 
   {
    id: "2",
    name: "Emma",
    bio: "Running is my passion, and I'm looking for a running buddy to share the joy of outdoor workouts and achieve fitness goals together!",
    suburb: "Epsom",
    verified: "yes",
    joined: "12/11/2020",
    nextRunDate: "06/20/2023",
    image: "https://xsgames.co/randomusers/avatar.php?g=female&uid=2",
    gender: "female"
 }, 
 {
  id: "3",
  name: "Noah",
  bio: "I believe running is not just about fitness but also a great way to connect with nature. Let's run together and explore the beautiful trails of Epsom!",
  suburb: "Epsom",
  verified: "yes",
  joined: "12/11/2020",
  nextRunDate: "06/20/2023",
  image: "https://xsgames.co/randomusers/avatar.php?g=male&uid=5",
  gender: "male"
}, 
{
  id: "4",
  name: "Ava",
  bio: "I'm an avid runner who loves the challenges and rewards of long-distance running. Seeking a running partner to conquer new routes and reach new milestones!",
  suburb: "Arch Hill",
  verified: "yes",
  joined: "12/11/2020",
  nextRunDate: "06/20/2023",
  image: "https://xsgames.co/randomusers/avatar.php?g=female&uid=3",
  gender: "female"
}, 
{
  id: "5",
  name: "Oliver",
  bio: "Running is my passion, and I'm excited to connect with like-minded individuals in Epsom who share the same love for staying active and pushing their limits!",
  suburb: "Epsom",
  verified: "yes",
  joined: "12/11/2020",
  nextRunDate: "06/20/2023",
  image: "https://xsgames.co/randomusers/avatar.php?g=male&uid=6",
  gender: "male"
},

  ];

  app.get("/", (req, res) => {
    res.send(runners);
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
