export interface UseCaseItem {
  id: string;
  category: "real-estate" | "healthcare" | "ecommerce" | "b2b";
  categoryLabel: { en: string; ar: string };
  title: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  clientType: { en: string; ar: string };
  before: {
    headline: { en: string; ar: string };
    points: Array<{ en: string; ar: string }>;
  };
  after: {
    headline: { en: string; ar: string };
    points: Array<{ en: string; ar: string }>;
  };
  metrics: Array<{ value: string; label: { en: string; ar: string } }>;
}

export const useCasesData: UseCaseItem[] = [
  {
    id: "luxury-real-estate",
    category: "real-estate",
    categoryLabel: { en: "Real Estate & Development", ar: "العقارات والتطوير العقاري" },
    title: {
      en: "Automated Lead Qualification & Showing Schedules on WhatsApp",
      ar: "أتمتة تأهيل العملاء وجدولة معاينة العقارات عبر الواتساب",
    },
    subtitle: {
      en: "How a premier developer converted 3.2x more luxury villa inquiries into in-person sales tours without adding administrative headcount.",
      ar: "كيف ضاعفت شركة تطوير عقاري رائدة مبيعاتها 3.2 مرة وحولت استفسارات الواتساب إلى معاينات فعلية دون زيادة فريق العمل.",
    },
    clientType: { en: "High-End Real Estate Developer", ar: "شركة تطوير عقاري فاخر" },
    before: {
      headline: {
        en: "4-Hour Lead Response Delays & Cold Buyer Drop-Offs",
        ar: "تأخر الرد لأكثر من 4 ساعات وخسارة المشترين الجادين",
      },
      points: [
        {
          en: "Brokers spent 65% of their working hours answering repetitive questions about floor plans, pricing, and availability.",
          ar: "كان الوسطاء يقضون 65% من وقتهم في الإجابة المتكررة عن مساحات الفلل والأسعار والمخططات.",
        },
        {
          en: "Prospective international buyers messaging outside office hours received automated voicemail or generic text delays.",
          ar: "المشترون الدوليون خارج ساعات العمل الرسمية كانوا يتلقون رسائل آلية جافة بدون أي تفاعل حقيقي.",
        },
        {
          en: "Sales pipeline tracking was manually entered into Excel sheets with frequent lost leads.",
          ar: "تسجيل بيانات العملاء كان يتم يدوياً في ملفات إكسل مع ضياع متكرر لفرص البيع المؤكدة.",
        },
      ],
    },
    after: {
      headline: {
        en: "Sub-Minute AI Qualification & Instant Calendar Booking",
        ar: "تأهيل فوري بالذكاء الاصطناعي وجدولة مواعيد في أقل من دقيقة",
      },
      points: [
        {
          en: "Runnova AI voice & chat agents qualify budget, citizenship, and property preferences in fluent Arabic & English within 30 seconds.",
          ar: "وكلاء Runnova يفرزون ميزانية العميل والوحدة المفضلة ويتحدثون باللهجة الخليجية والإنجليزية في 30 ثانية فقط.",
        },
        {
          en: "Qualified VIP buyers are instantly scheduled directly into the top broker's Google Calendar with verified SMS and WhatsApp reminders.",
          ar: "العميل الجاد يتم تثبيت موعد معاينته مباشرة على تقويم مستشار المبيعات مع إرسال تأكيد وموقع الوحدة تلقائياً.",
        },
        {
          en: "100% of interactions and transcripts are auto-synced into Salesforce CRM in real time.",
          ar: "مزامنة تلقائية كاملة لبيانات وتفاصيل المحادثة في نظام Salesforce لحظة بلحظة.",
        },
      ],
    },
    metrics: [
      { value: "3.2x", label: { en: "Increase in Booked Property Tours", ar: "زيادة في عدد المعاينات المجدولة" } },
      { value: "<25s", label: { en: "Average Initial Response Time", ar: "متوسط وقت الرد على العميل" } },
      { value: "72%", label: { en: "Brokers Time Reallocated to High-Value Closing", ar: "من وقت الوسطاء تم توجيهه لإبرام الصفقات" } },
    ],
  },
  {
    id: "healthcare-clinic-network",
    category: "healthcare",
    categoryLabel: { en: "Healthcare & Specialized Clinics", ar: "الرعاية الصحية والعيادات المتخصصة" },
    title: {
      en: "24/7 Multilingual Patient Booking & Insurance Pre-Approval Flow",
      ar: "حجز مواعيد المرضى والتحقق المسبق من التأمين الطبي على مدار الساعة",
    },
    subtitle: {
      en: "Eliminating reception phone congestion and reducing clinic appointment no-shows across 12 branch locations.",
      ar: "إنهاء تكدس المكالمات على الاستقبال وخفض نسبة الغياب عن المواعيد في 12 فرعاً طبياً.",
    },
    clientType: { en: "Private Medical & Dental Clinics Network", ar: "شبكة عيادات ومراكز طبية خاصة" },
    before: {
      headline: {
        en: "Constant Busy Signals & 28% Appointment No-Show Rate",
        ar: "خطوط هاتف مشغولة باستمرار ونسبة غياب عن المواعيد بلغت 28%",
      },
      points: [
        {
          en: "Patients waited on hold for up to 9 minutes to book or reschedule specialized doctor visits.",
          ar: "كان المرضى ينتظرون حتى 9 دقائق على الهاتف لحجز كشف طبي أو تعديل موعد استشارة.",
        },
        {
          en: "Receptionists manually verified health insurance cards, causing long morning lobby lines.",
          ar: "كان موظفو الاستقبال يدققون بطاقات التأمين يدوياً، مما تسبب في ازدحام صالات الانتظار.",
        },
        {
          en: "High no-show rates resulted in empty clinic slots and lost revenue for senior doctors.",
          ar: "تسبب تغيب المرضى دون إشعار مسبق في إهدار أوقات الأطباء الاستشاريين وخسائر تشغيلية.",
        },
      ],
    },
    after: {
      headline: {
        en: "Seamless WhatsApp Self-Service with Zero Friction",
        ar: "خدمة ذاتية ذكية عبر واتساب وتأكيد فوري للمواعيد",
      },
      points: [
        {
          en: "Patients book, modify, or cancel appointments via WhatsApp in under 45 seconds using natural speech.",
          ar: "يقوم المريض بحجز موعده أو تعديله خلال 45 ثانية عبر واتساب برسائل صوتية أو كتابية طبيعية.",
        },
        {
          en: "Runnova OCR automatically reads patient insurance cards and checks coverage criteria before arrival.",
          ar: "محرك Runnova يقرأ صورة بطاقة التأمين عبر تقنية الـ OCR ويدقق التغطية الطبية قبل حضور المريض.",
        },
        {
          en: "Automated two-way confirmation sequences reduced unannounced appointment cancellations to under 6%.",
          ar: "سلسلة تذكيرات تفاعلية ذكية خفضت نسبة الغياب عن المواعيد لأقل من 6% فقط.",
        },
      ],
    },
    metrics: [
      { value: "78%", label: { en: "Appointments Booked via WhatsApp AI", ar: "من المواعيد تُحجز ذاتياً بالذكاء الاصطناعي" } },
      { value: "81%", label: { en: "Reduction in No-Show Rates", ar: "انخفاض في نسبة الغياب عن المواعيد" } },
      { value: "0", label: { en: "Lost Inquiries During Off-Hours", ar: "استفسارات مفقودة خارج أوقات العمل" } },
    ],
  },
  {
    id: "ecommerce-omnichannel",
    category: "ecommerce",
    categoryLabel: { en: "E-Commerce & Retail", ar: "التجارة الإلكترونية والتجزئة" },
    title: {
      en: "Autonomous Order Tracking, Upselling & Return Workflow",
      ar: "أتمتة تتبع الشحنات وزيادة المبيعات وإدارة المرتجعات",
    },
    subtitle: {
      en: "How a high-volume regional retail brand automated 89% of post-purchase logistics requests while driving 22% incremental re-orders.",
      ar: "كيف نجحت علامة تجارية رائدة في أتمتة 89% من استفسارات ما بعد البيع ورفعت المبيعات الإضافية بنسبة 22%.",
    },
    clientType: { en: "Omnichannel Consumer Brand", ar: "علامة تجارية كبرى للتجزئة" },
    before: {
      headline: {
        en: "Crushing Support Ticket Backlog During Flash Sales",
        ar: "تراكم آلاف التذاكر واستفسارات التوصيل أثناء مواسم التخفيضات",
      },
      points: [
        {
          en: "Over 70% of support tickets were 'Where is my order?' status inquiries during peak shopping seasons.",
          ar: "أكثر من 70% من تذاكر الدعم كانت مجرد استفسارات 'أين شحنتي؟' في مواسم العروض الكبرى.",
        },
        {
          en: "Return and exchange processing took 4 to 6 business days due to manual logistics coordination.",
          ar: "كانت معالجة الاستبدال والاسترجاع تستغرق من 4 إلى 6 أيام عمل بسبب التنسيق اليدوي مع شركات الشحن.",
        },
      ],
    },
    after: {
      headline: {
        en: "Instant Autonomous Order Tracking & Smart Dynamic Re-ordering",
        ar: "تتبع فوري لحالة الشحن وترشيحات منتجات ذكية مخصصة",
      },
      points: [
        {
          en: "Runnova AI syncs with regional courier APIs to provide live GPS parcel updates directly in WhatsApp in 2 seconds.",
          ar: "يتصل نظام Runnova بشركات الشحن ليقدم للعميل تحديثاً حياً بموقع الشحنة على الخريطة خلال ثانيتين.",
        },
        {
          en: "Automated return portal validates return eligibility and schedules courier pickup autonomously.",
          ar: "بوابة استرجاع مؤتمتة تتحقق من شروط الضمان وتنسق مع مندوب الشحن لاستلام الشحنة تلقائياً.",
        },
      ],
    },
    metrics: [
      { value: "89%", label: { en: "Support Inquiries Resolved Instantly", ar: "من استفسارات التتبع تُحل فورياً دون موظفين" } },
      { value: "22%", label: { en: "Incremental Revenue from Contextual Upsells", ar: "زيادة في المبيعات المتكررة عبر الترشيحات الذكية" } },
      { value: "4.9/5", label: { en: "Customer Satisfaction (CSAT) Score", ar: "معدل رضا العملاء عن سرعة الخدمة" } },
    ],
  },
  {
    id: "b2b-professional-services",
    category: "b2b",
    categoryLabel: { en: "B2B & Professional Services", ar: "الشركات والخدمات المؤسسية B2B" },
    title: {
      en: "Automated Contract Ingestion & RFP Proposal Synthesis",
      ar: "أتمتة دراسة العقود وصياغة مقترحات المشاريع (RFP) بالذكاء الاصطناعي",
    },
    subtitle: {
      en: "Enabling enterprise consultancy partners to analyze 200+ page tenders and generate compliant bids 8x faster.",
      ar: "تمكين المكاتب الاستشارية والمؤسسات من تحليل كراسات الشروط الضخمة وصياغة العروض الفنية أسرع 8 مرات.",
    },
    clientType: { en: "Management & Tech Consulting Firm", ar: "شركة استشارات إدارية وتقنية" },
    before: {
      headline: {
        en: "Dozens of Partner Hours Burned on Document Review",
        ar: "استنزاف مئات الساعات لكبار الشركاء في مراجعة وتدقيق المستندات",
      },
      points: [
        {
          en: "Senior partners spent days reading government tender terms to spot compliance risks and penalty clauses.",
          ar: "كان الشركاء يقضون أياماً طويلة في قراءة كراسات المناقصات لرصد المخاطر والشروط الجزائية.",
        },
        {
          en: "Crafting technical proposals required repetitive hunting for past project case studies across historical archives.",
          ar: "صياغة العروض الفنية تطلبت وقتاً ضائعاً في البحث عن سوابق الأعمال المتشابهة في أرشيف الشركة.",
        },
      ],
    },
    after: {
      headline: {
        en: "Deep Semantic Tender Analysis & Verifiable Draft Generation",
        ar: "تحليل دلالي عميق للمناقصات وتوليد مسودات فنية موثقة",
      },
      points: [
        {
          en: "Runnova Private RAG parses multi-hundred page RFPs in minutes, highlighting key legal requirements and deliverable matrices.",
          ar: "يقوم محرك Runnova بفحص كراسة الشروط واستخراج جدول المتطلبات الفنية والمخاطر خلال دقائق.",
        },
        {
          en: "Synthesizes first-draft bids matching the firm's tone of voice with verified citations to past enterprise deliverables.",
          ar: "صياغة المسودة الأولى للعرض الفني بنبرة الشركة المؤسسية مع توثيق سوابق الخبرة المناسبة.",
        },
      ],
    },
    metrics: [
      { value: "8x", label: { en: "Faster RFP Response & Submission Velocity", ar: "سرعة مضاعفة في إعداد وتقديم عروض المناقصات" } },
      { value: "100%", label: { en: "Clause Compliance & Penalty Risk Detection", ar: "دقة رصد الشروط الجزائية ومخاطر الالتزام" } },
      { value: "45%", label: { en: "Increase in Tender Win Rates", ar: "ارتفاع في نسبة الفوز بالمشاريع والمناقصات" } },
    ],
  },
];
