import { urlFor } from "@/lib/client";

export default function BlogCard({ title, excerpt, date, category, image }: any) {
  return (
    <article className="h-full bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all group">
      <div className="relative overflow-hidden bg-muted h-48">
        <img
          src={urlFor(image).url() || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
            {category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
          {new Date(date).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{excerpt}</p>
        <div className="flex items-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
          Leer más →
        </div>
      </div>
    </article>
  )
}
