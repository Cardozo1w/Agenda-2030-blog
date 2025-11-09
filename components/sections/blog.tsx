"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import BlogCard from "@/components/blog-card"
import BlogListItem from "@/components/blog-list-item"

interface BlogProps {
  posts: any[]}

export default function Blog({ posts }: BlogProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const onViewModeChange = (mode: "grid" | "list") => {
    setViewMode(mode)
  }
  return (
    <section className="py-8 md:py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            Nuestro <span className="text-primary">Blog</span>
          </h2>
          <p className="text-muted-foreground text-lg">Artículos e historias sobre sostenibilidad</p>
        </div>

        <div className="flex gap-2" role="group" aria-label="Vista de blog">
          <Button
            onClick={() => onViewModeChange("grid")}
            variant={viewMode === "grid" ? "default" : "outline"}
            size="sm"
            className="gap-2"
            aria-pressed={viewMode === "grid"}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
            </svg>
            Cuadrícula
          </Button>
          <Button
            onClick={() => onViewModeChange("list")}
            variant={viewMode === "list" ? "default" : "outline"}
            size="sm"
            className="gap-2"
            aria-pressed={viewMode === "list"}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
            </svg>
            Lista
          </Button>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts?.map((post) => (
            <a key={post._id} href={`/blog/${post.slug.current}`} className="cursor-pointer">
              <BlogCard {...post} />
            </a>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {posts?.map((post) => (
            <a key={post._id} href={`/blog/${post.slug.current}`} className="cursor-pointer">
              <BlogListItem {...post} />
            </a>
          ))}
        </div>
      )}
    </section>
  )
}
