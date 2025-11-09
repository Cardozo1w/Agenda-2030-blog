import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Inicio from "@/components/sections/inicio";
import QuienesSomos from "@/components/sections/quienes-somos";
import Agenda2030 from "@/components/sections/agenda-2030";
import Blog from "@/components/sections/blog";
import Proyectos from "@/components/sections/proyectos";
import Documentos from "@/components/sections/documentos";

import { SanityDocument } from "next-sanity";
import { client } from "@/lib/client";

const POSTS_QUERY = `*[
  _type == "blogPost"
]|order(publishedAt desc)[0...12]{_id, slug, title, excerpt, category, image, publishedAt}`;

const options = { next: { revalidate: 30000 } };

export default async function Home() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="w-full bg-background">
      <Navigation />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section id="inicio" className="scroll-mt-20 md:scroll-mt-24">
          <Inicio />
        </section>
        <section id="quienes-somos" className="scroll-mt-20 md:scroll-mt-24">
          <QuienesSomos />
        </section>
        <section id="agenda-2030" className="scroll-mt-20 md:scroll-mt-24">
          <Agenda2030 />
        </section>
        <section id="blog" className="scroll-mt-20 md:scroll-mt-24">
          <Blog posts={posts} />
        </section>
        <section id="proyectos" className="scroll-mt-20 md:scroll-mt-24">
          <Proyectos />
        </section>
        <section id="documentos" className="scroll-mt-20 md:scroll-mt-24">
          <Documentos />
        </section>
      </div>
    </main>
  );
}
