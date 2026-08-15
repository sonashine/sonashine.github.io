import { cn } from "@/lib/utils";

const posts = [
  {
    title: "Introducing: Goodreads Epilogue",
    excerpt: " The your year in reading you deserve",
    date: "Aug 2026",
    href: "https://medium.com/@booksbytesbackpacking/introducing-goodreads-epilogue-the-your-year-in-reading-you-deserve-b1f8ffd679b7",
  }
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Latest <span className="text-primary">Posts</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, key) => (
            <a
              key={key}
              href={post.href}
              className={cn(
                "group p-6 rounded-lg border border-border bg-card/50",
                "hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              )}
            >
              <p className="text-sm text-foreground/60 mb-2">{post.date}</p>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-foreground/70">{post.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};