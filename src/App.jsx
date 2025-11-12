import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Download, ExternalLink, Code2, Sparkles, Star, CheckCircle2 } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs text-white/90 ring-1 ring-white/15">
      <Star size={12} className="text-yellow-300" /> {children}
    </span>
  )
}

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/15">
        <Sparkles size={14} /> {eyebrow}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
      {desc && <p className="mt-3 text-white/70">{desc}</p>}
    </div>
  )
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function App() {
  const projects = [
    {
      title: 'Dashboard Analitik',
      desc: 'Dashboard modern dengan chart interaktif untuk analisis data bisnis.',
      tags: ['React', 'Tailwind', 'Chart.js'],
      link: '#',
    },
    {
      title: 'Landing Page SaaS',
      desc: 'Tampilan marketing berkonversi tinggi dengan animasi halus.',
      tags: ['Vite', 'Framer Motion', 'SEO'],
      link: '#',
    },
    {
      title: 'Aplikasi Tugas',
      desc: 'Aplikasi produktivitas dengan drag & drop dan sinkronisasi.',
      tags: ['React', 'DnD', 'PWA'],
      link: '#',
    },
  ]

  const skills = [
    ['JavaScript', 'TypeScript', 'React', 'Next.js'],
    ['Tailwind CSS', 'Framer Motion', 'Radix UI'],
    ['Node.js', 'REST API', 'MongoDB'],
    ['Git', 'CI/CD', 'Testing'],
  ]

  return (
    <div id="home" className="min-h-screen w-full bg-slate-950 overflow-x-hidden">
      {/* Gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600/30 via-sky-500/20 to-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 shadow-lg" />
              <span className="text-white/90 font-semibold tracking-wide">Portfolio</span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              {['Tentang', 'Keahlian', 'Proyek', 'Pengalaman', 'Kontak'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-white/70 hover:text-white text-sm transition-colors">
                  {item}
                </a>
              ))}
              <div className="h-6 w-px bg-white/10" />
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-semibold hover:shadow-lg transition">
                <Mail size={16} /> Hubungi
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 text-white px-4 py-2 text-sm font-semibold hover:shadow-lg transition">
                <Download size={16} /> Unduh CV
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero with Spline */}
      <section className="relative">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 lg:pt-36 pb-20">
          <div className="grid lg:grid-cols-2 items-center gap-10">
            <motion.div {...fadeUp}>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Badge>Frontend Engineer</Badge>
                <Badge>Open to Work</Badge>
                <Badge>Remote Friendly</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
                Bangun pengalaman web yang modern, cepat, dan memukau.
              </h1>
              <p className="mt-4 text-white/75 md:text-lg">
                Saya merancang dan mengembangkan antarmuka elegan dengan performa tinggi.
                Fokus pada aksesibilitas, animasi halus, dan pengalaman pengguna yang menyenangkan.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 px-5 py-3 text-white font-semibold shadow hover:opacity-95">
                  Lihat Proyek <ArrowRight size={18} />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-white font-semibold ring-1 ring-white/15 hover:bg-white/15">
                  Kontak <Mail size={18} />
                </a>
                <div className="ml-auto flex items-center gap-3">
                  <a href="#" aria-label="GitHub" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15"><Github size={18} /></a>
                  <a href="#" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15"><Linkedin size={18} /></a>
                </div>
              </div>
            </motion.div>
            <div className="relative h-[420px] lg:h-[520px]" />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/40 to-slate-950" />
      </section>

      {/* About */}
      <section id="tentang" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Perkenalan" title="Tentang Saya" desc="Seorang pengembang antarmuka yang menyukai detail dan kualitas, membangun produk yang berdampak." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[1,2,3].map((i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80 backdrop-blur">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 text-white"><Code2 size={18} /></div>
                <h3 className="text-white font-semibold">Kualitas Kode</h3>
                <p className="mt-2 text-sm text-white/70">Menulis kode bersih, modular, dan mudah dirawat dengan praktik terbaik industri.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="keahlian" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Kemampuan" title="Keahlian Utama" desc="Teknologi yang sering saya gunakan dalam membangun aplikasi modern." />
          <div className="mt-10 grid gap-3">
            {skills.map((row, idx) => (
              <motion.div key={idx} {...fadeUp} className="flex flex-wrap items-center gap-2">
                {row.map((s) => (
                  <span key={s} className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white/85 ring-1 ring-white/10">
                    <CheckCircle2 size={16} className="text-emerald-400" /> {s}
                  </span>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="proyek" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Karya" title="Proyek Terpilih" desc="Beberapa contoh pekerjaan terbaik yang pernah saya kerjakan." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80 backdrop-blur"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-indigo-500/30 to-sky-500/30 blur-2xl" />
                <div className="relative">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 text-white"><Code2 size={18} /></div>
                  <h3 className="text-white font-semibold group-hover:text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/80 ring-1 ring-white/10">{t}</span>
                    ))}
                  </div>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm text-sky-300 group-hover:gap-3 transition-all">
                    Lihat detail <ExternalLink size={16} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="pengalaman" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Karier" title="Pengalaman" desc="Perjalanan profesional singkat saya." />
          <div className="mt-10 grid gap-6">
            {[{ role: 'Frontend Developer', company: 'Tech Startup', period: '2022 - Sekarang', points: ['Membangun UI reaktif dan cepat', 'Kolaborasi dengan tim product & design', 'Meningkatkan performa hingga 40%'] }, { role: 'Freelance Developer', company: 'Berbagai Klien', period: '2020 - 2022', points: ['Mengembangkan landing page & dashboard', 'Optimasi SEO dan aksesibilitas', 'Integrasi API dan animasi'] }].map((exp, i) => (
              <motion.div key={i} {...fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80 backdrop-blur">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-white font-semibold">{exp.role} • {exp.company}</h3>
                  <span className="text-xs text-white/60">{exp.period}</span>
                </div>
                <ul className="mt-3 list-disc pl-5 text-sm text-white/70">
                  {exp.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontak" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Ayo Terhubung" title="Kontak" desc="Ada proyek menarik? Saya siap berdiskusi dan berkolaborasi." />
          <motion.form {...fadeUp} className="mx-auto mt-10 grid max-w-3xl gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-xs text-white/70">Nama</label>
                <input type="text" placeholder="Nama Anda" className="mt-1 w-full rounded-xl bg-white/10 px-4 py-2 text-white placeholder:text-white/40 ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div>
                <label className="text-xs text-white/70">Email</label>
                <input type="email" placeholder="email@domain.com" className="mt-1 w-full rounded-xl bg-white/10 px-4 py-2 text-white placeholder:text-white/40 ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
            </div>
            <div>
              <label className="text-xs text-white/70">Pesan</label>
              <textarea rows={5} placeholder="Tulis pesan Anda..." className="mt-1 w-full rounded-xl bg-white/10 px-4 py-2 text-white placeholder:text-white/40 ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-sky-500" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-white/70">
                <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm ring-1 ring-white/15 hover:bg-white/15"><Github size={16} /> GitHub</a>
                <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm ring-1 ring-white/15 hover:bg-white/15"><Linkedin size={16} /> LinkedIn</a>
                <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm ring-1 ring-white/15 hover:bg-white/15"><Mail size={16} /> Email</a>
              </div>
              <button type="button" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 px-5 py-3 text-white font-semibold shadow hover:opacity-95">
                Kirim Pesan <ArrowRight size={18} />
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-8 text-center text-white/60">
        <p className="text-sm">© {new Date().getFullYear()} Portofolio • Dibuat dengan cinta, animasi, dan detail.</p>
      </footer>
    </div>
  )
}
