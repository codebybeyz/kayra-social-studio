import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { ArrowDownRight, ArrowUpRight, Check, ChevronDown, Compass, Dribbble, Eye, Figma, Instagram, Linkedin, Mail, Menu, MousePointer2, PenTool, Send, Sparkles, X, Youtube } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  { number: '01', title: 'SOCIAL MEDIA', description: 'Sosyal medya yönetimi, içerik planlama, içerik üretimi ve marka iletişimi.', icon: Compass, image: '/assets/service-social-media.jpg' },
  { number: '02', title: 'CONTENT CREATION', description: 'Markalar için yaratıcı video, görsel ve dijital içerikler.', icon: Sparkles, image: '/assets/service-content-creation.jpg' },
  { number: '03', title: 'WEB DESIGN', description: 'Modern, hızlı, responsive ve kullanıcı deneyimi odaklı web siteleri.', icon: MousePointer2, image: '/assets/service-web-design.jpg' },
  { number: '04', title: 'DIGITAL DESIGN', description: 'Markaların dijital dünyadaki görünümünü güçlendiren yaratıcı tasarımlar.', icon: PenTool, image: '/assets/service-digital-design.jpg' },
  { number: '05', title: 'DIGITAL PROJECTS', description: "Markaya özel dijital fikirler, landing page'ler ve özel dijital çözümler.", icon: Figma, image: '/assets/service-digital-projects.jpg' },
];

const projects = [
  { id: 'youtube-portfolio', title: 'YouTube Projects', category: 'Content', index: '01', tone: 'youtube', tag: 'Video / Creative Projects', platform: 'YouTube', href: 'https://www.youtube.com/channel/UCHIrWLsUakvz_qAnUwMWHwQ', cta: 'Kanalı Gör' },
  { id: 'instagram-portfolio', title: 'Instagram Projects', category: 'Social Media', index: '02', tone: 'instagram', tag: 'Social / Digital Work', platform: 'Instagram', href: 'https://www.instagram.com/kayrasocialstudio', cta: 'Profili Gör' },
  { id: 'web-01', title: 'Web Project 01', category: 'Web Design', index: '03', tone: 'sky', tag: 'Interface / Experience' },
  { id: 'social-01', title: 'Social Media Project 01', category: 'Social Media', index: '04', tone: 'lilac', tag: 'Strategy / Content' },
  { id: 'content-01', title: 'Content Project 01', category: 'Content', index: '05', tone: 'peach', tag: 'Art Direction / Motion' },
  { id: 'branding-01', title: 'Branding Project 01', category: 'Branding', index: '06', tone: 'ink', tag: 'Identity / Digital' },
  { id: 'digital-01', title: 'Digital Project 01', category: 'Digital Projects', index: '07', tone: 'violet', tag: 'Concept / Product' },
];

const values = [
  { title: 'Creative Thinking', description: 'Her projeye merakla yaklaşır, fikrin en doğru biçimini birlikte ararım.', icon: Sparkles },
  { title: 'Modern Design', description: 'Güncel, sade ve karakter sahibi görsel dünyalar tasarlarım.', icon: PenTool },
  { title: 'User Experience', description: 'Güzel görünenin yanında anlaşılır ve kolay kullanılan deneyimler kurarım.', icon: MousePointer2 },
  { title: 'Detail Oriented', description: 'Bütünü güçlendiren küçük kararları ve ince detayları önemserim.', icon: Eye },
];

const process = [
  { number: '01', title: 'Discover', text: 'İhtiyacı ve hedefi anlıyorum.' },
  { number: '02', title: 'Create', text: 'Fikri görsel ve dijital bir deneyime dönüştürüyorum.' },
  { number: '03', title: 'Refine', text: 'Detayları geliştiriyor, tasarımı kusursuzlaştırıyorum.' },
  { number: '04', title: 'Launch', text: 'Projeyi kullanıma hazır hale getiriyorum.' },
];

type FormState = { name: string; email: string; project: string; message: string };
type FormErrors = Partial<Record<keyof FormState, string>>;

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <div className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

