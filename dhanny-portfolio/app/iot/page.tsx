import Link from "next/link";

// Fungsi untuk mengambil data dari Backend API
async function getProjects() {
  // Fetch data dari endpoint API lokal kita
  // { cache: 'no-store' } memastikan data selalu segar (SSR)
  const res = await fetch("http://localhost:3000/api/projects", { cache: 'no-store' });
  
  if (!res.ok) {
    throw new Error("Gagal mengambil data dari Backend");
  }
  return res.json();
}

export default async function IoTProjects() {
  // Panggil fungsi API
  const allProjects = await getProjects();
  
  // Filter hanya data IoT di sisi Frontend
  const iotProjects = allProjects.filter((p: any) => p.category === "iot");

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-cyan-400 hover:underline mb-8 inline-block font-mono text-sm">
          &larr; Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-10 border-b border-slate-800 pb-4">IoT & Hardware Projects</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          {iotProjects.map((proj: any) => (
            <Link href={`/projects/${proj.slug}`} key={proj.slug} className="group">
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-400 transition-all duration-300 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{proj.title}</h3>
                <p className="text-slate-400 mb-6 text-sm flex-grow">{proj.shortDesc}</p>
                <span className="text-sm font-semibold text-cyan-500 group-hover:underline mt-auto">Read Details &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}