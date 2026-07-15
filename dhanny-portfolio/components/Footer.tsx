export default function Footer() {
  return (
    <footer className="text-center py-8 text-stone-500 text-sm border-t border-stone-200 bg-white">
      <p>Minimalist Design. Built with Next.js & Tailwind CSS.</p>
      <p className="mt-2">&copy; {new Date().getFullYear()} Dhanny Abdul Qodir Al Jaelany.</p> {/*[cite: 2] */}
    </footer>
  );
}