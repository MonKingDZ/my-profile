export interface ExperienceTech {
  name: string;
  /** Proficiency level, 0-100. */
  level: number;
  description: string;
}

export interface ExperienceItem {
  role: string;
  start: string;
  end: string;
  description: string;
  techStack: ExperienceTech[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Agent 应用开发 / 数据分析",
    start: "2023.02",
    end: "至今",
    description:
      "独立架构并上线生产级 NL2SQL 智数系统（LangGraph + ClickHouse + RAG），并推动大模型 Agent 深度嵌入公司日常分析工作流与业务增长建模。",
    techStack: [
      {
        name: "LangGraph",
        level: 90,
        description:
          "搭建 NL2SQL 系统的多节点 Agent 状态机，实现意图解析、Schema 检索、SQL 生成到 Self-Refine 自我修正的闭环，复杂多表 SQL 一次生成可用率达 70%~80%。",
      },
      {
        name: "RAG",
        level: 85,
        description:
          "构建元数据与表结构自动化治理 Pipeline，基于 BGE Embedding 与向量库打造高精度业务语境检索链路，覆盖 500+ 张物理表。",
      },
      {
        name: "SQL / ClickHouse",
        level: 90,
        description:
          "对接真实生产业务分析库，编写与优化复杂多表关联查询，保障自然语言到 SQL 的准确转换与秒级响应。",
      },
      {
        name: "Python",
        level: 90,
        description:
          "编写数据处理、聚类建模与多模型评测脚本，支撑指标体系搭建与营销风控监控体系建设。",
      },
      {
        name: "机器学习",
        level: 80,
        description:
          "结合 K-Means/DBSCAN 构建渠道与消费者双端用户画像，结合 Prophet/SARIMA、LightGBM 预测动销趋势与活动效果，特定渠道营销 ROI 提升 10%。",
      },
    ],
  },
  {
    role: "创始人",
    start: "2019.06",
    end: "2022.10",
    description:
      "创立并运营社区智能零售项目，主导选址、品类结构与门店运营的数据驱动决策，巅峰期支撑近百万元月均 GMV。",
    techStack: [
      {
        name: "Python 爬虫与选址建模",
        level: 75,
        description:
          "抓取目标社区户数与结构数据，结合线下竞对走访建立点位评估模型，支撑 30 台智能零售终端在 10 个社区的拓盘决策。",
      },
      {
        name: "品类与盈利模型分析",
        level: 80,
        description:
          "通过单品类贡献度分析定位货损拖累品类，用波士顿矩阵重构产品结构，将单柜毛利率由 15% 提升至 20%。",
      },
      {
        name: "精益运营管理",
        level: 75,
        description:
          "搭建 5 人团队目标考核与过程追踪体系，监控单社区经济模型（UE）与现金流，基于数据测算完成业务转让与资产退出。",
      },
    ],
  },
  {
    role: "销售数据分析师",
    start: "2016.07",
    end: "2019.06",
    description:
      "面向 40+ 人销售团队提供数据赋能，搭建 BI 监控看板与自动化预警机制，支撑月均入金千万级业务体量。",
    techStack: [
      {
        name: "SQL",
        level: 80,
        description:
          "基于底层业务表提取数据，结合入金金额、年龄、理财周期构建多维客户群画像，定期挖掘高潜转化名单。",
      },
      {
        name: "PowerBI",
        level: 75,
        description:
          "搭建销售监控看板，针对核心业务节点配置指标异动自动化预警，实现数据监控到业务干预的闭环。",
      },
      {
        name: "业务目标拆解建模",
        level: 70,
        description:
          "结合存量客户续签率预估与漏斗新客获取模型拆解月度目标，将复杂经营报告产出时间压缩至 1 小时。",
      },
    ],
  },
  {
    role: "学士学位 · 食品质量与安全",
    start: "2012.09",
    end: "2016.06",
    description:
      "核心课程：统计学、计算机基础、高等数学、线性代数，为后续的数据分析与建模工作打下方法论基础。",
    techStack: [],
  },
];
