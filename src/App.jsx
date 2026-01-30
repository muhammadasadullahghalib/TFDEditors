import { useEffect, useRef, useState } from 'react'
import illustrationCompanies from './assets/673cc0d695d81fca4e6b0b9e_illustration-forcompanies.svg'
import illustrationCandidates from './assets/673cc0d68a1a1b4719476306_illustration-forcandidates.svg'
import iconFlower from './assets/6707c6af78a3dd5acec5512e_flower_64.webp'
import iconBook from './assets/6707c6b0778d2c6671252c5f_book_64.webp'
import iconLamp from './assets/6707c6b00231933e1ef52506_lamp_64.webp'
import iconBrilliant from './assets/6707c6aff10ed02bb97c61f9_brilliant_64.webp'
import toolKiss from './assets/AnimateDiff_00001_p81_cbqcb_1764157629_thumb_1764157640.0000000.jpg&w=3840&q=75&dpl=dpl_JE4iQ4nKEj2LQDatsMp7xWwoweNv.png'
import toolTwerk from './assets/sf_00001_p81_orfpg_1764076635_thumb_1764076643.0000000.jpg&w=3840&q=75&dpl=dpl_JE4iQ4nKEj2LQDatsMp7xWwoweNv.png'
import toolBikini from './assets/Video_00001_p85-audio_qxcfp_1766248470_thumb_1766248475.0000000.jpg&w=3840&q=75&dpl=dpl_JE4iQ4nKEj2LQDatsMp7xWwoweNv.png'
import toolAsmr from './assets/reelmuse_asmr_demo_1.jpg&w=3840&q=60&dpl=dpl_JE4iQ4nKEj2LQDatsMp7xWwoweNv.png'
import stepPre from './assets/N8x1ZrwF0Di7UBqgA38IfsP051k.gif_width=568&height=320.png'
import stepProd from './assets/R1T8c8A2iyy6NizOW2P3Qjhjl1s.gif_width=240&height=426.png'
import stepPost from './assets/rXJOYgIG9mrgr70bOpMMgVIyCNA.gif_width=240&height=426.png'
import cardLeft from './assets/desert.webp'
import cardRight from './assets/prompt_center-3.webp'
import promptLeft from './assets/prompt_left-3.webp'
import logoNike from './assets/nike=Default.webp'
import logoTesla from './assets/tesla=Default.webp'
import logoChanel from './assets/chanel=Default.webp'
import logoLego from './assets/lego=Default.webp'
import logoMcd from './assets/mcdonalds=Default.webp'
import logoNetflix from './assets/netflix=Default.webp'
import editorBoard from './assets/677d2fe5745a3816a389f3a8_813_1x_shots_so.webp'
import editorGrid from './assets/677d428e46ad7d8c4a1492b9_14shots_so.webp'
import editorTimeline from './assets/67866338d2e135c0b34dcbbe_original-65541c18acb90f7fca90d18da6a3710c.webp'
import editorCut from './assets/65ee951c66cb99503d3719da_Home hero IMG 2024.avif.png'
import iconFigma from './assets/684bc1e3c755e6a53ee8f375_Figma.svg'
import iconWebflow from './assets/6787cb415f899cb85835084f_Webflow Icon.svg'
import iconGsap from './assets/684bc1e365e8be702d3b3808_GSAP.svg'
import iconBrowserstack from './assets/684bc1e3ad7ff443e6aacaf7_Browser Stack.svg'
import iconScreamingFrog from './assets/684bc1e31c71ae1512743e81_Screaming Frog.svg'
import logoMark from './assets/3c42e20c-0974-496c-adec-ac194c96478c.png'
const navLinks = ['Work', 'Services', 'Process', 'About', 'FAQ', 'Contact']

const heroVideo =
  'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4'
const heroPoster =
  'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80'

const clientLogos = [
  'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png',
  'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
]

const featuredReels = [
  {
    title: 'Product launch cut',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    link: '#',
  },
  {
    title: 'Founder story film',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    link: '#',
  },
  {
    title: 'Event recap',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
    link: '#',
  },
]

