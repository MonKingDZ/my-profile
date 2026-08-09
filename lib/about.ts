export interface ExperienceItem {
  role: string;
  org: string;
  start: string;
  end: string;
  description: string;
}

// TODO: replace with real experience
export const experience: ExperienceItem[] = [
  {
    role: "高级软件工程师",
    org: "某某公司",
    start: "2023",
    end: "至今",
    description: "负责某某方向的开发与技术决策。",
  },
  {
    role: "软件工程师",
    org: "某某公司",
    start: "2020",
    end: "2023",
    description: "参与某某产品从 0 到 1 的搭建。",
  },
];

// TODO: replace with real tech stack
export const techStack: string[] = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
];
