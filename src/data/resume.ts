export type Lang = "en" | "zh";

export const profile = {
  name: "Tim Zhang",
  email: "zhangtianchen@yahoo.com",
  phone: "+1 585-360-8297",
  location: { en: "Salt Lake City, UT, United States", zh: "美国" },
  note: { en: "H1-B Holder", zh: "H1-B 持有者" },
};

// ── Experience ────────────────────────────────────────────────────────────────

export type Team = {
  name: string;
  bullets: string[];
};

export type Division = {
  name: string;
  teams: Team[];
};

export type Job = {
  company: string;
  title: string;
  location: string;
  period: string;
  divisions: Division[];
};

export const experience: Record<Lang, Job[]> = {
  en: [
    {
      company: "Goldman Sachs",
      title: "Software Engineer II (Associate)",
      location: "Salt Lake City, UT",
      period: "Dec. 2021 – Present",
      divisions: [
        {
          name: "Global Compliance Division",
          teams: [
            {
              name: "REPS (Regulatory Employee Profile Solution) Modernization",
              bullets: [
                "Lead full-stack architect on Compliance's largest platform—1,000+ JSPs, 16 backend services, 20-year-old Struts/JSP stack—replacing it with React 19 + TypeScript and eliminating ~$1M in annual compliance software licensing.",
                "Owned end-to-end front-end architecture: selected the stack (Redux Toolkit, React Router, GS-UI design system layered with styled-components, Axios) and established conventions enabling 8–10 engineers across New York, London, and Bengaluru to ship in parallel without merge or architectural conflict.",
                "Designed a Core + Feature monorepo using npm workspaces—shared core package owns platform primitives and TypeScript domain types; feature packages build isolated, lazy-loaded modules consuming the core via typed contracts and ship as independent route-level bundles.",
                "Defined an incremental NGINX reverse-proxy migration strategy: new React routes added to proxy config as features rebuild while unmigrated paths continue serving from JSP—enabling page-by-page rollout without a big-bang cutover.",
                "Built shared front-end primitives (notably a configurable AG Grid wrapper used across modules) to eliminate duplicate grid implementations and standardize sort, filter, pagination, and column-state behavior platform-wide; deployed across multi-environment Kubernetes via Harbor.",
              ],
            },
            {
              name: "Employee Trading Compliance Lakehouse Pipeline",
              bullets: [
                "Built end-to-end data ingestion and reporting platform for personal-trading surveillance covering ~30K Goldman Sachs employees, modernizing the data foundation for analytical reporting and future AI/RAG workloads.",
                "Designed daily batch ETL ingesting three domains (transactional trading activity, outside-activity disclosures, employee registration records) from a legacy Sybase OLTP database into a Snowflake lakehouse, orchestrated via internal batch scheduler.",
                "Executed a TB-scale historical backfill of 20 years of trading and disclosure data into Snowflake, establishing the analytical baseline and a queryable knowledge layer for future RAG-based compliance tooling; incremental loads run daily.",
                "Built the downstream reporting layer on an internal data-modeling platform and delivered interactive surveillance dashboards used by Compliance for ongoing oversight.",
              ],
            },
            {
              name: "Employee Trade Rule Uplift",
              bullets: [
                "Re-architected the rule storage and lookup layer for personal-trading compliance—modeled hierarchical rules (division → team → employee) as a tree in Elasticsearch with inheritance semantics, replacing a fully-denormalized SQL representation that duplicated divisional rules across thousands of employee rows.",
                "Built the indexing pipeline keeping Elasticsearch in sync with the source database, making ES the authoritative read store for rule-evaluation queries; cut rule-lookup screen load times from ~5 seconds to sub-second and offloaded read traffic from the OLTP system.",
                "Built a transformer layer that re-flattens the tree structure into the legacy record format consumed by downstream pre-clearance and surveillance systems, preserving backward compatibility without requiring downstream migration.",
              ],
            },
          ],
        },
        {
          name: "Global Banking & Markets Division – Asset Servicing Team",
          teams: [
            {
              name: "Asset Servicing Web Platform — Appian Replacement (Lead Full-Stack Architect)",
              bullets: [
                "Led full-stack architecture replacing Appian (third-party low-code workflow/BPM platform) with a custom React + Spring Boot solution across the Asset Servicing product suite, eliminating ~$500K in annual third-party licensing.",
                "Architected the React + TypeScript front-end with Redux state management and AG Grid for high-density data tables; paired with a Spring Boot + MongoDB backend and a custom work-queue service re-implementing Appian's workflow-engine functionality in-house with full feature parity.",
                "Onboarded the Exception Hub: a workflow surface where allocation/holdings mismatches and payment-reconciliation breaks are surfaced to operations users for resolution, with downstream events published to Kafka for consuming systems.",
                "Designed the front-end for long-term scalability—data logic isolated in Redux reducers, screen behavior externalized to configuration files, and API access centralized through a single client layer—keeping the platform extensible to new business workflows without architectural rewrites.",
                "Built reusable component layers abstracting recurring business UI patterns; GitLab CI/CD pipelines for front-end and back-end; Spring Boot services on Kubernetes; migrated authentication to OAuth 2.0 across front-end and back-end via PingFederate integration.",
              ],
            },
            {
              name: "US Equities Corporate Event Pipeline",
              bullets: [
                "Built event-driven processing handler for U.S. Equities corporate actions (allocations, payments) on the Asset Servicing platform, supporting near-real-time downstream payment dispatch.",
                "Implemented Kafka consumers ingesting corporate-event records from the clearinghouse feed, applying allocation logic, and emitting payment instructions to internal ledger and treasury systems with single-digit-second end-to-end latency.",
                "Used Java thread pools and the Executors framework to parallelize event processing across the day's announcement volume, with retry logic and idempotent message handling to ensure data integrity and prevent duplicate payment dispatch on Kafka redelivery.",
              ],
            },
            {
              name: "Asset Allocation Exception Handling Service",
              bullets: [
                "Built the backend service detecting and persisting processing exceptions across the Asset Servicing corporate-event pipeline (clearinghouse feeds from U.S., London, Hong Kong, and Singapore), feeding ops resolution workflows in the Exception Hub.",
                "Implemented a generic break-detection framework over the corporate-event stream, capturing the full exception taxonomy—payment mismatches, payment failures, missed allocation submissions, user-action timeouts, and unresolved stuck-state payments—across multi-region clearing flows.",
                "Persisted exceptions in MongoDB as the system of record with versioned audit history: every status transition increments a document version and preserves prior state, providing a full audit trail for compliance review and operational forensics.",
                "Published exceptions onto the GBM internal pub/sub bus; downstream Work Queue scheduler consumes them, materializes workflow records, and routes to the appropriate ops users via the Exception Hub.",
              ],
            },
          ],
        },
      ],
    },
  ],
  zh: [
    {
      company: "高盛集团",
      title: "软件工程师 II（Associate）",
      location: "美国",
      period: "2021年12月 – 至今",
      divisions: [
        {
          name: "全球合规部",
          teams: [
            {
              name: "REPS（监管员工档案系统）现代化改造",
              bullets: [
                "担任合规部最大平台的全栈首席架构师——该平台拥有 1,000+ 个 JSP 页面、16 个后端服务，运行长达 20 年的 Struts/JSP 技术栈——将其迁移至 React 19 + TypeScript，每年节省合规软件授权费约 100 万美元。",
                "主导端到端前端架构设计：选型技术栈（Redux Toolkit、React Router、GS-UI 设计系统叠加 styled-components、Axios），制定协作规范，支持纽约、伦敦、班加罗尔共 8–10 名工程师并行交付，实现零合并冲突、零架构冲突。",
                "设计基于 npm workspaces 的 Core + Feature monorepo：共享核心包统一管理平台基础组件与 TypeScript 领域类型；各功能包构建独立懒加载模块，通过类型化契约消费核心，并以独立路由级 Bundle 形式部署。",
                "制定 NGINX 反向代理增量迁移策略：新 React 路由随功能重建逐步加入代理配置，未迁移路径继续由 JSP 提供服务，实现逐页上线，无需一次性大规模切换。",
                "构建共享前端基础组件（其中可配置 AG Grid 封装在各模块广泛使用），消除重复 Grid 实现，统一全平台排序、过滤、分页与列状态行为；通过 Harbor 部署至多环境 Kubernetes 集群。",
              ],
            },
            {
              name: "员工交易合规数据湖管道",
              bullets: [
                "构建端到端数据摄取与报表平台，覆盖约 3 万名高盛员工的个人交易监控，为分析报告与未来 AI/RAG 工作负载夯实数据基础。",
                "设计每日批量 ETL 流程，将三类数据域（交易活动、场外活动披露、员工注册记录）从传统 Sybase OLTP 数据库摄取至 Snowflake 数据湖，通过内部批调度器统一编排。",
                "执行 TB 级历史数据回填，将 20 年交易与披露记录导入 Snowflake，建立分析基线与可查询知识层，支撑未来基于 RAG 的合规工具；增量数据每日加载。",
                "在内部数据建模平台上构建下游报表层，交付供合规团队持续监控使用的交互式监控仪表盘。",
              ],
            },
            {
              name: "员工交易规则升级",
              bullets: [
                "重新架构个人交易合规的规则存储与查询层——将层级规则（部门 → 团队 → 员工）建模为 Elasticsearch 中具有继承语义的树结构，替代原有将部门规则在数千条员工行中全量冗余的扁平化 SQL 方案。",
                "构建索引管道，使 Elasticsearch 与源数据库保持同步，令 ES 成为规则评估查询的权威读取存储；将规则查询页面加载时间从约 5 秒降至亚秒级，并将读流量从 OLTP 系统剥离。",
                "构建转换层，将树结构重新展开为下游预清算与监控系统所消费的遗留记录格式，无需下游系统迁移即可保留向后兼容性。",
              ],
            },
          ],
        },
        {
          name: "全球银行与市场部 – 资产服务团队",
          teams: [
            {
              name: "资产服务 Web 平台 — Appian 替换（首席全栈架构师）",
              bullets: [
                "主导全栈架构，以自研 React + Spring Boot 方案替换 Appian（第三方低代码工作流/BPM 平台），覆盖资产服务全产品线，每年节省第三方授权费约 50 万美元。",
                "架构 React + TypeScript 前端，采用 Redux 状态管理与 AG Grid 高密度数据表格；后端配合 Spring Boot + MongoDB，并自研工作队列服务，在内部完整复现 Appian 工作流引擎全部功能。",
                "接入 Exception Hub：为运营用户提供处理分配/持仓不匹配及支付对账异常的工作流界面，下游事件通过 Kafka 发布至消费系统。",
                "为长期可扩展性设计前端架构——数据逻辑隔离于 Redux Reducer，页面行为外化至配置文件，API 访问通过统一客户端层集中管理——确保平台可在不重写架构的情况下扩展新业务工作流。",
                "构建封装常见业务 UI 模式的可复用组件层；搭建前后端 GitLab CI/CD 流水线；Spring Boot 服务部署于 Kubernetes；通过 PingFederate 集成将前后端认证迁移至 OAuth 2.0。",
              ],
            },
            {
              name: "美国股票公司事件管道",
              bullets: [
                "在资产服务平台上构建美国股票公司行为（分配、支付）的事件驱动处理程序，支持近实时下游支付派发。",
                "实现 Kafka 消费者，从清算所数据流摄取公司事件记录，应用分配逻辑，并将支付指令发送至内部账本与财资系统，端到端延迟达个位数秒级。",
                "使用 Java 线程池与 Executors 框架对当日公告量进行并行事件处理，结合重试逻辑与幂等消息处理确保数据完整性，防止 Kafka 重投递时重复派发支付。",
              ],
            },
            {
              name: "资产分配异常处理服务",
              bullets: [
                "构建后端服务，检测并持久化资产服务公司事件管道（来自美国、伦敦、香港、新加坡清算所数据流）中的处理异常，为 Exception Hub 中的运营处置工作流提供数据来源。",
                "在公司事件流上实现通用异常检测框架，覆盖完整异常分类——支付不匹配、支付失败、分配提交遗漏、用户操作超时及未解决的卡单支付——横跨多地区清算流程。",
                "以 MongoDB 作为系统记录存储，附带版本化审计历史持久化异常：每次状态变更均递增文档版本并保留前置状态，为合规审查与运营取证提供完整审计轨迹。",
                "将异常发布至 GBM 内部发布/订阅总线；下游工作队列调度器消费后实例化工作流记录，并通过 Exception Hub 路由至相应运营用户。",
              ],
            },
          ],
        },
      ],
    },
  ],
};

