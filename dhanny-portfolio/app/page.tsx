"use client";

import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { profile, skills, projects, workExperience, orgExperience, education, certifications } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        
        {/* HERO SECTION */}
        <section className="min-h-[70vh] flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-emerald-600 font-mono mb-4 tracking-wide uppercase text-sm font-semibold">Welcome</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-stone-900">
              {profile.name}. {/*[cite: 2] */}
            </h1>
            <h3 className="text-2xl md:text-4xl font-semibold text-stone-500 mb-6">
              {profile.title}. {/*[cite: 2] */}
            </h3>
            <p className="text-lg text-stone-600 max-w-2xl mb-10 leading-relaxed">
              {profile.summary} {/*[cite: 2] */}
            </p>
            <motion.a 
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              href="mailto:dhanny.aljael@gmail.com" /*[cite: 2] */
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
            >
              <FaEnvelope /> Get in Touch
            </motion.a>
          </motion.div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="py-16 border-t border-stone-200">
          <motion.h2 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-2xl font-bold mb-8 flex items-center gap-3 text-stone-800"
          >
            <span className="text-emerald-600 font-mono text-lg">01.</span> Education
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="p-6 bg-white border border-stone-100 rounded-2xl shadow-sm"
              >
                <h3 className="font-bold text-stone-900">{edu.institution}</h3>
                <p className="text-stone-600 text-sm mt-1">{edu.degree}</p>
                <p className="text-emerald-600 font-mono text-xs mt-3">{edu.time}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="py-16 border-t border-stone-200">
          <motion.h2 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-2xl font-bold mb-8 flex items-center gap-3 text-stone-800"
          >
            <span className="text-emerald-600 font-mono text-lg">02.</span> Technical Arsenal
          </motion.h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.02 }}
                className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm text-stone-600 hover:border-emerald-600 hover:text-emerald-700 transition-colors cursor-default shadow-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="py-16 border-t border-stone-200">
          <motion.h2 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-2xl font-bold mb-8 flex items-center gap-3 text-stone-800"
          >
            <span className="text-emerald-600 font-mono text-lg">03.</span> Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((proj, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="p-8 bg-white border border-stone-200 rounded-2xl hover:border-emerald-500 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <h3 className="text-xl font-bold mb-3 text-stone-900 group-hover:text-emerald-600 transition-colors">{proj.title}</h3>
                <p className="text-stone-600 mb-6 text-sm leading-relaxed grow">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <Link href={`/projects/${proj.slug}`} className="text-sm font-semibold hover:underline text-amber-700 mt-auto block">
                  Read Details &rarr;
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WORK EXPERIENCE SECTION */}
        <section className="py-16 border-t border-stone-200">
          <motion.h2 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-2xl font-bold mb-10 flex items-center gap-3 text-stone-800"
          >
            <span className="text-emerald-600 font-mono text-lg">04.</span> Work Experience
          </motion.h2>
          <div className="space-y-12">
            {workExperience.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-stone-200 hover:border-emerald-500 transition-colors"
              >
                <div className="absolute w-4 h-4 bg-white border-2 border-emerald-500 rounded-full -left-[9px] top-1"></div>
                <h3 className="text-lg font-bold text-stone-900">{exp.role}</h3>
                <h4 className="text-amber-700 font-medium mb-1">{exp.company}</h4>
                <span className="text-xs text-stone-400 font-mono block mb-3 uppercase tracking-wider">{exp.time}</span>
                <p className="text-stone-600 text-sm leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ORGANIZATIONAL EXPERIENCE SECTION */}
        <section className="py-16 border-t border-stone-200">
          <motion.h2 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-2xl font-bold mb-10 flex items-center gap-3 text-stone-800"
          >
            <span className="text-emerald-600 font-mono text-lg">05.</span> Organizational Experience
          </motion.h2>
          <div className="space-y-12">
            {orgExperience.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-stone-200 hover:border-emerald-500 transition-colors"
              >
                <div className="absolute w-4 h-4 bg-white border-2 border-emerald-500 rounded-full -left-[9px] top-1"></div>
                <h3 className="text-lg font-bold text-stone-900">{exp.role}</h3>
                <h4 className="text-amber-700 font-medium mb-1">{exp.company}</h4>
                <span className="text-xs text-stone-400 font-mono block mb-3 uppercase tracking-wider">{exp.time}</span>
                <p className="text-stone-600 text-sm leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section className="py-16 border-t border-stone-200">
          <motion.h2 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-2xl font-bold mb-10 flex items-center gap-3 text-stone-800"
          >
            <span className="text-emerald-600 font-mono text-lg">06.</span> Licenses & Certifications
          </motion.h2>
          
          <div className="space-y-12">
            {certifications.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-xl font-bold text-stone-800 mb-6 border-b border-stone-100 pb-2">{category.category}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((cert, certIdx) => (
                    <div key={certIdx} className="p-4 bg-white border border-stone-200 rounded-xl hover:border-emerald-300 transition-colors shadow-sm flex flex-col justify-between">
                      <div>
                        <h4 className="font-semibold text-stone-900 text-sm leading-tight mb-2">{cert.name}</h4>
                        <p className="text-stone-500 text-xs">{cert.issuer}</p>
                      </div>
                      <div className="mt-4 flex justify-between items-end">
                        <span className="text-emerald-700 font-mono text-xs bg-emerald-50 px-2 py-1 rounded">{cert.year}</span>
                        {cert.id && <span className="text-stone-400 text-[10px] font-mono truncate max-w-[100px]" title={cert.id}>ID: {cert.id}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}