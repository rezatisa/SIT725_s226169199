var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var destinations = [
  {
    title: "Sydney",
    image: "images/sydney.png",
    link: "https://www.sydney.com/",
    description: "Australia's largest city, known for its stunning harbour, the Sydney Opera House, and the Harbour Bridge. Located on the east coast of New South Wales, it's a major cultural and economic hub famous for its beaches like Bondi and its multicultural population."
  },
  {
    title: "Melbourne",
    image: "images/melbourne.png",
    link: "https://www.melbourne.vic.gov.au/",
    description: "Australia's second-largest city and the capital of Victoria, known for its vibrant arts and coffee culture, laneways full of street art, and status as a major sporting hub (home of the Australian Open and the AFL Grand Final)."
  },
  {
    title: "Uluru",
    image: "images/uluru.png",
    link: "https://parksaustralia.gov.au/uluru/",
    description: "A massive sandstone monolith in the Northern Territory's Red Centre, sacred to the local Aṉangu Aboriginal people and one of Australia's most iconic natural landmarks, famous for changing color at sunrise and sunset."
  }
];

app.get('/api/destinations', (req, res) => {
  res.json(destinations);
});

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("App listening on: " + port);
});