const services = [
  {
    title: 'Full?Service Editing',
    description:
      'From raw footage to polished story: cut, color, sound, and delivery.',
  },
  {
    title: 'Short?Form Packages',
    description:
      'Monthly reels/shorts bundles designed for growth and consistency.',
  },
  {
    title: 'Ads & Performance',
    description:
      'Scroll?stopping paid ads with hooks, CTAs, and rapid iterations.',
  },
  {
    title: 'YouTube Retention',
    description:
      'Structure, pacing, and pattern interrupts to keep viewers watching.',
  },
]

const stats = [
  { label: 'Projects delivered', value: '420+' },
  { label: 'Avg. watch time', value: '+28%' },
  { label: 'Turnaround time', value: '3?7 days' },
  { label: 'Creator retention', value: '94%' },
]

const processSteps = [
  {
    title: 'Pre?Production',
    description:
      'We align on goals, references, structure, and a clear edit plan before cutting.',
    image: stepPre,
  },
  {
    title: 'Editing',
    description:
      'Tight pacing, b?roll, sound design, motion graphics, and clean color.',
    image: stepProd,
  },
  {
    title: 'Delivery',
    description:
      'Final exports for every platform plus cut?downs and versioning.',
    image: stepPost,
  },
]

const featureCards = [
  {
    title: 'Editing made effortless',
    description:
      'We turn raw footage into premium edits with pacing, polish, and clarity.',
    image: cardLeft,
    overlay: promptLeft,
    orbit: true,
  },
  {
    title: 'Platform?ready, always',
    description:
      'Every cut is delivered in the right formats with captions, hooks, and CTAs.',
    image: cardRight,
    overlay: null,
    orbit: false,
  },
]

const orbitLogos = [
  { src: logoNike, top: '22%', left: '62%' },
  { src: logoTesla, top: '52%', left: '44%' },
  { src: logoChanel, top: '56%', left: '62%' },
  { src: logoLego, top: '68%', left: '36%' },
  { src: logoMcd, top: '78%', left: '55%' },
  { src: logoNetflix, top: '72%', left: '72%' },
]

const editorProcess = [
  { image: editorBoard, tilt: '-6deg' },
  { image: editorGrid, tilt: '-3deg' },
  { image: editorTimeline, tilt: '2deg' },
  { image: editorCut, tilt: '6deg' },
]

const toolStack = [
  {
    name: 'Premiere Pro',
    tag: 'Editing & Sequencing',
    description:
      'Fast, precise timeline editing for shorts, ads, and long?form content.',
    icon: iconFigma,
  },
  {
    name: 'After Effects',
    tag: 'Motion Graphics',
    description:
      'Animated titles, transitions, and kinetic typography for punchy edits.',
    icon: iconWebflow,
  },
  {
    name: 'DaVinci Resolve',
    tag: 'Color Grading',
    description:
      'Cinematic color and matching across scenes and cameras.',
    icon: iconGsap,
  },
  {
    name: 'Audition',
    tag: 'Audio Cleanup',
    description:
      'Dialogue enhancement, noise reduction, and mix polish.',
    icon: iconBrowserstack,
  },
  {
    name: 'Frame.io',
    tag: 'Review & Collaboration',
    description:
      'Fast feedback cycles with time?coded notes and approvals.',
    badge: 'F',
  },
  {
    name: 'Descript',
    tag: 'Captions & Repurposing',
    description:
      'Auto?captions, highlights, and clip extraction for social.',
    icon: iconScreamingFrog,
  },
]

const aiTools = [
  {
    title: 'Cutdown Builder',
    description: 'Turn long?form edits into high?performing shorts fast',
    image: toolKiss,
  },
  {
    title: 'Color Match',
    description: 'Consistent color across multi?camera shoots and b?roll',
    image: toolTwerk,
  },
  {
    title: 'Audio Cleanup',
    description: 'Noise removal, dialogue enhance, and clean mixdowns',
    image: toolBikini,
  },
  {
    title: 'Caption Studio',
    description: 'Readable, branded captions with emphasis and rhythm',
    image: toolAsmr,
    badge: 'New',
  },
]

