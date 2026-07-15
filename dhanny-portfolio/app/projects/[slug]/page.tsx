import { projects } from "@/lib/data";import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  // Jika URL tidak valid, arahkan ke halaman 404
  if (!project) return notFound();

  // Memastikan tags selalu berupa array untuk mencegah error 'map'
  const projectTags = project.tags || [];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-cyan-400 hover:underline mb-8 inline-block font-mono text-sm">
          &larr; Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
        
        {/* Menggunakan projectTags hasil dari project.tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {projectTags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-slate-800 rounded-md text-sm text-slate-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-slate-200">About the Project</h2>
          {/* Menggunakan project.desc bukan fullDesc */}
          <p className="text-slate-400 leading-relaxed mb-8">{project.desc}</p>
        </div>

        {/* Menggunakan project.link bukan github */}
        <a 
          href={project.link} 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-cyan-500 text-slate-950 px-6 py-3 rounded-full font-semibold hover:bg-cyan-400 transition-colors"
        >
          View Source Code
        </a>
      </div>
    </main>
  );
}