/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  ExternalLink, 
  ChevronRight, 
  Languages, 
  Store, 
  ShoppingBag, 
  Zap, 
  Users, 
  Truck, 
  Info,
  Menu,
  X,
  Target,
  Rocket
} from 'lucide-react';

type Lang = 'en' | 'ar';
type Page = 'home' | 'about' | 'branches' | 'services' | 'contact';

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      branches: 'Branches',
      services: 'Services',
      contact: 'Contact',
      cta: 'Get In Touch',
      brand: 'Today Road',
      subBrand: 'Darb Al-Yawm'
    },
    hero: {
      badge: 'Trusted Grocery Retail · Saudi Arabia',
      title: 'Today Road',
      subtitle: 'Today Road — Yanbu, Saudi Arabia',
      desc: "Your trusted neighborhood grocery destination — delivering freshness, quality, and value across 11 branches in the Kingdom of Saudi Arabia.",
      viewBranches: 'View Our Branches',
      contactUs: 'Contact Us'
    },
    stats: {
      branches: 'Branches Nationwide',
      cities: 'Cities in KSA',
      hq: 'HQ in Yanbu',
      customers: 'Daily Customers'
    },
    features: {
      label: 'Our Story',
      title: 'A Grocery Brand Built for Saudi Families',
      desc: 'Founded in Yanbu, Today Road has grown from a single community store into a trusted retail chain with 11 branches across the Kingdom.',
      items: [
        { icon: '🥬', title: 'Fresh Products Daily', desc: 'Fresh chicken, frozen meats, dairy, vegetables, and fruits sourced from trusted suppliers.' },
        { icon: '🏪', title: '11 Convenient Branches', desc: "Strategically located across Saudi Arabia so you're always close to a Today Road store." },
        { icon: '⭐', title: 'Premium Quality', desc: 'Every product is carefully selected to meet our high standards for quality and value.' },
        { icon: '💚', title: 'Community First', desc: 'Proud to be part of the neighborhoods we serve — supporting families across the Kingdom.' },
        { icon: '🚛', title: 'Reliable Supply Chain', desc: 'Our central warehouse in Yanbu ensures all branches are always stocked and fresh.' },
        { icon: '📍', title: 'Yanbu Headquarters', desc: 'Our roots run deep in Yanbu — home to our head office, management, and central warehouse.' }
      ]
    },
    services: {
      label: 'What We Offer',
      title: 'Our Services',
      desc: 'A complete grocery experience — from fresh chicken to frozen goods and household essentials.',
      subTitle: 'Everything Your Family Needs',
      subDesc: 'At Today Road, we offer a wide range of grocery products and services to meet every Saudi household\'s daily needs.',
      items: [
        { icon: '🍗', title: 'Fresh Chicken', desc: 'Fresh halal-certified chicken, cut and prepared daily to the highest standards.' },
        { icon: '🧊', title: 'Frozen Meats & Goods', desc: 'Frozen beef, lamb, seafood, vegetables, and ready meals — all stored at optimal conditions.' },
        { icon: '🥬', title: 'Fresh Produce', desc: 'Daily deliveries of fresh vegetables, fruits, and herbs from trusted suppliers.' },
        { icon: '🥛', title: 'Dairy & Beverages', desc: 'Full range of dairy products, juices, water, and soft drinks from leading brands.' },
        { icon: '🧁', title: 'Bakery Products', desc: 'Freshly baked breads, pastries, and sweets prepared daily in select branches.' },
        { icon: '🌾', title: 'Dry Goods & Pantry', desc: 'Rice, grains, flour, oils, spices, and pantry staples at competitive prices.' },
        { icon: '🧴', title: 'Household Essentials', desc: 'Cleaning supplies, personal care, and household goods for every family.' },
        { icon: '🎯', title: 'Special Offers', desc: 'Weekly promotions, seasonal deals, and loyalty programs to help you save more.' }
      ]
    },
    contact: {
      label: 'Reach Out',
      title: 'Contact Us',
      desc: "We're here to help — reach our team at headquarters or visit any of our 11 branches.",
      hq: 'Headquarters',
      hqVal: 'Yanbu, Madinah Region, Saudi Arabia',
      phone: 'Phone',
      fax: 'Fax',
      email: 'Email',
      hours: 'Working Hours',
      hoursVal: 'Sat–Thu: 8:00 AM – 10:00 PM',
      wa: 'Chat on WhatsApp',
      formTitle: 'Send Us a Message',
      name: 'Your Name',
      namePlat: 'e.g. Mohammed Al-Harbi',
      emailAddr: 'Email Address',
      emailPlat: 'your@email.com',
      subject: 'Subject',
      subjectPlat: 'How can we help?',
      message: 'Message',
      messagePlat: 'Write your message here...',
      send: 'Send Message →',
      dev: 'Developer: Mohammed Abdullah Said bin Bishr',
      devContact: 'Contact the Developer'
    },
    about: {
      label: 'Our Identity',
      title: 'About Today Road',
      desc: 'Rooted in Yanbu, growing across the Kingdom — a story of trust, quality, and community.',
      who: 'Who We Are',
      whoTitle: 'More Than a Grocery Store',
      whoP1: 'Today Road (Darb Al-Yawm) was established with a clear purpose: to provide Saudi families with access to high-quality, fresh, and affordable grocery products through a trusted retail network.',
      whoP2: 'Headquartered in Yanbu with a central warehouse and management office, we operate 11 branches across multiple Saudi cities — each reflecting our commitment to a welcoming, well-stocked shopping environment.',
      vision: 'Our Vision',
      visionDesc: 'To become the most trusted grocery retail chain in Saudi Arabia, known for quality, service, and community care.',
      mission: 'Our Mission',
      missionDesc: 'To provide every Saudi family with easy access to fresh, high-quality products at fair prices — through well-run branches staffed by dedicated teams.',
      history: 'Our History',
      historyDesc: 'Founded in Yanbu, Today Road began as a single neighborhood store. Through dedication to quality and customer trust, we expanded to 11 branches — a testament to the confidence our customers place in us.',
      values: 'Core Values',
      valuesTitle: 'What Drives Us',
      vItems: [
        { title: 'Integrity', desc: 'Honest dealings with customers, suppliers, and employees.' },
        { title: 'Quality', desc: 'Uncompromising standards for every product on our shelves.' },
        { title: 'Community', desc: 'Serving the neighborhoods we serve every day.' },
        { title: 'Innovation', desc: 'Continuously improving stores and customer experience.' },
        { title: 'Freshness', desc: 'Daily restocking and quality checks every single day.' },
        { title: 'Excellence', desc: 'High standards we hold ourselves accountable to daily.' }
      ]
    },
    branches: {
      label: 'Nationwide Presence',
      title: 'Our 11 Branches',
      desc: 'Strategically located across Saudi Arabia — always close to you and your family.',
      hq: 'HQ + Warehouse',
      open: 'Open',
      comingSoon: 'Coming Soon',
      newLoc: 'New Location'
    },
    footer: {
      desc: 'A leading grocery retail chain with 11 branches across Saudi Arabia. Headquartered in Yanbu, we bring freshness and quality to every family.',
      links: 'Quick Links',
      copyright: '© 2025 Today Road | Darb Al-Yawm. All rights reserved.',
      tag: 'Yanbu, KSA · 11 Branches'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      branches: 'الفروع',
      services: 'خدماتنا',
      contact: 'اتصل بنا',
      cta: 'تواصل معنا',
      brand: 'درب اليوم',
      subBrand: 'Today Road'
    },
    hero: {
      badge: 'سلسلة بقالة موثوقة · المملكة العربية السعودية',
      title: 'درب اليوم',
      subtitle: 'Today Road — ينبع، المملكة العربية السعودية',
      desc: "وجهتك التسوقية الموثوقة — نوفر لك الطازج والجودة والقيمة عبر 11 فرعاً في أرجاء المملكة العربية السعودية.",
      viewBranches: 'استعرض فروعنا',
      contactUs: 'تواصل معنا'
    },
    stats: {
      branches: 'فرع في المملكة',
      cities: 'مدينة سعودية',
      hq: 'المقر في ينبع',
      customers: 'عميل يومياً'
    },
    features: {
      label: 'قصتنا',
      title: 'علامة تجارية بنيت للأسرة السعودية',
      desc: 'انطلق درب اليوم من ينبع ليتحول من متجر واحد إلى سلسلة موثوقة تضم 11 فرعاً في أنحاء المملكة.',
      items: [
        { icon: '🥬', title: 'منتجات طازجة يومياً', desc: 'دجاج طازج ولحوم مجمدة وألبان وخضار وفاكهة من موردين موثوقين.' },
        { icon: '🏪', title: '11 فرعاً في متناول يدك', desc: "مواقع استراتيجية في أنحاء المملكة لتكون دائماً قريباً من فرع درب اليوم." },
        { icon: '⭐', title: 'جودة عالية', desc: 'كل منتج مختار بعناية ليلبي معاييرنا العالية في الجودة والقيمة.' },
        { icon: '💚', title: 'مجتمعنا أولاً', desc: 'نفخر بكوننا جزءاً من الأحياء التي نخدمها ودعم الأسر في كل المناطق.' },
        { icon: '🚛', title: 'سلسلة توريد موثوقة', desc: 'مستودعنا الرئيسي في ينبع يضمن أن كل فروعنا مخزنة ومنتجاتها طازجة باستمرار.' },
        { icon: '📍', title: 'المقر الرئيسي في ينبع', desc: 'جذورنا في ينبع — موطن مقرنا الرئيسي وإدارتنا ومستودعنا المركزي.' }
      ]
    },
    services: {
      label: 'ما نقدمه',
      title: 'خدماتنا',
      desc: 'تجربة بقالة متكاملة — من الدجاج الطازج إلى المجمدات ومستلزمات المنزل.',
      subTitle: 'كل ما تحتاجه عائلتك',
      subDesc: 'في درب اليوم، نقدم تشكيلة واسعة من المنتجات الغذائية لتلبية احتياجات كل أسرة سعودية يومياً.',
      items: [
        { icon: '🍗', title: 'الدجاج الطازج', desc: 'دجاج طازج حلال، يُقطَّع ويُحضَّر يومياً وفق أعلى المعايير.' },
        { icon: '🧊', title: 'اللحوم والمجمدات', desc: 'لحم بقري ومجمد وخضروات مجمدة ووجبات جاهزة — كلها محفوظة في أفضل الظروف.' },
        { icon: '🥬', title: 'الخضار والفاكهة', desc: 'توصيلات يومية من خضار وفاكهة وأعشاب طازجة من موردين موثوقين.' },
        { icon: '🥛', title: 'الألبان والمشروبات', desc: 'تشكيلة كاملة من الألبان والعصائر والمياه والمشروبات الغازية.' },
        { icon: '🧁', title: 'المخبوزات', desc: 'خبز ومعجنات وحلويات طازجة تُحضَّر يومياً في فروع مختارة.' },
        { icon: '🌾', title: 'البقاليات والمؤونة', desc: 'أرز وحبوب ودقيق وزيوت وتوابل ومؤونة أساسية بأسعار تنافسية.' },
        { icon: '🧴', title: 'مستلزمات المنزل', desc: 'مستلزمات تنظيف وعناية شخصية وسلع منزلية لكل الأسر.' },
        { icon: '🎯', title: 'العروض الخاصة', desc: 'عروض أسبوعية وصفقات موسمية وبرامج ولاء لتوفير المزيد.' }
      ]
    },
    contact: {
      label: 'تواصل معنا',
      title: 'اتصل بنا',
      desc: 'نحن هنا لمساعدتك — تواصل مع فريقنا في المقر أو زر أي من فروعنا الـ 11.',
      hq: 'المقر الرئيسي',
      hqVal: 'ينبع، منطقة المدينة المنورة، المملكة العربية السعودية',
      phone: 'الهاتف',
      fax: 'الفاكس',
      email: 'البريد الإلكتروني',
      hours: 'ساعات العمل',
      hoursVal: 'السبت–الخميس: ٨ص – ١٠م',
      wa: 'تواصل عبر واتساب',
      formTitle: 'أرسل لنا رسالة',
      name: 'الاسم الكامل',
      namePlat: 'مثال: محمد النهدي',
      emailAddr: 'البريد الإلكتروني',
      emailPlat: 'your@email.com',
      subject: 'الموضوع',
      subjectPlat: 'كيف يمكننا مساعدتك؟',
      message: 'الرسالة',
      messagePlat: 'اكتب رسالتك هنا...',
      send: 'إرسال الرسالة ←',
      dev: 'المطور: محمد عبدالله سعيد بن بشر',
      devContact: 'تواصل مع المطور'
    },
    about: {
      label: 'هويتنا',
      title: 'من نحن — درب اليوم',
      desc: 'جذورنا في ينبع ونمونا في أرجاء المملكة — قصة ثقة وجودة ومجتمع.',
      who: 'من نحن',
      whoTitle: 'أكثر من مجرد بقالة',
      whoP1: 'درب اليوم أُسِّس بهدف واضح: توفير منتجات بقالة طازجة وعالية الجودة وبأسعار مناسبة لأسر المملكة عبر شبكة بيع موثوقة.',
      whoP2: 'من مقرنا في ينبع حيث يقع المستودع الرئيسي ومكتب الإدارة، ندير 11 فرعاً في مدن سعودية متعددة — كل فرع يعكس التزامنا ببيئة تسوق مرحّبة ومجهزة.',
      vision: 'رؤيتنا',
      visionDesc: 'أن نصبح سلسلة البيع الغذائي الأكثر ثقةً في المملكة، معروفين بالجودة وخدمة العملاء والمسؤولية المجتمعية.',
      mission: 'مهمتنا',
      missionDesc: 'توفير وصول سهل لكل أسرة سعودية لمنتجات طازجة عالية الجودة بأسعار عادلة عبر فروع يديرها فرق متفانية.',
      history: 'تاريخنا',
      historyDesc: 'تأسس درب اليوم في ينبع كمتجر واحد في الحي. وبفضل الالتزام بالجودة وثقة العملاء، توسعنا إلى 11 فرعاً — شاهد على الثقة التي يمنحنا إياها عملاؤنا.',
      values: 'قيمنا الجوهرية',
      valuesTitle: 'ما الذي يحركنا',
      vItems: [
        { title: 'النزاهة', desc: 'تعامل صادق مع العملاء والموردين والموظفين.' },
        { title: 'الجودة', desc: 'معايير لا تُساوَم عليها لكل منتج على أرففنا.' },
        { title: 'المجتمع', desc: 'خدمة الأحياء التي نعمل فيها كل يوم.' },
        { title: 'الابتكار', desc: 'تحسين المتاجر وتجربة العملاء باستمرار.' },
        { title: 'الطزاجة', desc: 'إعادة تخزين يومية وفحص دقيق في كل يوم.' },
        { title: 'التميز', desc: 'معايير عالية نحاسب أنفسنا على تحقيقها يومياً.' }
      ]
    },
    branches: {
      label: 'حضور على مستوى المملكة',
      title: 'فروعنا',
      desc: 'مواقع استراتيجية في أنحاء المملكة العربية السعودية — دائماً قريبين منك ومن عائلتك.',
      hq: 'المقر + المستودع',
      open: 'مفتوح',
      comingSoon: 'قريباً',
      newLoc: 'موقع جديد'
    },
    footer: {
      desc: 'سلسلة بقالة رائدة تضم 11 فرعاً في أنحاء المملكة. مقرنا في ينبع ونجلب الطزاجة والجودة لكل أسرة.',
      links: 'روابط سريعة',
      copyright: '© 2025 درب اليوم | Today Road. جميع الحقوق محفوظة.',
      tag: 'ينبع، المملكة · 11 فرعاً'
    }
  }
};