const serviceCards = [
  {
    number: '01',
    title: 'Reels & Shorts',
    description:
      'Fast?paced edits for TikTok, Reels, and Shorts with hooks, captions, and trends.',
    icon: iconBrilliant,
  },
  {
    number: '02',
    title: 'YouTube Editing',
    description:
      'Story?driven long?form edits, pacing, b?roll, sound design, and retention cuts.',
    icon: iconFlower,
  },
  {
    number: '03',
    title: 'Brand Films',
    description:
      'Cinematic launch and brand videos with clean color, polish, and emotion.',
    icon: iconBook,
  },
  {
    number: '04',
    title: 'Motion Graphics',
    description:
      'Animated titles, callouts, lower?thirds, and dynamic UI overlays.',
    icon: iconLamp,
  },
]

const dualCards = [
  {
    title: 'For brands',
    quote:
      'They capture our voice perfectly. Every edit feels premium and on?brand.',
    name: 'Sarah',
    role: 'Marketing Lead, Atelier',
    cta: 'Build your launch',
    illustration: illustrationCompanies,
  },
  {
    title: 'For creators',
    quote:
      'Edits that keep my audience watching. My retention jumped in the first month.',
    name: 'Ruby Hoose',
    role: 'Content Creator',
    cta: 'Level up your edits',
    illustration: illustrationCandidates,
  },
]

const testimonials = [
  {
    name: 'Nina Edwards',
    role: 'Brand Director, Arc',
    quote:
      'Every edit feels intentional. Our launch film outperformed expectations.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80',
  },
  {
    name: 'Diego Ramirez',
    role: 'YouTube Creator',
    quote:
      'Retention climbed immediately. The pacing and storytelling are on point.',
    image:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=240&q=80',
  },
  {
    name: 'Anika Shah',
    role: 'Marketing, Beacon',
    quote:
      'Reliable, fast, and creative?our ads feel premium and convert better.',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=240&q=80',
  },
]

const faqs = [
  {
    question: 'What kind of footage can you edit?',
    answer:
      'Camera footage, phone clips, podcasts, screen recordings, and mixed sources.',
  },
  {
    question: 'How fast is turnaround?',
    answer:
      'Most edits deliver in 3?7 days. Rush options are available.',
  },
  {
    question: 'Do you handle captions and thumbnails?',
    answer:
      'Yes. We can deliver captions, thumbnails, and platform?ready exports.',
  },
  {
    question: 'Can you match our brand style?',
    answer:
      'Absolutely?fonts, colors, motion style, and pacing are aligned to your brand.',
  },
]

