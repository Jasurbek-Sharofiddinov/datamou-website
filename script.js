// AskData Landing Page JavaScript

// Translations
const translations = {
    en: {
        // Navigation
        'nav.features': 'Features',
        'nav.howItWorks': 'How It Works',
        'nav.integrations': 'Integrations',
        'nav.pricing': 'Pricing',
        'nav.contact': 'Contact',
        'nav.login': 'Log In',
        'nav.trial': 'Start Free Trial',

        // Hero
        'hero.badge': 'AI-Powered Analytics Platform',
        'hero.titleLine1': 'Turn Your Data Into',
        'hero.titleLine2': 'Actionable Stories',
        'hero.subtitle': 'Ask questions in plain language. Get instant insights, beautiful visualizations, and clear recommendations. No SQL, no complexity, no data team required.',
        'hero.cta': 'Get Started Free',
        'hero.demo': 'Watch Demo',
        'hero.stat1': 'Setup time',
        'hero.stat2': 'Data integrations',
        'hero.stat3': 'Faster insights',

        // Problem
        'problem.tag': 'The Challenge',
        'problem.title1': 'Your Data Is Powerful.',
        'problem.title2': "But It's Trapped.",
        'problem.subtitle': "SMEs have valuable data scattered across platforms. Unlocking insights shouldn't require a data scientist or expensive tools.",
        'problem.now': 'NOW',
        'problem.with': 'WITH ASKDATA',
        'problem.nowTitle': 'Scattered & Confusing',
        'problem.nowDesc': 'Data in 5+ tools, hours wasted, decisions delayed',
        'problem.withTitle': 'Clear & Actionable',
        'problem.withDesc': 'One platform, instant answers, confident decisions',
        'problem.pain1Title': 'Technical Barriers',
        'problem.pain1Desc': 'SQL and BI tools require expertise. Only 25% of your team can access insights, leaving managers dependent on IT for every report request.',
        'problem.pain1Stat': 'Average wait time: 3-5 days per report',
        'problem.pain2Title': 'Scattered Data Sources',
        'problem.pain2Desc': 'Google Analytics, CRM, spreadsheets, accounting software - your valuable data lives in 5-10 disconnected tools with no unified view.',
        'problem.pain2Stat': 'SMEs use 7+ different data sources on average',
        'problem.pain3Title': 'Hours Lost Weekly',
        'problem.pain3Desc': 'Manual data collection, Excel formatting, copy-pasting between tools. Your team wastes 8-15 hours per week on tasks that could be automated.',
        'problem.pain3Stat': '$2,400+ wasted monthly in employee time',
        'problem.pain4Title': 'Delayed Decisions',
        'problem.pain4Desc': 'By the time you get the data you need, the opportunity has passed. Competitors with faster insights capture market share while you wait for reports.',
        'problem.pain4Stat': '68% of business decisions are made without data',
        'problem.pain5Title': 'No "So What?" Answers',
        'problem.pain5Desc': 'Charts show numbers, but what do they mean for your business? Traditional BI tools lack context and actionable recommendations.',
        'problem.pain5Stat': 'Only 12% of data visualizations lead to action',
        'problem.pain6Title': 'Expensive BI Solutions',
        'problem.pain6Desc': 'Enterprise analytics platforms cost $500-2000/month and require dedicated analysts. SMEs are priced out of data-driven decision making.',
        'problem.pain6Stat': 'AskData: 90% cheaper than traditional BI',

        // Features
        'features.tag': 'Features',
        'features.title1': 'Everything You Need to',
        'features.title2': 'Understand Your Data',
        'features.subtitle': 'Powerful features designed for business owners, not data scientists.',
        'features.coreFeature': 'Core Feature',
        'features.conversationalTitle': 'Conversational Analytics',
        'features.conversationalDesc': 'Ask questions in plain language. "What were my sales last week?" "Why did traffic drop?" Get instant, accurate answers with beautiful visualizations.',
        'features.conversationalItem1': 'Natural language queries',
        'features.conversationalItem2': 'Follow-up questions support',
        'features.conversationalItem3': 'Multi-language support',
        'features.visualTitle': 'Auto Visualizations',
        'features.visualDesc': 'AI automatically selects the best chart type for your data. Beautiful, insightful, and export-ready.',
        'features.narrativeTitle': 'Narrative Reports',
        'features.narrativeDesc': "Get story-driven reports that explain the 'why' behind your numbers. Perfect for stakeholder presentations.",
        'features.proactiveTitle': 'Proactive Insights',
        'features.proactiveDesc': "Don't wait to discover problems. Get automatic alerts when something unusual happens in your data.",
        'features.actionTitle': 'Action Recommendations',
        'features.actionDesc': "Don't just know what happened—know what to do. Get AI-powered suggestions tailored to your business.",
        'features.integrationTitle': 'One-Click Integrations',
        'features.integrationDesc': 'Connect Google Analytics, Yandex Metrica, spreadsheets, and databases in seconds. No technical setup.',

        // How It Works
        'howItWorks.tag': 'How It Works',
        'howItWorks.title1': 'From Data to Decisions',
        'howItWorks.title2': 'In Four Simple Steps',
        'howItWorks.step1Title': 'Connect Your Data Sources',
        'howItWorks.step1Desc': 'One-click integrations with 150+ data sources. Connect Google Analytics, spreadsheets, databases, CRM systems, and more. Your data stays secure with enterprise-grade encryption.',
        'howItWorks.step2Title': 'Ask Questions in Plain Language',
        'howItWorks.step2Desc': 'Type your questions naturally, just like asking a colleague. "What\'s my best traffic source?" "Why did sales drop?" AI understands context and provides follow-up insights.',
        'howItWorks.step3Title': 'Customize & Save Dashboards',
        'howItWorks.step3Desc': 'Build custom dashboards with your favorite insights. Drag and drop widgets, customize visualizations, and save them for daily automated updates delivered to your inbox.',
        'howItWorks.step4Title': 'Get Insights & Take Action',
        'howItWorks.step4Desc': 'Receive clear answers with beautiful visualizations, narrative explanations, and AI-powered recommendations. Export to PDF, share with your team, or schedule automated reports.',
        'howItWorks.q1': '"Why did bounce rate increase?"',
        'howItWorks.q2': '"Top 5 customers by revenue"',
        'howItWorks.q3': '"Compare Q3 vs Q4 sales"',
        'howItWorks.salesChart': 'Sales Chart',
        'howItWorks.trafficSource': 'Traffic',
        'howItWorks.saved': 'Saved!',
        'howItWorks.revenueGrowth': 'Revenue Growth',
        'howItWorks.actionNeeded': 'Action Needed',
        'howItWorks.dailyUpdates': 'Daily Updates',

        // Integrations
        'integrations.tag': 'Integrations',
        'integrations.title1': 'Connect All Your',
        'integrations.title2': 'Data Sources',
        'integrations.subtitle': 'One platform for all your business data. No more switching between tools.',
        'integrations.more': 'More Integrations',

        // Pricing
        'pricing.tag': 'Pricing',
        'pricing.title1': 'Investment That',
        'pricing.title2': 'Pays for Itself',
        'pricing.subtitle': 'Transform how your business makes decisions. Start with a free trial.',
        'pricing.monthly': 'Monthly',
        'pricing.yearly': 'Yearly',
        'pricing.save': 'Save 20%',
        'pricing.perMonth': '/month',
        'pricing.starterName': 'Starter',
        'pricing.starterDesc': 'For small businesses getting started',
        'pricing.starterF1': '3 data sources',
        'pricing.starterF2': '500 questions/month',
        'pricing.starterF3': 'Basic visualizations',
        'pricing.starterF4': 'Email support',
        'pricing.growthName': 'Growth',
        'pricing.growthDesc': 'For growing SMEs ready to scale',
        'pricing.growthF1': '10 data sources',
        'pricing.growthF2': 'Unlimited questions',
        'pricing.growthF3': 'Automated weekly reports',
        'pricing.growthF4': 'Custom dashboards',
        'pricing.growthF5': 'Team sharing (5 users)',
        'pricing.growthF6': 'Priority support',
        'pricing.proName': 'Professional',
        'pricing.proDesc': 'For data-driven organizations',
        'pricing.proF1': '25 data sources',
        'pricing.proF2': 'Database connections',
        'pricing.proF3': 'Custom report templates',
        'pricing.proF4': 'API access',
        'pricing.proF5': 'Team sharing (15 users)',
        'pricing.proF6': 'Dedicated account manager',
        'pricing.enterpriseName': 'Enterprise',
        'pricing.enterpriseDesc': 'For large organizations',
        'pricing.enterpriseF1': 'Unlimited data sources',
        'pricing.enterpriseF2': 'White-label reports',
        'pricing.enterpriseF3': 'Custom integrations',
        'pricing.enterpriseF4': 'Unlimited team members',
        'pricing.enterpriseF5': 'On-premise deployment',
        'pricing.enterpriseF6': '24/7 dedicated support',
        'pricing.custom': 'Custom',
        'pricing.startTrial': 'Start Free Trial',
        'pricing.contactSales': 'Contact Sales',
        'pricing.popular': 'Most Popular',

        // Testimonials
        'testimonials.tag': 'Testimonials',
        'testimonials.title1': 'Loved by',
        'testimonials.title2': 'Business Owners',
        'testimonials.subtitle': 'See what our customers are saying about AskData.',
        'testimonials.quote1': '"Finally, I can understand my data without bothering my developer. AskData gives me the insights I need to make decisions, explained in plain language."',
        'testimonials.quote2': '"The weekly reports save me hours. I used to dread pulling together numbers for our team meetings. Now it\'s automated and actually tells me what matters."',
        'testimonials.quote3': '"Connecting our Yandex Metrica was seamless. We operate in multiple markets and AskData handles all our analytics sources beautifully."',
        'testimonials.role1': 'E-commerce Owner',
        'testimonials.role2': 'Marketing Director',
        'testimonials.role3': 'SaaS Founder',

        // CTA
        'cta.title': "Ready to Unlock Your Data's Potential?",
        'cta.subtitle': "Join business owners who've stopped guessing and started knowing. Get your first insights in under 5 minutes.",
        'cta.button': 'Start Free Trial',
        'cta.note': 'No credit card required',

        // Contact
        'contact.tag': 'Contact Us',
        'contact.title1': "Let's Talk About",
        'contact.title2': 'Your Data',
        'contact.subtitle': "Have questions? We'd love to hear from you. Reach out through any channel.",
        'contact.phoneTitle': 'Phone',
        'contact.emailTitle': 'Email',

        // Footer
        'footer.description': 'Turn your business data into actionable stories with AI-powered analytics.',
        'footer.product': 'Product',
        'footer.resources': 'Resources',
        'footer.company': 'Company',
        'footer.integrations': 'Integrations',
        'footer.changelog': 'Changelog',
        'footer.documentation': 'Documentation',
        'footer.blog': 'Blog',
        'footer.helpCenter': 'Help Center',
        'footer.api': 'API Reference',
        'footer.about': 'About Us',
        'footer.careers': 'Careers',
        'footer.privacy': 'Privacy Policy',
        'footer.rights': 'All rights reserved.',
        'footer.terms': 'Terms of Service',
        'footer.cookies': 'Cookie Policy',

        // Chat Demo - Follow-up conversation flow
        'chat.question1': 'What were my top performing products last month?',
        'chat.answer1Title': "Here's your top 5 products for November:",
        'chat.answer1Insight': 'Pro Plan revenue increased 23% vs October',
        'chat.followup1': 'Why did Pro Plan increase so much?',
        'chat.followup1Answer': 'Pro Plan growth driven by:',
        'chat.followup1Reason1': 'New enterprise clients: +12 signups',
        'chat.followup1Reason2': 'Annual plan promotion: 35% chose yearly',
        'chat.followup1Reason3': 'Referral program: 8 conversions',
        'chat.followup1Action': 'Recommendation: Extend annual plan promotion through December'
    },
    uz: {
        // Navigation
        'nav.features': 'Xususiyatlar',
        'nav.howItWorks': 'Qanday ishlaydi',
        'nav.integrations': 'Integratsiyalar',
        'nav.pricing': 'Narxlar',
        'nav.contact': 'Aloqa',
        'nav.login': 'Kirish',
        'nav.trial': 'Bepul sinash',

        // Hero
        'hero.badge': 'Sun\'iy intellekt bilan tahlil platformasi',
        'hero.titleLine1': 'Ma\'lumotlaringizni',
        'hero.titleLine2': 'Amaliy hikoyalarga aylantiring',
        'hero.subtitle': 'Oddiy tilda savollar bering. Bir zumda tahlillar, chiroyli vizualizatsiyalar va aniq tavsiyalar oling. SQL kerak emas, murakkablik yo\'q, ma\'lumotlar guruhi talab qilinmaydi.',
        'hero.cta': 'Bepul boshlash',
        'hero.demo': 'Demo ko\'rish',
        'hero.stat1': 'O\'rnatish vaqti',
        'hero.stat2': 'Ma\'lumot integratsiyalari',
        'hero.stat3': 'Tezroq tahlillar',

        // Problem
        'problem.tag': 'Muammo',
        'problem.title1': 'Ma\'lumotlaringiz kuchli.',
        'problem.title2': 'Lekin qulflangan.',
        'problem.subtitle': 'KO\'Blar qimmatli ma\'lumotlarga ega, lekin ular turli platformalarda tarqalgan. Tahlillarni ochish uchun ma\'lumotlar olimi yoki qimmat vositalar kerak bo\'lmasligi kerak.',
        'problem.now': 'HOZIR',
        'problem.with': 'ASKDATA BILAN',
        'problem.nowTitle': 'Tarqoq va chalkash',
        'problem.nowDesc': '5+ vositada ma\'lumot, soatlar yo\'qoladi, qarorlar kechikadi',
        'problem.withTitle': 'Aniq va amaliy',
        'problem.withDesc': 'Bitta platforma, bir zumda javoblar, ishonchli qarorlar',
        'problem.pain1Title': 'Texnik to\'siqlar',
        'problem.pain1Desc': 'SQL va BI vositalari tajriba talab qiladi. Jamoangizning faqat 25% tahliilarga kirishi mumkin, menejerlar har bir hisobot uchun IT ga bog\'liq.',
        'problem.pain1Stat': 'O\'rtacha kutish vaqti: har bir hisobot uchun 3-5 kun',
        'problem.pain2Title': 'Tarqoq ma\'lumot manbalari',
        'problem.pain2Desc': 'Google Analytics, CRM, jadvallar, buxgalteriya dasturi - qimmatli ma\'lumotlaringiz 5-10 ta bog\'lanmagan vositada yashaydi.',
        'problem.pain2Stat': 'KO\'Blar o\'rtacha 7+ turli ma\'lumot manbalaridan foydalanadi',
        'problem.pain3Title': 'Haftalik yo\'qotilgan soatlar',
        'problem.pain3Desc': 'Qo\'lda ma\'lumot yig\'ish, Excel formatlash, vositalar orasida nusxalash. Jamoangiz haftasiga 8-15 soat sarflaydi.',
        'problem.pain3Stat': 'Oyiga $2,400+ xodim vaqtida isrof',
        'problem.pain4Title': 'Kechiktirilgan qarorlar',
        'problem.pain4Desc': 'Kerakli ma\'lumotlarni olganingizda imkoniyat o\'tib ketgan. Tezroq tahlilga ega raqobatchilar bozor ulushini egallaydi.',
        'problem.pain4Stat': 'Biznes qarorlarining 68% ma\'lumotsiz qabul qilinadi',
        'problem.pain5Title': '"Nima uchun?" javoblari yo\'q',
        'problem.pain5Desc': 'Grafiklar raqamlarni ko\'rsatadi, lekin ular biznesingiz uchun nimani anglatadi? An\'anaviy BI vositalari kontekst va tavsiyalarni bermaydi.',
        'problem.pain5Stat': 'Ma\'lumot vizualizatsiyalarining faqat 12% harakatga olib keladi',
        'problem.pain6Title': 'Qimmat BI yechimlari',
        'problem.pain6Desc': 'Korporativ tahlil platformalari oyiga $500-2000 turadi va maxsus tahlilchilarni talab qiladi. KO\'Blar ma\'lumotlarga asoslangan qarorlardan chetda qoladi.',
        'problem.pain6Stat': 'AskData: an\'anaviy BI dan 90% arzon',

        // Features
        'features.tag': 'Xususiyatlar',
        'features.title1': 'Ma\'lumotlaringizni tushunish uchun',
        'features.title2': 'Kerak bo\'lgan hamma narsa',
        'features.subtitle': 'Biznes egalari uchun mo\'ljallangan kuchli xususiyatlar, ma\'lumotlar olimlari uchun emas.',
        'features.coreFeature': 'Asosiy xususiyat',
        'features.conversationalTitle': 'Suhbat tahlili',
        'features.conversationalDesc': 'Oddiy tilda savollar bering. "O\'tgan haftada savdolarim qanday edi?" "Trafik nima uchun tushdi?" Chiroyli vizualizatsiyalar bilan bir zumda aniq javoblar oling.',
        'features.conversationalItem1': 'Tabiiy til so\'rovlari',
        'features.conversationalItem2': 'Qo\'shimcha savollar qo\'llab-quvvatlash',
        'features.conversationalItem3': 'Ko\'p tilli qo\'llab-quvvatlash',
        'features.visualTitle': 'Avtomatik vizualizatsiyalar',
        'features.visualDesc': 'Sun\'iy intellekt ma\'lumotlaringiz uchun eng yaxshi grafik turini avtomatik tanlaydi.',
        'features.narrativeTitle': 'Hikoya hisobotlari',
        'features.narrativeDesc': 'Raqamlaringiz ortidagi "nima uchun"ni tushuntiradigan hikoyaga asoslangan hisobotlar oling.',
        'features.proactiveTitle': 'Faol tahlillar',
        'features.proactiveDesc': 'Muammolarni aniqlashni kutmang. Ma\'lumotlaringizda g\'ayrioddiy narsa sodir bo\'lganda avtomatik ogohlantirishlar oling.',
        'features.actionTitle': 'Harakat tavsiylari',
        'features.actionDesc': 'Faqat nima bo\'lganini bilish emas - nima qilish kerakligini biling. Biznesingizga moslashtirilgan sun\'iy intellekt takliflari.',
        'features.integrationTitle': 'Bir marta bosish integratsiyalari',
        'features.integrationDesc': 'Google Analytics, Yandex Metrica, jadvallar va ma\'lumotlar bazalarini bir zumda ulang.',

        // How It Works
        'howItWorks.tag': 'Qanday ishlaydi',
        'howItWorks.title1': 'Ma\'lumotdan qarorlarga',
        'howItWorks.title2': 'To\'rt oddiy qadamda',
        'howItWorks.step1Title': 'Ma\'lumot manbalaringizni ulang',
        'howItWorks.step1Desc': '150+ ma\'lumot manbalari bilan bir marta bosish integratsiyalari. Google Analytics, jadvallar, ma\'lumotlar bazalari, CRM tizimlarini ulang. Ma\'lumotlaringiz korporativ darajadagi shifrlash bilan xavfsiz.',
        'howItWorks.step2Title': 'Oddiy tilda savollar bering',
        'howItWorks.step2Desc': 'Savollaringizni tabiiy ravishda yozing, xuddi hamkasbingizdan so\'raganday. "Eng yaxshi trafik manbam nima?" "Savdolar nima uchun tushdi?" Sun\'iy intellekt kontekstni tushunadi.',
        'howItWorks.step3Title': 'Boshqaruv panellarini moslashtiring va saqlang',
        'howItWorks.step3Desc': 'Sevimli tahlillaringiz bilan maxsus boshqaruv panellarini yarating. Vidjetlarni sudrab tashlang, vizualizatsiyalarni moslashtiring va kundalik yangilanishlar uchun saqlang.',
        'howItWorks.step4Title': 'Tahlillar oling va harakat qiling',
        'howItWorks.step4Desc': 'Chiroyli vizualizatsiyalar, hikoya tushuntirishlari va sun\'iy intellekt tavsiyalari bilan aniq javoblar oling. PDF ga eksport qiling, jamoangiz bilan ulashing.',
        'howItWorks.q1': '"Sakrash darajasi nima uchun oshdi?"',
        'howItWorks.q2': '"Daromad bo\'yicha top 5 mijoz"',
        'howItWorks.q3': '"3-chorak va 4-chorakni solishtiring"',
        'howItWorks.salesChart': 'Savdolar grafigi',
        'howItWorks.trafficSource': 'Trafik',
        'howItWorks.saved': 'Saqlandi!',
        'howItWorks.revenueGrowth': 'Daromad o\'sishi',
        'howItWorks.actionNeeded': 'Harakat kerak',
        'howItWorks.dailyUpdates': 'Kundalik yangilanishlar',

        // Integrations
        'integrations.tag': 'Integratsiyalar',
        'integrations.title1': 'Barcha ma\'lumot manbalaringizni',
        'integrations.title2': 'Ulang',
        'integrations.subtitle': 'Barcha biznes ma\'lumotlaringiz uchun bitta platforma. Vositalar o\'rtasida almashish yo\'q.',
        'integrations.more': 'Ko\'proq integratsiyalar',

        // Pricing
        'pricing.tag': 'Narxlar',
        'pricing.title1': 'O\'zini oqlaydigan',
        'pricing.title2': 'Investitsiya',
        'pricing.subtitle': 'Biznesingiz qarorlar qabul qilish usulini o\'zgartiring. Bepul sinov bilan boshlang.',
        'pricing.monthly': 'Oylik',
        'pricing.yearly': 'Yillik',
        'pricing.save': '20% tejang',
        'pricing.perMonth': '/oy',
        'pricing.starterName': 'Boshlang\'ich',
        'pricing.starterDesc': 'Boshlayotgan kichik bizneslar uchun',
        'pricing.starterF1': '3 ta ma\'lumot manbai',
        'pricing.starterF2': 'Oyiga 500 ta savol',
        'pricing.starterF3': 'Asosiy vizualizatsiyalar',
        'pricing.starterF4': 'Email qo\'llab-quvvatlash',
        'pricing.growthName': 'O\'sish',
        'pricing.growthDesc': 'O\'sishga tayyor KO\'Blar uchun',
        'pricing.growthF1': '10 ta ma\'lumot manbai',
        'pricing.growthF2': 'Cheksiz savollar',
        'pricing.growthF3': 'Avtomatik haftalik hisobotlar',
        'pricing.growthF4': 'Maxsus boshqaruv panellari',
        'pricing.growthF5': 'Jamoa ulashish (5 foydalanuvchi)',
        'pricing.growthF6': 'Ustuvor qo\'llab-quvvatlash',
        'pricing.proName': 'Professional',
        'pricing.proDesc': 'Ma\'lumotlarga asoslangan tashkilotlar uchun',
        'pricing.proF1': '25 ta ma\'lumot manbai',
        'pricing.proF2': 'Ma\'lumotlar bazasi ulanishlari',
        'pricing.proF3': 'Maxsus hisobot shablonlari',
        'pricing.proF4': 'API kirish',
        'pricing.proF5': 'Jamoa ulashish (15 foydalanuvchi)',
        'pricing.proF6': 'Shaxsiy menejer',
        'pricing.enterpriseName': 'Korporativ',
        'pricing.enterpriseDesc': 'Yirik tashkilotlar uchun',
        'pricing.enterpriseF1': 'Cheksiz ma\'lumot manbalari',
        'pricing.enterpriseF2': 'Oq yorliqli hisobotlar',
        'pricing.enterpriseF3': 'Maxsus integratsiyalar',
        'pricing.enterpriseF4': 'Cheksiz jamoa a\'zolari',
        'pricing.enterpriseF5': 'Mahalliy o\'rnatish',
        'pricing.enterpriseF6': '24/7 maxsus qo\'llab-quvvatlash',
        'pricing.custom': 'Maxsus',
        'pricing.startTrial': 'Bepul sinash',
        'pricing.contactSales': 'Sotuvga murojaat',
        'pricing.popular': 'Eng mashhur',

        // Testimonials
        'testimonials.tag': 'Fikrlar',
        'testimonials.title1': 'Biznes egalari',
        'testimonials.title2': 'Tomonidan sevilgan',
        'testimonials.subtitle': 'Mijozlarimiz AskData haqida nima deyishini ko\'ring.',
        'testimonials.quote1': '"Nihoyat, men dasturchimni bezovta qilmasdan ma\'lumotlarimni tushuna olaman. AskData menga qarorlar qabul qilish uchun kerakli tahlillarni beradi."',
        'testimonials.quote2': '"Haftalik hisobotlar menga soatlarni tejaydi. Men jamoa uchrashuvlari uchun raqamlarni yig\'ishdan qo\'rqardim. Endi u avtomatlashtirilgan."',
        'testimonials.quote3': '"Yandex Metrica-ni ulash juda oson edi. Biz ko\'p bozorlarda ishlaymiz va AskData barcha tahlil manbalarimizni chiroyli boshqaradi."',
        'testimonials.role1': 'E-tijorat egasi',
        'testimonials.role2': 'Marketing direktori',
        'testimonials.role3': 'SaaS asoschisi',

        // CTA
        'cta.title': 'Ma\'lumotlaringiz salohiyatini ochishga tayyormisiz?',
        'cta.subtitle': 'Taxmin qilishni to\'xtatgan va bilishni boshlagan biznes egalariga qo\'shiling. 5 daqiqa ichida birinchi tahlillaringizni oling.',
        'cta.button': 'Bepul sinash',
        'cta.note': 'Kredit karta talab qilinmaydi',

        // Contact
        'contact.tag': 'Biz bilan bog\'laning',
        'contact.title1': 'Ma\'lumotlaringiz haqida',
        'contact.title2': 'Gaplashaylik',
        'contact.subtitle': 'Savollaringiz bormi? Sizdan eshitishni xohlaymiz. Har qanday kanal orqali murojaat qiling.',
        'contact.phoneTitle': 'Telefon',
        'contact.emailTitle': 'Email',

        // Footer
        'footer.description': 'Biznes ma\'lumotlaringizni sun\'iy intellekt yordamida amaliy hikoyalarga aylantiring.',
        'footer.product': 'Mahsulot',
        'footer.resources': 'Manbalar',
        'footer.company': 'Kompaniya',
        'footer.integrations': 'Integratsiyalar',
        'footer.changelog': 'O\'zgarishlar jurnali',
        'footer.documentation': 'Hujjatlar',
        'footer.blog': 'Blog',
        'footer.helpCenter': 'Yordam markazi',
        'footer.api': 'API ma\'lumotnomasi',
        'footer.about': 'Biz haqimizda',
        'footer.careers': 'Karyera',
        'footer.privacy': 'Maxfiylik siyosati',
        'footer.rights': 'Barcha huquqlar himoyalangan.',
        'footer.terms': 'Xizmat shartlari',
        'footer.cookies': 'Cookie siyosati',

        // Chat Demo - Follow-up conversation flow
        'chat.question1': "O'tgan oyda eng yaxshi mahsulotlarim qaysilar edi?",
        'chat.answer1Title': 'Noyabr oyi uchun top 5 mahsulotingiz:',
        'chat.answer1Insight': 'Pro Plan daromadi Oktyabrga nisbatan 23% oshdi',
        'chat.followup1': 'Pro Plan nima uchun buncha oshdi?',
        'chat.followup1Answer': 'Pro Plan o\'sishi sabablari:',
        'chat.followup1Reason1': 'Yangi korporativ mijozlar: +12 ta ro\'yxatdan o\'tish',
        'chat.followup1Reason2': 'Yillik reja aksiyasi: 35% yillikni tanladi',
        'chat.followup1Reason3': 'Tavsiya dasturi: 8 ta konversiya',
        'chat.followup1Action': 'Tavsiya: Yillik reja aksiyasini Dekabr oyigacha uzaytiring'
    },
    ru: {
        // Navigation
        'nav.features': 'Возможности',
        'nav.howItWorks': 'Как это работает',
        'nav.integrations': 'Интеграции',
        'nav.pricing': 'Цены',
        'nav.contact': 'Контакты',
        'nav.login': 'Войти',
        'nav.trial': 'Начать бесплатно',

        // Hero
        'hero.badge': 'Аналитическая платформа на базе ИИ',
        'hero.titleLine1': 'Превратите ваши данные в',
        'hero.titleLine2': 'Действенные истории',
        'hero.subtitle': 'Задавайте вопросы на простом языке. Получайте мгновенные инсайты, красивые визуализации и чёткие рекомендации. Без SQL, без сложностей, без команды аналитиков.',
        'hero.cta': 'Начать бесплатно',
        'hero.demo': 'Смотреть демо',
        'hero.stat1': 'Время настройки',
        'hero.stat2': 'Интеграций данных',
        'hero.stat3': 'Быстрее инсайты',

        // Problem
        'problem.tag': 'Проблема',
        'problem.title1': 'Ваши данные мощные.',
        'problem.title2': 'Но они заперты.',
        'problem.subtitle': 'У МСБ есть ценные данные, разбросанные по платформам. Получение инсайтов не должно требовать дата-аналитика или дорогих инструментов.',
        'problem.now': 'СЕЙЧАС',
        'problem.with': 'С ASKDATA',
        'problem.nowTitle': 'Разрозненно и запутанно',
        'problem.nowDesc': 'Данные в 5+ инструментах, часы потеряны, решения откладываются',
        'problem.withTitle': 'Ясно и действенно',
        'problem.withDesc': 'Одна платформа, мгновенные ответы, уверенные решения',
        'problem.pain1Title': 'Технические барьеры',
        'problem.pain1Desc': 'SQL и BI-инструменты требуют экспертизы. Только 25% вашей команды имеют доступ к инсайтам, менеджеры зависят от IT для каждого отчёта.',
        'problem.pain1Stat': 'Среднее время ожидания: 3-5 дней на отчёт',
        'problem.pain2Title': 'Разбросанные источники данных',
        'problem.pain2Desc': 'Google Analytics, CRM, таблицы, бухгалтерия - ваши ценные данные живут в 5-10 несвязанных инструментах без единого представления.',
        'problem.pain2Stat': 'МСБ используют 7+ разных источников данных в среднем',
        'problem.pain3Title': 'Часы потерянные еженедельно',
        'problem.pain3Desc': 'Ручной сбор данных, форматирование Excel, копирование между инструментами. Ваша команда тратит 8-15 часов в неделю на задачи, которые можно автоматизировать.',
        'problem.pain3Stat': '$2,400+ потеряно ежемесячно на время сотрудников',
        'problem.pain4Title': 'Отложенные решения',
        'problem.pain4Desc': 'К моменту получения нужных данных возможность упущена. Конкуренты с быстрыми инсайтами захватывают долю рынка пока вы ждёте отчёты.',
        'problem.pain4Stat': '68% бизнес-решений принимаются без данных',
        'problem.pain5Title': 'Нет ответов "И что?"',
        'problem.pain5Desc': 'Графики показывают цифры, но что они значат для вашего бизнеса? Традиционные BI-инструменты не дают контекста и рекомендаций.',
        'problem.pain5Stat': 'Только 12% визуализаций данных ведут к действию',
        'problem.pain6Title': 'Дорогие BI-решения',
        'problem.pain6Desc': 'Корпоративные аналитические платформы стоят $500-2000/месяц и требуют выделенных аналитиков. МСБ вытеснены из data-driven принятия решений.',
        'problem.pain6Stat': 'AskData: на 90% дешевле традиционного BI',

        // Features
        'features.tag': 'Возможности',
        'features.title1': 'Всё, что нужно для',
        'features.title2': 'Понимания ваших данных',
        'features.subtitle': 'Мощные функции для владельцев бизнеса, а не для аналитиков.',
        'features.coreFeature': 'Ключевая функция',
        'features.conversationalTitle': 'Разговорная аналитика',
        'features.conversationalDesc': 'Задавайте вопросы на простом языке. "Какие были продажи на прошлой неделе?" "Почему упал трафик?" Получайте мгновенные ответы с красивыми визуализациями.',
        'features.conversationalItem1': 'Запросы на естественном языке',
        'features.conversationalItem2': 'Поддержка уточняющих вопросов',
        'features.conversationalItem3': 'Многоязычная поддержка',
        'features.visualTitle': 'Авто-визуализации',
        'features.visualDesc': 'ИИ автоматически выбирает лучший тип графика для ваших данных.',
        'features.narrativeTitle': 'Нарративные отчёты',
        'features.narrativeDesc': 'Получайте отчёты-истории, объясняющие "почему" за вашими цифрами.',
        'features.proactiveTitle': 'Проактивные инсайты',
        'features.proactiveDesc': 'Не ждите обнаружения проблем. Получайте автоматические оповещения при необычных изменениях.',
        'features.actionTitle': 'Рекомендации к действию',
        'features.actionDesc': 'Знайте не только что произошло, но и что делать. ИИ-рекомендации для вашего бизнеса.',
        'features.integrationTitle': 'Интеграции в один клик',
        'features.integrationDesc': 'Подключайте Google Analytics, Яндекс Метрику, таблицы и базы данных за секунды.',

        // How It Works
        'howItWorks.tag': 'Как это работает',
        'howItWorks.title1': 'От данных к решениям',
        'howItWorks.title2': 'За четыре простых шага',
        'howItWorks.step1Title': 'Подключите источники данных',
        'howItWorks.step1Desc': 'Интеграции в один клик с 150+ источниками данных. Подключайте Google Analytics, таблицы, базы данных, CRM-системы и многое другое. Ваши данные защищены шифрованием корпоративного уровня.',
        'howItWorks.step2Title': 'Задавайте вопросы на простом языке',
        'howItWorks.step2Desc': 'Пишите вопросы естественно, как если бы спрашивали коллегу. "Какой лучший источник трафика?" "Почему упали продажи?" ИИ понимает контекст и даёт дополнительные инсайты.',
        'howItWorks.step3Title': 'Настройте и сохраните дашборды',
        'howItWorks.step3Desc': 'Создавайте пользовательские дашборды с любимыми инсайтами. Перетаскивайте виджеты, настраивайте визуализации и сохраняйте их для ежедневных автоматических обновлений.',
        'howItWorks.step4Title': 'Получайте инсайты и действуйте',
        'howItWorks.step4Desc': 'Получайте чёткие ответы с красивыми визуализациями, нарративными объяснениями и ИИ-рекомендациями. Экспортируйте в PDF, делитесь с командой или планируйте автоматические отчёты.',
        'howItWorks.q1': '"Почему вырос показатель отказов?"',
        'howItWorks.q2': '"Топ-5 клиентов по выручке"',
        'howItWorks.q3': '"Сравнить Q3 и Q4 продажи"',
        'howItWorks.salesChart': 'График продаж',
        'howItWorks.trafficSource': 'Трафик',
        'howItWorks.saved': 'Сохранено!',
        'howItWorks.revenueGrowth': 'Рост выручки',
        'howItWorks.actionNeeded': 'Требуется действие',
        'howItWorks.dailyUpdates': 'Ежедневные обновления',

        // Integrations
        'integrations.tag': 'Интеграции',
        'integrations.title1': 'Подключите все ваши',
        'integrations.title2': 'Источники данных',
        'integrations.subtitle': 'Одна платформа для всех бизнес-данных. Больше никаких переключений.',
        'integrations.more': 'Больше интеграций',

        // Pricing
        'pricing.tag': 'Цены',
        'pricing.title1': 'Инвестиция, которая',
        'pricing.title2': 'Окупается',
        'pricing.subtitle': 'Измените то, как ваш бизнес принимает решения. Начните с бесплатной пробной версии.',
        'pricing.monthly': 'Ежемесячно',
        'pricing.yearly': 'Ежегодно',
        'pricing.save': 'Экономия 20%',
        'pricing.perMonth': '/месяц',
        'pricing.starterName': 'Стартовый',
        'pricing.starterDesc': 'Для малого бизнеса на старте',
        'pricing.starterF1': '3 источника данных',
        'pricing.starterF2': '500 вопросов/месяц',
        'pricing.starterF3': 'Базовые визуализации',
        'pricing.starterF4': 'Email поддержка',
        'pricing.growthName': 'Рост',
        'pricing.growthDesc': 'Для растущего МСБ',
        'pricing.growthF1': '10 источников данных',
        'pricing.growthF2': 'Неограниченно вопросов',
        'pricing.growthF3': 'Автоматические еженедельные отчёты',
        'pricing.growthF4': 'Настраиваемые дашборды',
        'pricing.growthF5': 'Командный доступ (5 пользователей)',
        'pricing.growthF6': 'Приоритетная поддержка',
        'pricing.proName': 'Профессиональный',
        'pricing.proDesc': 'Для data-driven организаций',
        'pricing.proF1': '25 источников данных',
        'pricing.proF2': 'Подключение баз данных',
        'pricing.proF3': 'Настраиваемые шаблоны отчётов',
        'pricing.proF4': 'Доступ к API',
        'pricing.proF5': 'Командный доступ (15 пользователей)',
        'pricing.proF6': 'Персональный менеджер',
        'pricing.enterpriseName': 'Корпоративный',
        'pricing.enterpriseDesc': 'Для крупных организаций',
        'pricing.enterpriseF1': 'Неограниченно источников данных',
        'pricing.enterpriseF2': 'White-label отчёты',
        'pricing.enterpriseF3': 'Кастомные интеграции',
        'pricing.enterpriseF4': 'Неограниченно пользователей',
        'pricing.enterpriseF5': 'Локальное развёртывание',
        'pricing.enterpriseF6': '24/7 выделенная поддержка',
        'pricing.custom': 'По запросу',
        'pricing.startTrial': 'Начать бесплатно',
        'pricing.contactSales': 'Связаться с продажами',
        'pricing.popular': 'Самый популярный',

        // Testimonials
        'testimonials.tag': 'Отзывы',
        'testimonials.title1': 'Любимый',
        'testimonials.title2': 'Владельцами бизнеса',
        'testimonials.subtitle': 'Узнайте, что говорят наши клиенты об AskData.',
        'testimonials.quote1': '"Наконец-то я могу понимать свои данные, не беспокоя разработчика. AskData даёт мне инсайты для принятия решений на понятном языке."',
        'testimonials.quote2': '"Еженедельные отчёты экономят мне часы. Раньше я боялся собирать цифры для совещаний. Теперь это автоматизировано."',
        'testimonials.quote3': '"Подключение Яндекс Метрики было бесшовным. Мы работаем на нескольких рынках, и AskData прекрасно справляется со всеми источниками."',
        'testimonials.role1': 'Владелец e-commerce',
        'testimonials.role2': 'Директор по маркетингу',
        'testimonials.role3': 'Основатель SaaS',

        // CTA
        'cta.title': 'Готовы раскрыть потенциал ваших данных?',
        'cta.subtitle': 'Присоединяйтесь к владельцам бизнеса, которые перестали гадать и начали знать. Получите первые инсайты менее чем за 5 минут.',
        'cta.button': 'Начать бесплатно',
        'cta.note': 'Кредитная карта не требуется',

        // Contact
        'contact.tag': 'Свяжитесь с нами',
        'contact.title1': 'Давайте поговорим о',
        'contact.title2': 'Ваших данных',
        'contact.subtitle': 'Есть вопросы? Мы будем рады услышать вас. Свяжитесь любым удобным способом.',
        'contact.phoneTitle': 'Телефон',
        'contact.emailTitle': 'Email',

        // Footer
        'footer.description': 'Превращайте бизнес-данные в действенные истории с помощью ИИ-аналитики.',
        'footer.product': 'Продукт',
        'footer.resources': 'Ресурсы',
        'footer.company': 'Компания',
        'footer.integrations': 'Интеграции',
        'footer.changelog': 'История изменений',
        'footer.documentation': 'Документация',
        'footer.blog': 'Блог',
        'footer.helpCenter': 'Центр помощи',
        'footer.api': 'Справочник API',
        'footer.about': 'О нас',
        'footer.careers': 'Карьера',
        'footer.privacy': 'Политика конфиденциальности',
        'footer.rights': 'Все права защищены.',
        'footer.terms': 'Условия использования',
        'footer.cookies': 'Политика cookies',

        // Chat Demo - Follow-up conversation flow
        'chat.question1': 'Какие были топ-продукты в прошлом месяце?',
        'chat.answer1Title': 'Ваши топ-5 продуктов за ноябрь:',
        'chat.answer1Insight': 'Выручка Pro Plan выросла на 23% по сравнению с октябрём',
        'chat.followup1': 'Почему Pro Plan так сильно вырос?',
        'chat.followup1Answer': 'Рост Pro Plan обусловлен:',
        'chat.followup1Reason1': 'Новые корпоративные клиенты: +12 регистраций',
        'chat.followup1Reason2': 'Акция на годовой план: 35% выбрали годовой',
        'chat.followup1Reason3': 'Реферальная программа: 8 конверсий',
        'chat.followup1Action': 'Рекомендация: Продлите акцию на годовой план до декабря'
    }
};

