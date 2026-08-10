export interface ExperienceTech {
  name: string;
  /** Proficiency level, 0-100. */
  level: number;
  description: string;
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
    role: "自学Agent开发",
    org: "",
    start: "2025",
    end: "2026",
    description: "业余时间自学 AI Agent 开发，探索大模型应用与自动化工作流。",
    techStack: [
      { name: "Python", level: 80, description: "用于 Agent 逻辑与数据处理脚本编写。" },
      { name: "TypeScript", level: 75, description: "编写配套工具与前端交互界面。" },
      { name: "Node.js", level: 70, description: "搭建后端服务与接口。" },
    ],
  },
  {
    role: "高级软件工程师",
    org: "某某公司",
    start: "2023",
    end: "至今",
    description: "负责某某方向的开发与技术决策。",
    techStack: [
      { name: "TypeScript", level: 90, description: "日常开发的主力语言，用于前后端类型安全。" },
      { name: "React", level: 85, description: "构建组件化前端界面。" },
      { name: "Next.js", level: 80, description: "全栈框架，负责路由、渲染与部署。" },
      { name: "Python", level: 95, description: "日常开发的主力语言，用于数据分析与处理。" },
    ],
  },
  {
    role: "自学",
    org: "",
    start: "2023",
    end: "至今",
    description: "利用业余时间学习全栈开发，构建个人项目练手。",
    techStack: [
      { name: "TypeScript", level: 75, description: "学习前后端类型安全开发。" },
      { name: "React", level: 70, description: "练习组件化前端界面开发。" },
      { name: "Next.js", level: 65, description: "学习全栈框架的路由与渲染机制。" },
    ],
  },
  {
    role: "数据分析师",
    org: "某某公司",
    start: "2020",
    end: "2023",
    description: "负责业务数据分析与报表搭建，支持产品决策。",
    techStack: [
      { name: "Python", level: 80, description: "编写数据处理与分析脚本。" },
      { name: "PostgreSQL", level: 75, description: "设计与维护业务数据库。" },
      { name: "Node.js", level: 60, description: "编写数据接口与自动化脚本。" },
    ],
  },
  {
    role: "自学",
    org: "",
    start: "2018",
    end: "2020",
    description: "自学编程基础，从 Web 前端入门。",
    techStack: [
      { name: "Node.js", level: 60, description: "学习编写后端服务与接口。" },
      { name: "PostgreSQL", level: 55, description: "学习数据库设计基础。" },
      { name: "Tailwind CSS", level: 65, description: "学习快速搭建界面样式。" },
    ],
  },
];
