import { Code, BrainCircuit, Cloud } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate ML & Cloud Engineer</h3>
                    <p className="text-muted-foreground">
                        My path into ML engineering wasn't linear — I moved through data science and platform engineering roles in Sydney before landing on the intersection of both: building models that need real infrastructure to survive contact with production.
                    </p>

                    <p className="text-muted-foreground">
                        I'm self-taught in a lot of the places that matter most to me — computational neuroscience through Neuromatch Academy and most of the DevOps and cloud skills I use day to day. 
                        I'd rather understand why something works than just know that it does, which probably explains why I keep ending up back in a notebook even after the deployment is done.
                    </p>
                    <p className="text-muted-foreground">
                        Outside of engineering, I love reading, tinkering with Arduino, and I'm slowly working through a 30-before-30 list that's taken me backpacking across Southeast Asia. I'm currently pursuing the AWS Certified Machine Learning Engineer certification and exploring ML Engineer and Cloud Engineer roles in Australia and Germany.
                    </p>
                    <div className="mt-8">
                    <p className="text-muted-foreground mb-4">
                        Here are some technologies I've been working with:
                    </p>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <li className="flex items-center gap-2">
                        <span className="text-primary">▹</span>
                        <span>Python</span>
                        </li>
                        <li className="flex items-center gap-2">
                        <span className="text-primary">▹</span>
                        <span>TensorFlow / Keras</span>
                        </li>
                        <li className="flex items-center gap-2">
                        <span className="text-primary">▹</span>
                        <span>Langchain</span>
                        </li>
                        <li className="flex items-center gap-2">
                        <span className="text-primary">▹</span>
                        <span>PostgreSQL / pgvector</span>
                        </li>
                        <li className="flex items-center gap-2">
                        <span className="text-primary">▹</span>
                        <span>Django</span>
                        </li>
                        <li className="flex items-center gap-2">
                        <span className="text-primary">▹</span>
                        <span>React.js</span>
                        </li>
                        <li className="flex items-center gap-2">
                        <span className="text-primary">▹</span>
                        <span>Docker</span>
                        </li>
                        <li className="flex items-center gap-2">
                        <span className="text-primary">▹</span>
                        <span>AWS (EC2, S3, Lambda)</span>
                        </li>
                    </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="button">
                            Get In Touch
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Machine Learning & AI</h4>
                  <p className="text-muted-foreground">
                    Building and deploying ML systems — from neural networks and
                    RAG pipelines to topic modeling and vector search.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud & Infrastructure</h4>
                  <p className="text-muted-foreground">
                    Deploying and scaling production systems on AWS with Docker,
                    Terraform, and infrastructure-as-code.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Engineering</h4>
                  <p className="text-muted-foreground">
                    Architecting end-to-end applications with Django, React, and
                    real-time WebSocket pipelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};