let currentLang = 'en';

// Function to update the UI with translations
function updateTranslations(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Save preference
    localStorage.setItem('askdata-lang', lang);

    // Restart chat demo with new language
    startChatDemo();
}

document.addEventListener('DOMContentLoaded', function() {
    // Check saved language preference
    const savedLang = localStorage.getItem('askdata-lang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
        updateTranslations(savedLang);
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === savedLang);
        });
    }

    // Language Switcher
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            updateTranslations(lang);
        });
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // Pricing Toggle (Monthly/Yearly)
    const pricingToggle = document.getElementById('pricingToggle');
    const toggleLabels = document.querySelectorAll('.toggle-label');
    const priceAmounts = document.querySelectorAll('.amount[data-monthly]');

    if (pricingToggle) {
        pricingToggle.addEventListener('click', function() {
            this.classList.toggle('active');

            // Toggle label active states
            toggleLabels.forEach(label => label.classList.toggle('active'));

            // Update prices
            const isYearly = this.classList.contains('active');
            priceAmounts.forEach(amount => {
                const monthly = amount.getAttribute('data-monthly');
                const yearly = amount.getAttribute('data-yearly');
                amount.textContent = isYearly ? yearly : monthly;
            });
        });
    }

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                }
            }
        });
    });

    // Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.style.background = 'rgba(15, 15, 35, 0.95)';
        } else {
            navbar.style.background = 'rgba(15, 15, 35, 0.8)';
        }
    });

    // Intersection Observer for Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add fade-in animation to cards
    const animateElements = document.querySelectorAll(
        '.pain-point, .feature-card, .pricing-card, .testimonial-card, .integration-card, .step, .problem-state, .contact-card'
    );

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
        fadeInObserver.observe(el);
    });

    // Add CSS class for visible state
    const style = document.createElement('style');
    style.textContent = `
        .fade-in-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }

        /* Mobile Menu Styles */
        @media (max-width: 768px) {
            .nav-menu {
                position: fixed;
                top: 70px;
                left: 0;
                right: 0;
                background: rgba(15, 15, 35, 0.98);
                backdrop-filter: blur(20px);
                flex-direction: column;
                padding: 24px;
                gap: 16px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                transform: translateY(-100%);
                opacity: 0;
                pointer-events: none;
                transition: all 0.3s ease;
            }

            .nav-menu.active {
                display: flex;
                transform: translateY(0);
                opacity: 1;
                pointer-events: auto;
            }

            .mobile-menu-btn.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }

            .mobile-menu-btn.active span:nth-child(2) {
                opacity: 0;
            }

            .mobile-menu-btn.active span:nth-child(3) {
                transform: rotate(-45deg) translate(5px, -5px);
            }
        }
    `;
    document.head.appendChild(style);

    // Hero title animation
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(20px)';

        setTimeout(() => {
            heroTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 100);
    }

    // Start chat demo animation
    startChatDemo();

    // Button hover effect
    const buttons = document.querySelectorAll('.btn-primary, .btn-outline');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            this.style.setProperty('--mouse-x', `${x}px`);
            this.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Console welcome message
    console.log('%c Welcome to AskData! ', 'background: linear-gradient(135deg, #00d4ff, #7c3aed); color: white; font-size: 20px; padding: 10px; border-radius: 8px;');
    console.log('%c Transform your data into actionable stories ', 'color: #00d4ff; font-size: 14px;');
});

