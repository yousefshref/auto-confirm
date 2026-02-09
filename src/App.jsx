import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Zap, 
  ShieldAlert, 
  MessageSquare, 
  Smartphone, 
  LayoutDashboard,
  TrendingUp // Fixed import
} from 'lucide-react';

// --- CONFIGURATION CENTER (EDIT HERE) ---
const CONTENT = {
  nav: {
    logo: "AutoConfirm",
    cta: "Contact Founder"
  },
  hero: {
    badge: "نستخدم واتس اب الرسمي لضمان عدم الحظر نهائي",
    headline: <div className='tracking-normal leading-tight'>حول <span className='text-yellow-700'>أوردر جديد</span> لـ <span className='text-green-700'>بوليصة شحن</span> في ثانية.. بدون موظفين.</div>,
    subHeadline: "بمجرد ما العميل يطلب، السيستم بيبعت له رسالة تأكيد رسمية، بيحدث كشوفات الشحن لحظياً، وبيقترح منتجات تانية يشتريها—يعني غلطات بشرية 'صفر' وأرباح بتزيد أوتوماتيك.",
    // vslThumbnail: "https://placehold.co/1280x720/1e293b/ffffff?text=Play+VSL:+The+AutoConfirm+System",
    videoId: "oE3r3K_TfC4",
    vslNote: "Watch time: 2:15 • Sound On"
  },
painPoints: [
    {
      icon: ShieldAlert,
      color: "red",
      title: "كابوس المرتجعات (RTO)",
      desc: "كل أوردر غير مؤكد هو مرتجع محتمل في علم الغيب. المكالمات اليدوية بطيئة جداً، بتعطل سرعة الشحن وبتدي فرصة للعميل يغير رأيه قبل ما الطرد يتحرك."
    },
    {
      icon: Smartphone,
      color: "amber",
      title: "الأخطاء البشرية وضياع التركيز",
      desc: "الموظف بيفقد تركيزه؛ عناوين بتتسجل غلط، متابعات بتتنسي، وردود بتطلع 'ناشفة'. سمعة براندك بتتهز مع كل غلطة بشرية كان ممكن يتجنبها السيستم."
    },
    {
      icon: BarChart3,
      color: "blue",
      title: "عجز التوسع (Scale)",
      desc: "مش هتقدر تزود ميزانية إعلاناتك طول ما عملياتك بتعتمد على تأكيد أوردر بأوردر يدوياً. توظيف موظفين أكتر بياكل صافي أرباحك؛ الأتمتة هي الطريق الوحيد لنمو حقيقي."
    }
  ],
proof: {
    headline: "تحكم كامل في عملياتك.. لحظة بلحظة.",
    desc: "أوتو-كونفيرم مش مجرد أداة لإرسال الرسائل؛ ده بمثابة 'مدير عمليات' رقمي لمتجرك. تابع معدلات التأكيد، الأوردرات الملغية، ونسبة تقليل المرتجعات لحظياً من خلال لوحة تحكم الويب أو عبر تنبيهات تليجرام المباشرة.",
    image: "assets/dashboard.png",
    list: [
      "إشعارات تليجرام فورية لكل أوردر يتم تأكيده بنجاح",
      "تحليلات ذكية تتوقع احتمالية المرتجع (RTO) قبل الشحن",
      "ربط سلس وتزامن مباشر مع منصة متجرك الحالية دون تعقيد"
    ],
    stat: {
      label: "معدل التأكيد الناجح",
      value: "88.5%"
    }
  },
workflow: {
    headline: "كيف تعمل البنية التحتية للنظام",
    sub: "انسيابية تامة. أتمتة كاملة.",
    steps: [
      {
        step: "1",
        icon: null, // يعتمد على الأرقام
        title: "إتمام الطلب",
        desc: "بمجرد إتمام العميل لعملية الشراء، تنتقل بيانات الطلب لحظياً إلى AutoConfirm عبر ربط تقني مباشر (Webhooks)."
      },
      {
        step: "2",
        icon: MessageSquare,
        title: "تأكيد البيانات آلياً",
        desc: "نظام واتساب الرسمي يتواصل مع العميل لتأكيد تفاصيل الطلب، الموقع، وجدية الشراء بشكل فوري ومنظم."
      },
      {
        step: "3",
        icon: LayoutDashboard,
        title: "المزامنة والشحن",
        desc: "تظهر الطلبات المؤكدة فوراً في لوحة التحكم الخاصة بك؛ ليبدأ فريقك بالتغليف والشحن دون أي انتظار."
      }
    ]
  },
testimonials: [
    {
      name: "صاحب متجر unishop",
      role: "توسع لـ 2900+ أوردر مؤكد اوتوماتيكي شهرياً",
      image: "assets/social_proof_1.png",
      profile: "assets/unishop.png",
      quote: <>
      عايز اقولك الحمدلله بقيت اعمل <span className='text-blue-700'>اسكيل</span> وانا مش شايل هم <br />
      حتى التيم كله مشي <br />
      فاضل واحد بس
      </>
    },
    {
      name: "صاحب متجر 3ataba.com",
      role: "تم تأكيد 80% من الطلبات في نفس يوم تركيب AutoConfirm !",
      image: "assets/social_proof_2.png",
      profile: "assets/3ataba.png",
      quote: <>
      الأرقام هي اللي بتتكلم. تأكيد 80 أوردر من أصل 99 في ثواني وبدون تدخل بشري واحد. السيستم وفر علينا مجهود جبار كان بيضيع في ملاحقة العملاء بالمكالمات.
      </>
    },
    {
      name: "صاحب متجر إلكترونيات كبرى.",
      role: "+4500 طلب شهرياً",
      image: "assets/social_proof_3.png",
      profile: "https://i.pinimg.com/736x/d5/1e/60/d51e60ef0899c1b0ce2cd1dbed641a36.jpg",
      quote: <>
      التحول من إدارة الأفراد لإدارة النتائج. بفضل المزامنة اللحظية بين المتجر والداشبورد، نقلنا التيم من 'دائرة التأكيد الروتينية' لمهام البيع والتسويق الحقيقية. دلوقتي بنعمل سكيل وإحنا مطمنين إن السيستم شغال بدقة 100% بدون أي إرهاق بشري.
      </>
    }
  ],
  cta: {
    headline: <>شراكتنا مخصصة فقط <br /> للبراندات الطموحة.</>,
    sub: "هل أنت جاهز لكسر عوائق العمليات اليدوية والتركيز على نمو أرباحك؟",
    button: "ابعتلنا دلوقت على واتس اب",
    disclaimer: "* نقبل فقط المتاجر التي تعالج أكثر من 500 أوردر شهرياً"
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} أوتو-كونفيرم. جميع الحقوق محفوظة. القاهرة، مصر.`
  }
};

// --- ANIMATION COMPONENT ---
const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const WhatsAppIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);


const handleWhatsAppClick = () => {
  const phoneNumber = "201023455435"; // تم إضافة كود الدولة (20) لضمان العمل عالمياً
  const message = "عايز ابدأ استخدم AutoConfirm !";
  
  // تشفير الرسالة لضمان ظهور المسافات والرموز بشكل صحيح
  const encodedMessage = encodeURIComponent(message);
  
  // فتح الواتساب في نافذة جديدة للحفاظ على بقاء العميل في موقعك
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};

// --- MAIN APP COMPONENT ---
const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      
      {/* --- Navigation --- */}
      {/* <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">{CONTENT.nav.logo}</span>
          </div>
          <button className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            {CONTENT.nav.cta}
          </button>
        </div>
      </nav> */}

      <div className="pt-12 flex items-center justify-center mb-6 w-full">
          <img src="assets/logo.png" alt="AutoConfirm Logo" className='w-[200px]' />
      </div>

      {/* --- Hero Section --- */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              {CONTENT.hero.badge}
            </div> */}
            <h1 className="text-3xl md:text-6xl font-bold mb-6">
              {CONTENT.hero.headline}
            </h1>
            <p className="text-base md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              {CONTENT.hero.subHeadline}
            </p>
          </FadeIn>

          {/* VSL Container - استبدل الجزء القديم بده */}
          <FadeIn delay={0.2}>
            <div className="relative w-full max-w-4xl mx-auto aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(59,130,246,0.25)] border border-slate-200">
              
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${CONTENT.hero.videoId}?autoplay=0&rel=0&modestbranding=1&controls=1`} 
                title="AutoConfirm VSL"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>

            </div>
            <p className="mt-4 text-xs text-slate-400 uppercase tracking-widest font-semibold">
              {CONTENT.hero.vslNote}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* --- Pain Points --- */}
      <section className="md:py-20 py-8 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {CONTENT.painPoints.map((point, index) => {
              const Icon = point.icon;
              // Dynamic color classes based on config
              const bgClass = point.color === 'red' ? 'bg-red-50 text-red-600' : 
                              point.color === 'amber' ? 'bg-amber-50 text-amber-600' : 
                              'bg-blue-50 text-blue-600';
              
              return (
                <FadeIn key={index} delay={0.1 * (index + 1)}>
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${bgClass}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{point.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- Proof & Results --- */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {CONTENT.proof.headline}
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  {CONTENT.proof.desc}
                </p>
                <ul className="space-y-4">
                  {CONTENT.proof.list.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <FadeIn delay={0.2}>
                <div className="relative rounded-2xl bg-slate-100 p-2 ring-1 ring-slate-200">
                  <img 
                    src={CONTENT.proof.image} 
                    alt="AutoConfirm Dashboard" 
                    className="rounded-xl shadow-xl w-full"
                  />
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 hidden md:block">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-semibold uppercase">{CONTENT.proof.stat.label}</p>
                        <p className="text-xl font-bold text-slate-900">{CONTENT.proof.stat.value}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* --- Logic / Workflow --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{CONTENT.workflow.headline}</h2>
            <p className="text-slate-500">{CONTENT.workflow.sub}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200"></div>

            {CONTENT.workflow.steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <FadeIn key={i} delay={0.1 * (i + 1)}>
                  <div className="relative flex flex-col items-center text-center">
                    {/* Icon or Number Container */}
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg z-10 mb-6 ${step.icon ? 'bg-blue-600 border border-blue-500 shadow-blue-200' : 'bg-white border border-slate-200'}`}>
                      {Icon ? (
                        <Icon className="w-8 h-8 text-white" />
                      ) : (
                        <span className="text-3xl font-bold text-slate-300">{step.step}</span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-500 max-w-xs">{step.desc}</p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">يتم الاعتماد عليه من انجح المتاجر</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {CONTENT.testimonials.map((t, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-slate-200 rounded-full flex-shrink-0">
                                    <img 
                                        src={t.profile} 
                                        alt={`${t.name} profile`} 
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <div>
                                    <p className="font-bold text-sm">{t.name}</p>
                                    <p className="text-xs text-slate-500">{t.role}</p>
                                </div>
                            </div>
                            <img 
                                src={t.image} 
                                className="w-full rounded-lg mb-4 border border-slate-100"
                                alt="Result"
                            />
                            <p className="text-sm text-slate-600 italic mt-auto">{t.quote}</p>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
<section className="py-32 px-6 bg-slate-900 text-white text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            {CONTENT.cta.headline}
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            {CONTENT.cta.sub}
          </p>
          
          <div className="flex flex-col items-center justify-center gap-6">
            
            {/* Button Group */}
            <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
              
              {/* Primary Button (Apply) */}
              {/* <button className="group bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold py-4 px-10 rounded-full transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-10px_rgba(37,99,235,0.6)] flex items-center gap-2 min-w-[260px] justify-center">
                {CONTENT.cta.button}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button> */}

              {/* Secondary Button (WhatsApp) */}
              <button onClick={() => handleWhatsAppClick()} className="group bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold py-4 px-10 rounded-full transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-10px_rgba(37,99,235,0.6)] flex items-center gap-2 min-w-[260px] justify-center">
                <WhatsAppIcon className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
                تحدث مع المؤسس لتبدأ
              </button>
            </div>

            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              {CONTENT.cta.disclaimer}
            </p>
          </div>
        </FadeIn>
      </section>

      {/* --- Footer --- */}
      <footer className="py-8 bg-white border-t border-slate-100 text-center">
        <p className="text-slate-500 text-sm">
          {CONTENT.footer.copyright}
        </p>
      </footer>

    </div>
  );
};

export default App;