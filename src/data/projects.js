const projects = [
  {
    id: "hobby-tracker",
    title: "Hobby Tracker",
    tagline: "A simple app for logging hobbies and their descriptions.",
    description:
      "Hobby Tracker lets users add a hobby name and description through a form, view the full list, and remove entries they no longer want to track. It was built to practice handling form input, managing a dynamic list with React state, and updating the UI immediately on add and delete.",
    role: "Solo developer",
    year: "2026",
    tech: ["React", "JavaScript", "CSS"],
    features: [
      "Form to submit a hobby name and description",
      "Dynamic list that updates instantly on submit",
      "Delete button to remove any entry from the list",
      "All data managed with React state (useState)",
    ],
    liveUrl: "https://hobbyexcercise3.netlify.app",
    repoUrl: "https://github.com/chipxchip/excercise3.git",
    image: "",
  },
  {
    id: "weather-app",
    title: "Weather app",
    tagline: "A weather lookup app powered by a public REST API.",
    description:
      "Weather app lets users search any city and see current conditions, a 5-day forecast, and hourly breakdowns. It was built to practice working with asynchronous data fetching, loading states, and error handling in React.",
    role: "Solo developer",
    year: "2026",
    tech: ["React", "REST API", "CSS Grid"],
    features: [
      "Live search with debounced API calls",
      "Graceful loading and error states",
      "5-day forecast with hourly detail view",
      "Saved recent searches using local component state",
    ],
    liveUrl: "https://joyful-douhua-4c6f32.netlify.app",
    repoUrl: "https://github.com/chipxchip/exercise4.git",
    image: "",
  },
  {
    id: "recipe-box",
    title: "Recipe Box",
    tagline: "A recipe organizer with search and filtering.",
    description:
      "Recipe Box lets users browse, search, and filter a collection of recipes by category and cook time. It was built to practice component composition, routing between list and detail views, and organizing larger data sets in React.",
    role: "Solo developer",
    year: "2026",
    tech: ["React", "React Router", "JavaScript"],
    features: [
      "Dynamic routing to individual recipe detail pages",
      "Filter and search by ingredient or category",
      "Reusable card and layout components",
    ],
    liveUrl: "https://funny-nasturtium-ed419b.netlify.app",
    repoUrl: "https://github.com/chipxchip/recipe-app.git",
    image: "",
  },
];

export default projects;