// Animated Chat Demo - Follow-up conversation flow
let chatDemoGeneration = 0;

function startChatDemo() {
    const chatDemo = document.getElementById('chatDemo');
    if (!chatDemo) return;

    // Increment generation to cancel any previous running demo
    const currentGeneration = ++chatDemoGeneration;
    chatDemo.innerHTML = '';

    const t = translations[currentLang];

    function typeText(element, text, speed = 30) {
        return new Promise(resolve => {
            let index = 0;
            element.textContent = '';
            function type() {
                if (index < text.length) {
                    element.textContent += text.charAt(index);
                    index++;
                    setTimeout(type, speed);
                } else {
                    resolve();
                }
            }
            type();
        });
    }

    async function addMessage(type, content, isHtml = false) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-message ${type}`;

        if (type === 'user') {
            msgDiv.innerHTML = `
                <span class="chat-avatar user-avatar">You</span>
                <div class="chat-bubble"></div>
            `;
            chatDemo.appendChild(msgDiv);
            await typeText(msgDiv.querySelector('.chat-bubble'), content, 25);
        } else {
            msgDiv.innerHTML = `
                <span class="chat-avatar ai-avatar">AI</span>
                <div class="chat-bubble">
                    <div class="typing-indicator">
                        <span></span><span></span><span></span>
                    </div>
                </div>
            `;
            chatDemo.appendChild(msgDiv);
            await new Promise(resolve => setTimeout(resolve, 1200));
            msgDiv.querySelector('.chat-bubble').innerHTML = content;

            // Animate chart bars if present
            const bars = msgDiv.querySelectorAll('.chart-bar');
            bars.forEach((bar, i) => {
                bar.style.height = '0';
                setTimeout(() => {
                    bar.style.height = bar.style.getPropertyValue('--height');
                }, i * 100 + 100);
            });
        }

        // Scroll to bottom
        chatDemo.scrollTop = chatDemo.scrollHeight;
        return msgDiv;
    }

    async function runFollowUpConversation() {
        // Clear chat
        chatDemo.innerHTML = '';

        // First question
        await addMessage('user', t['chat.question1']);

        // First answer with chart
        const answer1 = `
            <p>${t['chat.answer1Title']}</p>
            <div class="mini-chart">
                <div class="chart-bar" style="--height: 95%"><span>Pro Plan</span></div>
                <div class="chart-bar" style="--height: 78%"><span>Starter</span></div>
                <div class="chart-bar" style="--height: 65%"><span>Enterprise</span></div>
                <div class="chart-bar" style="--height: 45%"><span>Add-ons</span></div>
                <div class="chart-bar" style="--height: 32%"><span>Support</span></div>
            </div>
            <p class="insight-text clickable">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M23 6l-9.5 9.5-5-5L1 18"/>
                    <path d="M17 6h6v6"/>
                </svg>
                ${t['chat.answer1Insight']}
            </p>
        `;
        await addMessage('ai', answer1);

        // Wait before follow-up
        await new Promise(resolve => setTimeout(resolve, 2500));

        // Follow-up question (going deeper)
        await addMessage('user', t['chat.followup1']);

        // Follow-up answer with detailed breakdown
        const answer2 = `
            <p>${t['chat.followup1Answer']}</p>
            <ul class="insight-list">
                <li>
                    <span class="insight-icon success">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                            <circle cx="8.5" cy="7" r="4"/>
                            <line x1="20" y1="8" x2="20" y2="14"/>
                            <line x1="23" y1="11" x2="17" y2="11"/>
                        </svg>
                    </span>
                    ${t['chat.followup1Reason1']}
                </li>
                <li>
                    <span class="insight-icon success">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                    </span>
                    ${t['chat.followup1Reason2']}
                </li>
                <li>
                    <span class="insight-icon success">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                    </span>
                    ${t['chat.followup1Reason3']}
                </li>
            </ul>
            <p class="insight-text action-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
                ${t['chat.followup1Action']}
            </p>
        `;
        await addMessage('ai', answer2);

        // Wait before restarting
        await new Promise(resolve => setTimeout(resolve, 6000));
    }

    async function runDemo() {
        while (currentGeneration === chatDemoGeneration) {
            await runFollowUpConversation();
            // Check again after conversation completes
            if (currentGeneration !== chatDemoGeneration) break;
        }
    }

    runDemo();
}

// Parallax effect for gradient orbs
window.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.gradient-orb');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});