const branchesData = [
  { 
    id: 1, 
    nameEn: 'Yanbu Main Branch', 
    nameAr: 'مقر ينبع الرئيسي', 
    cityEn: 'Yanbu · Head Office & Central Warehouse', 
    cityAr: 'ينبع · المقر الرئيسي والمستودع المركزي', 
    hq: true, 
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
    url: 'https://maps.app.goo.gl/qmYEWqQDuxnVw4Nj7?g_st=ic' 
  },
  { 
    id: 2, 
    nameEn: 'Today Road 1', 
    nameAr: 'درب اليوم 1', 
    cityEn: 'Wadi Khmal, Madinah Region', 
    cityAr: 'وادي خمال، منطقة المدينة المنورة', 
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800',
    url: 'https://maps.app.goo.gl/JvAjQiWH3byjTtkz8?g_st=ic' 
  },
  { 
    id: 3, 
    nameEn: 'Today Road 2', 
    nameAr: 'درب اليوم 2', 
    cityEn: 'Yanbu, Madinah Region', 
    cityAr: 'ينبع، منطقة المدينة المنورة', 
    image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=800',
    url: 'https://maps.app.goo.gl/L3udUCrafqz8jHkZ8?g_st=ic' 
  },
  { 
    id: 4, 
    nameEn: 'Today Road 3', 
    nameAr: 'درب اليوم 3', 
    cityEn: 'Riyadh, Riyadh Region', 
    cityAr: 'الرياض، منطقة الرياض', 
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
    url: 'https://maps.app.goo.gl/QpbwMmaNHJ5CTDQN6?g_st=ic' 
  },
  { 
    id: 5, 
    nameEn: 'Today Road 4', 
    nameAr: 'درب اليوم 4', 
    cityEn: 'Umluj, Tabuk Region', 
    cityAr: 'أملج، منطقة تبوك', 
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800',
    url: 'https://maps.app.goo.gl/wgeuSakzDiBmq4pw9?g_st=ic' 
  },
  { 
    id: 6, 
    nameEn: 'Today Road 5', 
    nameAr: 'درب اليوم 5', 
    cityEn: 'Jeddah, Makkah Region', 
    cityAr: 'جدة، منطقة مكة المكرمة', 
    image: 'https://images.unsplash.com/photo-1543083477-4f785aeafaa9?auto=format&fit=crop&q=80&w=800',
    url: 'https://maps.app.goo.gl/Nvw9Dw7v6uSzpHFXA?g_st=ic' 
  },
  { 
    id: 7, 
    nameEn: 'Today Road 6', 
    nameAr: 'درب اليوم 6', 
    cityEn: 'Yanbu, Madinah Region', 
    cityAr: 'ينبع، منطقة المدينة المنورة', 
    image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?auto=format&fit=crop&q=80&w=800',
    url: 'https://maps.app.goo.gl/N6xzW5dDEdwSw3MK9?g_st=ic' 
  },
  { 
    id: 8, 
    nameEn: 'Today Road 7', 
    nameAr: 'درب اليوم 7', 
    cityEn: 'Yanbu, Madinah Region', 
    cityAr: 'ينبع، منطقة المدينة المنورة', 
    image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=800',
    url: 'https://maps.app.goo.gl/DbJMu8FWgpxfsAoc9?g_st=ic' 
  },
  { 
    id: 9, 
    nameEn: 'Today Road 8', 
    nameAr: 'درب اليوم 8', 
    cityEn: 'Yanbu, Madinah Region', 
    cityAr: 'ينبع، منطقة المدينة المنورة', 
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800',
    url: 'https://maps.app.goo.gl/7TK15BzNrRhW6zuEA?g_st=ic' 
  },
  { 
    id: 10, 
    nameEn: 'Today Road 9', 
    nameAr: 'درب اليوم 9', 
    cityEn: 'Yanbu, Madinah Region', 
    cityAr: 'ينبع، منطقة المدينة المنورة', 
    image: 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=800',
    url: 'https://maps.google.com?q=24.0760865,38.0493132&entry=gps&shh=CAE&lucs=,94297699,94284478,94231188,94280568,47071704,94218641,94282134,94286869&g_st=ic' 
  },
];

