"use client";

import { urlFor } from "@/lib/client";
import { PortableText } from "next-sanity";

interface BlogDetailProps {
  post: any;
}

export default function BlogDetail({ post }: BlogDetailProps) {
  // const relatedPosts = post?.related?.map((slug: string) => blogPosts.find((p) => p.slug === slug)).filter(Boolean) || []
  const relatedPosts = post?.related || [];

  if (!post) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Blog no encontrado</p>
        <a
          href="/#blog"
          className="inline-flex items-center mt-4 gap-2 text-primary hover:text-primary hover:bg-primary/10 px-3 py-2 rounded"
        >
          ← Volver al Blog
        </a>
      </div>
    );
  }

  return (
    <article className="py-8">
      <a
        href="/#blog"
        className="inline-flex items-center mb-8 gap-2 text-primary hover:text-primary hover:bg-primary/10 px-3 py-2 rounded"
      >
        ← Volver al Blog
      </a>

      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {post.title}
          </h1>
          <p className="text-muted-foreground">
            {new Date(post.date).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="relative w-full h-96 rounded-lg overflow-hidden mb-10 bg-muted">
          <img
            src={urlFor(post.image).url() || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenido principal */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg prose-blog max-w-none text-foreground">
              {Array.isArray(post.content) && <PortableText value={post.content} />}
            </div>
          </div>

          {/* Sidebar con contenido relacionado */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full"></span>
                Contenido Relacionado
              </h3>

              {relatedPosts.length > 0 ? (
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost: any) => (
                    <a
                      key={relatedPost._id}
                      href={`/blog/${relatedPost.slug.current}`}
                      className="block pb-4 border-b border-border last:border-b-0 last:pb-0 hover:text-primary transition-colors cursor-pointer"
                    >
                      <span className="text-xs text-primary font-semibold uppercase">
                        {relatedPost.category}
                      </span>
                      <p className="text-sm font-semibold text-foreground mt-1 line-clamp-2">
                        {relatedPost.title}
                      </p>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  No hay contenido relacionado
                </p>
              )}

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground mb-3">
                  Comparte este artículo
                </p>
                <div className="flex gap-2">
                  {[
                    {
                      name: "Twitter",
                      icon: (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99A12.13 12.13 0 0 1 3.15 5.13a4.29 4.29 0 0 0 1.33 5.72c-.7-.02-1.36-.21-1.94-.53v.05c0 2.01 1.43 3.68 3.32 4.06-.35.1-.72.16-1.1.16-.27 0-.53-.03-.78-.07.53 1.65 2.07 2.85 3.89 2.88A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 24 4.59a8.48 8.48 0 0 1-2.54.7z" />
                        </svg>
                      ),
                    },
                    {
                      name: "LinkedIn",
                      icon: (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.41-.77 1.39-1.5 2.5-1.5 1.93 0 3.5 1.57 3.5 3.5v6.5z" />
                        </svg>
                      ),
                    },
                    {
                      name: "Facebook",
                      icon: (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.713c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.314h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.593 1.325-1.326v-21.349c0-.733-.592-1.326-1.325-1.326z" />
                        </svg>
                      ),
                    },
                  ].map((network) => (
                    <button
                      key={network.name}
                      className="flex-1 cursor-pointer px-3 py-2 text-xs font-semibold text-primary bg-primary/10 rounded hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2"
                      aria-label={`Compartir en ${network.name}`}
                    >
                      {network.icon}
                      {network.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
