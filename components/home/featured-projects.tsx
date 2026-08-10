import Link from "next/link";

import { FeedCard, type FeedCardData } from "@/components/home/feed-card";
import { getFeaturedProjects } from "@/lib/projects";
import { getFeaturedPosts } from "@/lib/posts";

function buildFeed(): FeedCardData[] {
  const projects = getFeaturedProjects().map<FeedCardData>((project) => ({
    key: `project-${project.slug}`,
    href: project.demoUrl ?? project.githubUrl ?? "/projects",
    title: project.title,
    summary: project.description,
    image: project.coverImage,
  }));

  const posts = getFeaturedPosts().map<FeedCardData>((post) => ({
    key: `post-${post.slug}`,
    href: `/blog/${post.slug}`,
    title: post.title,
    summary: post.excerpt,
    image: post.cover,
  }));

  const feed: FeedCardData[] = [];
  const max = Math.max(projects.length, posts.length);
  for (let i = 0; i < max; i++) {
    if (projects[i]) feed.push(projects[i]);
    if (posts[i]) feed.push(posts[i]);
  }
  return feed;
}

export function FeaturedProjects() {
  const feed = buildFeed();

  return (
    <section id="featured-projects" className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <div className="flex items-baseline justify-between">
        <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          推荐内容
        </h2>
        <Link href="/projects" className="text-sm text-brand-rose hover:underline">
          查看全部 →
        </Link>
      </div>
      <div className="mt-10 columns-1 gap-6 sm:columns-2">
        {feed.map((item, index) => (
          <FeedCard key={item.key} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
