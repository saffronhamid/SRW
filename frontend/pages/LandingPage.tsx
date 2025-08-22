import React from "react";
import { Link } from "react-router-dom";


const LandingPage: React.FC = () => {
  return (
<div className="relative flex h-screen flex-col overflow-x-hidden overflow-y-auto bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-600 text-white">
      {/* soft glow blobs */}
      <div className="pointer-events-none absolute -top-40 -left-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-fuchsia-400/20 blur-3xl" />

      {/* NAVBAR */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-white/90 text-indigo-700 grid place-items-center font-extrabold">S</div>
            <span className="text-lg font-bold tracking-tight">SmartRent</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <div className="hidden sm:block" />
        </div>
      </header>

      {/* MAIN – add bottom padding so fixed footer doesn't overlap */}
      <main className="flex-1 pb-24">
        {/* HERO */}
        <section className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs tracking-wider ring-1 ring-white/20">
              SMART LIVING • MADE SIMPLE
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Find your next home, or
              <span className="block">rent your space effortlessly.</span>
            </h1>
            <p className="mt-5 max-w-xl text-white/85">
              SmartRent connects owners and renters with realtime listings, verified profiles, and a smooth booking flow.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/login/user"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 shadow-lg ring-1 ring-black/5 transition hover:scale-[1.02] hover:shadow-xl"
              >
                Get started as User
                <span className="translate-x-0 transition group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="/login/owner"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                List your apartment
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-white/80">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-white/90 text-indigo-700 grid place-items-center text-xs font-extrabold">A</div>
                <div className="h-8 w-8 rounded-full bg-white/80 text-indigo-700 grid place-items-center text-xs font-extrabold">B</div>
                <div className="h-8 w-8 rounded-full bg-white/70 text-indigo-700 grid place-items-center text-xs font-extrabold">C</div>
              </div>
              <span>Trusted by 5k+ renters & owners</span>
            </div>
          </div>

          {/* Right: mockup card */}
          <div className="relative overflow-hidden">
            <div className="absolute -inset-8 -z-10 rounded-3xl bg-white/10 blur-2xl" />
            <div className="rounded-3xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur-xl shadow-2xl">
              <div className="rounded-2xl bg-white/5 p-4">
                <div className="h-56 w-full rounded-xl bg-gradient-to-br from-indigo-200/20 to-fuchsia-200/20 ring-1 ring-white/10" />
                <div className="mt-4 space-y-3">
                  <div className="h-4 w-2/3 rounded bg-white/20" />
                  <div className="h-4 w-1/2 rounded bg-white/15" />
                  <div className="h-4 w-5/6 rounded bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { title: "Verified Listings", text: "Every apartment is screened with photos, amenities, and owner verification.", icon: "🏷️" },
              { title: "Smart Search", text: "Filters for location, budget, roommates, pets, and more—find your match fast.", icon: "🔎" },
              { title: "Secure Messaging", text: "Chat safely with owners, schedule visits, and keep everything in one place.", icon: "🔐" },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur hover:bg-white/15 transition">
                <div className="mb-3 text-2xl">{f.icon}</div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-white/85">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="mx-auto max-w-7xl px-6 pb-20">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 md:p-10 backdrop-blur">
            <h2 className="text-2xl md:text-3xl font-bold">How it works</h2>
            <ol className="mt-6 grid gap-6 md:grid-cols-3">
              {[
                { step: "1", title: "Create your profile", text: "Sign in and set your preferences." },
                { step: "2", title: "Browse & shortlist", text: "Use smart filters and save favorites." },
                { step: "3", title: "Chat & book", text: "Message owners, schedule a tour, and confirm." },
              ].map((s) => (
                <li key={s.step} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 font-bold">
                    {s.step}
                  </div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-1 text-white/85">{s.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <a
                href="/login/user"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-indigo-700 shadow-md hover:scale-[1.02] transition"
              >
                Start now <span>→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FIXED footer (always visible) */}
      <footer
        id="contact"
        className="fixed bottom-0 left-0 w-full border-t border-white/10 bg-slate-900/40 backdrop-blur"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-4 md:flex-row">
          <p className="text-sm text-white/70">© {new Date().getFullYear()} SmartRent. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-white/80">
            <a className="hover:text-white" href="/terms">Terms</a>
            <a className="hover:text-white" href="/privacy">Privacy</a>
            <a className="hover:text-white" href="mailto:hello@smartrent.com">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
  <Link to="/login/user" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 shadow-lg ring-1 ring-black/5 hover:scale-[1.02] transition">
    Get started as User <span className="group-hover:translate-x-0.5 transition">→</span>
  </Link>
  <Link to="/login/owner" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-white/15 transition">
    List your apartment
  </Link>
</div>

export default LandingPage;
