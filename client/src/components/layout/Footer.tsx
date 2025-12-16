export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold font-heading tracking-tight text-primary">
              Dev<span className="text-blue-600">Pro</span>
            </a>
            <p className="text-sm text-gray-500 mt-2">
              Web Designer & Developer Freelancer
            </p>
          </div>
          
          <div className="flex gap-6 text-sm text-gray-500 font-medium">
            <a href="#" className="hover:text-blue-600 transition-colors">WhatsApp</a>
            <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Email</a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Todos os direitos reservados. Feito com estratégia e código.</p>
        </div>
      </div>
    </footer>
  );
}