export default function App() {
  const [lang, setLang] = useState<Lang>('ar');
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = translations[lang];
  const isAr = lang === 'ar';

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');
  const navigate = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[9999]">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <img src="https://i.imgur.com/nd9m6Xp.jpeg" alt="Today Road Logo" className="w-[180px] md:w-[250px] mb-8" />
          <div className="w-32 h-1 bg-brand-green-light rounded-full overflow-hidden">
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="h-full bg-brand-green w-full"
            />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col transition-all duration-300 ${isAr ? 'rtl font-cairo' : 'ltr font-dm-sans'}`} dir={isAr ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="bg-white border-b-2 border-brand-border sticky top-0 z-[999] px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16 md:h-20 gap-3">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('home')}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-green rounded-xl overflow-hidden flex items-center justify-center transform transition-transform group-hover:scale-105">
              <img src="https://i.imgur.com/nd9m6Xp.jpeg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-sm md:text-[15px] font-black text-brand-green leading-tight font-playfair">{t.nav.brand}</div>
              <div className="text-[10px] md:text-xs text-brand-orange font-bold tracking-tight">{t.nav.subBrand}</div>
            </div>
          </div>

          <div className="hidden lg:flex gap-1 flex-1 justify-center">
            {(['home', 'about', 'branches', 'services', 'contact'] as Page[]).map((p) => (
              <button 
                key={p}
                onClick={() => navigate(p)}
                className={`nav-link ${currentPage === p ? 'nav-link-active' : ''}`}
              >
                {t.nav[p]}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <button 
              onClick={toggleLang}
              className="hidden sm:flex items-center gap-2 bg-white border-2 border-brand-green text-brand-green px-3 py-2 rounded-xl text-xs font-bold transition-all hover:bg-brand-green-light cursor-pointer"
            >
              <Languages size={14} />
              <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
            </button>
            
            <button 
              onClick={() => navigate('contact')}
              className="hidden md:block btn-primary text-xs"
            >
              {t.nav.cta}
            </button>

            <button 
              className="lg:hidden p-2 text-brand-green hover:bg-brand-green-light rounded-lg transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-brand-border overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-2">
                {(['home', 'about', 'branches', 'services', 'contact'] as Page[]).map((p) => (
                  <button 
                    key={p}
                    onClick={() => navigate(p)}
                    className={`flex items-center justify-between p-3 rounded-xl text-sm font-bold transition-colors ${currentPage === p ? 'bg-brand-green-light text-brand-green' : 'text-brand-muted hover:bg-brand-off'}`}
                  >
                    <span>{t.nav[p]}</span>
                    <ChevronRight size={16} className={isAr ? 'rotate-180' : ''} />
                  </button>
                ))}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <button 
                    onClick={toggleLang}
                    className="flex items-center justify-center gap-2 border-2 border-brand-green text-brand-green p-3 rounded-xl"
                  >
                    <Languages size={16} />
                    <span className="text-xs font-bold">{lang === 'ar' ? 'English' : 'العربية'}</span>
                  </button>
                  <button 
                    onClick={() => navigate('contact')}
                    className="btn-primary text-xs"
                  >
                    {t.nav.cta}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {currentPage === 'home' && <HomePage t={t} navigate={navigate} isAr={isAr} />}
            {currentPage === 'about' && <AboutPage t={t} isAr={isAr} />}
            {currentPage === 'branches' && <BranchesPage t={t} isAr={isAr} />}
            {currentPage === 'services' && <ServicesPage t={t} isAr={isAr} />}
            {currentPage === 'contact' && <ContactPage t={t} isAr={isAr} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-brand-green text-white py-12 md:py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-white/20">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center p-2">
                  <img src="https://i.imgur.com/nd9m6Xp.jpeg" alt="Logo" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <div className="text-xl font-bold font-playfair">{t.nav.brand}</div>
                  <div className="text-xs text-brand-orange-hover font-bold">{t.nav.subBrand}</div>
                </div>
              </div>
              <p className="text-sm opacity-70 leading-relaxed max-w-md">{t.footer.desc}</p>
            </div>

            <div>
              <h4 className="text-base font-bold mb-6">{t.footer.links}</h4>
              <ul className="flex flex-col gap-3">
                {(['home', 'about', 'branches', 'services', 'contact'] as Page[]).map((p) => (
                  <li 
                    key={p} 
                    className="text-sm opacity-60 hover:opacity-100 transition-opacity cursor-pointer flex items-center gap-2 group"
                    onClick={() => navigate(p)}
                  >
                    <div className={`w-1 h-1 bg-brand-orange rounded-full transition-all group-hover:w-2`} />
                    {t.nav[p]}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base font-bold mb-6">{t.contact.title}</h4>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3 opacity-70 text-sm">
                  <MapPin size={18} className="text-brand-orange-hover shrink-0" />
                  <span>{t.contact.hqVal}</span>
                </li>
                <li className="flex items-center gap-3 opacity-70 text-sm">
                  <Phone size={18} className="text-brand-orange-hover shrink-0" />
                  <span>+966557147492</span>
                </li>
                <li className="flex items-center gap-3 opacity-70 text-sm">
                  <Mail size={18} className="text-brand-orange-hover shrink-0" />
                  <span>info@todayroad.com.sa</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] opacity-40">
            <span>{t.footer.copyright}</span>
            <div className="flex items-center gap-2">
              <Store size={14} />
              <span>{t.footer.tag}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage({ t, navigate, isAr }: { t: any; navigate: (p: Page) => void; isAr: boolean }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-green text-white pt-16 md:pt-28 pb-20 md:pb-32 px-6 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 border-4 border-white rounded-full" />
          <div className="absolute bottom-20 left-20 w-96 h-96 border-8 border-white rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/15 border border-white/20 px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-8"
          >
            <div className="w-2 h-2 bg-brand-orange-hover rounded-full animate-pulse" />
            {t.hero.badge}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-7xl font-black mb-6 leading-tight ${isAr ? 'font-cairo' : 'font-playfair'}`}
          >
            {t.hero.title}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-bold text-brand-orange-hover mb-6"
          >
            {t.hero.subtitle}
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-base md:text-lg opacity-80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {t.hero.desc}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button onClick={() => navigate('branches')} className="btn-primary w-full sm:w-auto">{t.hero.viewBranches}</button>
            <button onClick={() => navigate('contact')} className="btn-outline w-full sm:w-auto">{t.hero.contactUs}</button>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b-2 border-brand-border">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4">
          {[
            { num: '11', label: t.stats.branches },
            { num: '4+', label: t.stats.cities },
            { num: 'KSA', label: t.stats.hq },
            { num: '10K+', label: t.stats.customers }
          ].map((stat, idx) => (
            <div key={idx} className={`p-8 md:p-12 text-center border-brand-border ${idx !== 3 ? (isAr ? 'border-l' : 'border-r') : ''}`}>
              <div className="text-3xl md:text-5xl font-black text-brand-green mb-2 font-playfair">{stat.num}</div>
              <div className="text-[11px] md:text-xs text-brand-muted font-bold uppercase tracking-widest leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story/Features */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <div className="section-label mx-auto">{t.features.label}</div>
            <h2 className={`text-3xl md:text-5xl font-black text-brand-text mb-6 ${isAr ? 'font-cairo' : 'font-playfair'}`}>
              {t.features.title}
            </h2>
            <p className="text-brand-muted text-base max-w-2xl mx-auto leading-relaxed">
              {t.features.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {t.features.items.map((item: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="card-base text-center md:text-start"
              >
                <div className="w-14 h-14 bg-brand-green-light rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="px-6 mb-20 md:mb-32">
        <div className="max-w-6xl mx-auto bg-brand-orange rounded-[2rem] p-10 md:p-16 text-white text-center relative overflow-hidden flex flex-col items-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <ShoppingBag size={64} className="mb-8 opacity-20" />
          <h2 className={`text-3xl md:text-4xl font-black mb-6 max-w-2xl ${isAr ? 'font-cairo leading-tight' : 'font-playfair'}`}>
            {isAr ? 'هل تبحث عن فرعك الأقرب؟' : 'Looking for your nearest branch?'}
          </h2>
          <p className="text-lg opacity-90 mb-10 max-w-xl">
            {isAr ? 'تفضل بزيارة صفحة الفروع لتجد أقرب متجر "درب اليوم" لك ولعائلتك.' : 'Visit our branches page to find the closest Today Road store for you and your family.'}
          </p>
          <button onClick={() => navigate('branches')} className="bg-white text-brand-orange px-8 py-4 rounded-2xl font-black transition-all hover:scale-105 shadow-xl cursor-pointer">
            {t.hero.viewBranches}
          </button>
        </div>
      </section>
    </>
  );
}

function AboutPage({ t, isAr }: { t: any; isAr: boolean }) {
  return (
    <div className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24 items-start">
          <div className="flex-1">
            <div className="section-label">{t.about.label}</div>
            <h1 className={`text-4xl md:text-5xl font-black mb-10 ${isAr ? 'font-cairo' : 'font-playfair'}`}>
              {t.about.title}
            </h1>
            
            <div className="prose prose-brand text-brand-muted leading-relaxed text-base mb-10">
              <h3 className="text-xl font-bold text-brand-green mb-4">{t.about.who}</h3>
              <p className="mb-6">{t.about.whoP1}</p>
              <p>{t.about.whoP2}</p>
            </div>

            <div className="space-y-6">
              <div className="bg-brand-green-light border-[1.5px] border-brand-green-border rounded-2xl p-8 group hover:bg-brand-green hover:text-white transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-brand-green text-white rounded-xl group-hover:bg-white group-hover:text-brand-green transition-colors">
                    <Target size={24} />
                  </div>
                  <h3 className="text-xl font-black">{t.about.vision}</h3>
                </div>
                <p className="opacity-80 leading-relaxed font-semibold">{t.about.visionDesc}</p>
              </div>

              <div className="bg-brand-green-light border-[1.5px] border-brand-green-border rounded-2xl p-8 group hover:bg-brand-green hover:text-white transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-brand-green text-white rounded-xl group-hover:bg-white group-hover:text-brand-green transition-colors">
                    <Rocket size={24} />
                  </div>
                  <h3 className="text-xl font-black">{t.about.mission}</h3>
                </div>
                <p className="opacity-80 leading-relaxed font-semibold">{t.about.missionDesc}</p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full flex flex-col gap-10">
            <div>
              <div className="section-label">{t.about.values}</div>
              <h3 className="text-2xl font-black mb-8">{t.about.valuesTitle}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.about.vItems.map((val: any, idx: number) => (
                  <div key={idx} className="bg-white border-brand-border border-2 rounded-2xl p-5 border-r-4 border-r-brand-green">
                    <h4 className="text-brand-green font-black mb-2 flex items-center gap-2">
                       {val.title}
                    </h4>
                    <p className="text-xs text-brand-muted leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-green text-white rounded-3xl p-8 md:p-10 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
               <h4 className="text-xs font-black uppercase tracking-widest opacity-60 mb-4">{t.about.history}</h4>
               <p className="text-sm opacity-80 leading-relaxed">
                 {t.about.historyDesc}
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BranchesPage({ t, isAr }: { t: any; isAr: boolean }) {
  return (
    <div className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-label mx-auto">{t.branches.label}</div>
          <h1 className={`text-4xl md:text-6xl font-black mb-6 ${isAr ? 'font-cairo leading-tight' : 'font-playfair'}`}>
            {t.branches.title}
          </h1>
          <p className="text-brand-muted max-w-xl mx-auto">{t.branches.desc}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {branchesData.map((branch) => (
            <a 
              key={branch.id}
              href={branch.url}
              target="_blank"
              className="bg-white border-2 border-brand-border rounded-[2rem] overflow-hidden group hover:border-brand-green hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform"
            >
              <div className="h-48 bg-brand-green-light flex items-center justify-center relative overflow-hidden">
                <img 
                  src={(branch as any).image} 
                  alt={isAr ? branch.nameAr : branch.nameEn} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-green/10 group-hover:bg-transparent transition-colors duration-300" />
                <span className={`absolute top-4 right-4 rounded-full px-3 py-1 text-[10px] font-black text-white shadow-lg z-10 ${branch.hq ? 'bg-brand-orange' : 'bg-brand-green'}`}>
                  {branch.hq ? t.branches.hq : t.branches.open}
                </span>
                <div className="absolute bottom-4 left-4 p-2 bg-white rounded-xl shadow-lg transform -rotate-3 transition-transform group-hover:rotate-0 z-10">
                  <ExternalLink size={16} className="text-brand-green" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-black mb-2 group-hover:text-brand-green transition-colors">{isAr ? branch.nameAr : branch.nameEn}</h3>
                <div className="flex items-start gap-2 text-sm text-brand-muted opacity-80">
                  <MapPin size={16} className="shrink-0 mt-1 text-brand-orange" />
                  <span>{isAr ? branch.cityAr : branch.cityEn}</span>
                </div>
              </div>
            </a>
          ))}
          
          <div className="bg-brand-off border-2 border-dashed border-brand-border rounded-[2rem] p-12 flex flex-col items-center justify-center text-center opacity-50">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <Store size={32} className="text-brand-muted" />
            </div>
            <h3 className="text-lg font-black mb-2">{t.branches.comingSoon}</h3>
            <p className="text-xs">{t.branches.newLoc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesPage({ t, isAr }: { t: any; isAr: boolean }) {
  return (
    <div className="py-20 md:py-32 px-6 text-center lg:text-start">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col lg:flex-row gap-10 items-center lg:items-end justify-between">
          <div className="max-w-2xl">
            <div className="section-label mx-auto lg:mx-0">{t.services.label}</div>
            <h1 className={`text-4xl md:text-6xl font-black mb-6 ${isAr ? 'font-cairo leading-tight' : 'font-playfair'}`}>
              {t.services.title}
            </h1>
            <p className="text-brand-muted text-lg">{t.services.desc}</p>
          </div>
          <div className="shrink-0">
            <ShoppingBag size={80} className="text-brand-green opacity-10 animate-bounce" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {t.services.items.map((service: any, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white border-[1.5px] border-brand-border rounded-3xl p-8 hover:border-brand-orange hover:shadow-[0_10px_30px_rgba(224,123,26,0.1)] transition-all duration-300 group text-center lg:text-start"
            >
              <div className="w-16 h-16 bg-brand-orange-light rounded-2xl flex items-center justify-center text-3xl mb-8 mx-auto lg:mx-0 group-hover:rotate-12 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-lg font-black mb-3 group-hover:text-brand-orange transition-colors">{service.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed opacity-80">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactPage({ t, isAr }: { t: any; isAr: boolean }) {
  return (
    <div className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <div className="section-label mx-auto">{t.contact.label}</div>
          <h1 className={`text-4xl md:text-6xl font-black mb-6 ${isAr ? 'font-cairo leading-tight' : 'font-playfair'}`}>
            {t.contact.title}
          </h1>
          <p className="text-brand-muted max-w-xl mx-auto text-lg leading-relaxed">{t.contact.desc}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start">
          <div className="lg:col-span-4 space-y-4">
            <ContactInfo color="text-brand-green" bgColor="bg-brand-green-light" icon={<MapPin size={20} />} label={t.contact.hq} value={t.contact.hqVal} />
            <ContactInfo color="text-brand-green" bgColor="bg-brand-green-light" icon={<Phone size={20} />} label={t.contact.phone} value="+966 4 XXX XXXX" />
            <ContactInfo color="text-brand-green" bgColor="bg-brand-green-light" icon={<Mail size={20} />} label={t.contact.email} value="info@todayroad.com.sa" />
            <ContactInfo color="text-brand-green" bgColor="bg-brand-green-light" icon={<Clock size={20} />} label={t.contact.hours} value={t.contact.hoursVal} />
            
            <a 
              href="https://wa.me/966557147492" 
              target="_blank" 
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white p-5 rounded-2xl font-black transition-all hover:scale-[1.02] active:scale-95 shadow-xl w-full"
            >
              <MessageCircle size={24} />
              <span>{t.contact.wa}</span>
            </a>

            <div className="bg-brand-green-light border-2 border-brand-green-border rounded-2xl p-6 text-center">
              <div className="text-xs font-black text-brand-green uppercase tracking-widest mb-2">{t.contact.dev}</div>
              <a href="mailto:malnhdi99@gmail.com" className="text-sm font-bold text-brand-orange hover:underline">
                📧 malnhdi99@gmail.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white border-2 border-brand-border rounded-[2.5rem] p-8 md:p-12 shadow-sm">
              <h3 className="text-2xl font-black mb-8">{t.contact.formTitle}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <FormInput label={t.contact.name} placeholder={t.contact.namePlat} />
                <FormInput label={t.contact.emailAddr} placeholder={t.contact.emailPlat} type="email" />
              </div>
              <div className="mb-6">
                <FormInput label={t.contact.subject} placeholder={t.contact.subjectPlat} />
              </div>
              <div className="mb-8">
                <label className="block text-[11px] font-black uppercase tracking-widest text-brand-muted mb-3">{t.contact.message}</label>
                <textarea 
                  className="w-full bg-brand-off border-2 border-brand-border rounded-xl p-4 min-h-[160px] outline-none focus:border-brand-green focus:bg-white transition-all text-sm font-semibold"
                  placeholder={t.contact.messagePlat}
                />
              </div>
              <button className="btn-primary w-full py-5 text-base md:text-lg rounded-2xl shadow-xl hover:shadow-2xl flex items-center justify-center gap-4">
                <span>{t.contact.send}</span>
                <AnimateArrow isAr={isAr} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfo({ icon, label, value, color, bgColor }: { icon: any; label: string; value: string; color: string; bgColor: string }) {
  return (
    <div className="bg-white border-2 border-brand-border rounded-2xl p-5 flex items-center gap-5 group hover:border-brand-green transition-all hover:shadow-md">
      <div className={`w-12 h-12 ${bgColor} ${color} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div>
        <div className="text-[10px] font-black uppercase tracking-widest text-brand-muted mb-1">{label}</div>
        <div className="text-sm font-bold text-brand-text">{value}</div>
      </div>
    </div>
  );
}

function FormInput({ label, placeholder, type = 'text' }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="block text-[11px] font-black uppercase tracking-widest text-brand-muted mb-3">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder}
        className="w-full bg-brand-off border-2 border-brand-border rounded-xl p-4 outline-none focus:border-brand-green focus:bg-white transition-all text-sm font-semibold"
      />
    </div>
  );
}

function AnimateArrow({ isAr }: { isAr: boolean }) {
  return (
    <motion.div 
      initial={{ x: 0 }}
      animate={{ x: isAr ? -10 : 10 }}
      transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
    >
      {isAr ? '←' : '→'}
    </motion.div>
  );
}
