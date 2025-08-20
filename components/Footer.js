function Footer() {
  try {
    return (
      <footer className="bg-[var(--text-primary)] text-white py-8" data-name="footer" data-file="components/Footer.js">
        <div className="container-max">
          <div className="text-center">
            <p className="text-gray-300">
              © 2025 Dlegateus. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}