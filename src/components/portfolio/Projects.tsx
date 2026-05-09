import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { AnimatedCount } from "./AnimatedCount";
import { ProjectSkeleton } from "./ProjectSkeleton";
import { ProjectModal } from "./ProjectModal";
import { ProjectsEmptyState } from "./ProjectsEmptyState";
import type { Category, Project } from "./project-types";
import { ExternalLink, Eye, Github } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import weatherApp from "@/assets/weather-app.png";
import youtubeClone from "@/assets/youtube-clone.png";
import prayerTimes from "@/assets/prayer-times.png";
import kanbanBoard from "@/assets/kanban-board.png";
import insightStabilityCenter from "@/assets/insight-stability-center.png";
import bloodBank from "@/assets/blood-bank.png";
import travel from "@/assets/travel.jpg";
import SpecialDesign from "@/assets/Special Design.jpg";
import food from "@/assets/food website.jpg";
import interior from "@/assets/interior.jpg";
import social from "@/assets/social.jpg";
import Elaasar from "@/assets/Elaasar.jpg";
import photo from "@/assets/photo.jpg";
import masbaa from "@/assets/masbaa.jpg";
import education from "@/assets/education.jpg";
import { useI18n } from "@/lib/i18n";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useDeviceTier } from "@/hooks/use-device-tier";

