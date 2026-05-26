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
      titleFirst: 'Hey, I am',
      titleSecond: 'Hao Xinran',
      subtitle: 'I build thoughtful backend systems, AI-powered tools, and web experiences with clarity and purpose.',
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
          description: 'A Spring Boot + Vue AI coding assistant built around a self-built ReAct Agent Runtime, with plan-before-act execution, permission-gated tools, hybrid RAG, background tasks, and traceable Hot100 coaching.',
          highlights: [
            'Built a custom ReAct Agent Runtime with a validated plan-before-act stage and up to 8 autonomous model/tool turns.',
            'Implemented permission-gated tools across READ, WRITE, EXTERNAL, and SENSITIVE levels with structured tool_result recovery instead of hard failures.',
            'Added Redis-backed tool idempotency using SHA-256 hashes to detect repeated tool calls and replay cached results during retries.',
            'Designed three-tier context compaction, tiered tool recovery, hook events, and step-level SSE streaming for observable agent execution.',
            'Modeled AgentTask, RuntimeSlot, and AgentStep so retries, runtime traces, background tasks, and executor watchdogs can be inspected clearly.',
            'Built hybrid explainable RAG for Hot100 resources by combining Redis vector similarity with deterministic keyword scoring through HybridRanker.',
            'Added long-term memory for user preferences, weaknesses, wrong answers, next actions, and notes.',
            'Used Spring Boot 3.5, Java 21, Spring Security JWT, JPA, Flyway, Redis, LangChain4j, DashScope/Qwen, and Docker Compose.',
          ],
        },
        citylifeReview: {
          description: 'A Spring Boot 3.4 backend for a local life-review platform, combining Redis business patterns, Elasticsearch search, RabbitMQ flash-sale ordering, and a Spring AI RAG recommendation agent.',
          highlights: [
            'Implemented phone-code login, Redis token storage, shop caching, GEO nearby search, ZSet likes/feed, Set follows, and Bitmap sign-in.',
            'Built high-concurrency voucher ordering with Redis Lua stock checks, one-user-one-order constraints, pre-deducted stock, and purchase qualification records.',
            'Designed RabbitMQ async order creation with persisted PROCESSING state, publisher confirm, return callback, manual ACK, DLQ, Redis rollback, and stale-order compensation.',
            'Used Redisson distributed locks, RRateLimiter-based declarative rate limiting, and MySQL unique indexes for concurrency control.',
            'Added Elasticsearch full-text shop search with geo-distance sorting and structured shop document indexing.',
            'Built a Spring AI recommendation agent with ChatClient, tool calling, chat memory, and preference extraction stored in Redis.',
            'Implemented semantic review search through a RAG pipeline with multi-query expansion, HyDE, vector retrieval, LLM reranking, and sentiment tagging.',
            'Documented APIs with SpringDoc OpenAPI and added CI/CD support through GitHub Actions.',
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
      positioning: 'Java Backend × AI Application',
      intro: 'A compact map of the technologies I use in backend projects and AI-powered tools.',
      groups: {
        backendCore: {
          title: 'Backend Core',
          description: 'Core technologies for Java backend development.',
        },
        engineeringPractice: {
          title: 'Engineering Practice',
          description: 'Tools and patterns practiced in real backend projects.',
        },
        aiApplication: {
          title: 'AI Application',
          description: 'AI technologies I am learning to connect with backend systems.',
        },
      },
    },
    about: {
      eyebrow: 'About',
      title: 'About Hao Xinran',
      paragraphs: [
        'I am an Artificial Intelligence student focused on Agent backend development and AI-powered web applications.',
        'I am currently learning Spring Boot, MySQL, Redis, RabbitMQ, and Docker, while exploring how LLMs can work with coding assistants, learning platforms, and backend services.',
      ],
    },
    journey: {
      eyebrow: 'Learning Journey',
      title: 'From Java Web to AI Tools',
      items: [
        { time: '2024', title: 'Java Web Fundamentals', description: 'Learned Java Web fundamentals and built basic management-system features.' },
        { time: '2025', title: 'Backend Project Practice', description: 'Practiced Spring Boot, MySQL, Redis, RabbitMQ, and Docker through backend projects.' },
        { time: '2026', title: 'AI + Backend Exploration', description: 'Explored AI-powered developer tools and LLM integration with backend services.' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's Connect",
      description: 'I am open to backend internship opportunities, project collaboration, and technical discussions.',
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
      subtitle: '我专注于后端开发，也在探索 AI 工具和 Web 应用的结合。',
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
          description: '一个基于 Spring Boot + Vue 的 AI 编程助手项目，核心是自研 ReAct Agent Runtime，支持计划先行、工具权限门控、Hybrid RAG、后台任务和 Hot100 执行链路追踪。',
          highlights: [
            '自研 ReAct Agent Runtime，加入 plan-before-act 阶段，对执行计划、工具顺序和工具覆盖率做结构化校验，最多支持 8 轮自主执行。',
            '实现 READ、WRITE、EXTERNAL、SENSITIVE 四级工具权限门控，被拒绝的工具调用会返回结构化 tool_result，避免直接中断 Agent 流程。',
            '使用 Redis + SHA-256 实现工具幂等保护，识别重复工具调用，并在重试场景中复用缓存结果。',
            '加入三层上下文压缩、分级工具恢复、事件钩子和步骤级 SSE 流式输出，让 Agent 执行过程可观察。',
            '设计 AgentTask、RuntimeSlot、AgentStep 数据模型，支持重试、runtime trace、后台任务和 watchdog 超时检查。',
            '为 Hot100 资源构建 Hybrid RAG，将 Redis 向量相似度和关键词评分通过 HybridRanker 合并，返回可解释检索结果。',
            '实现长期记忆，记录用户偏好、薄弱点、错题、下一步行动和笔记。',
            '使用 Spring Boot 3.5、Java 21、Spring Security JWT、JPA、Flyway、Redis、LangChain4j、DashScope/Qwen 和 Docker Compose 完成工程化。',
          ],
        },
        citylifeReview: {
          description: '一个基于 Spring Boot 3.4 的本地生活点评平台后端，结合 Redis 业务场景、Elasticsearch 搜索、RabbitMQ 秒杀下单和 Spring AI RAG 推荐 Agent。',
          highlights: [
            '实现手机验证码登录、Redis token 存储、商铺缓存、GEO 附近商铺、ZSet 点赞/Feed、Set 关注关系和 Bitmap 签到。',
            '使用 Redis Lua 完成高并发优惠券下单校验，包含库存判断、一人一单、库存预扣减和购买资格记录。',
            '设计 RabbitMQ 异步订单创建流程，包含 PROCESSING 状态持久化、publisher confirm、return callback、手动 ACK、死信队列、Redis 回滚和超时订单补偿。',
            '使用 Redisson 分布式锁、RRateLimiter 声明式限流和 MySQL 唯一索引处理并发一致性。',
            '加入 Elasticsearch 店铺全文搜索和 geo-distance 排序，并维护结构化 ShopDocument 索引。',
            '基于 Spring AI 构建推荐 Agent，使用 ChatClient、Tool Calling、Chat Memory 和 Redis 用户偏好记忆。',
            '实现点评语义搜索 RAG 流程，包含 multi-query expansion、HyDE、向量检索、LLM rerank 和情感标签。',
            '使用 SpringDoc OpenAPI 整理接口文档，并通过 GitHub Actions 补充 CI/CD 支持。',
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
      positioning: 'Java 后端 × AI 应用',
      intro: '这里整理了我在后端项目和 AI 应用开发中主要使用、实践和探索的技术方向。',
      groups: {
        backendCore: {
          title: '后端核心',
          description: '我在 Java 后端学习和项目开发中主要使用的核心技术。',
        },
        engineeringPractice: {
          title: '工程实践',
          description: '我在实际项目中练习过的认证、消息队列、部署和工程化相关技术。',
        },
        aiApplication: {
          title: 'AI 应用',
          description: '我正在学习如何把 AI 能力接入后端系统。',
        },
      },
    },
    about: {
      eyebrow: '关于',
      title: '关于我',
      paragraphs: [
        '我是一名人工智能专业学生，目前主要学习 Java 后端开发和 AI 相关 Web 应用。我喜欢用 Spring Boot、MySQL、Redis、RabbitMQ 和 Docker 搭建实用型项目。',
        '最近我在关注 LLM 与后端服务的结合，比如 AI 编程助手、学习平台和开发工具这类方向。',
      ],
    },
    journey: {
      eyebrow: '经历',
      title: '从 Java Web 到 AI 工具',
      items: [
        { time: '2024', title: 'Java Web 基础', description: '学习 Java Web 基础，并完成基础管理系统功能开发。' },
        { time: '2025', title: '后端项目实践', description: '通过项目练习 Spring Boot、MySQL、Redis、RabbitMQ 和 Docker。' },
        { time: '2026', title: 'AI + 后端探索', description: '探索 AI 开发工具，以及 LLM 与后端服务的集成方式。' },
      ],
    },
    contact: {
      eyebrow: '联系',
      title: '联系我',
      description: '我正在寻找后端开发实习机会，也欢迎项目交流和技术讨论。',
      email: '发邮件',
      github: 'GitHub',
      resume: '下载简历',
    },
  },
} as const
