// ── Projects ──────────────────────────────────────────────────────────────────

export type Project = {
  name: string;
  githubUrl?: string;
  bullets: string[];
  stack: string;
};

export const projects: Record<Lang, Project[]> = {
  en: [
    {
      name: "Autonomous AI Assistant Agent",
      githubUrl: "https://github.com/timzhangRepo/project-voyage",
      bullets: [
        "Built a ReAct-loop agent (Claude Sonnet) on the Claude ecosystem: thinks, calls tools, observes, re-plans — orchestrated against four custom MCP servers handling data ingestion, semantic ranking, communication, and automated task execution.",
        "Used MCP as the tool boundary to keep capabilities composable and the agent stack-agnostic; added a human-in-the-loop approval gate so irreversible actions resume only on explicit user confirmation.",
      ],
      stack: "TypeScript · Claude Sonnet · MCP · Playwright · SQLite · node-cron",
    },
  ],
  zh: [
    {
      name: "自主 AI 助手 Agent",
      githubUrl: "https://github.com/timzhangRepo/project-voyage",
      bullets: [
        "基于 Claude 生态系统构建 ReAct 循环 Agent（Claude Sonnet）：具备思考、工具调用、观察、重规划能力——编排对接四个自定义 MCP 服务器，分别负责数据摄取、语义排序、通讯与自动化任务执行。",
        "以 MCP 作为工具边界，保持能力可组合性与 Agent 的技术栈无关性；引入人工审批关卡，确保不可逆操作仅在用户明确确认后方可继续执行。",
      ],
      stack: "TypeScript · Claude Sonnet · MCP · Playwright · SQLite · node-cron",
    },
  ],
};