const projects: Project[] = [
  {
    id: "blood-bank",
    title: "Blood Bank",

    descEn:
      "A blood donation and management platform that connects donors with hospitals and patients, making the blood request and donation process faster and more organized.",

    descAr:
      "منصة لإدارة التبرع بالدم تربط بين المتبرعين والمستشفيات والمرضى لتسهيل وتنظيم عمليات طلب والتبرع بالدم.",

    longEn:
      "Blood Bank is a modern blood donation management platform designed to simplify communication between blood donors, patients, and healthcare organizations. The system allows users to register as donors, search for available blood types, and manage donation requests efficiently. It provides a clean and responsive user experience with secure authentication, organized data handling, and scalable architecture suitable for real-world healthcare workflows.",

    longAr:
      "Blood Bank هو نظام حديث لإدارة التبرع بالدم تم تصميمه لتسهيل التواصل بين المتبرعين والمرضى والجهات الطبية. يتيح النظام تسجيل المتبرعين، والبحث عن فصائل الدم المتاحة، وإدارة طلبات التبرع بشكل منظم وفعال. يوفر تجربة استخدام سهلة ومتجاوبة مع نظام تسجيل دخول آمن وتنظيم واضح للبيانات وهيكلة قابلة للتوسع تناسب الأنظمة الطبية الواقعية.",

    highlightsEn: [
      "Blood donor and request management system",
      "Authentication and user role handling with Clerk",
      "Responsive and user-friendly interface",
      "Organized healthcare data management",
    ],

    highlightsAr: [
      "نظام لإدارة المتبرعين وطلبات الدم",
      "إدارة تسجيل الدخول والصلاحيات باستخدام Clerk",
      "واجهة استخدام متجاوبة وسهلة الاستخدام",
      "تنظيم وإدارة بيانات طبية بشكل منظم",
    ],

    stack: ["React", "Vite", "TypeScript", "Clerk", "Hygraph"],

    link: "https://blood-bank-al-salhiyah-university.netlify.app/",
    repo: "https://github.com/GalalElaasar9/Blood-Bank.git",

    cover: bloodBank,
    gallery: [ bloodBank, insightStabilityCenter, kanbanBoard, youtubeClone, weatherApp, prayerTimes,
    ],
    category: "react",
  },
  {
    id: "insight-stability-center",
    title: "Insight Stability Center",
    
    descEn: "A scientific research and laboratory data platform for managing industrial samples and analyzing test results in a structured environment.",
    descAr: "منصة بحثية ومعملية لإدارة العينات الصناعية وتحليل نتائج الاختبارات في بيئة منظمة.",

    longEn:
      "Insight Stability Center is a scientific research and laboratory data management platform designed to handle industrial sample processing and analysis workflows. It enables structured registration of samples, systematic organization of test data, and clear presentation of analytical results. The system is built to support research-driven environments by ensuring data consistency, clarity, and traceability across all processed samples.",

    longAr:
      "Insight Stability Center هو نظام بحثي ومعملي لإدارة بيانات العينات الصناعية وعمليات التحليل. يتيح تسجيل العينات بشكل منظم، وتنظيم بيانات الاختبارات بطريقة منهجية، وعرض النتائج التحليلية بشكل واضح. تم تصميم النظام لدعم بيئات البحث العلمي من خلال ضمان دقة البيانات، وتنظيمها، وسهولة تتبعها.",

    highlightsEn: [
      "Scientific sample data management system",
      "Structured laboratory test workflows",
      "Accurate and traceable data organization",
      "Research-oriented interface design",
    ],
    
    highlightsAr: [
      "نظام لإدارة بيانات العينات العلمية",
      "تنظيم عمليات التحاليل المعملية",
      "تنظيم دقيق وقابل للتتبع للبيانات",
      "واجهة مصممة لبيئات البحث العلمي",
    ],
    
    stack: ["React", "Vite", "TypeScript"],
    
    link: "https://insight-stability-center9.vercel.app/",
    repo: "https://github.com/GalalElaasar9/insight-stability-center2.git",
    
    cover: insightStabilityCenter,
    gallery: [insightStabilityCenter, kanbanBoard, youtubeClone, weatherApp, prayerTimes],
    
    category: "react",
  },
  {
  id: "kanban-board",
  title: "Kanban Board",
  
  descEn: "A task management Kanban board for organizing and tracking work items.",
  descAr: " Kanban لوحة إدارة مهام لتنظيم وتتبع المهام بطريقة ",
  
  longEn:
    "A fully responsive Kanban board application that helps users organize tasks into columns like To Do, In Progress, and Done. The app supports drag and drop functionality, state management using Zustand, and type safety with TypeScript, providing a smooth and efficient task management experience.",
  
  longAr:" To Do و In Progress و Done تجربة إدارة مهام سلسة وفعالة يدعم السحب والإفلات ويساعد المستخدم فى تنظيم المهام عن طريق",

  highlightsEn: [
    "Drag and drop task management",
    "State management with Zustand",
    "Type-safe with TypeScript",
    "Responsive and clean UI",
  ],
  
  highlightsAr: [
    "إدارة مهام بالسحب والإفلات",
    "إدارة الحالة باستخدام Zustand",
    "استخدام TypeScript لضمان الأمان",
    "تصميم متجاوب ونظيف",
  ],
  
  stack: ["React", "Zustand", "Vite", "TypeScript"],
  
  link: "https://kanban-board-smoky-zeta.vercel.app/",
  repo: "https://github.com/GalalElaasar9/Kanban-board.git",
  
  cover: kanbanBoard,
  gallery: [kanbanBoard, youtubeClone, weatherApp, prayerTimes],
  
  category: "react",
  },
  {
    id: "youtube-clone",
    title: "Youtube Clone",
    descEn: "A YouTube-inspired video platform with browsing, search, and responsive UI.",
    descAr: "منصة فيديوهات مستوحاة من يوتيوب مع التصفح، البحث، وتصميم متجاوب.",
    
    longEn:
      "A fully responsive YouTube clone that allows users to browse trending videos, search for content, and watch videos in a clean and modern interface. The app focuses on smooth user experience, fast loading, and intuitive navigation similar to the real YouTube platform.",
    
    longAr:
      "تطبيق يحاكي منصة يوتيوب بشكل كامل، يتيح للمستخدمين تصفح الفيديوهات الشائعة، البحث عن المحتوى، ومشاهدة الفيديوهات في واجهة حديثة وسهلة الاستخدام. يركز التطبيق على سرعة الأداء وتجربة مستخدم سلسة مشابهة ليوتيوب الحقيقي.",
    
    highlightsEn: [
      "Video browsing and category filtering",
      "Search functionality for videos",
      "Responsive layout for all devices",
      "Clean and modern UI مشابه ليوتيوب",
    ],
    
    highlightsAr: [
      "تصفح الفيديوهات وتصنيفها",
      "إمكانية البحث عن الفيديوهات",
      "تصميم متجاوب لكل الأجهزة",
      "واجهة حديثة مشابهة ليوتيوب",
    ],
    
    stack: ["React", "MUI", "Vite"],
    
    link: "https://youtube55.netlify.app/",
    repo: "https://github.com/GalalElaasar9/youtube_clone.git",
    
    cover: youtubeClone,
    gallery: [youtubeClone, weatherApp, prayerTimes],
    
    category: "react",
  },
  {
    id: "weather-app",
    title: "Weather App",
    
    descEn: "A weather forecasting app with real-time data, search, and responsive design.",
    descAr: "تطبيق لعرض حالة الطقس ببيانات مباشرة مع البحث وتصميم متجاوب.",
    
    longEn:
      "A responsive weather application that allows users to check current weather conditions and forecasts for different cities. It provides real-time data such as temperature, humidity, and wind speed with a clean and user-friendly interface. The app focuses on simplicity, speed, and a smooth user experience across all devices.",
    
    longAr:
      "تطبيق لعرض حالة الطقس يتيح للمستخدم معرفة الطقس الحالي والتوقعات لمدن مختلفة. يعرض بيانات مباشرة مثل درجة الحرارة، الرطوبة، وسرعة الرياح في واجهة بسيطة وسهلة الاستخدام. يركز التطبيق على السرعة وسهولة الاستخدام على جميع الأجهزة.",
    
    highlightsEn: [
      "Real-time weather data fetching",
      "Search by city name",
      "Responsive design for all devices",
      "Clean and intuitive UI",
    ],
    
    highlightsAr: [
      "جلب بيانات الطقس بشكل مباشر",
      "البحث عن المدن بسهولة",
      "تصميم متجاوب لكل الأجهزة",
      "واجهة بسيطة وسهلة الاستخدام",
    ],
    
    stack: ["React", "Bootstrap", "Vite"],
    
    link: "https://weather-app-9999.netlify.app/",
    repo: "https://github.com/GalalElaasar9/weather-app.git",
    
    cover: weatherApp,
    gallery: [weatherApp, youtubeClone, prayerTimes],
    
    category: "react",
  },
  {
  id: "prayer-times",
  title: "Prayer Times",
  
  descEn: "An Islamic app to display daily prayer times based on location with a clean UI.",
  descAr: "تطبيق إسلامي لعرض مواعيد الصلاة اليومية حسب الموقع بتصميم بسيط.",
  
  longEn:
    "A responsive prayer times application that helps users stay updated with accurate daily الصلاة times based on their location. The app provides a clean and intuitive interface to view today's prayers, upcoming prayer times, and current time status. It focuses on simplicity, clarity, and accessibility across all devices.",
  
  longAr:
    "تطبيق لعرض مواعيد الصلاة يساعد المستخدمين على معرفة أوقات الصلاة اليومية بدقة بناءً على موقعهم. يوفر واجهة بسيطة وسهلة لعرض صلوات اليوم، الصلاة القادمة، والوقت الحالي. يركز التطبيق على الوضوح وسهولة الاستخدام على جميع الأجهزة.",
  
  highlightsEn: [
    "Accurate prayer times based on location",
    "Display of today's prayers schedule",
    "Responsive design for all devices",
    "Simple and clean user interface",
  ],
  
  highlightsAr: [
    "عرض مواعيد الصلاة بدقة حسب الموقع",
    "عرض جدول صلوات اليوم بالكامل",
    "تصميم متجاوب لكل الأجهزة",
    "واجهة بسيطة وسهلة الاستخدام",
  ],
  
  stack: ["React", "Bootstrap", "Vite"],
  
  link: "https://prayer-times99.netlify.app/",
  repo: "https://github.com/GalalElaasar9/prayer-times.git",
  
  cover: prayerTimes,
  gallery: [prayerTimes, youtubeClone, weatherApp],
  
  category: "react",
  },
  {
    id: "social-Media",
    title: "Social Media Website",
    
    descEn: "A social media UI website with posts, interactions, and responsive design.",
    descAr: "موقع سوشيال ميديا يعرض منشورات وتفاعلات بتصميم متجاوب.",
    
    longEn:
      "A social media website interface that allows users to explore posts, interact with content, and experience a modern feed layout. The project focuses on building a clean UI similar to popular social platforms, with responsive design and smooth user experience using pure HTML, CSS, and JavaScript.",
    
    longAr:
      "واجهة موقع سوشيال ميديا تتيح للمستخدمين تصفح المنشورات والتفاعل معها في تصميم يشبه المنصات الحديثة. يركز المشروع على بناء واجهة نظيفة وتجربة مستخدم سلسة باستخدام HTML و CSS و JavaScript فقط.",
    
    highlightsEn: [
      "Modern social media feed layout",
      "Interactive UI elements (likes, comments, etc.)",
      "Responsive design for all screen sizes",
      "Built using pure HTML, CSS, and JavaScript",
    ],
    
    highlightsAr: [
      "تصميم حديث لواجهة السوشيال ميديا",
      "عناصر تفاعلية (إعجاب، تعليقات، إلخ)",
      "تصميم متجاوب لكل أحجام الشاشات",
      "مبني باستخدام HTML و CSS و JavaScript فقط",
    ],
    
    stack: ["Html", "CSS", "JavaScript", "Font Awesome"],
    
    link: "https://galalelaasar9.github.io/Social-Media-Elaasar/",
    repo: "https://github.com/GalalElaasar9/Social-Media-Elaasar.git",
    
    cover: social,
    gallery: [social, education, interior, food, SpecialDesign, travel],
    
    category: "native",
  },
  {
  id: "eduction-Media",
  title: "Education Website",
  
  descEn: "An education website for courses, instructors, and learning content.",
  descAr: "موقع تعليمي لعرض الكورسات والمدرسين والمحتوى التعليمي.",
  
  longEn:
    "An education website designed to showcase courses, instructors, and learning programs in a clean and organized layout. The project focuses on presenting educational content بطريقة سهلة وجذابة مع تجربة مستخدم سلسة، باستخدام HTML و CSS و JavaScript لبناء واجهة احترافية ومتجاوبة.",
  
  longAr:
    "موقع تعليمي مصمم لعرض الكورسات والمدرسين والبرامج التعليمية بشكل منظم وجذاب. يركز المشروع على تقديم المحتوى التعليمي بطريقة سهلة مع تجربة مستخدم مريحة باستخدام HTML و CSS و JavaScript.",
  
  highlightsEn: [
    "Courses and instructors showcase",
    "Clean and structured layout",
    "Responsive design for all devices",
    "Smooth navigation between sections",
  ],
  
  highlightsAr: [
    "عرض الكورسات والمدرسين",
    "تصميم منظم وسهل الاستخدام",
    "تصميم متجاوب لكل الأجهزة",
    "تنقل سلس بين أقسام الموقع",
  ],
  
  stack: ["HTML", "CSS", "JavaScript", "Font Awesome"],
  
  link: "https://education-website-0100.netlify.app/",
  repo: "https://github.com/GalalElaasar9/Education-website.git",
  
  cover: education,
  gallery: [education, social, interior, food, SpecialDesign, travel],
  
  category: "native",
  },
  {
  id: "Tarvel",
  title: "Travel Website",
  
  descEn: "A travel website to explore destinations, offers, and booking sections.",
  descAr: "موقع سفر لعرض الوجهات والعروض وأقسام الحجز بتصميم جذاب.",
  
  longEn:
    "A travel website designed to showcase popular destinations, travel offers, and tour packages in an engaging and visually appealing layout. The project focuses on creating an attractive UI with smooth navigation, helping users explore places and plan trips بسهولة باستخدام HTML و CSS و JavaScript.",
  
  longAr:
    "موقع سفر مصمم لعرض الوجهات السياحية والعروض وباقات الرحلات بشكل جذاب. يركز المشروع على تقديم تجربة مستخدم سهلة مع تصميم بصري مميز وتنقل سلس باستخدام HTML و CSS و JavaScript.",
  
  highlightsEn: [
    "Showcase of travel destinations and offers",
    "Attractive and modern UI design",
    "Responsive layout for all devices",
    "Smooth scrolling and section navigation",
  ],
  
  highlightsAr: [
    "عرض الوجهات السياحية والعروض",
    "تصميم حديث وجذاب",
    "تصميم متجاوب لكل الأجهزة",
    "تنقل سلس بين أقسام الموقع",
  ],
  
  stack: ["HTML", "CSS", "JavaScript", "Font Awesome"],
  
  link: "https://traveling-website-9999.netlify.app/",
  repo: "https://github.com/GalalElaasar9/travel.git",
  
  cover: travel,
  gallery: [travel, SpecialDesign, food],
  
  category: "native",
  },
  {
  id: "special",
  title: "Special Design Website",
  
  descEn: "A modern business website with clean layout and responsive design.",
  descAr: "موقع بزنس بتصميم حديث ومنظم مع تجربة متجاوبة.",
  
  longEn:
    "A modern business website designed to present services and content in a clean and professional layout. The project focuses on delivering a visually appealing design with smooth navigation and well-structured sections, built using HTML, CSS, and JavaScript for a fast and responsive user experience.",
  
  longAr:
    "موقع بزنس مصمم لعرض الخدمات والمحتوى بشكل احترافي ومنظم. يركز المشروع على تقديم تصميم جذاب مع تنقل سلس بين الأقسام، باستخدام HTML و CSS و JavaScript لضمان سرعة الأداء وتجربة مستخدم مريحة.",
  
  highlightsEn: [
    "Clean and modern business layout",
    "Well-structured sections for content",
    "Responsive design for all devices",
    "Smooth navigation and user experience",
  ],
  
  highlightsAr: [
    "تصميم حديث ومنظم للمواقع التجارية",
    "تقسيم واضح ومنسق للمحتوى",
    "تصميم متجاوب لكل الأجهزة",
    "تنقل سلس وتجربة مستخدم مريحة",
  ],
  
  stack: ["HTML", "CSS", "JavaScript", "Font Awesome"],
  
  link: "https://special999.netlify.app/",
  repo: "https://github.com/GalalElaasar9/Special-Design.git",
  
  cover: SpecialDesign,
  gallery: [SpecialDesign, travel, food],
  
  category: "native",
  },
  {
  id: "food-website",
  title: "Food Website",
  
  descEn: "A restaurant website to showcase menu, dishes, and food services.",
  descAr: "موقع مطعم لعرض المنيو والأكلات والخدمات بشكل جذاب.",
  
  longEn:
    "A modern restaurant website designed to showcase food items, menu sections, and services in an attractive and user-friendly layout. The project focuses on visual appeal with organized content, helping users explore dishes easily with a smooth browsing experience using HTML, CSS, and JavaScript.",
  
  longAr:
    "موقع مطعم حديث مصمم لعرض الأكلات وأقسام المنيو والخدمات بشكل جذاب وسهل الاستخدام. يركز المشروع على الشكل البصري وتنظيم المحتوى لتسهيل تصفح المستخدم للأكلات مع تجربة سلسة باستخدام HTML و CSS و JavaScript.",
  
  highlightsEn: [
    "Food menu and dishes showcase",
    "Attractive and modern UI design",
    "Responsive layout for all devices",
    "Smooth navigation between sections",
  ],
  
  highlightsAr: [
    "عرض المنيو والأكلات بشكل منظم",
    "تصميم حديث وجذاب",
    "تصميم متجاوب لكل الأجهزة",
    "تنقل سلس بين أقسام الموقع",
  ],
  
  stack: ["HTML", "CSS", "JavaScript", "Font Awesome"],
  
  link: "https://food-website999.netlify.app/",
  repo: "https://github.com/GalalElaasar9/Food-Website99.git",
  
  cover: food,
  gallery: [food, SpecialDesign, travel],
  
  category: "native",
  },
  {
  id: "interior-elaasar",
  title: "Interior Design Website",
  
  descEn: "A modern interior design website showcasing home decoration and design ideas.",
  descAr: "موقع تصميم داخلي لعرض ديكورات المنازل وأفكار التصميم بشكل عصري.",
  
  longEn:
    "A modern interior design website built to showcase home decoration ideas, furniture layouts, and interior styling concepts. The project focuses on presenting visual content in an elegant and structured way, allowing users to explore different design styles with a smooth and responsive interface using HTML, CSS, and JavaScript.",
  
  longAr:
    "موقع تصميم داخلي حديث يعرض أفكار ديكور المنازل وتنسيق الأثاث وأنماط التصميم الداخلي. يركز المشروع على عرض المحتوى بشكل بصري أنيق ومنظم مع تجربة استخدام سلسة ومتجاوبة باستخدام HTML و CSS و JavaScript.",
  
  highlightsEn: [
    "Showcase of interior design ideas and layouts",
    "Modern and elegant UI design",
    "Responsive layout for all devices",
    "Smooth navigation between sections",
  ],
  
  highlightsAr: [
    "عرض أفكار التصميم الداخلي والديكورات",
    "تصميم أنيق وحديث",
    "تصميم متجاوب لكل الأجهزة",
    "تنقل سلس بين الأقسام",
  ],
  
  stack: ["HTML", "CSS", "JavaScript", "Font Awesome"],
  
  link: "https://interior-elaasar-000.netlify.app/",
  repo: "https://github.com/GalalElaasar9/Interior-Project.git",
  
  cover: interior,
  gallery: [interior, food, SpecialDesign, travel],
  
  category: "native",
  },
  {
  id: "elaasar-website",
  title: "Elaasar Website",
  
  descEn: "A personal portfolio website showcasing projects, skills, and work experience.",
  descAr: "موقع بورتفوليو شخصي لعرض المشاريع والمهارات والخبرة العملية.",
  
  longEn:
    "A personal portfolio website designed to showcase projects, skills, and development work in a clean and professional layout. The project focuses on presenting information in an organized way with smooth navigation and responsive design, built using HTML, CSS, Sass, and JavaScript.",
  
  longAr:
    "موقع بورتفوليو شخصي مصمم لعرض المشاريع والمهارات والخبرة بشكل منظم واحترافي. يركز المشروع على تقديم المحتوى بطريقة واضحة مع تنقل سلس وتصميم متجاوب باستخدام HTML و CSS و Sass و JavaScript.",
  
  highlightsEn: [
    "Personal portfolio showcase",
    "Clean and professional layout",
    "Responsive design for all devices",
    "Organized sections for projects and skills",
  ],
  
  highlightsAr: [
    "عرض بورتفوليو شخصي",
    "تصميم نظيف واحترافي",
    "تصميم متجاوب لكل الأجهزة",
    "تنظيم واضح للمشاريع والمهارات",
  ],
  
  stack: ["HTML", "CSS", "Sass", "JavaScript", "Font Awesome"],
  
  link: "https://galalelaasar9.github.io/Social-Media-Elaasar/",
  repo: "https://github.com/GalalElaasar9/Social-Media-Elaasar.git",
  
  cover: Elaasar,
  gallery: [Elaasar, social, interior, food, SpecialDesign, travel],
  
  category: "native",
  },
  {
  id: "photography-website",
  title: "Photography Portfolio Website",
  
  descEn: "A photography portfolio website to showcase creative photos and visual work.",
  descAr: "موقع بورتفوليو للتصوير لعرض الصور والأعمال البصرية بشكل احترافي.",
  
  longEn:
    "A modern photography portfolio website designed to showcase visual work, photography projects, and creative shots in an elegant gallery layout. The project focuses on presenting images in a clean, minimal, and visually appealing way with smooth navigation and responsive design using HTML, CSS, Sass, and JavaScript.",
  
  longAr:
    "موقع بورتفوليو للتصوير يعرض الأعمال الفوتوغرافية والصور الإبداعية في معرض أنيق. يركز المشروع على عرض الصور بطريقة بسيطة وجذابة مع تجربة استخدام سلسة وتصميم متجاوب باستخدام HTML و CSS و Sass و JavaScript.",
  
  highlightsEn: [
    "Elegant photo gallery layout",
    "Showcase of photography projects",
    "Responsive design for all devices",
    "Smooth navigation and image browsing",
  ],
  
  highlightsAr: [
    "معرض صور أنيق وجذاب",
    "عرض أعمال التصوير الفوتوغرافي",
    "تصميم متجاوب لكل الأجهزة",
    "تنقل سلس بين الصور",
  ],
  
  stack: ["HTML", "CSS", "Sass", "JavaScript", "Font Awesome"],
  
  link: "https://photography-website-elaasar.netlify.app/",
  repo: "https://github.com/GalalElaasar9/Photography-Portfolio-Website.git",
  
  cover: photo,
  gallery: [photo, Elaasar, social, interior, food, SpecialDesign, travel],
  
  category: "native",
  },
  {
  id: "masbaa-website",
  title: "Masbaha (Zikr) Website",
  
  descEn: "An Islamic website for digital tasbeeh and daily zikr counter.",
  descAr: "موقع إسلامي للسبحة الإلكترونية وعدّ الأذكار اليومية.",
  
  longEn:
    "A simple Islamic web application designed to help users perform digital tasbeeh (zikr counter) in an easy and calming interface. The project allows users to count dhikr, reset counters, and track their daily remembrance with a clean and minimal design built using HTML, CSS, and JavaScript.",
  
  longAr:
    "تطبيق ويب إسلامي بسيط يساعد المستخدمين على استخدام سبحة إلكترونية لعدّ الأذكار بسهولة. يتيح التطبيق عدّ التسبيح، إعادة التعيين، ومتابعة الأذكار اليومية بواجهة هادئة وبسيطة باستخدام HTML و CSS و JavaScript.",
  
  highlightsEn: [
    "Digital tasbeeh counter functionality",
    "Simple and calm UI design",
    "Reset and increment counters",
    "Responsive design for all devices",
  ],
  
  highlightsAr: [
    "عداد سبحة إلكترونية",
    "تصميم بسيط وهادئ",
    "إمكانية إعادة التعيين والعد",
    "تصميم متجاوب لكل الأجهزة",
  ],
  
  stack: ["HTML", "CSS", "JavaScript", "Font Awesome"],
  
  link: "https://website-misbaha-zekr.netlify.app/",
  repo: "https://github.com/GalalElaasar9/Website-Misbaha.git",
  
  cover: masbaa,
  gallery: [masbaa, photo, Elaasar, social, interior, food, SpecialDesign, travel],
  
  category: "native",
  },
];

