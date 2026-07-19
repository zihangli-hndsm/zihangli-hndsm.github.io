const translations = {
  en: {
    metaDescription: "Zihang Li's personal website: multimodal information retrieval, human intent modelling, and AI systems.",
    backTop: "Back to top", mainNav: "Main navigation", languageSelector: "Language selector",
    navAbout: "About", navExperience: "Experience", navProjects: "Projects",
    heroTitle: "Understanding intent,<br /><em>connecting</em> language and vision.",
    heroCopy: "A researcher in multimodal AI and information retrieval.<br />Exploring human intent, synthetic data, and robust generalisation.",
    learnMore: "Learn more about me", aboutNumber: "01 / ABOUT",
    aboutTitle: "Building AI that does more<br />than process inputs—it <em>understands intent.</em>",
    aboutP1: "Hi, I’m Zihang Li, a master’s student in Digital Linguistics at the University of Zurich. My research sits at the intersection of multimodal information retrieval, natural language processing, and human intent modelling.",
    aboutP2: "I study how models can infer what people truly want from language, vision, and behaviour—and remain reliable under data scarcity, distribution shifts, and real-world interaction. I also enjoy turning research ideas into systems that can be tested and used.",
    viewGithub: "View GitHub", locationLabel: "LOCATION", locationValue: "Switzerland",
    focusLabel: "CURRENT FOCUS", focusValue: "Multimodal AI / Information Retrieval", exploringLabel: "EXPLORING",
    experienceNumber: "02 / ACADEMIC & RESEARCH EXPERIENCE",
    experienceTitle: "Starting with language,<br /><em>moving towards intelligent systems.</em>",
    experienceCopy: "Connecting research questions, data,<br />and engineering through human intent.",
    maDescription: "Focused on computational linguistics, multimodal learning, and information retrieval. My thesis investigates visual grounding and generalisation in composed image retrieval.",
    cirDescription: "Developed instance-aware and soft-contrastive training methods alongside a VLM-driven, intent-enriched synthetic data pipeline for robust real-world interaction.",
    earlier: "Earlier", baDescription: "Training in language and the humanities shaped my attention to context, meaning, and people—and became the foundation for my later work in NLP and human-centred AI.",
    projectsNumber: "03 / SELECTED PROJECTS", projectsTitle: "Turning research questions<br /><em>into testable systems.</em>",
    allProjects: "View all projects",
    projectCir: "Instance-aware training and intent-enriched data synthesis for realistic human interaction",
    projectRag: "An end-to-end RAG prototype spanning web collection, retrieval, reranking, FastAPI, and React",
    projectVolk: "A lightweight visual ML workbench for connecting data and model components on a canvas",
    contactNumber: "04 / GET IN TOUCH", contactTitle: "Interested in intent, agents,<br />or <em>multimodal research?</em>",
    backToTop: "BACK TO TOP ↑"
  },
  zh: {
    metaDescription: "Zihang Li 的个人主页：多模态信息检索、人类意图建模与 AI 系统。",
    backTop: "回到顶部", mainNav: "主导航", languageSelector: "语言选择",
    navAbout: "关于我", navExperience: "经历", navProjects: "项目",
    heroTitle: "理解人的意图，<br /><em>连接</em>语言与视觉。",
    heroCopy: "多模态 AI 与信息检索研究者。<br />关注人类意图建模、合成数据与可靠泛化。",
    learnMore: "了解更多关于我", aboutNumber: "01 / 关于我",
    aboutTitle: "让 AI 不只处理输入，<br />也能理解<em>意图。</em>",
    aboutP1: "你好，我是 Zihang Li，苏黎世大学数字语言学硕士生。我的研究位于多模态信息检索、自然语言处理与人类意图建模的交叉点。",
    aboutP2: "我关注模型如何从语言、视觉和行为中识别人的真实目标，并在数据稀缺、分布变化与真实交互中保持可靠。除了研究，我也喜欢把想法做成可以运行、可以验证的 AI 系统。",
    viewGithub: "查看 GitHub", locationLabel: "所在地", locationValue: "瑞士",
    focusLabel: "当前方向", focusValue: "多模态 AI / 信息检索", exploringLabel: "正在关注",
    experienceNumber: "02 / 学术与研究经历",
    experienceTitle: "从语言出发，<br /><em>走向智能系统。</em>",
    experienceCopy: "以人的意图为主线，连接<br />研究问题、数据与工程实现。",
    maDescription: "聚焦计算语言学、多模态学习与信息检索；硕士论文研究组合图像检索中的视觉落地与泛化。",
    cirDescription: "研究实例感知与软对比学习，并构建 VLM 驱动的意图增强合成数据流程，以提升真实交互下的鲁棒性。",
    earlier: "此前", baDescription: "语言与人文训练塑造了我对语境、意义和人的关注，也成为后来进入 NLP 与人本 AI 研究的起点。",
    projectsNumber: "03 / 精选项目", projectsTitle: "把研究问题，<br /><em>变成可验证的系统。</em>",
    allProjects: "查看全部项目",
    projectCir: "面向真实人类交互的实例感知训练与意图增强数据合成",
    projectRag: "从网页采集、检索与重排到 FastAPI + React 前端的完整 RAG 原型",
    projectVolk: "在可视化画布上连接数据与模型组件的轻量机器学习实验平台",
    contactNumber: "04 / 保持联系", contactTitle: "对意图、智能体或<br /><em>多模态研究感兴趣？</em>",
    backToTop: "回到顶部 ↑"
  }
};

function setLanguage(language, persist = true) {
  const lang = translations[language] ? language : "en";
  const strings = translations[lang];

  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = strings[element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = strings[element.dataset.i18nHtml];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", strings[element.dataset.i18nAria]);
  });
  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    element.setAttribute("content", strings[element.dataset.i18nContent]);
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  if (persist) localStorage.setItem("portfolio-language", lang);
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setLanguage(localStorage.getItem("portfolio-language") || "en", false);
