export interface ExperienceTech {
  name: string;
  /** Proficiency level, 0-100. */
  level: number;
  description: string;
  /** True while still actively learning/leveling up this skill. */
  growing?: boolean;
}

export interface ExperienceItem {
  role: string;
  org: string;
  start: string;
  end: string;
  description: string;
  techStack: ExperienceTech[];
}

// TODO: replace with real experience, levels, and tech descriptions
export const experience: ExperienceItem[] = [
  {
    role: "高级软件工程师",
    org: "某某公司",
    start: "2023",
    end: "至今",
    description: "负责某某方向的开发与技术决策。",
    techStack: [
      { name: "TypeScript", level: 90, description: "日常开发的主力语言，用于前后端类型安全。" },
      { name: "React", level: 85, description: "构建组件化前端界面。" },
      { name: "Next.js", level: 80, description: "全栈框架，负责路由、渲染与部署。", growing: true },
    ],
  },
  {
    role: "软件工程师",
    org: "某某公司",
    start: "2020",
    end: "2023",
    description: "参与某某产品从 0 到 1 的搭建。",
    techStack: [
      { name: "Node.js", level: 75, description: "编写后端服务与接口。" },
      { name: "PostgreSQL", level: 70, description: "设计与维护业务数据库。", growing: true },
      { name: "Tailwind CSS", level: 65, description: "快速搭建界面样式。" },
    ],
  },
];
