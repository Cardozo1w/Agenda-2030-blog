"use client";

import { Button } from "@/components/ui/button";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "quienes-somos", label: "Quiénes Somos" },
  { id: "agenda-2030", label: "Agenda 2030" },
  { id: "blog", label: "Blog" },
  { id: "proyectos", label: "Proyectos" },
  { id: "documentos", label: "Documentos" },
];

import { useEffect, useState } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const onScroll = () => {
      const offsets = sections.map((section) => {
        const el = document.getElementById(section.id);
        return el ? Math.abs(el.getBoundingClientRect().top) : Infinity;
      });
      const minOffset = Math.min(...offsets);
      const idx = offsets.indexOf(minOffset);
      setActiveSection(sections[idx].id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/#">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="/logo-agenda-2030.png" alt="Logo" />
              </div>
              <span className="font-bold text-primary hidden sm:inline">
                Agenda 2030
              </span>
            </div>
          </a>

          <div className="hidden md:flex gap-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`text-sm font-medium px-3 py-2 rounded transition-all ${
                  activeSection === section.id
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:text-primary hover:bg-primary/10"
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>

          <div className="md:hidden relative">
            <button
              type="button"
              className="px-3 py-2 bg-card border border-border rounded-lg text-foreground text-sm w-full min-w-[220px] flex justify-between items-center"
              aria-haspopup="listbox"
              aria-expanded="false"
              id="nav-dropdown-btn"
              onClick={() => {
                const menu = document.getElementById("nav-dropdown-menu");
                if (menu) menu.classList.toggle("hidden");
              }}
            >
              {sections.find((s) => s.id === activeSection)?.label}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul
              id="nav-dropdown-menu"
              className="absolute left-0 mt-2 min-w-[220px] w-max bg-card border border-border rounded-lg shadow-lg z-50 hidden"
              role="listbox"
              aria-labelledby="nav-dropdown-btn"
            >
              {sections.map((section) => (
                <li key={section.id} role="option">
                  <a
                    href={`#${section.id}`}
                    className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.hash = `#${section.id}`;
                      document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
                      document.getElementById("nav-dropdown-menu")?.classList.add("hidden");
                      setActiveSection(section.id);
                    }}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