function ProjectArt({ tone, platform }: { tone: string; platform?: string }) {
  const PlatformIcon = platform === 'YouTube' ? Youtube : platform === 'Instagram' ? Instagram : null;
  return (
    <div className={`project-art relative h-full min-h-[230px] overflow-hidden ${tone === 'youtube' ? 'bg-[#d8efff]' : tone === 'instagram' ? 'bg-[#e5ddff]' : tone === 'sky' ? 'bg-[#c7edff]' : tone === 'lilac' ? 'bg-[#d8d1ff]' : tone === 'peach' ? 'bg-[#f3dfdf]' : tone === 'ink' ? 'bg-[#343452]' : 'bg-[#c3bbef]'}`}>
      <div className="absolute left-[14%] top-[16%] h-[67%] w-[72%] rotate-[-6deg] rounded-[28px] border border-white/60 bg-white/55 shadow-[12px_22px_35px_rgba(45,47,83,.12)] backdrop-blur-sm">
        <div className="absolute left-[9%] right-[9%] top-[13%] h-2 rounded-full bg-[#6c6a9b]/35" />
        <div className="absolute left-[9%] top-[28%] h-16 w-[54%] rounded-xl bg-white/75" />
        <div className="absolute bottom-[15%] right-[9%] h-11 w-[29%] rounded-xl bg-[#aaa2e3]/65" />
        <div className="absolute bottom-[15%] left-[9%] h-11 w-[19%] rounded-xl bg-[#a9dbef]/75" />
      </div>
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border-[18px] border-white/25" />
      {PlatformIcon && <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-[#343452] shadow-sm backdrop-blur-sm"><PlatformIcon size={14} strokeWidth={1.8} /><span className="font-mono text-[9px] uppercase tracking-[.14em]">{platform}</span></div>}
      <div className="absolute bottom-6 left-6 font-mono text-[9px] uppercase tracking-[.22em] text-[#343452]/55">KSS / 2024</div>
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState<FormState>({ name: '', email: '', project: '', message: '' });

  useEffect(() => {
    document.title = 'Kayra Social Studio — Creative digital studio';
    const description = 'Kayra Social Studio; sosyal medya, içerik üretimi, web tasarımı ve dijital projeler alanında yaratıcı çözümler üreten bağımsız bir dijital stüdyodur.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', description);
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title'); ogTitle.setAttribute('content', 'Kayra Social Studio — Creative digital studio'); document.head.appendChild(ogTitle);
    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description'); ogDescription.setAttribute('content', description); document.head.appendChild(ogDescription);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Lütfen adınızı yazın.';
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Geçerli bir e-mail adresi yazın.';
    if (!form.project.trim()) nextErrors.project = 'Proje veya hizmet alanını belirtin.';
    if (!form.message.trim() || form.message.trim().length < 12) nextErrors.message = 'Mesajınız en az 12 karakter olmalı.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSent(true);
      setForm({ name: '', email: '', project: '', message: '' });
    }
  };

  const filteredProjects = activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <main className="studio-shell min-h-[100dvh] bg-[#f3faff] text-[#252946]">
      <header className="relative z-30">
        <div className="section-wrap flex items-center justify-between py-7">
          <a href="#home" aria-label="Kayra Social Studio ana sayfa" className="relative z-40" data-testid="link-brand">
            <img src="/assets/kayra-logo.png" alt="KAYRA SOCIAL STUDIO" className="logo-img" />
          </a>
          <nav className="hidden items-center gap-9 md:flex" aria-label="Ana navigasyon">
            {navItems.map((item) => <a key={item.href} href={item.href} className="nav-link text-[11px] font-semibold uppercase tracking-[.15em]" data-testid={`link-nav-${item.label.toLowerCase()}`}>{item.label}</a>)}
            <a href="#contact" className="solid-button ml-3 inline-flex items-center gap-2 rounded-full bg-[#252946] px-5 py-3 text-[10px] font-bold uppercase tracking-[.14em] text-[#f5f6fc]" data-testid="link-nav-start">Start a project <ArrowUpRight size={13} strokeWidth={1.8} /></a>
          </nav>
          <button type="button" className="relative z-40 rounded-full border border-[#d9d9e8] p-3 text-[#252946] md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-nav" data-testid="button-toggle-menu">
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
            <span className="sr-only">Menüyü aç</span>
          </button>
        </div>
        {menuOpen && <nav id="mobile-nav" className="mobile-menu absolute left-0 right-0 top-full border-y border-[#d6e8f2] bg-[#f0f9ff]/95 px-[18px] py-7 shadow-lg backdrop-blur-md md:hidden" aria-label="Mobil navigasyon">
          <div className="mx-auto flex max-w-[560px] flex-col gap-5">
            {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="text-sm font-semibold uppercase tracking-[.15em] text-[#4e526e]" data-testid={`link-mobile-${item.label.toLowerCase()}`}>{item.label}</a>)}
          </div>
        </nav>}
      </header>

      <section id="home" className="relative flex min-h-[690px] items-center overflow-hidden bg-[#f3faff] pb-24 pt-10 md:min-h-[760px] md:pb-28 md:pt-0">
        <div className="hero-glow hero-glow-a" /><div className="hero-glow hero-glow-b" />
        <div className="section-wrap relative grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <Reveal className="max-w-[690px]">
            <p className="eyebrow mb-7">Independent creative / digital studio</p>
            <h1 className="hero-title max-w-[720px] font-serif text-[clamp(3.7rem,8vw,7.4rem)] font-medium leading-[.94] tracking-[-.055em] text-[#252946]">
              Fikirleri <em className="text-[#7774a6]">dijital</em><br /> deneyimlere<br /><span className="relative inline-block">dönüştürüyorum<span className="absolute -right-8 top-[-.15em] h-3 w-3 rounded-full bg-[#b8e5f5] md:-right-11 md:h-4 md:w-4" /></span>.
            </h1>
            <p className="mt-9 max-w-[520px] text-[15px] leading-7 text-[#676b85] md:text-[17px] md:leading-8">Kayra Social Studio; sosyal medya, içerik üretimi, web tasarımı ve dijital projeler alanında yaratıcı çözümler üreten bağımsız bir dijital stüdyodur.</p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#work" className="solid-button inline-flex items-center gap-3 rounded-full bg-[#252946] px-6 py-4 text-[11px] font-bold uppercase tracking-[.13em] text-[#f7f8fc]" data-testid="link-hero-work">Çalışmalarımı Gör <ArrowDownRight size={15} /></a>
              <a href="#contact" className="outline-button inline-flex items-center gap-3 rounded-full border border-[#bbb9d5] bg-transparent px-6 py-4 text-[11px] font-bold uppercase tracking-[.13em] text-[#3c405e]" data-testid="link-hero-contact">Benimle İletişime Geç <ArrowUpRight size={15} /></a>
            </div>
          </Reveal>
          <Reveal className="relative mx-auto w-full max-w-[480px]" delay={130}>
            <div className="hero-orbit relative aspect-square">
              <div className="absolute inset-[9%] rounded-full border border-[#c5c0e6]/80" />
              <div className="absolute inset-[19%] rounded-full border border-dashed border-[#c5c0e6]/80" />
              <div className="absolute left-[5%] top-[20%] rounded-full bg-[#f3e3ef] px-4 py-2 font-mono text-[9px] uppercase tracking-[.17em] text-[#7774a6] shadow-sm">thought → form</div>
              <div className="absolute bottom-[13%] right-[1%] rounded-full bg-[#d7f1fb] px-4 py-2 font-mono text-[9px] uppercase tracking-[.17em] text-[#59627d] shadow-sm">soft / sharp</div>
              <div className="absolute left-1/2 top-1/2 flex w-[61%] -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] items-center justify-center rounded-[30px] bg-white/70 p-7 shadow-[0_24px_60px_rgba(72,71,117,.14)] backdrop-blur-sm">
                <img src="/assets/kayra-logo-poster.png" alt="KAYRA SOCIAL STUDIO sosyal medya tasarımı" className="w-full rounded-[20px]" />
              </div>
              <div className="absolute right-[15%] top-[9%] h-4 w-4 rounded-full border-[3px] border-[#9e98d8] bg-[#f7f8fc]" />
              <div className="absolute bottom-[22%] left-[13%] h-3 w-3 rounded-full bg-[#a9dff2]" />
            </div>
          </Reveal>
        </div>
        <a href="#about" className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[#8a8da7]" data-testid="link-scroll-about">
          <span className="font-mono text-[9px] uppercase tracking-[.22em]">Scroll to explore</span><ChevronDown size={16} strokeWidth={1.4} />
        </a>
      </section>

      <section id="about" className="relative overflow-hidden bg-[#eaf7ff] py-28 md:py-40">
        <div className="section-wrap grid gap-12 md:grid-cols-[.8fr_1.2fr] md:gap-24">
          <Reveal><p className="eyebrow">01 / About</p><div className="mt-12 hidden h-px w-28 bg-[#abb8d9] md:block" /></Reveal>
          <Reveal delay={100}>
            <h2 className="max-w-[700px] font-serif text-[clamp(2.7rem,6vw,5.6rem)] leading-[.98] tracking-[-.05em] text-[#252946]">Merhaba, <em className="text-[#7774a6]">ben Kayra.</em></h2>
            <p className="mt-9 max-w-[670px] text-[16px] leading-8 text-[#5b627e] md:text-[18px] md:leading-9">Kayra Social Studio'nun arkasında; dijital dünyada üretmeyi, tasarlamayı ve yeni fikirleri gerçeğe dönüştürmeyi seven yaratıcı bir üretici var. Sosyal medya içeriklerinden web tasarımına, görsel kimliklerden dijital projelere kadar farklı alanlarda çalışıyor; her projeye sadece estetik değil, işlev ve kullanıcı deneyimi açısından da yaklaşıyorum.</p>
            <div className="mt-12 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[.18em] text-[#7774a6]"><span className="h-px w-10 bg-[#aaa9cf]" /> Curious by default</div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="bg-[#eff9ff] py-28 md:py-40">
        <div className="section-wrap">
          <Reveal className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="eyebrow">02 / Capabilities</p><h2 className="mt-5 font-serif text-[clamp(3rem,6vw,5.8rem)] leading-none tracking-[-.055em]">Ne <em className="text-[#7774a6]">Yapıyorum?</em></h2></div>
            <p className="max-w-[290px] text-sm leading-6 text-[#777a92]">Fikrin ihtiyacına göre şekillenen, tek bir noktadan ilerleyen yaratıcı dijital üretim.</p>
          </Reveal>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {services.map((service, index) => {
              const Icon = service.icon;
              return <Reveal key={service.title} delay={index * 60} className="h-full"><article className="service-card group flex h-full min-h-[390px] flex-col overflow-hidden rounded-[22px] border border-[#dedfeb] bg-white/65" data-testid={`card-service-${index + 1}`}>
                <div className="service-image-wrap relative h-[155px] shrink-0 overflow-hidden">
                  <img src={service.image} alt={`${service.title.toLowerCase()} hizmeti için yaratıcı çalışma fotoğrafı`} className="service-image h-full w-full object-cover" />
                  <div className="service-image-shade absolute inset-0" />
                  <div className="absolute inset-x-5 top-5 flex items-start justify-between"><span className="font-mono text-[10px] text-white/80">{service.number}</span><span className="service-arrow flex h-10 w-10 items-center justify-center rounded-full bg-white/75 text-[#7774a6]"><Icon size={17} strokeWidth={1.5} /></span></div>
                </div>
                <div className="flex flex-1 flex-col justify-end p-6 md:p-7"><h3 className="text-[13px] font-extrabold tracking-[.11em] text-[#343754]">{service.title}</h3><p className="mt-4 text-[13px] leading-6 text-[#767a92]">{service.description}</p></div>
              </article></Reveal>;
            })}
          </div>
        </div>
      </section>

      <section id="work" className="bg-[#252946] py-28 text-[#f7f8fc] md:py-40">
        <div className="section-wrap">
          <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div><p className="eyebrow text-[#b3b0e4]">03 / Selected work</p><h2 className="mt-5 font-serif text-[clamp(3rem,6vw,5.8rem)] leading-none tracking-[-.055em]">Selected <em className="text-[#c9c2ff]">Work</em></h2></div>
            <p className="max-w-[330px] text-sm leading-6 text-[#c0c2d3]">Ürettiğim video, sosyal medya ve dijital çalışmalara YouTube ve Instagram üzerinden ulaşabilirsin.</p>
          </Reveal>
          <div className="mt-14 flex flex-wrap gap-2 border-b border-[#454963] pb-5">
            {['All', 'Web Design', 'Social Media', 'Content', 'Branding', 'Digital Projects'].map((category) => <button type="button" key={category} onClick={() => setActiveCategory(category)} className={`rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[.13em] transition-colors ${activeCategory === category ? 'bg-[#c9c2ff] text-[#252946]' : 'text-[#b7b9cb] hover:bg-[#343752] hover:text-white'}`} data-testid={`button-filter-${category.toLowerCase().replaceAll(' ', '-')}`}>{category}</button>)}
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {filteredProjects.map((project, index) => {
              const cardClassName = `project-card rounded-[22px] bg-[#353854] ${index === 0 && filteredProjects.length > 1 ? 'grid md:grid-cols-[1.2fr_.8fr]' : ''}`;
              const cardContent = <>
                <div className={index === 0 && filteredProjects.length > 1 ? 'min-h-[310px]' : 'min-h-[245px]'}><ProjectArt tone={project.tone} platform={project.platform} /></div>
                <div className="flex flex-col justify-between p-6 md:p-7"><div className="flex items-center justify-between"><span className="font-mono text-[10px] text-[#a8abc0]">{project.index} / {project.category}</span><span className="project-overlay flex h-9 w-9 items-center justify-center rounded-full bg-[#c9c2ff] text-[#252946]"><ArrowUpRight size={15} /></span></div><div className="mt-16"><h3 className="font-serif text-2xl tracking-[-.03em] text-[#f7f8fc]">{project.title}</h3><p className="mt-2 font-mono text-[9px] uppercase tracking-[.16em] text-[#a8abc0]">{project.tag}</p>{project.href && <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.14em] text-[#c9c2ff]">{project.cta} <ArrowUpRight size={13} /></span>}</div></div>
              </>;
              return <Reveal key={project.id} delay={index * 70} className={index === 0 && filteredProjects.length > 1 ? 'md:col-span-2' : ''}>{project.href ? <a href={project.href} target="_blank" rel="noreferrer" className={cardClassName} data-testid={`card-project-${project.id}`}>{cardContent}</a> : <article className={cardClassName} data-testid={`card-project-${project.id}`}>{cardContent}</article>}</Reveal>;
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f2ff] py-28 md:py-40">
        <div className="section-wrap grid gap-14 md:grid-cols-[.85fr_1.15fr] md:gap-24">
          <Reveal><p className="eyebrow">04 / Point of view</p><h2 className="mt-7 max-w-[490px] font-serif text-[clamp(2.8rem,5vw,5.2rem)] leading-[1.02] tracking-[-.05em]">Sadece güzel görünmesini değil, <em className="text-[#7774a6]">işe yaramasını</em> da önemsiyorum.</h2></Reveal>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {values.map((value, index) => { const Icon = value.icon; return <Reveal key={value.title} delay={index * 70}><article className="border-t border-[#d5d1eb] pt-5"><div className="flex items-center justify-between"><span className="font-mono text-[10px] text-[#9995b7]">0{index + 1}</span><Icon size={18} strokeWidth={1.5} className="text-[#7774a6]" /></div><h3 className="mt-9 text-sm font-extrabold tracking-[.08em] text-[#343754]">{value.title}</h3><p className="mt-3 text-[13px] leading-6 text-[#76748f]">{value.description}</p></article></Reveal>; })}
          </div>
        </div>
      </section>

      <section className="bg-[#f3faff] py-28 md:py-40">
        <div className="section-wrap">
          <Reveal className="flex items-end justify-between gap-6"><div><p className="eyebrow">05 / The process</p><h2 className="mt-5 font-serif text-[clamp(3rem,6vw,5.8rem)] leading-none tracking-[-.055em]">Nasıl <em className="text-[#7774a6]">Çalışıyorum?</em></h2></div><span className="hidden font-mono text-[10px] uppercase tracking-[.2em] text-[#a2a3b8] md:block">A clear way forward</span></Reveal>
          <div className="mt-16 grid border-t border-[#dfe0e9] md:grid-cols-4">
            {process.map((step, index) => <Reveal key={step.number} delay={index * 75}><article className="relative border-b border-[#dfe0e9] py-8 md:border-b-0 md:border-r md:px-6 md:py-7 md:first:pl-0 md:last:border-r-0"><span className="font-serif text-[76px] leading-none tracking-[-.08em] text-[#d9d8ee]">{step.number}</span><h3 className="mt-8 font-mono text-[11px] font-medium uppercase tracking-[.16em] text-[#414461]">{step.title}</h3><p className="mt-4 max-w-[190px] text-[13px] leading-6 text-[#777a92]">{step.text}</p></article></Reveal>)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#d8f1fb] py-28 md:py-36">
        <div className="absolute -right-24 -top-40 h-[480px] w-[480px] rounded-full border-[80px] border-white/25" />
        <Reveal className="section-wrap relative flex flex-col items-start justify-between gap-9 md:flex-row md:items-end">
          <div><p className="eyebrow text-[#686a99]">06 / Open invitation</p><h2 className="mt-5 font-serif text-[clamp(3.4rem,8vw,7.3rem)] leading-[.9] tracking-[-.06em] text-[#252946]">Bir fikrin <em className="text-[#7774a6]">mi var?</em></h2><p className="mt-7 text-[16px] text-[#5c6683]">Birlikte onu dijital bir projeye dönüştürelim.</p></div>
          <a href="#contact" className="solid-button inline-flex shrink-0 items-center gap-3 rounded-full bg-[#252946] px-7 py-4 text-[11px] font-bold uppercase tracking-[.14em] text-[#f5f6fc]" data-testid="link-cta-contact">İletişime Geç <ArrowUpRight size={15} /></a>
        </Reveal>
      </section>

      <section id="contact" className="bg-[#f3faff] py-28 md:py-40">
        <div className="section-wrap grid gap-16 md:grid-cols-[.8fr_1.2fr] md:gap-24">
          <Reveal><p className="eyebrow">07 / Contact</p><h2 className="mt-7 font-serif text-[clamp(3rem,6vw,5.8rem)] leading-[.94] tracking-[-.055em]">Let's work<br /><em className="text-[#7774a6]">together.</em></h2><p className="mt-8 max-w-[310px] text-sm leading-7 text-[#777a92]">Aklınızdaki projeyi, ihtiyacı veya sadece fikri anlatın. Size geri dönüş yapmak için formu doldurabilirsiniz.</p><div className="mt-12 flex items-center gap-4 text-[#7774a6]"><a href="mailto:hello@kayrasocialstudio.com" className="transition-colors hover:text-[#252946]" aria-label="E-mail gönder" data-testid="link-email"><Mail size={18} strokeWidth={1.5} /></a><a href="#" onClick={(event) => event.preventDefault()} aria-label="Instagram bağlantısı yakında" className="transition-colors hover:text-[#252946]" data-testid="link-instagram"><Instagram size={18} strokeWidth={1.5} /></a><a href="#" onClick={(event) => event.preventDefault()} aria-label="LinkedIn bağlantısı yakında" className="transition-colors hover:text-[#252946]" data-testid="link-linkedin"><Linkedin size={18} strokeWidth={1.5} /></a><a href="#" onClick={(event) => event.preventDefault()} aria-label="Dribbble bağlantısı yakında" className="transition-colors hover:text-[#252946]" data-testid="link-dribbble"><Dribbble size={18} strokeWidth={1.5} /></a></div></Reveal>
          <Reveal delay={100}><div className="rounded-[25px] border border-[#dedfeb] bg-white/65 p-6 md:p-10">
            {sent ? <div className="flex min-h-[430px] flex-col items-center justify-center text-center"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d8f1fb] text-[#4b6282]"><Check size={22} /></span><h3 className="mt-7 font-serif text-3xl tracking-[-.03em]">Mesajın için teşekkürler.</h3><p className="mt-3 max-w-[320px] text-sm leading-6 text-[#777a92]">Mesajın alındı. En kısa zamanda geri dönüş yapmak için seninle iletişime geçeceğim.</p><button type="button" onClick={() => setSent(false)} className="mt-8 rounded-full border border-[#bbb9d5] px-5 py-3 text-[10px] font-bold uppercase tracking-[.14em] text-[#3c405e] transition-colors hover:bg-[#f4f2ff]" data-testid="button-send-another">Yeni mesaj gönder</button></div> : <form onSubmit={submitForm} noValidate className="space-y-7" aria-label="İletişim formu">
              <div className="grid gap-7 sm:grid-cols-2"><label className="block"><span className="mb-2 block font-mono text-[10px] uppercase tracking-[.16em] text-[#777a92]">Ad Soyad</span><input type="text" value={form.name} onChange={(event) => updateField('name', event.target.value)} className="form-field w-full border-b border-[#d4d5e1] bg-transparent px-0 py-3 text-sm text-[#252946]" data-testid="input-name" aria-invalid={!!errors.name} />{errors.name && <span className="mt-2 block text-xs text-[#b46772]">{errors.name}</span>}</label><label className="block"><span className="mb-2 block font-mono text-[10px] uppercase tracking-[.16em] text-[#777a92]">E-mail</span><input type="email" value={form.email} onChange={(event) => updateField('email', event.target.value)} className="form-field w-full border-b border-[#d4d5e1] bg-transparent px-0 py-3 text-sm text-[#252946]" data-testid="input-email" aria-invalid={!!errors.email} />{errors.email && <span className="mt-2 block text-xs text-[#b46772]">{errors.email}</span>}</label></div>
              <label className="block"><span className="mb-2 block font-mono text-[10px] uppercase tracking-[.16em] text-[#777a92]">Proje / Hizmet</span><input type="text" value={form.project} onChange={(event) => updateField('project', event.target.value)} className="form-field w-full border-b border-[#d4d5e1] bg-transparent px-0 py-3 text-sm text-[#252946]" data-testid="input-project" aria-invalid={!!errors.project} />{errors.project && <span className="mt-2 block text-xs text-[#b46772]">{errors.project}</span>}</label>
              <label className="block"><span className="mb-2 block font-mono text-[10px] uppercase tracking-[.16em] text-[#777a92]">Mesaj</span><textarea rows={4} value={form.message} onChange={(event) => updateField('message', event.target.value)} className="form-field w-full resize-none border-b border-[#d4d5e1] bg-transparent px-0 py-3 text-sm leading-6 text-[#252946]" data-testid="input-message" aria-invalid={!!errors.message} />{errors.message && <span className="mt-2 block text-xs text-[#b46772]">{errors.message}</span>}</label>
              <div className="flex flex-col items-start justify-between gap-5 pt-2 sm:flex-row sm:items-center"><p className="max-w-[260px] text-[11px] leading-5 text-[#9294a8]">Backend/email entegrasyonu için bu form submit akışına servis bağlantısı eklenebilir.</p><button type="submit" className="solid-button inline-flex items-center gap-3 rounded-full bg-[#252946] px-6 py-4 text-[10px] font-bold uppercase tracking-[.14em] text-[#f7f8fc]" data-testid="button-submit-message">Mesaj Gönder <Send size={14} /></button></div>
            </form>}
          </div></Reveal>
        </div>
      </section>

      <footer className="bg-[#252946] py-12 text-[#f7f8fc] md:py-14">
        <div className="section-wrap">
          <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start">
            <div><a href="#home" data-testid="link-footer-brand"><img src="/assets/kayra-logo.png" alt="KAYRA SOCIAL STUDIO" className="logo-img rounded-[3px]" /></a><p className="mt-5 font-serif text-lg italic text-[#c9c2ff]">Creative digital studio.</p></div>
            <nav className="grid grid-cols-2 gap-x-12 gap-y-4 md:grid-cols-1 md:gap-3" aria-label="Footer navigasyon">{['Home', 'About', 'Services', 'Work', 'Contact'].map((label) => <a key={label} href={label === 'Home' ? '#home' : `#${label.toLowerCase()}`} className="text-[10px] font-semibold uppercase tracking-[.16em] text-[#babdd0] transition-colors hover:text-white" data-testid={`link-footer-${label.toLowerCase()}`}>{label}</a>)}</nav>
            <div className="flex gap-4 text-[#babdd0]"><a href="mailto:hello@kayrasocialstudio.com" aria-label="E-mail" data-testid="link-footer-email"><Mail size={17} strokeWidth={1.5} /></a><a href="#" onClick={(event) => event.preventDefault()} aria-label="Instagram" data-testid="link-footer-instagram"><Instagram size={17} strokeWidth={1.5} /></a><a href="#" onClick={(event) => event.preventDefault()} aria-label="LinkedIn" data-testid="link-footer-linkedin"><Linkedin size={17} strokeWidth={1.5} /></a></div>
          </div>
          <div className="mt-14 flex flex-col justify-between gap-3 border-t border-[#454963] pt-5 font-mono text-[9px] uppercase tracking-[.16em] text-[#85899f] md:flex-row"><span>© KAYRA SOCIAL STUDIO</span><span>Ideas, made tangible.</span></div>
        </div>
      </footer>
    </main>
  );
}

function App() {
  return <Home />;
}

export default App;
