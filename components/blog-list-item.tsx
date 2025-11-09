import { urlFor } from "@/lib/client";

export default function BlogListItem({ title, excerpt, date, category, image }: any) {
  return (
    <article className="flex gap-5 bg-card border border-border rounded-lg p-5 hover:shadow-lg hover:border-primary/50 transition-all group">
      <div className="w-40 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
        <img
          src={urlFor(image).url() || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded">
              {category}
            </span>
            <p className="text-xs text-muted-foreground">
              {new Date(date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2">{excerpt}</p>
        </div>
        <div className="flex items-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform mt-2">
          Leer más →
        </div>
      </div>
    </article>
  )
}
