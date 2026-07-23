import { useRef } from "react";
import { ArrowRight, ArrowLeft, ExternalLink, Code2, Play } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Goodreads Epilogue",
    description: `• Architected and deployed a full-stack Django/Daphne application with a React frontend, integrating asynchronous WebSocket pipelines (Django Channels + Redis) for real-time processing updates, along with a multiprocessing scraper built using Selenium. \n

        • Built a RAG-based classification system using pgvector and LangChain to assign literary archetypes from user reading history, and implemented topic modeling (FASTopic) to extract and hierarchically cluster themes across thousands of book entries, validated with LLM-as-judge evaluation. \n

        • Deployed end-to-end on AWS EC2 with Caddy and Cloudflare for SSL/reverse proxy, migrating LLM inference from local Ollama/Mistral to OpenRouter's API for cost-efficient production serving.`,
    image: "/projects/GoodreadsEpilogue.png",
    tags: ["Python", "Django", "React", "PostgreSQL", "Docker", "AWS"],
    demoLink: "https://goodreadsepilogue.com/",
  },
  {
    id: 2,
    name: "Matchy-Matchy",
    description:
      "Interactive shape-matching arcade game built with Processing (Java). Designed game mechanics including shape morphing, projectile matching, collision detection, scoring, and game-over states. Awarded 100% (1st out of 331 students).",
    image: "/projects/MatchyMatchy.png",
    tags: [
      "Processing (Java)",
      "Game Development",
      "Interactive Design",
    ],
    demoLink: "/projects/matchy-matchy",
    githubLink: "https://github.com/sonashine/Matchy-Matchy-2.0",
  },
  {
    id: 3,
    name: "Bank Loan Approval Prediction",
    description:
      "Built and trained a multi-layer artificial neural network using TensorFlow/Keras to classify loan applications. Achieved 97% classification accuracy and evaluated model performance using precision, recall, F1 score, and confusion matrices.",
    image: "/projects/ANN.png",
    tags: ["Python", "TensorFlow/Keras", "Pandas", "NumPy"],
    demoLink: "./notebooks/Bank Loan Approval Using Artificial Neural Nets.html",
    githubLink: "https://github.com/sonashine/Bank-Loan-Approval-Using-Artificial-Neural-Networks",
  },
  {
    id: 4,
    name: "Tesla Stock Forecasting Pipeline",
    description:
      "Developed a reusable machine learning pipeline using Scikit-learn with automated data ingestion, feature engineering, preprocessing, model training, and evaluation for time-series stock forecasting.",
    image: "/projects/StockPrices.png",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    demoLink: "./notebooks/Project Predicting stock prices.html",
    githubLink: "https://github.com/sonashine/Stock-Prices-predictor",
  },
    {
    id: 5,
    name: "Matchy-Matchy 2.0",
    description:
      "Enhanced version of the original Matchy-Matchy arcade game rebuilt for the web using React and p5.js. Features interactive gameplay, shape matching mechanics, real-time animation, and browser-based deployment.",
    image: "/projects/MatchyMatchy2.png",
    tags: [
      "React",
      "JavaScript",
      "p5.js",
      "Game Development",
      "Interactive Design",
    ],
    demoLink: "/projects/matchy-matchy-2",
    githubLink: "https://github.com/sonashine/Matchy-Matchy-2.0",
  },
];


export const ProjectsSection = () => {

  const sliderRef = useRef(null);


  const scrollProjects = (direction) => {

    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "right" ? 420 : -420,
      behavior: "smooth",
    });

  };


  return (
    <section id="projects" className="py-24 px-4 relative">

      <div className="container mx-auto max-w-5xl">


        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>


        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Here are some of my projects.
        </p>


        {/* Carousel buttons */}
        <div className="flex justify-end gap-3 mb-6">

          <button
            onClick={() => scrollProjects("left")}
            className="p-2 rounded-full border hover:text-primary transition"
            aria-label="Previous projects"
          >
            <ArrowLeft size={20}/>
          </button>


          <button
            onClick={() => scrollProjects("right")}
            className="p-2 rounded-full border hover:text-primary transition"
            aria-label="Next projects"
          >
            <ArrowRight size={20}/>
          </button>

        </div>



        {/* Project carousel */}
        <div
          ref={sliderRef}
          className="
          flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory
          scrollbar-hide
          "
        >


          {projects.map((project) => (

            <div
              key={project.id}
              className="
              group bg-card rounded-lg overflow-hidden shadow-xs card-hover
              snap-start
              min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1rem)]
              "
            >


              <div className="h-48 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.name}
                  className="
                  w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-110
                  "
                />

              </div>



              <div className="p-6">


                <div className="flex flex-wrap gap-2 mb-4">

                  {project.tags.map((tag) => (

                    <span
                      key={tag}
                      className="
                      px-2 py-1 text-xs font-medium border rounded-full
                      bg-secondary text-secondary-foreground
                      "
                    >
                      {tag}
                    </span>

                  ))}

                </div>



                <h3 className="text-xl font-semibold mb-1">
                  {project.name}
                </h3>



                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>



                <div className="flex justify-between items-center">

                  <div className="flex space-x-3">


                    {/* Demo */}

                    {project.demoLink &&
                      (
                        project.demoLink.startsWith("/") ? (

                          <Link
                            to={project.demoLink}
                            className="text-foreground/80 hover:text-primary transition-colors"
                            title="Live Demo"
                          >
                            <ExternalLink size={20}/>
                          </Link>

                        ) : (

                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/80 hover:text-primary transition-colors"
                            title="Live Demo"
                          >
                            <ExternalLink size={20}/>
                          </a>

                        )
                      )
                    }



                    {/* Video */}

                    {project.videoLink && (

                      <a
                        href={project.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors"
                        title="Demo Video"
                      >
                        <Play size={20}/>
                      </a>

                    )}



                    {/* Github */}

                    {project.githubLink && (

                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors"
                        title="Source Code"
                      >
                        <Code2 size={20}/>
                      </a>

                    )}


                  </div>

                </div>

              </div>


            </div>

          ))}


        </div>



        <div className="text-center mt-12">

          <a
            className="button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sonashine"
          >
            Check Out My GitHub <ArrowRight size={16}/>
          </a>

        </div>


      </div>

    </section>
  );
};