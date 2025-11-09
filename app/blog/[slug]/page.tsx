import BlogDetail from '@/components/sections/blog-detail';
import { client } from '@/lib/client';

interface BlogDetailPageProps {
  params: { slug: string }
}

const POST_QUERY = `*[_type == "blogPost" && slug.current == $slug]{
  _id,
  title,
  slug,
  excerpt,
  category,
  image,
  content,
  date,
  related[]->{ _id, title, slug, category}
}[0]`;

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug });
  
  return (
    <main className="w-full bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BlogDetail post={post} />
      </div>
    </main>
  );
}
