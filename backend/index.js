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
      joined: "09/07/2020",
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
    joined: "03/06/2020",
    nextRunDate: "06/20/2023",
    image: "https://xsgames.co/randomusers/avatar.php?g=female&uid=22",
    gender: "female"
 }, 
 {
  id: "3",
  name: "Noah",
  bio: "I believe running is not just about fitness but also a great way to connect with nature. Let's run together and explore the beautiful trails of Epsom!",
  suburb: "Epsom",
  verified: "yes",
  joined: "12/02/2020",
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
  joined: "05/10/2020",
  nextRunDate: "06/20/2023",
  image: "https://xsgames.co/randomusers/avatar.php?g=female&uid=3",
  gender: "female"
}, 
{
  id: "5",
  name: "Oliver",
  bio: "Running is my passion, and I'm excited to connect with like-minded individuals in Epsom who share the same love for staying active and pushing their limits!",
  suburb: "Arch Hill",
  verified: "yes",
  joined: "12/11/2020",
  nextRunDate: "06/20/2023",
  image: "https://xsgames.co/randomusers/avatar.php?g=male&uid=33",
  gender: "male"
},
{
  id: "6",
  name: "James",
  bio: "Running allows me to discover unique locations for my photography. It's also a great way to meet fellow adventurers and share the joy of exploration.",
  suburb: "Auckland CBD",
  verified: "yes",
  joined: "03/05/2022",
  nextRunDate: "06/22/2023",
  image: "https://xsgames.co/randomusers/avatar.php?g=male&uid=10",
  gender: "male",
},
{
  id: "7",
  name: "Sophie",
  bio: "Running is my way of staying active while indulging in the incredible food scene of Auckland CBD. Meeting new people helps me discover hidden gems and share culinary experiences.",
  suburb: "Auckland CBD",
  verified: "yes",
  joined: "07/18/2021",
  nextRunDate: "06/23/2023",
  image: "https://xsgames.co/randomusers/avatar.php?g=female&uid=11",
  gender: "female",
},
{
  id: "8",
  name: "Ben",
  bio: "Running helps me boost my productivity and clear my mind. I enjoy meeting fellow tech enthusiasts during runs, as it sparks interesting conversations and potential collaborations.",
  suburb: "Auckland CBD",
  verified: "yes",
  joined: "09/30/2021",
  nextRunDate: "06/25/2023",
  image: "https://xsgames.co/randomusers/avatar.php?g=male&uid=12",
  gender: "male",
},
{
  id: "9",
  name: "Emma",
  bio: "Running allows me to explore new places and connect with nature. Meeting new people during runs provides a chance to exchange travel stories and plan future adventures together.",
  suburb: "Auckland CBD",
  verified: "yes",
  joined: "02/14/2023",
  nextRunDate: "06/27/2023",
  image: "https://xsgames.co/randomusers/avatar.php?g=female&uid=13",
  gender: "female",
}

  ];

  app.get("/", (req, res) => {
    res.send(runners);
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
