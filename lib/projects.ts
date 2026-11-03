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

const projects: Project[] = [
  {
    slug: "my-nl2sql",
    title: "my_NL2SQL",
    description:
      "个人复刻的开源 NL2SQL Agent：基于 LangGraph 状态机串联意图解析、RAG 检索、SQL 生成与 Self-Refine 自我修正，验证公司生产项目中沉淀的架构设计，目前处于骨架搭建阶段。",
    tags: ["LangGraph", "ClickHouse", "RAG", "Python"],
    githubUrl: "https://github.com/MonKingDZ/my_NL2SQL",
    featured: true,
  },
  {
    slug: "my-profile",
    title: "个人网站",
    description:
      "基于 Next.js + TypeScript 搭建的个人主页，包含 Bio、经历时间线、项目展示与 MDX 驱动的博客。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/MonKingDZ/my-profile",
    featured: true,
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(limit = 4): Project[] {
  return projects.filter((p) => p.featured).slice(0, limit);
}
