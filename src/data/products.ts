export interface ProductItem {
  slug: string;
  id: string;
  badge: { en: string; ar: string };
  name: string;
  tagline: { en: string; ar: string };
  description: { en: string; ar: string };
  problemSolved: { en: string; ar: string };
  capabilities: Array<{
    title: { en: string; ar: string };
    desc: { en: string; ar: string };
  }>;
  techSpecs: Array<{ label: { en: string; ar: string }; value: string }>;
  deploymentTime: { en: string; ar: string };
  internalLink: string;
  externalAppUrl: string;
  featured: boolean;
}

export const productsData: ProductItem[] = [
  {
    slug: "runnova-flow",
    id: "runnova-flow",
    badge: { en: "Ready to Deploy", ar: "جاهز للإطلاق الفوري" },
    name: "Runnova Flow",
    tagline: {
      en: "Omnichannel AI Dispatcher & Automated Operations Hub",
      ar: "منصة التوجيه الذكي الموحدة وأتمتة العمليات عبر القنوات",
    },
    description: {
      en: "An off-the-shelf, turn-key AI communications engine that plugs directly into WhatsApp Business, Webchat, and email to qualify incoming customer inquiries, dispatch field tickets, and record verified CRM deals automatically.",
      ar: "محرك ذكاء اصطناعي جاهز للتشغيل يربط مباشرة قنوات واتساب للأعمال ومحادثات الموقع والبريد الإلكتروني، لفرز العملاء المحتملين وتوليد التذاكر وتسجيل الصفقات في الـ CRM تلقائياً.",
    },
    problemSolved: {
      en: "Eliminates lost customer messages during peak business hours and removes the delay in capturing high-value inbound sales requests.",
      ar: "يقضي نهائياً على ضياع رسائل العملاء في أوقات الذروة ويتخلص من البطء في تسجيل الفرص البيعية العاجلة.",
    },
    capabilities: [
      {
        title: { en: "Instant WhatsApp Conversational AI", ar: "رد ذكي فوري على واتساب" },
        desc: {
          en: "Answers questions, shares product catalogs, captures lead information, and takes orders in fluent Arabic & English.",
          ar: "يجيب على الاستفسارات، ويعرض كتالوجات المنتجات، ويجمع بيانات العملاء، ويسجل الطلبات بطلاقة.",
        },
      },
      {
        title: { en: "Autonomous CRM Dispatching", ar: "توزيع وتوجيه تلقائي للـ CRM" },
        desc: {
          en: "Syncs customer records, intent tags, and interaction transcripts directly to HubSpot, Salesforce, or Google Sheets.",
          ar: "مزامنة فورية للبيانات ودرجة اهتمام العميل وتفاصيل المحادثة مع أنظمة الـ CRM دون أي تدخل يدوي.",
        },
      },
      {
        title: { en: "Real-Time Agent Handoff", ar: "تحويل سلس لفريق العمل البشري" },
        desc: {
          en: "Alerts your top sales reps the instant a high-intent VIP client requests human consultation.",
          ar: "إشعار فوري لمسؤولي المبيعات بمجرد طلب عميل مميز (VIP) التحدث مع ممثل بشري.",
        },
      },
    ],
    techSpecs: [
      { label: { en: "Deployment Model", ar: "نموذج الاستضافة" }, value: "Managed Cloud or Private VPC" },
      { label: { en: "Response Latency", ar: "زمن الاستجابة" }, value: "< 450 ms" },
      { label: { en: "Integration Setup", ar: "مدة الإعداد والربط" }, value: "Within 48 Hours" },
      { label: { en: "Language Support", ar: "دعم اللغات" }, value: "Arabic (All Dialects) + English" },
    ],
    deploymentTime: { en: "Launch in 48 Hours", ar: "جاهز للعمل خلال 48 ساعة" },
    internalLink: "/products/runnova-flow",
    externalAppUrl: "https://flow.runnova.cloud",
    featured: true,
  },
  {
    slug: "runnova-cortex",
    id: "runnova-cortex",
    badge: { en: "Enterprise Intelligence", ar: "ذكاء مؤسسي خاص" },
    name: "Runnova Cortex",
    tagline: {
      en: "Private Enterprise Knowledge Engine & Internal Agent Copilot",
      ar: "محرك المعرفة المؤسسية الخاصة ومساعد الموظفين الذكي",
    },
    description: {
      en: "A secure internal AI copilot pre-packaged for fast deployment. Cortex indexes your internal policies, PDFs, technical SOPs, and historical reports into a private semantic search engine that delivers verifiable answers and citations.",
      ar: "مساعد ذكاء اصطناعي داخلي فائق الأمان وسريع النشر. يفهرس Cortex سياسات الشركة ولوائح العمل وكتالوجات المنتجات والتقارير الفنية في محرك بحث دلالي يقدم إجابات دقيقة موثقة بالمصادر.",
    },
    problemSolved: {
      en: "Stops employees from wasting hours hunting for answers across disorganized Google Drives, Notion pages, and buried email threads.",
      ar: "ينهي معاناة الموظفين في البحث المجهد عن المعلومات واللوائح وسط مئات المجلدات والملفات المشتتة.",
    },
    capabilities: [
      {
        title: { en: "Encrypted Document Ingestion", ar: "فهرسة مشفرة للمستندات" },
        desc: {
          en: "Upload PDFs, Word files, spreadsheets, and scanned documents with automatic OCR and semantic chunking.",
          ar: "رفع وتصنيف ملفات PDF و Word والإكسل والمستندات الممسوحة ضوئياً مع معالجة OCR دقيقة.",
        },
      },
      {
        title: { en: "Verifiable Page Citations", ar: "إجابات مثبتة برقم الصفحة" },
        desc: {
          en: "Every generated insight contains a direct footnote link to the exact page and paragraph in the source file.",
          ar: "كل إجابة يقدمها النظام تكون مدعومة برابط مباشر للفقرة ورقم الصفحة الدقيق في الملف الأصلي.",
        },
      },
      {
        title: { en: "Granular Privacy & Permission Gates", ar: "بوابات أمان وصلاحيات دقيقة" },
        desc: {
          en: "Integrates with Active Directory / Google SSO to guarantee users only query documents matching their clearance level.",
          ar: "تكامل مباشر مع أنظمة تسجيل الدخول الموحد (SSO) لضمان عدم وصول الموظف إلا للملفات المسموح بها.",
        },
      },
    ],
    techSpecs: [
      { label: { en: "Deployment Model", ar: "نموذج الاستضافة" }, value: "On-Premise / Dedicated VPC" },
      { label: { en: "Data Training", ar: "تدريب النماذج" }, value: "Strict Zero-Data Training Guarantee" },
      { label: { en: "Index Capacity", ar: "سعة الفهرسة" }, value: "Over 5,000,000 Document Chunks" },
      { label: { en: "SSO Integrations", ar: "تسجيل الدخول" }, value: "Okta, Azure AD, Google Workspace" },
    ],
    deploymentTime: { en: "Launch in 3 to 5 Days", ar: "جاهز للعمل خلال 3 إلى 5 أيام" },
    internalLink: "/products/runnova-cortex",
    externalAppUrl: "https://cortex.runnova.cloud",
    featured: true,
  },
];