function IconArrow({ direction = 'right' }) {
  const rotation = direction === 'left' ? 'rotate(180 12 12)' : undefined
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g transform={rotation}>
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

function Slider({ items, renderItem }) {
  const scrollerRef = useRef(null)
  const scrollBy = (direction) => {
    const node = scrollerRef.current
    if (!node) return
    const amount = node.clientWidth * 0.7
    node.scrollBy({ left: amount * direction, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
      >
        {items.map((item, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 80} className="min-w-[260px] snap-start">
            {renderItem(item)}
          </div>
        ))}
      </div>
      <div className="absolute right-0 top-[-64px] flex gap-3">
        <button
          onClick={() => scrollBy(-1)}
          className="rounded-full border border-white/20 bg-white/5 p-2 text-white/70 hover:text-white"
          aria-label="Scroll left"
        >
          <IconArrow direction="left" />
        </button>
        <button
          onClick={() => scrollBy(1)}
          className="rounded-full border border-white/20 bg-white/5 p-2 text-white/70 hover:text-white"
          aria-label="Scroll right"
        >
          <IconArrow />
        </button>
      </div>
    </div>
  )
}

function ToolCarousel({ items }) {
  const scrollerRef = useRef(null)
  const scrollNext = () => {
    const node = scrollerRef.current
    if (!node) return
    const amount = node.clientWidth * 0.8
    node.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="no-scrollbar flex gap-6 overflow-x-auto pb-2"
      >
        {items.map((item, index) => (
          <div
            key={item.title}
            data-aos="fade-up" data-aos-delay={index * 80} className="min-w-[260px] flex-1 rounded-2xl border border-white/10 bg-panel/90 shadow-[0_20px_50px_rgba(0,0,0,0.45)] md:min-w-[320px]"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 text-lg font-semibold">
                {item.title}
              </div>
              <button
                className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white"
                aria-label={`Open ${item.title}`}
              >
                <IconArrow />
              </button>
              {item.badge && (
                <span className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                  {item.badge}
                </span>
              )}
            </div>
            <div className="px-5 pb-5 pt-4 text-sm text-white/70">
              {item.description}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={scrollNext}
        className="absolute -top-14 right-0 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white"
        aria-label="Scroll next"
      >
        <IconArrow />
      </button>
    </div>
  )
}

function App() {
  const [activeFaq, setActiveFaq] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: false,
        offset: 90,
      })
      setTimeout(() => window.AOS.refreshHard(), 200)
    }
  }, [])
  const logoTrack = [...clientLogos, ...clientLogos]

  return (
    <div className="min-h-screen bg-hero">
      <header className="container-lg flex items-center justify-between py-6">
        <div className="flex items-center gap-3 text-lg font-semibold">
          <span className="inline-flex h-10 w-10 items-center justify-center ">
            <img
              src={logoMark}
              alt="Logo"
              className="img-fluid"
            />
          </span>
           Editor Studio
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary text-xs">
          Book a call
        </a>
      </header>

      <main>
        <section className="container-lg pb-16 pt-6">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-panel/60 shadow-glow grain">
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-60"
              src={heroVideo}
              poster={heroPoster}
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
            <div className="relative grid gap-8 p-10 md:grid-cols-[1.2fr_0.8fr] md:p-14">
              <div className="space-y-6">
                <span className="chip">Cinematic edits for brands & creators</span>
                <h1 data-aos="fade-up" className="font-display text-4xl font-semibold leading-tight md:text-5xl">
                  Cinematic edits for brands & creators.
                </h1>
                <p className="max-w-xl text-white/75">
                  We edit ads, reels, YouTube, and launch films with pace, emotion, and polish?built to keep viewers watching.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a className="btn-primary" href="#work">
                    View edits
                  </a>
                  <a className="btn-ghost" href="#services">
                    See packages
                  </a>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="panel p-4">
                  <p className="text-sm text-white/60">Featured</p>
                  <h3 className="mt-2 text-lg font-semibold">
                    Signature edit system
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    Consistent cuts, captions, and motion styles across every format.
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-sm text-white/70">
                    <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
                    <span>Case study in progress</span>
                  </div>
                </div>
                <div className="panel p-4">
                  <p className="text-sm text-white/60">Last launch</p>
                  <h3 className="mt-2 text-lg font-semibold">
                    Launch film edit
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    High?impact cut with sound design and dynamic pacing.
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-sm text-white/70">
                    <span className="inline-flex h-2 w-2 rounded-full bg-neon" />
                    <span>Live now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="container-lg">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {serviceCards.map((card, index) => (
                <div
                  key={card.title}
                  data-aos="fade-up" data-aos-delay={index * 80} className={`group relative overflow-hidden rounded-[36px] border border-white/10 bg-panel/90 p-8 text-white shadow-[0_30px_70px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:-translate-y-3 hover:scale-[1.02] ${
                    index === 1 ? 'lg:translate-y-6' : ''
                  } ${index === 3 ? 'lg:-translate-y-4' : ''}` + ' animate-float'}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,106,47,0.18),transparent_60%)]" />
                  <div className="relative flex h-full flex-col items-center text-center">
                    <span className="text-xs font-semibold tracking-[0.2em] text-white/60">
                      {card.number}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-semibold uppercase tracking-[0.1em]">
                      {card.title}
                    </h3>
                    <div className="mt-6 rounded-2xl bg-white/95 p-4 shadow-[0_12px_25px_rgba(0,0,0,0.25)] transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105">
                      <img src={card.icon} alt="" className="h-12 w-12" />
                    </div>
                    <p className="mt-6 text-sm text-white/70">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section pt-0">
          <div className="container-lg">
            <div className="panel overflow-hidden px-6 py-8">
              <div className="flex items-center justify-between">
                <p data-aos="fade-up" data-aos-delay="150" className="text-sm uppercase tracking-[0.3em] text-white/50">
                  Trusted by creators and brands
                </p>
                <span className="text-xs text-white/60">2019 - 2026</span>
              </div>
              <div className="mt-8 overflow-hidden">
                <div className="flex w-[200%] animate-marquee gap-12">
                  {logoTrack.map((logo, index) => (
                    <div
                      key={`${logo}-${index}`}
                      className="flex h-12 w-40 items-center justify-center rounded-xl bg-white/5 p-3"
                    >
                      <img
                        src={logo}
                        alt="client logo"
                        className="h-full w-full object-contain opacity-70"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-lg">
            <div className="grid gap-8 lg:grid-cols-2">
              {dualCards.map((card) => (
                <div
                  key={card.title}
                  className="relative overflow-hidden rounded-[36px] border border-white/10 bg-panel/90 p-8 text-white shadow-[0_30px_70px_rgba(0,0,0,0.5)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,106,47,0.15),transparent_55%)]" />
                  <div className="relative">
                    <div className="mx-auto w-fit rounded-[28px] bg-white/95 p-6 shadow-[0_15px_30px_rgba(0,0,0,0.25)]">
                      <img
                        src={card.illustration}
                        alt={card.title}
                        className="h-36 w-auto"
                      />
                    </div>
                    <h3 className="mt-6 text-center font-display text-2xl font-semibold uppercase tracking-[0.2em] text-white/90">
                      {card.title}
                    </h3>
                    <p className="mx-auto mt-4 max-w-sm text-center text-sm text-white/70">
                      {card.quote}
                    </p>
                    <div className="mt-6 text-center text-sm font-semibold text-white/90">
                      {card.name}
                    </div>
                    <div className="text-center text-xs text-white/50">
                      {card.role}
                    </div>
                    <div className="mt-8 flex justify-center">
                      <button className="rounded-full bg-accent px-6 py-2 text-xs font-semibold text-black shadow-glow">
                        {card.cta}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section pt-0">
          <div className="container-lg">
            <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
              <div className="panel p-8">
                <p data-aos="fade-up" data-aos-delay="150" className="text-sm uppercase tracking-[0.3em] text-white/60">
                  Featured reels
                </p>
                <h3 className="mt-4 font-display text-3xl font-semibold">
                  Built for velocity and clarity
                </h3>
                <p className="mt-4 text-sm text-white/70">
                  Short-form stories that highlight your product with
                  high-contrast visuals and kinetic motion.
                </p>
                <a className="btn-primary mt-6 w-fit" href="#contact">
                  Start a project
                </a>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {featuredReels.map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-panelLight"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute bottom-4 left-4 text-sm font-semibold">
                      {item.title}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container-lg">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p data-aos="fade-up" data-aos-delay="150" className="text-sm uppercase tracking-[0.3em] text-white/50">
                  Services
                </p>
                <h2 data-aos="fade-up" data-aos-delay="100" className="mt-3 font-display text-3xl font-semibold">
                  Not limited to video, we are your creative comrades.
                </h2>
                <p className="mt-4 text-sm text-white/70">
                  Full-stack production, from concept through delivery, shaped
                  for modern screens.
                </p>
                <div className="mt-6 flex items-center gap-3 text-sm text-white/70">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  Available for 2026 projects
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {services.map((service) => (
                  <div key={service.title} className="panel p-6">
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="mt-3 text-sm text-white/70">
                      {service.description}
                    </p>
                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white"
                    >
                      View details
                      <IconArrow />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section pt-0">
          <div className="container-lg">
            <div className="grid gap-6 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={stat.label} data-aos="zoom-in" data-aos-delay={index * 80} className="panel p-6 text-center shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_25px_60px_rgba(255,106,47,0.25)]">
                  <div className="text-3xl font-semibold">{stat.value}</div>
                  <div className="mt-2 text-sm text-white/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section pt-0">
          <div className="container-lg">
            <div className="flex items-center justify-between">
              <div>
                <p data-aos="fade-up" data-aos-delay="150" className="text-sm uppercase tracking-[0.3em] text-white/50">
                  AI Effect Tools
                </p>
                <h2 data-aos="fade-up" data-aos-delay="100" className="mt-3 font-display text-3xl font-semibold">
                  AI Effect Tools
                </h2>
              </div>
            </div>
            <div className="mt-8">
              <ToolCarousel items={aiTools} />
            </div>
          </div>
        </section>

        <section className="section pt-0">
          <div className="container-lg">
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.2em] text-white/70">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/20">
                  ?
                </span>
                Streamlined Process
              </span>
              <h2 data-aos="fade-up" data-aos-delay="100" className="max-w-3xl font-display text-4xl font-semibold leading-tight">
                A Simple Process For Results That Matter.
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {editorProcess.map((item, index) => (
                <div
                  key={`${item.image}-${index}`}
                  className="flex items-center justify-center  p-4 shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
                >
                  <div
                    className="w-full overflow-hidden rounded-[22px] bg-black/30 shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
                    style={{ transform: `rotate(${item.tilt})` }}
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="h-48 w-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="section pt-0">
          <div className="container-lg grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <p data-aos="fade-up" data-aos-delay="150" className="text-sm uppercase tracking-[0.3em] text-white/50">
                From concept to completion
              </p>
              <h2 data-aos="fade-up" data-aos-delay="100" className="font-display text-3xl font-semibold">
                From Concept To Completion: We&apos;ve Got You Covered!
              </h2>
              <p className="text-sm text-white/70">
                A complete pipeline for motion, from early creative direction to
                final delivery. Clear phases, fast collaboration, and polished
                outcomes.
              </p>
              <a className="btn-primary w-fit" href="#services">
                Explore editing services
              </a>
            </div>
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  data-aos="fade-left" data-aos-delay={index * 80} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-panel/90 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(44,245,215,0.08),transparent_60%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="relative z-10">
                    <div className="text-sm font-semibold text-white/80">
                      {step.title}
                    </div>
                    <p className="mt-3 text-sm text-white/70">
                      {step.description}
                    </p>
                    <button className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 transition hover:text-white">
                      Learn more
                      <IconArrow />
                    </button>
                  </div>
                  <div className="pointer-events-none absolute right-6 top-6 z-20 hidden w-40 translate-x-8 rotate-6 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
                    <img
                      src={step.image}
                      alt=""
                      className="w-40 rounded-2xl border border-white/20 bg-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.45)] grayscale"
                    />
                  </div>
                  <div className="absolute right-6 top-6 text-xs text-white/30">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section pt-0">
          <div className="container-lg">
            <div className="mx-auto max-w-4xl text-center">
              <h2 data-aos="fade-up" data-aos-delay="100" className="font-display text-3xl font-semibold">
                Smart tools that power efficient, high-quality web solutions
              </h2>
              <p className="mt-4 text-sm text-white/70">
                I leverage a curated suite of industry-leading applications to streamline my design, development, testing, and collaboration workflows. Each tool is chosen to ensure precision, performance, and seamless communication?so your project moves quickly from concept to launch with maximum impact.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {toolStack.map((tool, index) => (
                <div
                  key={tool.name}
                  data-aos="fade-up" data-aos-delay={index * 80} className="group relative rounded-[20px] border border-white/10 bg-panel/95 p-6 shadow-[0_22px_55px_rgba(0,0,0,0.55)]"
                >
                  <div className="absolute inset-0 rounded-[20px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]" />
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-semibold">{tool.name}</div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80">
                        {tool.icon ? (
                          <img src={tool.icon} alt="" className="h-5 w-5 object-contain" />
                        ) : (
                          <span className="text-sm font-semibold">{tool.badge}</span>
                        )}
                      </div>
                    </div>
                    <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {tool.tag}
                    </div>
                    <p className="text-sm text-white/70">{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-lg">
            <div className="flex items-center justify-between">
              <h2 data-aos="fade-up" data-aos-delay="100" className="font-display text-3xl font-semibold">
                What clients say
              </h2>
             
            </div>
            <div className="mt-8">
              <Slider
                items={testimonials}
                renderItem={(item) => (
                  <div className="panel h-full p-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-sm font-semibold">
                          {item.name}
                        </div>
                        <div className="text-xs text-white/60">
                          {item.role}
                        </div>
                      </div>
                    </div>
                    <p className="mt-6 text-sm text-white/75">{item.quote}</p>
                  </div>
                )}
              />
            </div>
          </div>
        </section>

        <section id="faq" className="section pt-0">
          <div className="container-lg">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p data-aos="fade-up" data-aos-delay="150" className="text-sm uppercase tracking-[0.3em] text-white/50">
                  FAQ
                </p>
                <h2 data-aos="fade-up" data-aos-delay="100" className="mt-3 font-display text-3xl font-semibold">
                  Answers before you hit send
                </h2>
                <p className="mt-4 text-sm text-white/70">
                  Fast turnaround, clear workflow, and aligned expectations from
                  day one.
                </p>
              </div>
              <div className="space-y-4">
                {faqs.map((item, index) => {
                  const isOpen = activeFaq === index
                  return (
                    <button
                      key={item.question}
                      onClick={() =>
                        setActiveFaq(isOpen ? null : index)
                      }
                      className="panel flex w-full flex-col gap-3 px-6 py-4 text-left"
                    >
                      <div className="flex items-center justify-between text-sm font-semibold">
                        {item.question}
                        <span className="text-white/50">
                          {isOpen ? '-' : '+'}
                        </span>
                      </div>
                      {isOpen && (
                        <p className="text-sm text-white/70">{item.answer}</p>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section pt-0">
          <div className="container-lg">
            <div className="panel relative overflow-hidden p-10">
              <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
              <div className="absolute bottom-[-60px] left-[-60px] h-40 w-40 rounded-full bg-neon/30 blur-3xl" />
              <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <p data-aos="fade-up" data-aos-delay="150" className="text-sm uppercase tracking-[0.3em] text-white/50">
                    Ready to collaborate?
                  </p>
                  <h2 data-aos="fade-up" data-aos-delay="100" className="mt-3 font-display text-3xl font-semibold">
                    Not limited to video, we are your creative comrades.
                  </h2>
                  <p className="mt-4 text-sm text-white/70">
                    Share your project details and we will respond within 24
                    hours.
                  </p>
                </div>
                <form className="grid gap-4">
                  <input
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40"
                    placeholder="Name"
                  />
                  <input
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40"
                    placeholder="Email"
                  />
                  <textarea
                    className="h-28 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40"
                    placeholder="Tell us about your project"
                  />
                  <button className="btn-primary w-full" type="submit">
                    Send request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="section pt-0">
        <div className="container-lg flex flex-col items-center justify-between gap-6 border-t border-white/10 py-10 text-sm text-white/60 md:flex-row">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center">
              <img
                src={logoMark}
                alt="Logo"
                className="img-fluid"
              />
            </span>
             Editor Studio
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#">Instagram</a>
            <a href="#">Behance</a>
            <a href="#">YouTube</a>
            <a href="#">LinkedIn</a>
          </div>
          <div>hello@motiondesign.studio</div>
        </div>
      </footer>
    </div>
  )
}

export default App