export function Projects() {
  const { t, lang } = useI18n();
  const reduced = usePrefersReducedMotion();
  const tier = useDeviceTier();
  const [active, setActive] = useState<"all" | Category>("all");
  const [loading, setLoading] = useState(false);
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const filters: { value: "all" | Category; label: string }[] = [
    { value: "all", label: t("projects.filter.all") },
    { value: "react", label: "React" },
    { value: "next", label: "Next.js" },
    { value: "native", label: "Native Project" },
  ];

  const filtered = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  // Adaptive skeleton: skip on fast devices, short on normal, longer on slow.
  const skeletonMs = reduced ? 0 : tier === "fast" ? 0 : tier === "slow" ? 520 : 280;

  useEffect(() => {
    if (skeletonMs === 0) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const id = setTimeout(() => setLoading(false), skeletonMs);
    return () => clearTimeout(id);
  }, [active, skeletonMs]);

  const suggestions = filters
    .filter((f) => f.value !== active && f.value !== "all")
    .map((f) => ({
      value: f.value,
      label: f.label,
      count:
        f.value === "all"
          ? projects.length
          : projects.filter((p) => p.category === f.value).length,
    }))
    .filter((s) => s.count > 0)
    .slice(0, 3);

  const skeletonCount = Math.min(Math.max(filtered.length || 3, 3), 6);

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <p className="text-sm font-medium text-primary tracking-widest uppercase">
              {t("projects.kicker")}
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
              {t("projects.title")}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">{t("projects.subtitle")}</p>
        </div>

        <LayoutGroup>
          <motion.div layout className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => {
              const isActive = active === f.value;
              const count =
                f.value === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === f.value).length;
              return (
                <motion.button
                  key={f.value}
                  layout
                  onClick={() => setActive(f.value)}
                  whileHover={reduced ? undefined : { y: -1 }}
                  whileTap={reduced ? undefined : { scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 500, damping: 36 }}
                  className={`relative px-4 py-2 text-sm rounded-full border transition-colors ${
                    isActive
                      ? "border-transparent text-primary-foreground"
                      : "border-border bg-card hover:border-primary/60 hover:text-primary"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full shadow-[var(--shadow-soft)]"
                      style={{ background: "var(--gradient-primary)" }}
                      transition={
                        reduced
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 34, mass: 0.7 }
                      }
                    />
                  )}
                  <span className="relative inline-flex items-center gap-1.5">
                    {f.label}
                    <motion.span
                      layout
                      transition={{ type: "spring", stiffness: 500, damping: 36 }}
                      className={`text-[10px] min-w-[1.25rem] text-center px-1.5 py-0.5 rounded-full ${
                        isActive ? "bg-white/25" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <AnimatedCount value={count} />
                    </motion.span>
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout" initial={false}>
              {loading ? (
                Array.from({ length: skeletonCount }).map((_, i) => (
                  <motion.div
                    key={`skeleton-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.04 }}
                  >
                    <ProjectSkeleton tier={tier} />
                  </motion.div>
                ))
              ) : filtered.length === 0 ? (
                <ProjectsEmptyState
                  key="empty"
                  suggestions={suggestions}
                  onPick={(v) => setActive(v as "all" | Category)}
                />
              ) : (
                filtered.map((p, i) => (
                  <motion.article
                    key={p.id}
                    layout
                    initial={reduced ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.96 }}
                    animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                    exit={reduced ? { opacity: 0 } : { opacity: 0, y: -20, scale: 0.96 }}
                    transition={{
                      duration: reduced ? 0.15 : 0.4,
                      delay: reduced ? 0 : i * 0.05,
                      ease: "easeOut",
                    }}
                    whileHover={reduced ? undefined : { y: -6 }}
                    onClick={() => setOpenProject(p)}
                    className="group relative rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow overflow-hidden flex flex-col cursor-pointer text-start"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      <motion.img
                        src={p.cover}
                        alt={p.title}
                        loading="lazy"
                        width={1280}
                        height={800}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                      <span className="absolute top-3 start-3 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-background/80 backdrop-blur border border-border font-medium">
                        {p.category === "next"
                          ? "Next.js"
                          : p.category === "native"
                            ? "Native Project"
                            : "React"}
                      </span>
                      {/* Quick view affordance */}
                      <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur border border-border text-xs font-medium">
                          <Eye className="h-3.5 w-3.5" />
                          {lang === "ar" ? "عرض التفاصيل" : "View details"}
                        </span>
                      </div>
                    </div>

                    <div className="relative p-6 flex flex-col flex-1">
                      <div
                        aria-hidden
                        className="absolute -top-20 -end-20 h-44 w-44 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-3xl pointer-events-none"
                        style={{ background: "var(--gradient-primary)" }}
                      />
                      <div className="relative">
                        <h3 className="text-xl font-semibold">{p.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {lang === "ar" ? p.descAr : p.descEn}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {p.stack.map((s) => (
                            <span
                              key={s}
                              className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                        <div className="mt-5 flex gap-4 text-sm">
                          <a
                            href={p.link}
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
                          >
                            {t("projects.live")} <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                          <a
                            href={p.repo}
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                          >
                            {t("projects.code")} <Github className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))
              )}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  );
}
