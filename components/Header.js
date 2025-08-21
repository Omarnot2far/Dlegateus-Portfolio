function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    };

    return (
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-[var(--border-color)] z-50" data-name="header" data-file="components/Header.js">
        <div className="container-max">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl text-[var(--primary-color)]">
              Dlegateus
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('portfolio')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('services')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Contact</button>
            </nav>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <div className={`icon-menu text-xl ${isMenuOpen ? 'text-[var(--primary-color)]' : 'text-[var(--text-secondary)]'}`}></div>
            </button>
          </div>
          
          {isMenuOpen && (
            <div className="md:hidden border-t border-[var(--border-color)] py-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('portfolio')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Portfolio</button>
                <button onClick={() => scrollToSection('services')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Services</button>
                <button onClick={() => scrollToSection('about')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">About</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Contact</button>
              </div>
            </div>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}