// ── Skills ────────────────────────────────────────────────────────────────────

export const skills: Record<Lang, Record<string, string[]>> = {
  en: {
    "Programming Languages": ["Java", "TypeScript", "JavaScript", "HTML5/CSS3", "SQL"],
    "Frameworks & Tools": ["Spring Boot", "React", "Docker", "Kubernetes", "MongoDB", "MySQL", "Snowflake"],
    "AI / Agents": ["LangChain", "LangGraph", "Claude API", "Claude Code", "MCP", "ReAct", "agentic systems", "prompt engineering"],
  },
  zh: {
    "编程语言": ["Java", "TypeScript", "JavaScript", "HTML5/CSS3", "SQL"],
    "框架与工具": ["Spring Boot", "React", "Docker", "Kubernetes", "MongoDB", "MySQL", "Snowflake"],
    "AI / 智能体": ["LangChain", "LangGraph", "Claude API", "Claude Code", "MCP", "ReAct", "智能体系统", "提示工程"],
  },
};

// ── Education ─────────────────────────────────────────────────────────────────

export const education: Record<Lang, { school: string; degree: string; gpa: string; location: string; period: string }[]> = {
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

// ── Summary ───────────────────────────────────────────────────────────────────

export const summary: Record<Lang, string> = {
  en: "Full-stack software engineer at Goldman Sachs. Led modernization of legacy compliance and banking platforms across two divisions, eliminating $1.5M+ in annual licensing; built an AI-assisted development platform adopted across ~40 engineers.",
  zh: "高盛全栈软件工程师。主导跨两个业务部门的遗留合规与银行平台现代化改造，每年节省授权费用逾 150 万美元；构建 AI 辅助开发平台，在约 40 名工程师中广泛落地。",
};

// ── Labels ────────────────────────────────────────────────────────────────────

export const labels: Record<Lang, Record<string, string>> = {
  en: {
    title: "Software Engineer",
    summary: "Summary",
    experience: "Experience",
    skills: "Skills",
    education: "Education",
    projects: "Personal Projects",
    downloadResume: "Download Resume",
  },
  zh: {
    title: "软件工程师",
    summary: "个人简介",
    experience: "工作经历",
    skills: "技术栈",
    education: "教育背景",
    projects: "个人项目",
    downloadResume: "下载简历",
  },
};
