export type Lang = "en" | "zh";

export const profile = {
  name: "Tim Zhang",
  email: "zhangtianchen@yahoo.com",
  phone: "+1 585-360-8297",
  location: { en: "Salt Lake City, UT, United States", zh: "美国" },
  note: { en: "H1-B Holder", zh: "H1-B 持有者" },
};

export const experience = {
  en: [
    {
      company: "Goldman Sachs",
      title: "Software Engineer – SDE II (Associate)",
      location: "Salt Lake City, UT",
      period: "Dec. 2021 – Present",
      teams: [
        {
          name: "Global Banking & Markets – Asset Servicing Team",
          bullets: [
            "Spearheaded end-to-end development of a proprietary Asset Servicing Platform, eliminating vendor licensing fees and delivering $500k in recurring annual savings.",
            "Designed a configuration-driven React/TypeScript frontend that abstracted complex settlement logic, cutting support ticket volume by 35% and accelerating daily settlement velocity.",
            "Established a global API-first contract framework with OpenAPI, reducing cross-team integration friction and slashing feature time-to-market by 40%.",
            "Architected an agentic RAG pipeline leveraging DocLake's MongoDB vector search to parse fund prospectuses, reducing inquiry response times by 60%.",
            "Served as regional SME for Full Stack / Application Layer architecture, establishing Application Layer best practices (Full Stack) adopted across three global product teams.",
            "Transformed the position matching engine from a legacy T+1 batch process to a real-time event-driven architecture using Kafka Streams. Slashed data processing latency from 40 minutes to <5 minutes for 50 million daily transactions, providing asset servicing operation capability to action on near real-time position calculation & payment distortion.",
            "Implemented a Spring Boot data backfill job to process 100M business exception records between MongoDB and an internal data lake; enabled Snowflake for BI analytics.",
            "Created a JavaScript utility kit to migrate 50K files from a legacy server to DocLake as part of a legacy system decommission.",
          ],
        },
        {
          name: "Private Wealth Management – Trading & Booking Team",
          bullets: [
            "Built the \"Carbon Portfolio\" visualization tool (React/D3.js), enabling advisors to optimize client portfolios for environmental impact.",
            "Engineered core infrastructure for Swiss Market OTC products — a high-throughput trade handler processing 10M daily booking feeds.",
            "Developed a Swiss trade tax calculation tool using the Sedona tax API with downstream reconciliation.",
            "Resolved a critical global trading outage via emergency hot-fixes on a complex event-driven architecture, safeguarding billions in time-sensitive transactions.",
          ],
        },
      ],
    },
  ],
  zh: [
    {
      company: "高盛集团",
      title: "软件工程师 – SDE II (Associate)",
      location: "",
      period: "2021年12月 – 至今",
      teams: [
        {
          name: "全球银行与市场部 – 资产服务团队",
          bullets: [
            "主导端到端开发内部资产服务平台，消除第三方供应商授权费用，每年节省 50 万美元，并恢复对关键金融数据的架构自主权。",
            "设计基于配置驱动的 React/TypeScript 前端，将复杂结算逻辑抽象化，使运营团队无需工程介入即可管理工作流，将支持工单量削减 35%，加速日常结算效率。",
            "建立基于 OpenAPI 的全球 API 优先合约框架，解耦前后端开发周期，将功能上线时间缩短 40%。",
            "架构智能 RAG 管道，利用 DocLake 的 MongoDB 向量搜索解析复杂基金招募说明书，使运营团队实现自然语言查询，将查询响应时间缩短 60%。",
            "担任 SLC 办公室全栈架构 SME，主导制定 Application Layer 可扩展工程规范，并在三个全球产品团队中落地推广。",
            "将持仓匹配引擎从传统 T+1 批处理改造为基于 Kafka Streams 的实时事件驱动架构，将 5000 万日交易的数据处理延迟从 40 分钟降至 5 分钟以内，为资产服务运营团队提供近实时持仓计算与支付异常处理能力。",
            "使用 Spring Boot 和 Java 实现数据回填任务，处理 MongoDB 与内部数据湖之间的 1 亿条业务异常记录，并启用 Snowflake 支持商业智能分析。",
            "创建 JavaScript 工具包，将 5 万个文件从外部遗留服务器迁移至 DocLake，作为遗留系统退役的一部分。",
          ],
        },
        {
          name: "私人财富管理部 – 交易与登记团队",
          bullets: [
            "与财富管理顾问合作，构建「碳组合」可视化工具（React/D3.js），助力顾问优化客户投资组合的环境影响，推动可持续投资产品落地。",
            "构建瑞士市场 Over The Counter (OTC) 产品交易处理系统，开发每日可处理 1000 万笔交易的高吞吐量交易处理器。",
            "利用 Sedona 税务 API 开发瑞士交易税计算工具，并与下游服务进行对账。",
            "在高压支持轮岗中担任首要升级处理点，通过紧急热修复解决全球交易中断，保护数十亿美元的时效性交易。",
          ],
        },
      ],
    },
  ],
};

export const skills = {
  en: {
    "Programming Languages": ["Java", "TypeScript", "JavaScript", "HTML5/CSS3"],
    "Frameworks & Tools": ["React", "Spring Boot", "Kafka", "Kubernetes", "Docker", "MongoDB", "MySQL", "Snowflake"],
  },
  zh: {
    "编程语言": ["Java", "TypeScript", "JavaScript", "HTML5/CSS3"],
    "框架与工具": ["React", "Spring Boot", "Kafka", "Kubernetes", "Docker", "MongoDB", "MySQL", "Snowflake"],
  },
};

export const education = {
  en: [
    {
      school: "University of Southern California",
      degree: "M.S. in Computer Science",
      gpa: "3.5/4.0",
      location: "Los Angeles, CA",
      period: "Aug. 2019 – Dec. 2021",
    },
    {
      school: "Pennsylvania State University",
      degree: "B.S. in Information Science & Technology  |  B.S. in Security Risk Analysis",
      gpa: "3.8/4.0 (Dean's List) / 3.7/4.0",
      location: "University Park, PA",
      period: "Sep. 2015 – May 2019",
    },
  ],
  zh: [
    {
      school: "南加州大学",
      degree: "计算机科学 硕士",
      gpa: "3.5/4.0",
      location: "加利福尼亚州洛杉矶",
      period: "2019年8月 – 2021年12月",
    },
    {
      school: "宾夕法尼亚州立大学",
      degree: "信息科学与技术 学士  |  安全风险分析 学士",
      gpa: "3.8/4.0（院长名单）/ 3.7/4.0",
      location: "宾夕法尼亚州大学公园",
      period: "2015年9月 – 2019年5月",
    },
  ],
};

export const labels = {
  en: {
    title: "Software Engineer",
    experience: "Experience",
    skills: "Skills",
    education: "Education",
    projects: "Current Project",
    projectPlaceholder: "Coming soon — project details will be added here.",
  },
  zh: {
    title: "软件工程师",
    experience: "工作经历",
    skills: "技术栈",
    education: "教育背景",
    projects: "当前项目",
    projectPlaceholder: "即将更新 — 项目详情将在此展示。",
  },
};
