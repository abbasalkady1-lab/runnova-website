export interface SolutionItem {
  slug: string;
  id: string;
  icon: string;
  badge: { en: string; ar: string };
  title: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  description: { en: string; ar: string };
  painPoint: {
    title: { en: string; ar: string };
    costOfInaction: { en: string; ar: string };
  };
  keyCapabilities: Array<{
    title: { en: string; ar: string };
    desc: { en: string; ar: string };
  }>;
  technicalIntegrations: string[];
  workflowSteps: Array<{
    step: number;
    title: { en: string; ar: string };
    description: { en: string; ar: string };
  }>;
  metrics: Array<{
    value: string;
    label: { en: string; ar: string };
  }>;
  faqs: Array<{
    question: { en: string; ar: string };
    answer: { en: string; ar: string };
  }>;
}

export const solutionsData: SolutionItem[] = [
  {
    slug: "ai-agents",
    id: "ai-agents",
    icon: "Bot",
    badge: {
      en: "Autonomous Intelligence",
      ar: "ذكاء تنفيذي مستقل",
    },
    title: {
      en: "Custom AI Voice & Chat Agents",
      ar: "وكلاء الذكاء الاصطناعي الصوتي والمحادثات المخصصة",
    },
    subtitle: {
      en: "Deploy domain-specific AI agents that execute complex customer workflows, qualify enterprise leads, and resolve operations 24/7.",
      ar: "أطلق وكلاء ذكاء اصطناعي متخصصين ينفذون مهام خدمة العملاء المعقدة، ويفلترون الصفقات المؤهلة، وينهون العمليات التشغيلية على مدار الساعة.",
    },
    description: {
      en: "Replace brittle rule-based chatbots with reasoning AI agents engineered specifically for your domain. Our agents connect directly to your CRM, inventory, and telephony systems to conduct human-grade conversations and execute actions in real time.",
      ar: "استبدل روبوتات المحادثة القديمة محدودة القواعد بوكلاء ذكاء اصطناعي يمتلكون القدرة على التفكير والاستنتاج. يتصل وكلاؤنا مباشرة بأنظمة إدارة علاقات العملاء (CRM) والمخازن والاتصالات لإجراء محادثات واقعية وتنفيذ إجراءات فورية.",
    },
    painPoint: {
      title: {
        en: "High Latency & Expensive Support Burnout",
        ar: "بطء الاستجابة للعملاء وتكاليف الدعم الباهظة",
      },
      costOfInaction: {
        en: "Over 68% of enterprise leads drop off when initial response time exceeds 15 minutes, while maintaining 24/7 human teams incurs unsustainable overhead.",
        ar: "أكثر من 68% من الصفقات والفرص البيعية تُفقد عند تأخر الرد لأكثر من 15 دقيقة، في حين أن إدارة فرق بشرية على مدار الساعة ترهق ميزانيات الشركات.",
      },
    },
    keyCapabilities: [
      {
        title: { en: "Multi-Modal Voice & Chat", ar: "تفاعل صوتي وكتابي متزامن" },
        desc: {
          en: "Sub-500ms voice synthesis with native Arabic and English accents, combined with instant omnichannel messaging.",
          ar: "توليد صوتي في أقل من 500 مللي ثانية مع نطق طبيعي باللغتين العربية والإنجليزية، وتكامل سلس مع كافة قنوات المراسلة.",
        },
      },
      {
        title: { en: "Real-Time Tool Execution", ar: "تنفيذ فوري للأوامر البرمجية" },
        desc: {
          en: "Agents book calendar appointments, issue refunds, update CRM records, and trigger transactional emails autonomously.",
          ar: "يقوم الوكلاء بحجز المواعيد على التقويم، وتحديث بيانات العملاء في الـ CRM، وإرسال الفواتير البرمجية تلقائيًا دون تدخل بشري.",
        },
      },
      {
        title: { en: "Strict Enterprise Guardrails", ar: "ضوابط أمان مؤسسية صارمة" },
        desc: {
          en: "Deterministic safety constraints prevent hallucinations, protect brand integrity, and enforce compliance policies.",
          ar: "قيود حتمية تمنع الهلوسة، وتحافظ على نبرة وهوية العلامة التجارية، وتضمن الالتزام بالسياسات والخصوصية.",
        },
      },
    ],
    technicalIntegrations: [
      "Salesforce & HubSpot CRM",
      "WhatsApp Business Cloud API",
      "Twilio / LiveKit Realtime Voice",
      "Zendesk & Intercom Support Hubs",
      "PostgreSQL / MongoDB / Stripe",
    ],
    workflowSteps: [
      {
        step: 1,
        title: { en: "Inquiry Ingestion", ar: "استقبال الاستفسار والطلب" },
        description: {
          en: "Client contacts via WhatsApp, Webchat, or Phone. Intent and emotion are classified instantly.",
          ar: "يتواصل العميل عبر الواتساب أو الموقع أو الهاتف؛ فيتم تحليل الهدف والمشاعر فورياً.",
        },
      },
      {
        step: 2,
        title: { en: "Contextual Retrieval", ar: "استرجاع السياق وبيانات العميل" },
        description: {
          en: "Agent queries private CRM records and company databases to verify identity and purchase history.",
          ar: "يقوم الوكيل بالاستعلام عن سجل العميل وسوابق التعامل من قاعدة البيانات المشفرة.",
        },
      },
      {
        step: 3,
        title: { en: "Autonomous Tool Action", ar: "التنفيذ البرمجي المباشر" },
        description: {
          en: "Action is executed via secure APIs (e.g., booking an appointment or modifying a reservation).",
          ar: "يتم تنفيذ الإجراء المطلوب عبر واجهات الـ API (مثل حجز موعد مؤكد أو تعديل حجز).",
        },
      },
      {
        step: 4,
        title: { en: "Verification & Telemetry", ar: "التأكيد والتوثيق والتحليلات" },
        description: {
          en: "Instant confirmation sent to the client while audit logs and ROI metrics are routed to executive dashboards.",
          ar: "إرسال رسالة تأكيد للعميل مع أرشفة العملية وإرسال إحصائيات الأداء للوحة التحكم التنفيذية.",
        },
      },
    ],
    metrics: [
      { value: "85%", label: { en: "Inquiries Resolved Without Human Intervention", ar: "نسبة الاستفسارات المحلولة بالكامل دون تدخل بشري" } },
      { value: "<400ms", label: { en: "Average Voice & Chat Response Time", ar: "متوسط سرعة الاستجابة الصوتية والكتابية" } },
      { value: "3.8x", label: { en: "Increase in Lead-to-Meeting Conversion", ar: "معدل مضاعفة تحويل العملاء المحتملين لاجتماعات بيعية" } },
    ],
    faqs: [
      {
        question: {
          en: "Can the AI Agent connect to our proprietary CRM and ERP systems?",
          ar: "هل يمكن لوكيل الذكاء الاصطناعي الاتصال بأنظمة CRM و ERP الخاصة بشركتنا؟",
        },
        answer: {
          en: "Yes. Runnova engineers custom bidirectional API adapters for Salesforce, HubSpot, SAP, Odoo, custom SQL databases, and internal REST/GraphQL endpoints with end-to-end encryption.",
          ar: "نعم بكل تأكيد. يقوم مهندسو Runnova ببناء محولات برمجية ثنائية الاتجاه مع Salesforce و HubSpot و Odoo وقواعد البيانات المخصصة مع تشفير شامل لكافة البيانات.",
        },
      },
      {
        question: {
          en: "How do you ensure the agent does not hallucinate false information?",
          ar: "كيف تضمنون عدم هلوسة الوكيل أو إعطاء معلومات غير صحيحة؟",
        },
        answer: {
          en: "We deploy strict architectural guardrails: grounding the agent exclusively within verified enterprise documents, applying semantic boundary checking, and enforcing deterministic fallback protocols.",
          ar: "نعتمد ضوابط معمارية صارمة: تقييد الوكيل فقط بالبيانات الموثقة للشركة، وتطبيق فحص دلالي للحدود، وبروتوكولات تحويل احترافية لفريق العمل البشري عند الحالات الحرجة.",
        },
      },
      {
        question: {
          en: "Does the voice agent support natural spoken Arabic dialects?",
          ar: "هل يدعم الوكيل الصوتي اللهجات العربية الطبيعية والخليجية؟",
        },
        answer: {
          en: "Yes. Our voice agents are fine-tuned for regional Arabic dialects (Gulf, Egyptian, Levantine, and Modern Standard Arabic) as well as fluent business English.",
          ar: "نعم، ندعم اللهجات الإقليمية المتنوعة (الخليجية، المصرية، الشامية، والعربية الفصحى) بالإضافة إلى الإنجليزية المؤسسية بطلاقة تامة ونبرة احترافية.",
        },
      },
      {
        question: {
          en: "What is the typical deployment timeline for a custom agent?",
          ar: "ما هي المدة الزمنية المعتادة لبناء وتدشين وكيل ذكي مخصص؟",
        },
        answer: {
          en: "A production-grade, secure custom agent typically launches within 2 to 4 weeks, including architecture design, private data ingestion, integration testing, and staff training.",
          ar: "يستغرق الإطلاق الإنتاجي المتكامل من أسبوعين إلى 4 أسابيع، متضمناً مرحلة التصميم المعماري، وربط البيانات، والاختبارات الأمنية الصارمة، وتدريب فريقكم.",
        },
      },
    ],
  },
  {
    slug: "workflow-automation",
    id: "workflow-automation",
    icon: "Cpu",
    badge: {
      en: "Operational Scale",
      ar: "أتمتة العمليات التلقائية",
    },
    title: {
      en: "End-to-End Workflow & System Automation",
      ar: "أتمتة العمليات الشاملة والربط بين الأنظمة المؤسسية",
    },
    subtitle: {
      en: "Eliminate repetitive manual data entry and synchronize WhatsApp, CRM, ERP, and payment pipelines with event-driven AI pipelines.",
      ar: "تخلص نهائياً من الإدخال اليدوي المتكرر واربط قنوات الواتساب والـ CRM والـ ERP وبوابات الدفع في مسارات عمل ذكية ذاتية التشغيل.",
    },
    description: {
      en: "Modern enterprises waste thousands of hours copy-pasting data between disconnected software stacks. Runnova architects robust, fault-tolerant automation pipelines that connect legacy infrastructure to modern AI models for instant order processing, invoicing, lead routing, and telemetry.",
      ar: "تخسر الشركات مئات الساعات شهريًا في النقل اليدوي للبيانات بين البرمجيات المنفصلة. تبني Runnova مسارات أتمتة فائقة الموثوقية تربط أنظمتكم الحالية بمحركات الذكاء الاصطناعي لمعالجة الطلبات، وإصدار الفواتير، وتوزيع المهام، والتحليلات اللحظية.",
    },
    painPoint: {
      title: {
        en: "Fragmented Data Silos & Human Operational Errors",
        ar: "تشتت البيانات بين الأنظمة والأخطاء البشرية المتكررة",
      },
      costOfInaction: {
        en: "Manual data reconciliation costs companies an average of 19% in operational efficiency while introducing costly delays in customer fulfillment.",
        ar: "يكلف التدقيق ونقل البيانات اليدوي الشركات نحو 19% من كفاءتها التشغيلية ويتسبب في تأخير تسليم طلبات وخدمات العملاء.",
      },
    },
    keyCapabilities: [
      {
        title: { en: "Event-Driven Orchestration", ar: "محركات تشغيل فورية بالأحداث" },
        desc: {
          en: "Microservice pipelines react to webhook events in milliseconds, transforming unstructured documents into clean database records.",
          ar: "مسارات برمجية دقيقة تتفاعل مع أحداث النظام في أجزاء من الثانية، وتحول الفواتير والملفات غير المنظمة لبيانات مهيكلة.",
        },
      },
      {
        title: { en: "WhatsApp & Omnichannel Sync", ar: "ربط متكامل لواتساب والقنوات" },
        desc: {
          en: "Automatically turn WhatsApp chats into CRM deals, auto-assign sales reps, and trigger logistics dispatch orders.",
          ar: "تحويل محادثات الواتساب لفرص بيعية في الـ CRM، وتعيين المندوب المناسب، وتوليد أوامر الشحن تلقائيًا.",
        },
      },
      {
        title: { en: "Fail-Safe Retries & Dead Letters", ar: "أنظمة تعافي ذاتية وتوثيق شامل" },
        desc: {
          en: "Enterprise queue management guarantees zero dropped payloads even during upstream API outages or high traffic surges.",
          ar: "إدارة طوابير المهام تضمن عدم ضياع أي طلب أو بيانات حتى أثناء انقطاع خوادم الطرف الثالث أو ذروة الضغط.",
        },
      },
    ],
    technicalIntegrations: [
      "WhatsApp Business Platform",
      "SAP, Odoo & Microsoft Dynamics",
      "Stripe, Paymob & Tap Payments",
      "Apache Kafka / AWS SQS / Redis",
      "Google Workspace & Microsoft 367",
    ],
    workflowSteps: [
      {
        step: 1,
        title: { en: "Trigger Ingestion", ar: "استشعار الحدث والمدخلات" },
        description: {
          en: "A webhook fires from your store, form, payment gateway, or incoming WhatsApp order.",
          ar: "إشعار فوري من متجرك أو بوابات الدفع أو رسالة طلب واردة عبر واتساب.",
        },
      },
      {
        step: 2,
        title: { en: "AI Parsing & Validation", ar: "التحليل الذكي والتدقيق" },
        description: {
          en: "LLM extracts key parameters (customer ID, items, amounts, tax codes) and validates against schemas.",
          ar: "يقوم النموذج الذكي باستخراج بنود الطلب والعميل وتدقيقها محاسبياً.",
        },
      },
      {
        step: 3,
        title: { en: "Multi-System Execution", ar: "التنفيذ المتزامن في الأنظمة" },
        description: {
          en: "Updates ERP inventory, generates PDF invoices, notifies accounting, and sends delivery tracking.",
          ar: "تحديث المخزون في الـ ERP، وإصدار الفاتورة الضريبية، وإشعار الشحن في وقت واحد.",
        },
      },
      {
        step: 4,
        title: { en: "Real-Time Telemetry", ar: "المراقبة وسجلات التدقيق" },
        description: {
          en: "Live monitoring traces execution time, SLA performance, and financial velocity in executive panels.",
          ar: "لوحة تحكم تنفيذية ترصد سرعة الإنجاز، مؤشرات الأداء، وتوفير التكاليف الفعلي.",
        },
      },
    ],
    metrics: [
      { value: "92%", label: { en: "Reduction in Repetitive Administrative Tasks", ar: "انخفاض في المهام الإدارية والورقية المتكررة" } },
      { value: "10x", label: { en: "Faster Order Processing & Invoicing Velocity", ar: "مضاعفة سرعة إنجاز الطلبات وإصدار الفواتير" } },
      { value: "99.98%", label: { en: "System Reliability & Payload Delivery Rate", ar: "نسبة استقرار وموثوقية خطوط الأتمتة" } },
    ],
    faqs: [
      {
        question: {
          en: "Can Runnova integrate with legacy or custom on-premise software?",
          ar: "هل تستطيع Runnova الربط مع أنظمتنا الداخلية القديمة أو المستضافة محلياً؟",
        },
        answer: {
          en: "Yes. We engineer secure VPN gateway connectors and custom middleware bridges that connect on-premise SQL/ERP servers with modern cloud AI workflows securely.",
          ar: "نعم، نقوم ببناء بوابات ربط آمنة ومشفرة (Secure Gateways) تصل قواعد بياناتكم وخوادمكم الداخلية بسحابة الذكاء الاصطناعي دون المساس بخصوصية البنية التحتية.",
        },
      },
      {
        question: {
          en: "What happens if an external API (like WhatsApp or a payment gateway) goes down?",
          ar: "ماذا يحدث إذا تعطلت إحدى الخدمات الخارجية مؤقتاً (مثل بوابات الدفع أو واتساب)؟",
        },
        answer: {
          en: "Our architecture utilizes resilient queue systems (Redis/SQS) with exponential backoff retries and dead-letter alerts, ensuring zero transactions or messages are lost.",
          ar: "تعتمد بنيتنا على طوابير مهام مرنة (Fault-Tolerant Queues) تحتفظ بالبيانات وتعيد المحاولة تلقائيًا بمجرد عودة الخدمة دون فقدان أي معاملة إطلاقاً.",
        },
      },
      {
        question: {
          en: "How does workflow automation impact our existing team?",
          ar: "كيف ستؤثر أتمتة العمليات على فريق عملنا الحالي؟",
        },
        answer: {
          en: "It frees high-value employees from mundane data entry and copy-paste routines, allowing them to focus on high-impact sales, strategy, and strategic client relationships.",
          ar: "تحرر الأتمتة موظفيكم من الأعمال الروتينية المرهقة، مما يتيح لهم التركيز الكامل على إبرام الصفقات، خدمة العملاء الكبار، والنمو الاستراتيجي للشركة.",
        },
      },
    ],
  },
  {
    slug: "enterprise-ai-rag",
    id: "enterprise-ai-rag",
    icon: "Database",
    badge: {
      en: "Private Knowledge Intelligence",
      ar: "ذكاء البيانات المؤسسية الخاصة",
    },
    title: {
      en: "Enterprise AI Knowledge Retrieval (RAG)",
      ar: "محركات استرجاع المعرفة والبيانات الداخلية الخاصة (RAG)",
    },
    subtitle: {
      en: "Unlock the hidden intelligence inside your internal PDFs, SOPs, ERP databases, and contracts with zero data leakage to public models.",
      ar: "أطلق العنان للقوة الكامنة داخل وثائق شركتك، عقودك، لوائحك الداخلية وقواعد بياناتك، مع ضمان عدم تسريب أي بايت للنماذج العامة.",
    },
    description: {
      en: "Runnova designs private Retrieval-Augmented Generation (RAG) engines tailored to enterprise security standards. Your staff and executives query thousands of technical documents, legal contracts, and historical records in seconds, receiving citations and verifiable answers strictly grounded in your proprietary data.",
      ar: "تصمم Runnova محركات استرجاع وتوليد ذكية (RAG) مطابقة لأعلى المعايير الأمنية المؤسسية. تمكن موظفيك ومدراءك من البحث الفوري في آلاف الوثائق الفنية والعقود القانونية والحصول على إجابات موثقة بالمصادر الدقيقة دون أي هلوسة.",
    },
    painPoint: {
      title: {
        en: "Lost Institutional Knowledge & Search Paralysis",
        ar: "ضياع المعرفة المؤسسية وصعوبة الوصول للقرارات",
      },
      costOfInaction: {
        en: "Enterprise employees spend an average of 9.3 hours per week searching for and verifying internal documents, slowing critical decision-making.",
        ar: "يقضي الموظف في الشركات ما متوسطه 9.3 ساعات أسبوعيًا فقط في البحث عن الملفات والتحقق من صحتها، مما يعطل اتخاذ القرارات السريعة.",
      },
    },
    keyCapabilities: [
      {
        title: { en: "Zero Data Training Guarantee", ar: "ضمان عدم تدريب النماذج العامة" },
        desc: {
          en: "Your enterprise data stays in isolated vector stores. We enforce contractual and technical guarantees that no public AI model trains on your IP.",
          ar: "تبقى بياناتكم في مستودعات متجهة معزولة مشفرة، مع ضمانات تقنية وقانونية بعدم استخدامها إطلاقاً في تدريب النماذج العامة.",
        },
      },
      {
        title: { en: "Hybrid Semantic & BM25 Search", ar: "بحث دلالي وهجين فائق الدقة" },
        desc: {
          en: "Combines dense vector embeddings with exact keyword BM25 retrieval and reranking for pinpoint 99.4% factual accuracy.",
          ar: "يدمج البحث الدلالي بالمتجهات مع المطابقة الدقيقة للمصطلحات وإعادة الترتيب (Reranking) لضمان دقة إجابة تصل إلى 99.4%.",
        },
      },
      {
        title: { en: "Role-Based Access Control (RBAC)", ar: "صلاحيات دقيقة بحسب المستوى الوظيفي" },
        desc: {
          en: "Strict metadata filtering ensures employees only see answers derived from documents their specific security clearance permits.",
          ar: "فلاتر أمنية تضمن أن كل موظف يتلقى إجابات فقط من الملفات التي يملك تصريحاً أمنياً صريحاً للاطلاع عليها.",
        },
      },
    ],
    technicalIntegrations: [
      "Qdrant / Pinecone / pgvector",
      "SharePoint & Google Drive",
      "Confluence & Notion Enterprise",
      "Snowflake & BigQuery Warehouses",
      "Local LLM Hosting (vLLM / Ollama)",
    ],
    workflowSteps: [
      {
        step: 1,
        title: { en: "Document Chunking", ar: "المعالجة والتقسيم الدلالي" },
        description: {
          en: "Complex PDFs, contracts, and tables are parsed and structured into semantic chunks.",
          ar: "تحليل العقود والملفات والجداول المعقدة وتقسيمها إلى وحدات دلالية ذكية.",
        },
      },
      {
        step: 2,
        title: { en: "Vector Embedding", ar: "التحويل المتجهي والتخزين المشفر" },
        description: {
          en: "Data is converted into high-dimensional vector representations and stored in private vector DBs.",
          ar: "تحويل البيانات إلى متجهات رياضية عالية الأبعاد وتخزينها في قاعدة بيانات متجهات مشفرة.",
        },
      },
      {
        step: 3,
        title: { en: "Contextual Reranking", ar: "الاسترجاع وإعادة الترتيب" },
        description: {
          en: "When an executive asks a question, the top relevant chunks are retrieved, reranked, and fed to the LLM.",
          ar: "عند طرح السؤال، يتم استدعاء أدق الفقرات وإعادة ترتيبها وتقديمها للنموذج كسياق موثق.",
        },
      },
      {
        step: 4,
        title: { en: "Grounded Synthesis", ar: "توليد الإجابة مع ذكر المصادر" },
        description: {
          en: "The LLM provides an accurate answer with exact page citations and direct document links.",
          ar: "تقديم إجابة محكمة ومباشرة مع إرفاق رقم الصفحة ورابط الوثيقة الأصلية للتحقق الفوري.",
        },
      },
    ],
    metrics: [
      { value: "99.4%", label: { en: "Retrieval Accuracy & Citation Fidelity", ar: "دقة استرجاع المعلومات والتوثيق المباشر" } },
      { value: "80%", label: { en: "Reduction in Research & Internal Query Time", ar: "توفير في وقت البحث الداخلي وإعداد التقارير" } },
      { value: "100%", label: { en: "Enterprise Data Privacy & Sovereignty", ar: "سيادة وخصوصية كاملة للبيانات المؤسسية" } },
    ],
    faqs: [
      {
        question: {
          en: "Where is our private company data physically stored?",
          ar: "أين يتم تخزين بيانات الشركة الحساسة فعلياً؟",
        },
        answer: {
          en: "In your dedicated cloud tenant (AWS, Google Cloud, Azure) or inside your private on-premise infrastructure. Runnova never routes private IP to shared multitenant pools.",
          ar: "يتم التخزين حصرياً داخل حسابكم السحابي الخاص (AWS أو Google Cloud أو Azure) أو داخل خوادمكم المحلية المشفرة، دون أي عبور لشبكات مشتركة.",
        },
      },
      {
        question: {
          en: "Can the system process complex Arabic financial and legal documents?",
          ar: "هل يستطيع النظام قراءة وتحليل المستندات القانونية والمالية العربية المعقدة؟",
        },
        answer: {
          en: "Yes. Our OCR and chunking pipelines are optimized for multi-column Arabic layouts, tables, official stamps, and specialized legal/financial terminology.",
          ar: "نعم تماماً، محركاتنا مدربة على معالجة التنسيقات العربية المتعددة الأعمدة، والجداول المحاسبية، والمصطلحات القانونية والإدارية بدقة متناهية.",
        },
      },
      {
        question: {
          en: "How does the system prevent non-management employees from seeing executive payroll data?",
          ar: "كيف نمنع الموظفين العاديين من الوصول لبيانات حساسة مثل رواتب الإدارة؟",
        },
        answer: {
          en: "We implement dynamic Role-Based Access Control (RBAC) at the vector search layer. Queries are automatically filtered by the user's validated authorization token.",
          ar: "نطبق نظام صلاحيات متقدم (RBAC) على مستوى البحث المتجهي؛ بحيث يُفلتر البحث تلقائياً بحسب رتبة وصلاحية المستخدم المسجل.",
        },
      },
    ],
  },
];
