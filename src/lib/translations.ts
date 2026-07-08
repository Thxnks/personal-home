export type Language = 'en' | 'zh'

export const translations = {
  en: {
    languageLabel: '中文',
    nav: {
      projects: 'Projects',
      resources: 'Resources',
      skills: 'Skills',
      about: 'About',
      journey: 'Journey',
      contact: 'Contact',
    },
    hero: {
      titleFirst: "Hi, I'm",
      titleSecond: 'Xinran Hao',
      subtitle: 'I am shifting from backend development to AI Agent development, with a focus on LLM applications, tool calling, and companion-oriented agents.',
      cta: 'Explore My Work',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected Work',
      github: 'GitHub',
      details: 'Details',
      backendHighlights: 'Backend Highlights',
      fullTechStack: 'Full Tech Stack',
      keyFeatures: 'Key Features',
      whatIBuilt: 'What I Built',
      whatILearned: 'What I Learned',
      items: {
        aiCodeHelper: {
          description: 'A Spring Boot + Vue full-stack AI coding assistant centered on a self-built ReAct Agent Runtime for Hot100 algorithm coaching, execution tracing, and backend interview preparation.',
          highlights: [
            'Built a custom ReAct Agent Runtime with model turns, tool calls, tool results, final answers, and up to 8 autonomous turns.',
            'Implemented tool permission gating across READ, WRITE, EXTERNAL, and SENSITIVE levels with structured tool_result errors.',
            'Added three-tier context compaction, structured error recovery, hook events, and step-level SSE streaming for observable agent execution.',
            'Designed AgentTask, RuntimeSlot, and AgentStep persistence so retries, runtime traces, and executor failover can be inspected clearly.',
            'Integrated LangChain4j with DashScope/Qwen while keeping orchestration logic inside the Spring Boot backend.',
            'Built explainable local RAG for Hot100 markdown and JSON resources with scored retrieval results and problem metadata.',
            'Added long-term memory for user preferences, weaknesses, wrong answers, next actions, and notes.',
            'Used Spring Boot 3.5, Java 21, Spring Security JWT, JPA, Flyway, Redis caching, RabbitMQ, and Docker Compose for backend engineering.',
          ],
        },
        citylifeReview: {
          description: 'A Spring Boot backend service for a local life-review platform, focused on Redis business features, nearby shop search, social feeds, and reliable high-concurrency voucher ordering.',
          highlights: [
            'Implemented phone-code login with Redis token storage and interceptor-based user context handling.',
            'Built Redis-backed shop caching, cache penetration protection, shop type cache invalidation, GEO nearby search, ZSet likes/feed, Set follow relationships, and Bitmap sign-in.',
            'Used Redis Lua to atomically check voucher stock, one-user-one-order constraints, pre-deduct stock, and record purchase qualification.',
            'Built RabbitMQ asynchronous voucher order creation with persisted PROCESSING state, publisher confirm, return callback, manual ACK, and dead-letter queue handling.',
            'Added Redis rollback and scheduled compensation for stale PROCESSING orders to reduce Redis/MySQL inconsistency after MQ or consumer failures.',
            'Combined Redisson user-level locks and MySQL unique indexes to prevent duplicate voucher orders under concurrency.',
            'Provided Docker Compose deployment for the application, MySQL, Redis, and RabbitMQ.',
          ],
        },
        personalPortfolio: {
          description: 'A personal website built to showcase projects, technical skills, learning journey, and contact information.',
          keyFeatures: ['Responsive personal portfolio homepage', 'Project showcase section', 'Skills and learning journey sections', 'Light / dark theme support', 'Smooth scroll and subtle animations'],
          built: ['Built a modern portfolio website with Next.js and Tailwind CSS.', 'Designed sections for projects, skills, about, journey, and contact.', 'Added theme switching, scroll animations, and back-to-top interaction.'],
          learned: ['Learned how to structure a personal portfolio website.', 'Practiced responsive layout and component-based frontend development.', 'Improved UI polish through spacing, typography, and animation tuning.'],
        },
      },
    },
    resources: {
      eyebrow: 'Learning Resources',
      title: 'Learning Resources',
      description: 'A curated learning map for my Java backend foundation and AI Agent development path.',
      visit: 'Visit Resource',
      groups: {
        backendFundamentals: 'Backend Fundamentals',
        aiAgentLearning: 'AI Agent Learning',
      },
      items: {
        javaGuide: {
          description: 'A structured Java backend guide for interviews and system design.',
        },
        xiaolinCoding: {
          description: 'Visual notes for CS fundamentals, MySQL, Redis, networks, OS, and backend interviews.',
        },
        helloAgents: {
          description: 'A Chinese AI Agents tutorial focused on core principles, agent architecture, classic paradigms, and building AI Native Agents.',
        },
        huggingFaceAgents: {
          description: 'A hands-on agents course covering agent fundamentals, tools, smolagents, LangGraph, LlamaIndex, Agentic RAG, observability, and final projects.',
        },
      },
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Technical Focus',
      positioning: 'LLM Application × Agent Development',
      intro: 'A compact map of the technical directions I keep learning and practicing across LLM applications, AI agents, tool calling, and web product delivery.',
      groups: {
        backendCore: {
          title: 'Agent Core',
          description: 'I focus on agent task planning, tool calling, memory mechanisms, and multi-turn interaction capabilities.',
        },
        engineeringPractice: {
          title: 'LLM Application Engineering',
          description: 'I practice model API integration, prompt design, context management, and application integration in projects.',
        },
        aiApplication: {
          title: 'Web Productization',
          description: 'I want to turn AI capabilities into usable web applications, especially companion agents and human-AI interaction experiences.',
        },
      },
    },
    about: {
      eyebrow: 'About',
      title: 'About Hao Xinran',
      paragraphs: [
        'I am an undergraduate student majoring in Artificial Intelligence, shifting from traditional backend development toward LLM applications and AI Agent development. Rather than only implementing business APIs, I care more about combining large language models, tool calling, and web products into intelligent applications that are genuinely useful.',
        'I am currently learning and practicing RAG, Tool Calling, MCP, Prompt Engineering, and Agent workflows, and I am especially interested in companion agents, human-AI interaction, and emotionally supportive AI products.',
      ],
    },
    journey: {
      eyebrow: 'Learning Journey',
      title: 'From Engineering Foundations to AI Agents',
      items: [
        { time: '2024', title: 'Engineering Foundations', description: 'Studied Java Web, databases, and basic backend development to build an engineering understanding of web applications.' },
        { time: '2025', title: 'Project Practice', description: 'Practiced API design, database design, deployment, and collaborative development through projects such as a campus food ordering system.' },
        { time: '2026', title: 'AI Agent Exploration', description: 'Shifted toward LLM applications and Agent development, exploring RAG, tool calling, MCP, and companion-oriented agent products.' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's Connect",
      description: 'I am looking for internship opportunities related to AI Agents, LLM application development, or AI product engineering, and I am also open to project collaboration and technical discussions.',
      email: 'Email Me',
      github: 'GitHub',
      resume: 'Download Resume',
    },
  },
  zh: {
    languageLabel: 'EN',
    nav: {
      projects: '项目',
      resources: '资料库',
      skills: '技能',
      about: '关于我',
      journey: '经历',
      contact: '联系',
    },
    hero: {
      titleFirst: '你好，我是',
      titleSecond: '郝欣冉',
      subtitle: '我正在关注 Agent 开发，兴趣在于 LLM 应用、工具调用与陪伴型智能体的产品化实现。',
      cta: '查看项目',
    },
    projects: {
      eyebrow: '项目',
      title: '精选作品',
      github: 'GitHub',
      details: '详情',
      backendHighlights: '后端亮点',
      fullTechStack: '完整技术栈',
      keyFeatures: '核心功能',
      whatIBuilt: '我做了什么',
      whatILearned: '学到了什么',
      items: {
        aiCodeHelper: {
          description: '一个基于 Spring Boot + Vue 的 AI 编程助手项目，核心是自研 ReAct Agent Runtime，用于 Hot100 算法辅导、执行链路追踪和后端面试准备。',
          highlights: [
            '自研 ReAct Agent Runtime，支持 model turn、tool_use、tool_result、final_answer 和最多 8 轮自主执行。',
            '实现 READ、WRITE、EXTERNAL、SENSITIVE 四级工具权限门控，被拒绝的工具调用会返回结构化 tool_result，避免直接中断 Agent 流程。',
            '加入三层上下文压缩、结构化异常恢复、事件钩子和步骤级 SSE 流式输出，让 Agent 执行过程可观察。',
            '设计 AgentTask、RuntimeSlot、AgentStep 数据模型，支持重试、runtime trace 和执行步骤排查。',
            '集成 LangChain4j 与 DashScope/Qwen，但将 Agent 编排逻辑保留在 Spring Boot 后端中实现。',
            '为 Hot100 markdown 和 JSON 资源构建可解释本地 RAG，返回带评分和题目元数据的检索结果。',
            '实现长期记忆，记录用户偏好、薄弱点、错题、下一步行动和笔记。',
            '使用 Spring Boot 3.5、Java 21、Spring Security JWT、JPA、Flyway、Redis 缓存、RabbitMQ 和 Docker Compose 完成后端工程化。',
          ],
        },
        citylifeReview: {
          description: '一个本地生活点评平台后端服务，重点实践 Redis 业务场景、附近商铺搜索、社交 Feed 流，以及高并发优惠券秒杀下单的可靠性设计。',
          highlights: [
            '基于 Redis token 存储实现手机验证码登录，并通过拦截器维护用户上下文。',
            '使用 Redis 缓存、缓存穿透保护、商铺类型缓存失效、GEO、ZSet、Set、Bitmap 支持商铺查询、附近商铺、点赞、关注、Feed 流和签到。',
            '使用 Redis Lua 原子化校验优惠券库存和一人一单约束，并完成库存预扣减和购买资格记录。',
            '基于 RabbitMQ 实现优惠券订单异步创建，包含 PROCESSING 状态持久化、publisher confirm、return callback、手动 ACK 和死信队列。',
            '加入 Redis 回滚和超时 PROCESSING 订单定时补偿，降低 MQ 或消费者失败后的 Redis/MySQL 不一致风险。',
            '结合 Redisson 用户级锁和 MySQL 唯一索引，防止高并发下重复下单。',
            '提供 Docker Compose 部署，统一启动应用、MySQL、Redis 和 RabbitMQ。',
          ],
        },
        personalPortfolio: {
          description: '这个网站本身，用来展示我的项目、技术方向、学习经历和联系方式。',
          keyFeatures: ['Responsive personal portfolio homepage', 'Project showcase section', 'Skills and learning journey sections', 'Light / dark theme support', 'Smooth scroll and subtle animations'],
          built: ['使用 Next.js 和 Tailwind CSS 搭建个人作品集网站。', '设计 projects、skills、about、journey 和 contact 等页面区块。', '加入 theme switching、scroll animations 和 back-to-top interaction。'],
          learned: ['学习了个人作品集网站的组织方式。', '练习了 responsive layout 和 component-based frontend development。', '通过间距、字体和动画调整提升了 UI 细节。'],
        },
      },
    },
    resources: {
      eyebrow: '学习资料库',
      title: '学习资料库',
      description: '这里整理了我在学习 Java 后端和 AI Agent 开发过程中参考的资料，用来补齐后端基础、计算机基础、智能体原理和工程实践。',
      visit: '查看资料',
      groups: {
        backendFundamentals: '后端基础',
        aiAgentLearning: 'AI Agent 学习',
      },
      items: {
        javaGuide: {
          description: '系统化的 Java 后端学习与面试指南，适合梳理基础、框架、数据库和系统设计。',
        },
        xiaolinCoding: {
          description: '图解风格的后端基础资料，适合补计算机网络、操作系统、MySQL、Redis 和面试知识。',
        },
        helloAgents: {
          description: 'Datawhale 的 AI Agents 中文教程，适合系统理解智能体核心原理、架构设计、经典范式和 AI Native Agent 构建思路。',
        },
        huggingFaceAgents: {
          description: 'Hugging Face 的 AI Agents 实践课程，覆盖智能体基础、工具调用、smolagents、LangGraph、LlamaIndex、Agentic RAG、可观测性和最终项目。',
        },
      },
    },
    skills: {
      eyebrow: '技能',
      title: '技术方向',
      positioning: 'LLM 应用 × Agent 开发',
      intro: '这里整理了我在 LLM 应用、AI Agent、工具调用和 Web 产品化过程中持续学习与实践的技术方向。',
      groups: {
        backendCore: {
          title: 'Agent 核心',
          description: '我重点关注智能体的任务规划、工具调用、记忆机制与多轮交互能力。',
        },
        engineeringPractice: {
          title: 'LLM 应用工程',
          description: '我在项目中实践大模型 API 接入、提示词设计、上下文管理和应用集成。',
        },
        aiApplication: {
          title: 'Web 产品化',
          description: '我希望把 AI 能力做成真实可用的 Web 应用，尤其关注陪伴型 Agent 和人机交互体验。'
        },
      },
    },
    about: {
      eyebrow: '关于',
      title: '关于我',
      paragraphs: [
        '我是一名人工智能专业本科生，正在从传统后端开发转向 LLM 应用与 AI Agent 开发。相比单纯实现业务接口，我更关注如何把大模型、工具调用和 Web 产品结合起来，做出真实可用的智能体应用。',
        '目前我在学习和实践 RAG、Tool Calling、MCP、Prompt Engineering 和 Agent 工作流，也对陪伴型 Agent、人机交互与情感陪伴类产品很感兴趣。',
      ],
    },
    journey: {
      eyebrow: '经历',
      title: '从工程基础到 AI Agent',
      items: [
        { time: '2024', title: '工程基础', description: '学习 Java Web、数据库和基础后端开发，建立 Web 应用的工程认知。' },
        { time: '2025', title: '项目实践', description: '通过校园点餐系统等项目练习接口设计、数据库设计、部署和协作开发。' },
        { time: '2026', title: 'AI Agent 探索', description: '转向 LLM 应用与 Agent 开发，探索 RAG、工具调用、MCP 和陪伴型智能体产品。' },
      ],
    },
    contact: {
      eyebrow: '联系',
      title: '联系我',
      description: '我正在寻找 AI Agent、LLM 应用开发或 AI 产品工程相关的实习机会，也欢迎项目交流和技术讨论。',
      email: '发邮件',
      github: 'GitHub',
      resume: '下载简历',
    },
  },
} as const














