import { useState } from "react";

const [data, setData] = useState({
  all: [
    {
      id: 0,
      title: "The Menu",
      genres: [
        {
          id: 0,
          name: "Horror",
          page: "/genre/horror",
        },
        {
          id: 1,
          name: "Comedy",
          page: "/genre/comedy",
        },
      ],
      releasedDate: "2022",
      runTime: "1h 47m",
      rated: "R",
      imdbScore: 7.3,
      path: "the-menu-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/the-menu.jpg",
    },
    {
      id: 1,
      title: "The Pale Blue Eye",
      genres: [
        {
          id: 0,
          name: "Mystery",
          page: "/genre/mystery",
        },
        {
          id: 1,
          name: "Thriller",
          page: "/genre/thriller",
        },
      ],
      releasedDate: "2022",
      runTime: "2h 8m",
      rated: "R",
      imdbScore: 6.7,
      path: "the-pale-blue-eye-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/the-pale-blue-eye.jpg",
    },
    {
      id: 2,
      title: "Whina",
      genres: [
        {
          id: 0,
          name: "Drama",
          page: "/genre/drama",
        },
      ],
      releasedDate: "2022",
      runTime: "1h 52m",
      rated: "PG",
      imdbScore: 7.7,
      path: "whina-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/whina.jpg",
    },
    {
      id: 3,
      title: "The Banshees of Inisherin",
      genres: [
        {
          id: 0,
          name: "Comedy",
          page: "/genre/comedy",
        },
        {
          id: 1,
          name: "Drama",
          page: "/genre/drama",
        },
      ],
      releasedDate: "2022",
      runTime: "1h 54m",
      rated: "R",
      imdbScore: 7.8,
      path: "the-banshees-of-inisherin-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/the-banshees-of-inisherin.jpg",
    },
    {
      id: 4,
      title: "Luckiest Girl Alive",
      genres: [
        {
          id: 0,
          name: "Mystery",
          page: "/genre/mystery",
        },
        {
          id: 1,
          name: "Drama",
          page: "/genre/drama",
        },
      ],
      releasedDate: "2022",
      runTime: "1h 55m",
      rated: "R",
      imdbScore: 6.4,
      path: "luckiest-girl-alive-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/luckiest-girl-alive.jpg",
    },
    {
      id: 5,
      title: "Black Adam",
      genres: [
        {
          id: 0,
          name: "Action",
          page: "/genre/action",
        },
        {
          id: 1,
          name: "Fantasy",
          page: "/genre/fantasy",
        },
      ],
      releasedDate: "2022",
      runTime: "2h 5m",
      rated: "FSK 12",
      imdbScore: 6.4,
      path: "black-adam-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/black-adam.jpg",
    },
    {
      id: 6,
      title: "Bullet Train",
      genres: [
        {
          id: 0,
          name: "Action",
          page: "/genre/action",
        },
        {
          id: 1,
          name: "Thriller",
          page: "/genre/thriller",
        },
      ],
      releasedDate: "2022",
      runTime: "2h 6m",
      rated: "FSK 16",
      imdbScore: 7.3,
      path: "bullet-train-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/bullet-train.jpg",
    },
    {
      id: 7,
      title: "The Gray Man",
      genres: [
        {
          id: 0,
          name: "Action",
          page: "/genre/action",
        },
        {
          id: 1,
          name: "Thriller",
          page: "/genre/thriller",
        },
      ],
      releasedDate: "2022",
      runTime: "2h 2m",
      rated: "R",
      imdbScore: 6.5,
      path: "the-gray-man-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/the-gray-man.jpg",
    },
    {
      id: 8,
      title: "The Green Knight",
      genres: [
        {
          id: 0,
          name: "Adventure",
          page: "/genre/adventure",
        },
        {
          id: 1,
          name: "Drama",
          page: "/genre/drama",
        },
      ],
      releasedDate: "2022",
      runTime: "2h 5m",
      rated: "R",
      imdbScore: 6.6,
      path: "the-green-knight-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/the-green-knight.jpg",
    },
    {
      id: 9,
      title: "Glass Onion: A Knives Out Mystery",
      releasedDate: "2022",
      genres: [
        {
          id: 0,
          name: "Mystery",
          page: "/genre/mystery",
        },
        {
          id: 1,
          name: "Crime",
          page: "/genre/crime",
        },
      ],
      runTime: "2h 19m",
      rated: "PG-13",
      imdbScore: 7.2,
      path: "glass-onion-a-knives-out-mystery-2022",
      type: "movie",
      poster:
        "/src/assets/posters/movies/poster/glass-onion-a-knives-out-mystery.jpg",
    },
    {
      id: 10,
      title: "The Pirates: The Last Royal Treasure",
      genres: [
        {
          id: 0,
          name: "Adventure",
          page: "/genre/adventure",
        },
        {
          id: 1,
          name: "Action",
          page: "/genre/action",
        },
      ],
      releasedDate: "2022",
      runTime: "2h 5m",
      rated: "R",
      imdbScore: 6.1,
      path: "the-pirates-the-last-royal-treasure-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/the-pirates.jpg",
    },
    {
      id: 11,
      title: "Uncharted",
      genres: [
        {
          id: 0,
          name: "Action",
          page: "/genre/action",
        },
        {
          id: 1,
          name: "Adventure",
          page: "/genre/adventure",
        },
      ],
      releasedDate: "2022",
      runTime: "1h 56m",
      rated: "PG-13",
      imdbScore: 6.3,
      path: "uncharted-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/uncharted.jpg",
    },
    {
      id: 12,
      title: "Blonde",
      genres: [
        {
          id: 0,
          name: "Drama",
          page: "/genre/drama",
        },
      ],
      releasedDate: "2022",
      runTime: "2h 46m",
      rated: "R",
      imdbScore: 5.5,
      path: "blonde-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/blonde.jpg",
    },
    {
      id: 13,
      title: "The Man From Toronto",
      genres: [
        {
          id: 0,
          name: "Action",
          page: "/genre/action",
        },
        {
          id: 1,
          name: "Comedy",
          page: "/genre/comedy",
        },
      ],
      releasedDate: "2022",
      runTime: "1h 52m",
      rated: "PG-13",
      imdbScore: 5.8,
      path: "the-man-from-toronto-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/the-man-from-toronto.jpg",
    },
    {
      id: 14,
      title: "The Batman",
      genres: [
        {
          id: 0,
          name: "Action",
          page: "/genre/action",
        },
        {
          id: 1,
          name: "Adventure",
          page: "/genre/adventure",
        },
      ],
      releasedDate: "2022",
      runTime: "2h 56m",
      rated: "PG-13",
      imdbScore: 7.8,
      path: "the-batman-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/the-batman.jpg",
    },
    {
      id: 15,
      title: "The Super Mario Bros",
      genres: [
        {
          id: 0,
          name: "Comedy",
          page: "/genre/comedy",
        },
        {
          id: 1,
          name: "Adventure",
          page: "/genre/adventure",
        },
      ],
      releasedDate: "2023",
      runTime: "1h 32m",
      rated: "PG",
      imdbScore: 0,
      path: "the-super-mario-bros-2022",
      type: "animation",
      poster: "/src/assets/posters/animations/poster/the-super-mario-bros.jpg",
    },
    {
      id: 16,
      title: "The Sea Beast",
      genres: [
        {
          id: 0,
          name: "Adventure",
          page: "/genre/adventure",
        },
        {
          id: 1,
          name: "Comedy",
          page: "/genre/comedy",
        },
      ],
      releasedDate: "2022",
      runTime: "1h 59m",
      rated: "PG",
      imdbScore: 7,
      path: "the-sea-beast-2022",
      type: "animation",
      poster: "/src/assets/posters/animations/poster/the-sea-beast.jpg",
    },
    {
      id: 17,
      title: "Puss in Boots: The Last Wish",
      genres: [
        {
          id: 0,
          name: "Adventure",
          page: "/genre/adventure",
        },
        {
          id: 1,
          name: "Comedy",
          page: "/genre/comedy",
        },
      ],
      releasedDate: "2022",
      runTime: "1h 40m",
      rated: "PG",
      imdbScore: 7.9,
      path: "puss-in-boots-the-last-wish",
      type: "animation",
      poster:
        "/src/assets/posters/animations/poster/puss-in-boots-the-last-wish.jpg",
    },
    {
      id: 18,
      title: "Jujutsu Kaisen",
      genres: [
        {
          id: 0,
          name: "Action ",
          page: "/genre/action ",
        },
        {
          id: 1,
          name: "Fantasy",
          page: "/genre/fantasy",
        },
      ],
      releasedDate: "2022",
      runTime: "24min",
      rated: "15+",
      imdbScore: 8.5,
      path: "jujutsu-kaisen-2022",
      type: "anime",
      poster: "/src/assets/posters/animes/poster/jujutsu-kaisen.jpg",
    },
    {
      id: 19,
      title: "Chainsaw Man",
      genres: [
        {
          id: 0,
          name: "Action",
          page: "/genre/action",
        },
        {
          id: 1,
          name: "Adventure",
          page: "/genre/adventure",
        },
        {
          id: 2,
          name: "Comedy",
          page: "/genre/comedy",
        },
        {
          id: 3,
          name: "Fantasy",
          page: "/genre/fantasy",
        },
      ],
      releasedDate: "2022",
      runTime: "24m",
      rated: "18+",
      imdbScore: 8.5,
      path: "chainsaw-man-2022",
      type: "anime",
      poster: "/src/assets/posters/animes/poster/chainsaw-man.jpg",
    },
  ],
  movies: [
    {
      id: 0,
      title: "The Menu",
      genres: [
        {
          id: 0,
          name: "Horror",
          page: "/genre/horror",
        },
        {
          id: 1,
          name: "Comedy",
          page: "/genre/comedy",
        },
      ],
      releasedDate: "2022",
      runTime: "1h 47m",
      rated: "R",
      imdbScore: 7.3,
      path: "the-menu-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/the-menu.jpg",
      widePoster: "",
      screenshot: "/src/assets/posters/movies/screenshot/the-menu.jpg",
      isBookmarked: false,
      directors: [
        {
          id: 0,
          name: "Mark Mylod",
          page: "/director/mark-mylod",
        },
      ],
      actors: [
        {
          id: 0,
          name: "Ralph Fiennes",
          characterName: "Chef Slowik",
          page: "/actor/ralph-fiennes",
        },
        {
          id: 1,
          name: "Anya Taylor-Joy",
          characterName: "Margot",
          page: "/actor/anya-taylor-joy",
        },
        {
          id: 2,
          name: "Nicholas Hoult",
          characterName: "Tyler",
          page: "/actor/nicholas-hoult",
        },
      ],
      countries: [
        {
          id: 0,
          name: "USA",
          page: "country/USA",
          flag: "/src/assets/country-flag/usa.png",
        },
      ],
      story:
        "A young couple travels to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises.",
    },
    {
      id: 1,
      title: "The Pale Blue Eye",
      genres: [
        {
          id: 0,
          name: "Mystery",
          page: "/genre/mystery",
        },
        {
          id: 1,
          name: "Thriller",
          page: "/genre/thriller",
        },
      ],
      releasedDate: "2022",
      runTime: "2h 8m",
      rated: "R",
      imdbScore: 6.7,
      path: "the-pale-blue-eye-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/the-pale-blue-eye.jpg",
      widePoster: "",
      screenshot: "/src/assets/posters/movies/screenshot/the-pale-blue-eye.jpg",
      isBookmarked: false,
      directors: [
        {
          id: 0,
          name: "Scott Cooper",
          page: "/director/scott-cooper",
        },
      ],
      actors: [
        {
          id: 0,
          name: "Christian Bale",
          characterName: "Augustus Landor",
          page: "/actor/christian-bale",
        },
        {
          id: 1,
          name: "Gillian Anderson",
          characterName: "Mrs. Julia Marquis",
          page: "/actor/gillian-anderson",
        },
        {
          id: 2,
          name: "Harvey Melling",
          characterName: "Edgar Allan Poe",
          page: "/actor/harvey-melling",
        },
      ],
      countries: [
        {
          id: 0,
          name: "USA",
          page: "country/USA",
          flag: "/src/assets/country-flag/usa.png",
        },
      ],
      story:
        "Veteran detective Augustus Landor investigates a series of grisly murders with the help of a young cadet who will eventually go on to become the world-famous author Edgar Allan Poe.",
    },
    {
      id: 2,
      title: "Whina",
      genres: [
        {
          id: 0,
          name: "Drama",
          page: "/genre/drama",
        },
      ],
      releasedDate: "2022",
      runTime: "1h 52m",
      rated: "PG",
      imdbScore: 7.7,
      path: "whina-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/whina.jpg",
      widePoster: "",
      screenshot: "/src/assets/posters/movies/screenshot/whina.jpg",
      isBookmarked: false,
      directors: [
        {
          id: 0,
          name: "James Napier Robertson",
          page: "/director/james-napier-robertson",
        },
        {
          id: 1,
          name: "Paula Whetu Jones",
          page: "/director/paula-whetu-jones",
        },
      ],
      actors: [
        {
          id: 0,
          name: "Rena Owen",
          characterName: "Older Whina Cooper",
          page: "/actor/rena-owen",
        },
        {
          id: 1,
          name: "James Rolleston",
          characterName: "Gabriel",
          page: "/actor/james-rolleston",
        },
        {
          id: 2,
          name: "Miriama McDowell",
          characterName: "Younger Whina Cooper",
          page: "/actor/miriama-mcDowell",
        },
      ],
      countries: [
        {
          id: 0,
          name: "NewZealand",
          page: "country/new-zealand",
          flag: "/src/assets/country-flag/new-zealand.png",
        },
      ],
      story:
        "A biopic of the trailblazing Maori leader, Dame Whina Cooper, whose extraordinary life saw her break gender boundaries, champion the rights of Maori, and fight for the land - all the while staying true to her heart and her beliefs.",
    },
    {
      id: 3,
      title: "The Banshees of Inisherin",
      genres: [
        {
          id: 0,
          name: "Comedy",
          page: "/genre/comedy",
        },
        {
          id: 1,
          name: "Drama",
          page: "/genre/drama",
        },
      ],
      releasedDate: "2022",
      runTime: "1h 54m",
      rated: "R",
      imdbScore: 7.8,
      path: "the-banshees-of-inisherin-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/the-banshees-of-inisherin.jpg",
      widePoster: "",
      screenshot:
        "/src/assets/posters/movies/screenshot/the-banshees-of-inisherin.jpg",
      isBookmarked: false,
      directors: [
        {
          id: 0,
          name: "Martin McDonagh",
          page: "/director/martin-mcconagh",
        },
      ],
      actors: [
        {
          id: 0,
          name: "Colin Farrell",
          characterName: "Pádraic Súilleabháin",
          page: "/actor/colin-farrell",
        },
        {
          id: 1,
          name: "Brendan Gleeson",
          characterName: "Colm Doherty",
          page: "/actor/brendan-gleeson",
        },
        {
          id: 2,
          name: "Kerry Condon",
          characterName: "Siobhán Súilleabháin",
          page: "/actor/kerry-condon",
        },
      ],
      countries: [
        {
          id: 0,
          name: "UK",
          page: "country/UK",
          flag: "/src/assets/country-flag/uk.png",
        },
      ],
      story:
        "Two lifelong friends find themselves at an impasse when one abruptly ends their relationship, with alarming consequences for both of them.",
    },
    {
      id: 4,
      title: "Luckiest Girl Alive",
      genres: [
        {
          id: 0,
          name: "Mystery",
          page: "/genre/mystery",
        },
        {
          id: 1,
          name: "Drama",
          page: "/genre/drama",
        },
      ],
      releasedDate: "2022",
      runTime: "1h 55m",
      rated: "R",
      imdbScore: 6.4,
      path: "luckiest-girl-alive-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/luckiest-girl-alive.jpg",
      widePoster: "",
      screenshot:
        "/src/assets/posters/movies/screenshot/the-luckiest-girl-alive.jpg",
      isBookmarked: false,
      directors: [
        {
          id: 0,
          name: "Mike Barker",
          page: "/director/mike-barker",
        },
      ],
      actors: [
        {
          id: 0,
          name: "Mila Kunis",
          characterName: "Ani Fanelli",
          page: "/actor/mila-kunis",
        },
        {
          id: 1,
          name: "Chiara Aurelia",
          characterName: "Young Ani",
          page: "/actor/chiara-aurelia",
        },
        {
          id: 2,
          name: "Finn Witrrock",
          characterName: "Luke Harrison",
          page: "/actor/finn-witrrock",
        },
      ],
      countries: [
        {
          id: 0,
          name: "USA",
          page: "country/USA",
          flag: "/src/assets/country-flag/usa.png",
        },
      ],
      story:
        "A writer's perfectly crafted New York City life starts to unravel when a true-crime documentary forces her to confront her harrowing high school history and question the choices she made as a teenager.",
    },
    {
      id: 5,
      title: "Black Adam",
      genres: [
        {
          id: 0,
          name: "Action",
          page: "/genre/action",
        },
        {
          id: 1,
          name: "Fantasy",
          page: "/genre/fantasy",
        },
      ],
      releasedDate: "2022",
      runTime: "2h 5m",
      rated: "FSK 12",
      imdbScore: 6.4,
      path: "black-adam-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/black-adam.jpg",
      widePoster: "",
      screenshot: "/src/assets/posters/movies/screenshot/black-adam.jpg",
      isBookmarked: false,
      directors: [
        {
          id: 0,
          name: "Jaume Collet-Serra",
          page: "/director/jaume-collet-serra",
        },
      ],
      actors: [
        {
          id: 0,
          name: "Dwayne Johnson",
          characterName: "Black Adam",
          page: "/actor/dwayne-johnson",
        },
        {
          id: 1,
          name: "Sarah Shahi",
          characterName: "Isis",
          page: "/actor/sarah-shahi",
        },
        {
          id: 2,
          name: "Pierce Bronsnan",
          characterName: "Doctor Fate",
          page: "/actor/pierce-bronsnan",
        },
      ],
      countries: [
        {
          id: 0,
          name: "USA",
          page: "country/USA",
          flag: "/src/assets/country-flag/usa.png",
        },
      ],
      story:
        "After being bestowed with godly powers and imprisoned for it, Black Adam is liberated from his earthly binds to unleash his fury on the modern world.",
    },
    {
      id: 6,
      title: "Bullet Train",
      genres: [
        {
          id: 0,
          name: "Action",
          page: "/genre/action",
        },
        {
          id: 1,
          name: "Thriller",
          page: "/genre/thriller",
        },
      ],
      releasedDate: "2022",
      runTime: "2h 6m",
      rated: "FSK 16",
      imdbScore: 7.3,
      path: "bullet-train-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/bullet-train.jpg",
      widePoster: "",
      screenshot: "/src/assets/posters/movies/screenshot/bullet-train",
      isBookmarked: false,
      directors: [
        {
          id: 0,
          name: "David Leitch",
          page: "/director/david-leitch",
        },
      ],
      actors: [
        {
          id: 0,
          name: "Brad Pitt",
          characterName: "Ladybug",
          page: "/actor/brad-pitt",
        },
        {
          id: 1,
          name: "Aaron Taylor-Johnson",
          characterName: "Tangerine",
          page: "/actor/aaron-taylor-johnson",
        },
        {
          id: 2,
          name: "Joey King",
          characterName: "The Prince",
          page: "/actor/joey-king",
        },
      ],
      countries: [
        {
          id: 0,
          name: "USA",
          page: "country/USA",
          flag: "/src/assets/country-flag/usa.png",
        },
      ],
      story:
        "Ladybug is an unlucky assassin who's determined to do his job peacefully after one too many gigs has gone off the rails. Fate, however, may have other plans as his latest mission puts him on a collision course with lethal adversaries from around the globe -- all with connected yet conflicting objectives -- on the world's fastest train.",
    },
    {
      id: 7,
      title: "The Gray Man",
      genres: [
        {
          id: 0,
          name: "Action",
          page: "/genre/action",
        },
        {
          id: 1,
          name: "Thriller",
          page: "/genre/thriller",
        },
      ],
      releasedDate: "2022",
      runTime: "2h 2m",
      rated: "R",
      imdbScore: 6.5,
      path: "the-gray-man-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/the-gray-man.jpg",
      widePoster: "/src/assets/posters/movies/wide-poster/the-gray-man.jpg",
      screenshot: "/src/assets/posters/movies/screenshot/the-gray-man.jpg",
      isBookmarked: false,
      directors: [
        {
          id: 0,
          name: "Joe Russo",
          page: "/director/joe-russo",
        },
        {
          id: 0,
          name: "Anthony Russo",
          page: "/director/anthony-russo",
        },
      ],
      actors: [
        {
          id: 0,
          name: "Ryan Gosling",
          characterName: "Siz",
          page: "/actor/ryan-gosling",
        },
        {
          id: 1,
          name: "Ana de Armas",
          characterName: "Dani Miranda",
          page: "/actor/ana-de-armas",
        },
        {
          id: 2,
          name: "Chris Evans",
          characterName: "Lioyd Hansen",
          page: "/actor/chris-evans",
        },
      ],
      countries: [
        {
          id: 0,
          name: "USA",
          page: "country/USA",
          flag: "/src/assets/country-flag/usa.png",
        },
      ],
      story:
        "When the CIA's top asset -- his identity known to no one -- uncovers agency secrets, he triggers a global hunt by assassins set loose by his ex-colleague.",
    },
    {
      id: 8,
      title: "The Green Knight",
      genres: [
        {
          id: 0,
          name: "Adventure",
          page: "/genre/adventure",
        },
        {
          id: 1,
          name: "Drama",
          page: "/genre/drama",
        },
      ],
      releasedDate: "2022",
      runTime: "2h 5m",
      rated: "R",
      imdbScore: 6.6,
      path: "the-green-knight-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/the-green-knight.jpg",
      widePoster: "/src/assets/posters/movies/wide-poster/the-green-knight.jpg",
      screenshot: "/src/assets/posters/movies/screenshot/the-green-knight.jpg",
      isBookmarked: false,
      directors: [
        {
          id: 0,
          name: "David Lowery",
          page: "/director/david-lowery",
        },
      ],
      actors: [
        {
          id: 0,
          name: "Dev Patel",
          characterName: "Gawain",
          page: "/actor/dev-Patel",
        },
        {
          id: 1,
          name: "Alicia Vikander",
          characterName: "Essel",
          page: "/actor/alicia-vikander",
        },
        {
          id: 2,
          name: "Barry Keoghan",
          characterName: "Scavenger",
          page: "/actor/barry-keoghan",
        },
      ],
      countries: [
        {
          id: 0,
          name: "USA",
          page: "country/USA",
          flag: "/src/assets/country-flag/usa.png",
        },
      ],
      story:
        "When the CIA's top asset -- his identity known to no one -- uncovers agency secrets, he triggers a global hunt by assassins set loose by his ex-colleague.",
    },
    {
      id: 9,
      title: "Glass Onion: A Knives Out Mystery",
      releasedDate: "2022",
      genres: [
        {
          id: 0,
          name: "Mystery",
          page: "/genre/mystery",
        },
        {
          id: 1,
          name: "Crime",
          page: "/genre/crime",
        },
      ],
      runTime: "2h 19m",
      rated: "PG-13",
      imdbScore: 7.2,
      path: "glass-onion-a-knives-out-mystery-2022",
      type: "movie",
      poster:
        "/src/assets/posters/movies/poster/glass-onion-a-knives-out-mystery.jpg",
      widePoster: "",
      screenshot:
        "/src/assets/posters/movies/screenshot/glass-onion-a-knives-out-mystery.jpg",
      isBookmarked: false,
      directors: [
        {
          id: 0,
          name: "Rian Johnson",
          page: "/director/rian-johnson",
        },
      ],
      actors: [
        {
          id: 0,
          name: "Daniel Craig",
          characterName: "Detective Benoit Blanc",
          page: "/actor/daniel-craig",
        },
        {
          id: 1,
          name: "Edward Norton",
          characterName: "Miles Bron",
          page: "/actor/edward-norton",
        },
        {
          id: 2,
          name: "Madelyn Cline",
          characterName: "Whiskey",
          page: "/actor/madelyn-cline",
        },
      ],
      countries: [
        {
          id: 0,
          name: "USA",
          page: "country/USA",
          flag: "/src/assets/country-flag/usa.png",
        },
      ],
      story:
        "Tech billionaire Miles Bron invites his friends for a getaway on his private Greek island. When someone turns up dead, Detective Benoit Blanc is put on the case.",
    },
    {
      id: 10,
      title: "The Pirates: The Last Royal Treasure",
      genres: [
        {
          id: 0,
          name: "Adventure",
          page: "/genre/adventure",
        },
        {
          id: 1,
          name: "Action",
          page: "/genre/action",
        },
      ],
      releasedDate: "2022",
      runTime: "2h 5m",
      rated: "R",
      imdbScore: 6.1,
      path: "the-pirates-the-last-royal-treasure-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/the-pirates.jpg",
      widePoster: "/src/assets/posters/movies/wide-poster/the-pirates.jpg",
      screenshot: "/src/assets/posters/movies/screenshot/the-pirates.jpg",
      isBookmarked: false,
      directors: [
        {
          id: 0,
          name: " Kim Jeong-Hoon",
          page: "/director/kim-jeong-hoon",
        },
      ],
      actors: [
        {
          id: 0,
          name: "Han Hyo-joo",
          characterName: "Hae-rang",
          page: "/actor/han-hyo-joo",
        },
        {
          id: 1,
          name: "Kang Ha-neul",
          characterName: "Woo Moo-chi",
          page: "/actor/kan-ha-neul",
        },
        {
          id: 2,
          name: "Chae Soo-bin",
          characterName: "Hae-geum",
          page: "/actor/chae-soo-bin",
        },
      ],
      countries: [
        {
          id: 0,
          name: "Korea",
          page: "/country/Korea",
          flag: "/src/assets/country-flag/korea.png",
        },
      ],
      story:
        "A gutsy crew of Joseon pirates and bandits battle stormy waters, puzzling clues and militant rivals in search of royal gold lost at sea.",
    },
    {
      id: 11,
      title: "Uncharted",
      genres: [
        {
          id: 0,
          name: "Action",
          page: "/genre/action",
        },
        {
          id: 1,
          name: "Adventure",
          page: "/genre/adventure",
        },
      ],
      releasedDate: "2022",
      runTime: "1h 56m",
      rated: "PG-13",
      imdbScore: 6.3,
      path: "uncharted-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/uncharted.jpg",
      widePoster: "/src/assets/posters/movies/wide-poster/uncharted.jpg",
      screenshot: "/src/assets/posters/movies/screenshot/uncharted.jpg",
      isBookmarked: false,
      directors: [
        {
          id: 0,
          name: "Ruben Fleischer",
          page: "/director/ruben-fleischer",
        },
      ],
      actors: [
        {
          id: 0,
          name: "Tom Holland",
          characterName: "Nathan Drake",
          page: "/actor/Tom Holland",
        },
        {
          id: 1,
          name: "Rudy Pankow",
          characterName: "Young Sam",
          page: "/actor/rudy-pankow",
        },
        {
          id: 2,
          name: "Mark Wahlberg",
          characterName: "Victor Sullivan",
          page: "/actor/mark-wahlberg",
        },
      ],
      countries: [
        {
          id: 0,
          name: "USA",
          page: "/country/USA",
          flag: "/src/assets/country-flag/usa.png",
        },
      ],
      story:
        "Treasure hunter Victor 'Sully' Sullivan recruits street-smart Nathan Drake to help him recover a 500-year-old lost fortune amassed by explorer Ferdinand Magellan.",
    },
    {
      id: 12,
      title: "Blonde",
      genres: [
        {
          id: 0,
          name: "Drama",
          page: "/genre/drama",
        },
      ],
      releasedDate: "2022",
      runTime: "2h 46m",
      rated: "R",
      imdbScore: 5.5,
      path: "blonde-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/blonde.jpg",
      widePoster: "/src/assets/posters/movies/wide-poster/blonde.jpg",
      screenshot: "/src/assets/posters/movies/screenshot/blonde.jpg",
      isBookmarked: false,
      directors: [
        {
          id: 0,
          name: "Andrew Dominik",
          page: "/director/andrew-dominik",
        },
      ],
      actors: [
        {
          id: 0,
          name: "Ana de Armas",
          characterName: "Marilyn Monroe",
          page: "/actor/ana-de-armas",
        },
        {
          id: 1,
          name: "Adrien Brody",
          characterName: "The Playwright",
          page: "/actor/adrien-brody",
        },
        {
          id: 2,
          name: "Sara Paxton",
          characterName: "Miss Flynn",
          page: "/actor/sara-paxton",
        },
      ],
      countries: [
        {
          id: 0,
          name: "USA",
          page: "/country/USA",
          flag: "/src/assets/country-flag/usa.png",
        },
      ],
      story:
        "A look at the rise to fame and the epic demise of actress Marilyn Monroe, one of the biggest stars in the world.",
    },
    {
      id: 13,
      title: "The Man From Toronto",
      genres: [
        {
          id: 0,
          name: "Action",
          page: "/genre/action",
        },
        {
          id: 1,
          name: "Comedy",
          page: "/genre/comedy",
        },
      ],
      releasedDate: "2022",
      runTime: "1h 52m",
      rated: "PG-13",
      imdbScore: 5.8,
      path: "the-man-from-toronto-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/the-man-from-toronto.jpg",
      widePoster:
        "/src/assets/posters/movies/wide-poster/the-man-from-toronto.jpg",
      screenshot:
        "/src/assets/posters/movies/screenshot/the-man-from-toronto.jpg",
      isBookmarked: false,
      directors: [
        {
          id: 0,
          name: "Patrick-hughes",
          page: "/director/patrick-hughes",
        },
      ],
      actors: [
        {
          id: 0,
          name: "Kevin Hart",
          characterName: "Teddy",
          page: "/actor/kevin-hart",
        },
        {
          id: 1,
          name: "Woody Harrelson",
          characterName: "The Man From Toronto",
          page: "/actor/woody-harrelson",
        },
        {
          id: 2,
          name: "Kaley Cuoco",
          characterName: "Anne",
          page: "/actor/kaley-cuoco",
        },
      ],
      countries: [
        {
          id: 0,
          name: "USA",
          page: "/country/USA",
          flag: "/src/assets/country-flag/usa.png",
        },
      ],
      story:
        "A case of mistaken identity forces a bumbling entrepreneur to team up with a notorious assassin in hopes of staying alive.",
    },
    {
      id: 14,
      title: "The Batman",
      genres: [
        {
          id: 0,
          name: "Action",
          page: "/genre/action",
        },
        {
          id: 1,
          name: "Adventure",
          page: "/genre/adventure",
        },
      ],
      releasedDate: "2022",
      runTime: "2h 56m",
      rated: "PG-13",
      imdbScore: 7.8,
      path: "the-batman-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/the-batman.jpg",
      widePoster: "/src/assets/posters/movies/wide-poster/the-batman.jpg",
      screenshot: "/src/assets/posters/movies/screenshot/the-batman.jpg",
      isBookmarked: false,
      directors: [
        {
          id: 0,
          name: "Matt Reeves",
          page: "/director/matt-reeves",
        },
      ],
      actors: [
        {
          id: 0,
          name: "Robert Pattinson",
          characterName: "Batman",
          page: "/actor/robert-pattinson",
        },
        {
          id: 1,
          name: "Zoe Kravitz",
          characterName: "Selina Kyle",
          page: "/actor/zoe-kravitz",
        },
        {
          id: 2,
          name: "Paul Dano",
          characterName: "Riddler",
          page: "/actor/paul-dano",
        },
      ],
      countries: [
        {
          id: 0,
          name: "USA",
          page: "/country/USA",
          flag: "/src/assets/country-flag/usa.png",
        },
      ],
      story:
        "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues. As the evidence begins to lead closer to home and the scale of the perpetrator's plans become clear, he must forge new relationships, unmask the culprit and bring justice to the abuse of power and corruption that has long plagued the metropolis.",
    },
  ],
  animes: [
    {
      id: 0,
      title: "Jujutsu Kaisen",
      genres: [
        {
          id: 0,
          name: "Action ",
          page: "/genre/action ",
        },
        {
          id: 1,
          name: "Fantasy",
          page: "/genre/fantasy",
        },
      ],
      releasedDate: "2022",
      runTime: "24min",
      rated: "15+",
      imdbScore: 8.5,
      path: "jujutsu-kaisen-2022",
      type: "anime",
      poster: "/src/assets/posters/animes/poster/jujutsu-kaisen.jpg",
      widePoster: "/src/assets/posters/animes/wide-poster/jujutsu-kaisen.jpg",
      screenshot: "/src/assets/posters/animes/screenshot/jujutsu-kaisen.jpg",
      isBookmarked: false,
      directors: [
        {
          id: 0,
          name: "Sunghoo Park",
          page: "/director/sunghoo-park",
        },
      ],
      actors: [
        {
          id: 0,
          name: "Megumi Ogata",
          characterName: "Yuta Okkotsu",
          page: "/actor/megumi-ogata",
        },
        {
          id: 1,
          name: "Kana Hanazawa",
          characterName: "Rika Orimoto",
          page: "/actor/kana-hanazawa",
        },
        {
          id: 2,
          name: "Yuichi Nakamura",
          characterName: "Satoru Gojo",
          page: "/actor/yuichi-nakamura",
        },
      ],
      countries: [
        {
          id: 0,
          name: "Japan",
          page: "/country/japan",
          flag: "/src/assets/country-flag/japan.png",
        },
      ],
      story:
        "Yuta Okkotsu is a nervous high school student who is suffering from a serious problem—his childhood friend Rika has turned into a curse and won't leave him alone. ",
    },
    {
      id: 1,
      title: "Chainsaw Man",
      genres: [
        {
          id: 0,
          name: "Action",
          page: "/genre/action",
        },
        {
          id: 1,
          name: "Adventure",
          page: "/genre/adventure",
        },
        {
          id: 2,
          name: "Comedy",
          page: "/genre/comedy",
        },
        {
          id: 3,
          name: "Fantasy",
          page: "/genre/fantasy",
        },
      ],
      releasedDate: "2022",
      runTime: "24m",
      rated: "18+",
      imdbScore: 8.5,
      path: "chainsaw-man-2022",
      type: "anime",
      poster: "/src/assets/posters/animes/poster/chainsaw-man.jpg",
      widePoster: "/src/assets/posters/animes/wide-poster/chainsaw-man.jpg",
      screenshot: "/src/assets/posters/animes/screenshot/chainsaw-man.jpg",
      isBookmarked: false,
      directors: [
        {
          id: 0,
          name: "Ryū Nakayama",
          page: "/director/ryū-nakayama",
        },
      ],
      writers: [
        {
          id: 0,
          name: "Tatsuki Fujimoto",
          page: "/writer/tatsuki-fujimoto",
        },
      ],
      actors: [
        {
          id: 0,
          name: "Kikunosuke Toya",
          characterName: "Denji",
          page: "/actor/Kikunosuke Toya",
        },
        {
          id: 1,
          name: "Tomori Kusunoki",
          characterName: "Makima",
          page: "/actor/Tomori Kusunoki",
        },
        {
          id: 2,
          name: "Fairouz Ai",
          characterName: "Power",
          page: "/actor/Fairouz Ai",
        },
        {
          id: 3,
          name: "Shogo Sakata",
          characterName: "Aki Hayakawa",
          page: "/actor/Shogo Sakata",
        },
      ],
      countries: [
        {
          id: 0,
          name: "Japan",
          page: "/country/japan",
          flag: "/src/assets/country-flag/japan.png",
        },
      ],
      story:
        "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into killing devils in order to pay off his crushing debts. Using his pet devil Pochita as a weapon, he is ready to do anything for a bit of cash.",
    },
  ],
  animations: [
    {
      id: 0,
      title: "The Super Mario Bros",
      genres: [
        {
          id: 0,
          name: "Comedy",
          page: "/genre/comedy",
        },
        {
          id: 1,
          name: "Adventure",
          page: "/genre/adventure",
        },
      ],
      releasedDate: "2023",
      runTime: "1h 32m",
      rated: "PG",
      imdbScore: 0,
      path: "the-super-mario-bros-2022",
      type: "animation",
      poster: "/src/assets/posters/animations/poster/the-super-mario-bros.jpg",
      widePoster:
        "/src/assets/posters/animations/wide-poster/the-super-mario-bros.jpg",
      screenshot:
        "/src/assets/posters/animations/screenshot/the-super-mario-bros.jpg",
      isBookmarked: false,
      directors: [
        {
          id: 0,
          name: "Aaron Horvath",
          page: "/director/aaron-horvath",
        },
        {
          id: 1,
          name: "Michael Jelenic",
          page: "/director/michael-jelenic",
        },
      ],
      actors: [
        {
          id: 0,
          name: "Chris Pratt",
          characterName: "Mario",
          page: "/actor/chris-pratt",
        },
        {
          id: 1,
          name: "Anya Taylor-Joy",
          characterName: "Princess Peach",
          page: "/actor/anya-taylor-joy",
        },
        {
          id: 2,
          name: "Charlie Day",
          characterName: "Luigi",
          page: "/actor/charlie-day",
        },
      ],
      countries: [
        {
          id: 0,
          name: "USA",
          page: "/country/USA",
          flag: "/src/assets/country-flag/usa.png",
        },
      ],
      story:
        "With help from Princess Peach, Mario gets ready to square off against the all-powerful Bowser to stop his plans from conquering the world.",
    },
    {
      id: 1,
      title: "The Sea Beast",
      genres: [
        {
          id: 0,
          name: "Adventure",
          page: "/genre/adventure",
        },
        {
          id: 1,
          name: "Comedy",
          page: "/genre/comedy",
        },
      ],
      releasedDate: "2022",
      runTime: "1h 59m",
      rated: "PG",
      imdbScore: 7,
      path: "the-sea-beast-2022",
      type: "animation",
      poster: "/src/assets/posters/animations/poster/the-sea-beast.jpg",
      widePoster:
        "/src/assets/posters/animations/wide-poster/the-sea-beast.jpg",
      screenshot: "/src/assets/posters/animations/screenshot/the-sea-beast.jpg",
      isBookmarked: false,
      directors: [
        {
          id: 0,
          name: "Chris Williams",
          page: "/director/chris-williams",
        },
      ],
      actors: [
        {
          id: 0,
          name: "Karl Urban",
          characterName: "Jacob Holland",
          page: "/actor/karl-urban",
        },
        {
          id: 1,
          name: "Zaris-Angel Hator",
          characterName: "Maisie Brumble",
          page: "/actor/zaris-angel-hator",
        },
        {
          id: 2,
          name: "Jared Harris",
          characterName: "Captain",
          page: "/actor/jared-harris",
        },
      ],
      countries: [
        {
          id: 0,
          name: "USA",
          page: "/country/USA",
          flag: "/src/assets/country-flag/usa.png",
        },
      ],
      story:
        "Terrifying creatures roam the seas and the monster hunters are heroes. None is more beloved than the great Jacob Holland. When young Maisie Brumble joins his ship, he finds an unexpected ally.",
    },
    {
      id: 2,
      title: "Puss in Boots: The Last Wish",
      genres: [
        {
          id: 0,
          name: "Adventure",
          page: "/genre/adventure",
        },
        {
          id: 1,
          name: "Comedy",
          page: "/genre/comedy",
        },
      ],
      releasedDate: "2022",
      runTime: "1h 40m",
      rated: "PG",
      imdbScore: 7.9,
      path: "puss-in-boots-the-last-wish",
      type: "animation",
      poster:
        "/src/assets/posters/animations/poster/puss-in-boots-the-last-wish.jpg",
      widePoster:
        "/src/assets/posters/animations/wide-poster/puss-in-boots-the-last-wish.jpg",
      screenshot:
        "/src/assets/posters/animations/screenshot/puss-in-boots-the-last-wish.jpg",
      isBookmarked: false,
      directors: [
        {
          id: 0,
          name: "Joel Crawford",
          page: "/director/joel-crawford",
        },
      ],
      actors: [
        {
          id: 0,
          name: "Antonio Banderas",
          characterName: "Puss in Boots",
          page: "/actor/antonio-banderas",
        },
        {
          id: 1,
          name: "Salma Hayek",
          characterName: "Kitty Softpaws",
          page: "/actor/salma-hayek",
        },
        {
          id: 2,
          name: "Florence Pugh",
          characterName: "Goldilocks",
          page: "/actor/florence-pugh",
        },
      ],
      countries: [
        {
          id: 0,
          name: "USA",
          page: "/country/USA",
          flag: "/src/assets/country-flag/usa.png",
        },
      ],
      story:
        "Puss in Boots discovers that his passion for adventure has taken its toll when he learns that he has burnt through eight of his nine lives. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    },
  ],
  featured: [
    {
      id: 0,
      title: "The Gray Man",
      path: "the-gray-man-2022",
      type: "movie",
      widePoster: "/src/assets/posters/movies/wide-poster/the-gray-man.jpg",
    },
    {
      id: 1,
      title: "Jujutsu Kaisen",
      path: "jujutsu-kaisen-2022",
      type: "anime",
      widePoster: "/src/assets/posters/animes/wide-poster/jujutsu-kaisen.jpg",
    },
    {
      id: 2,
      title: "The Green Knight",
      path: "the-green-knight-2022",
      type: "movie",
      widePoster: "/src/assets/posters/movies/wide-poster/the-green-knight.jpg",
    },
    {
      id: 3,
      title: "The Pirates: The Last Royal Treasure",
      path: "the-pirates-the-last-royal-treasure-2022",
      type: "movie",
      widePoster: "/src/assets/posters/movies/wide-poster/the-pirates.jpg",
    },
    {
      id: 4,
      title: "Chainsaw Man",
      path: "chainsaw-man-2022",
      type: "anime",
      widePoster: "/src/assets/posters/animes/wide-poster/chainsaw-man.jpg",
    },
    {
      id: 5,
      title: "Uncharted",
      path: "uncharted-2022",
      type: "movie",
      widePoster: "/src/assets/posters/movies/wide-poster/uncharted.jpg",
    },
    {
      id: 6,
      title: "The Super Mario Bros",
      path: "the-super-mario-bros-2022",
      type: "animation",
      widePoster:
        "/src/assets/posters/animations/wide-poster/the-super-mario-bros.jpg",
    },
    {
      id: 7,
      title: "Blonde",
      path: "blonde-2022",
      type: "movie",
      widePoster: "/src/assets/posters/movies/wide-poster/blonde.jpg",
    },
    {
      id: 8,
      title: "The Man From Toronto",
      path: "the-man-from-toronto-2022",
      type: "movie",
      widePoster:
        "/src/assets/posters/movies/wide-poster/the-man-from-toronto.jpg",
    },
    {
      id: 9,
      title: "The Sea Beast",
      path: "the-sea-beast-2022",
      type: "animation",
      widePoster:
        "/src/assets/posters/animations/wide-poster/the-sea-beast.jpg",
    },
    {
      id: 10,
      title: "The Batman",
      path: "the-batman-2022",
      type: "movie",
      widePoster: "/src/assets/posters/movies/wide-poster/the-batman.jpg",
    },
    {
      id: 11,
      title: "Puss in Boots: The Last Wish",
      path: "puss-in-boots-the-last-wish",
      type: "animation",
      widePoster:
        "/src/assets/posters/animations/wide-poster/puss-in-boots-the-last-wish.jpg",
    },
  ],
  new_movies: [
    {
      id: 0,
      title: "The Menu",
      genres: [
        {
          id: 0,
          name: "Horror",
          page: "/genre/horror",
        },
        {
          id: 1,
          name: "Comedy",
          page: "/genre/comedy",
        },
      ],
      releasedDate: "2022",
      runTime: "1h 47m",
      rated: "R",
      imdbScore: 7.3,
      path: "the-menu-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/the-menu.jpg",
      isBookmarked: false,
    },
    {
      id: 1,
      title: "The Pale Blue Eye",
      genres: [
        {
          id: 0,
          name: "Mystery",
          page: "/genre/mystery",
        },
        {
          id: 1,
          name: "Thriller",
          page: "/genre/thriller",
        },
      ],
      releasedDate: "2022",
      runTime: "2h 8m",
      rated: "R",
      imdbScore: 6.7,
      path: "the-pale-blue-eye-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/the-pale-blue-eye.jpg",
      isBookmarked: false,
    },
    {
      id: 2,
      title: "Whina",
      genres: [
        {
          id: 0,
          name: "Drama",
          page: "/genre/drama",
        },
      ],
      releasedDate: "2022",
      runTime: "1h 52m",
      rated: "PG",
      imdbScore: 7.7,
      path: "whina-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/whina.jpg",
      isBookmarked: false,
    },
    {
      id: 3,
      title: "The Banshees of Inisherin",
      genres: [
        {
          id: 0,
          name: "Comedy",
          page: "/genre/comedy",
        },
        {
          id: 1,
          name: "Drama",
          page: "/genre/drama",
        },
      ],
      releasedDate: "2022",
      runTime: "1h 54m",
      rated: "R",
      imdbScore: 7.8,
      path: "the-banshees-of-inisherin-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/the-banshees-of-inisherin.jpg",
      isBookmarked: false,
    },
    {
      id: 4,
      title: "Luckiest Girl Alive",
      genres: [
        {
          id: 0,
          name: "Mystery",
          page: "/genre/mystery",
        },
        {
          id: 1,
          name: "Drama",
          page: "/genre/drama",
        },
      ],
      releasedDate: "2022",
      runTime: "1h 55m",
      rated: "R",
      imdbScore: 6.4,
      path: "luckiest-girl-alive-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/luckiest-girl-alive.jpg",
      isBookmarked: false,
    },
    {
      id: 5,
      title: "Black Adam",
      genres: [
        {
          id: 0,
          name: "Action",
          page: "/genre/action",
        },
        {
          id: 1,
          name: "Fantasy",
          page: "/genre/fantasy",
        },
      ],
      releasedDate: "2022",
      runTime: "2h 5m",
      rated: "FSK 12",
      imdbScore: 6.4,
      path: "black-adam-2022",
      type: "movie",
      poster: "/src/assets/posters/movies/poster/black-adam.jpg",
      isBookmarked: false,
    },
    {
      id: 6,
      title: "Glass Onion: A Knives Out Mystery",
      releasedDate: "2022",
      genres: [
        {
          id: 0,
          name: "Mystery",
          page: "/genre/mystery",
        },
        {
          id: 1,
          name: "Crime",
          page: "/genre/crime",
        },
      ],
      runTime: "2h 19m",
      rated: "PG-13",
      imdbScore: 7.2,
      path: "glass-onion-a-knives-out-mystery-2022",
      type: "movie",
      poster:
        "/src/assets/posters/movies/poster/glass-onion-a-knives-out-mystery.jpg",
      isBookmarked: false,
    },
  ],
  upcomings: [
    {
      id: 0,
      title: "John Wick: Chapter 4",
      releaseDate: "March 24, 2023",
      genres: [
        {
          id: 0,
          name: "Action",
          page: "/genre/action",
        },
        {
          id: 1,
          name: "Neo-noir",
          page: "/genre/neo-noir",
        },
      ],
      time: null,
      poster: "/src/assets/posters/movies/upcomings/dune-part-two.jpg",
      isTrailer: true,
    },
    {
      id: 1,
      title: "Spider-Man: Across the Spider-Verse",
      releaseDate: "June 2, 2023",
      genres: [
        {
          id: 0,
          name: "Action",
          page: "/genre/action",
        },
        {
          id: 1,
          name: "Adventure",
          page: "/genre/adventure",
        },
      ],
      time: "1h 55m",
      poster:
        "/src/assets/posters/animations/upcomings/spide-man-across-the-spider-verse.jpg",
      isTrailer: true,
    },
    {
      id: 2,
      title: "The Nun 2",
      releaseDate: "September 8, 2023",
      genres: [
        {
          id: 0,
          name: "Horror",
          page: "/genre/horror",
        },
      ],
      time: null,
      poster: "/src/assets/posters/movies/upcomings/the-nun-two.jpg",
      isTrailer: true,
    },
    {
      id: 3,
      title: "Dune: Part Two",
      releaseDate: "November 3, 2023",
      genres: [
        {
          id: 0,
          name: "Sci-fi",
          page: "/genre/sci-fi",
        },
        {
          id: 1,
          name: "Adventure",
          page: "/genre/adventure",
        },
      ],
      time: null,
      poster: "/src/assets/posters/movies/upcomings/dune-part-two.jpg",
      isTrailer: true,
    },
    {
      id: 4,
      title: "Fast X",
      releaseDate: "May 19, 2023",
      genres: [
        {
          id: 0,
          name: "Action",
          page: "/genre/action",
        },
        {
          id: 1,
          name: "Adventure",
          page: "/genre/adventure",
        },
      ],
      time: null,
      poster: "/src/assets/posters/movies/upcomings/fast-x.jpg",
      isTrailer: false,
    },
    {
      id: 5,
      title: "Mission:Impossible – Dead Reckoning Part 1",
      releaseDate: "July 14, 2023",
      genres: [
        {
          id: 0,
          name: "Action",
          page: "/genre/action",
        },
        {
          id: 1,
          name: "Adventure",
          page: "/genre/adventure",
        },
      ],
      time: null,
      poster:
        "/src/assets/posters/movies/upcomings/mission-impossible-dead-reckoning-part-one.jpg",
      isTrailer: true,
    },
  ],
  new_series: [
    {
      id: 0,
      title: "House of the Dragon",
      szn: "1",
      ep: "4",
      href: "/serie/house-of-the-dragon-2022",
      poster: "/src/assets/posters/series/wide-poster/house-of-dragon.jpg",
      whatsNew: "New Episode",
    },
    {
      id: 1,
      title: "1899",
      szn: "1",
      ep: null,
      href: "/serie/1899-2022",
      poster: "/src/assets/posters/series/wide-poster/1899.jpg",
      whatsNew: "All Episodes",
    },
    {
      id: 2,
      title: "West World",
      szn: "3",
      ep: "7",
      href: "/serie/west-world-2016",
      poster: "/src/assets/posters/series/wide-poster/west-world.jpg",
      whatsNew: "New Episode",
    },
    {
      id: 3,
      title: "Better Call Saul",
      szn: "5",
      ep: "2",
      href: "/serie/better-call-saul-2015",
      poster: "/src/assets/posters/series/wide-poster/better-call-saul.jpg",
      whatsNew: "New Episode",
    },
    {
      id: 4,
      title: "Wednesday",
      szn: "1",
      ep: null,
      href: "/serie/wednesday-2022",
      poster: "/src/assets/posters/series/wide-poster/wednesday.jpg",
      whatsNew: "All Episodes",
    },
    {
      id: 5,
      title: "The Last of Us",
      szn: "1",
      ep: "3",
      href: "/serie/the-last-of-us-2022",
      poster: "/src/assets/posters/series/wide-poster/the-last-of-us.jpg",
      whatsNew: "New Episode",
    },
  ],
});
