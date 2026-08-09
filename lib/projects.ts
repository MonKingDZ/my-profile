export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  coverImage?: string;
  featured: boolean;
}

// TODO: replace with real projects
const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    description: "一句话描述这个项目解决了什么问题、用了什么技术。",
    tags: ["Next.js", "TypeScript"],
    githubUrl: "https://github.com/yourusername/project-one",
    demoUrl: "https://project-one.example.com",
    featured: true,
  },
  {
    slug: "project-two",
    title: "Project Two",
    description: "一句话描述这个项目解决了什么问题、用了什么技术。",
    tags: ["React", "Node.js"],
    githubUrl: "https://github.com/yourusername/project-two",
    featured: true,
  },
  {
    slug: "project-three",
    title: "Project Three",
    description: "一句话描述这个项目解决了什么问题、用了什么技术。",
    tags: ["TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/project-three",
    demoUrl: "https://project-three.example.com",
    featured: true,
  },
  {
    slug: "project-four",
    title: "Project Four",
    description: "一句话描述这个项目解决了什么问题、用了什么技术。",
    tags: ["Python"],
    githubUrl: "https://github.com/yourusername/project-four",
    featured: false,
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(limit = 4): Project[] {
  return projects.filter((p) => p.featured).slice(0, limit);
}
