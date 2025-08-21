function Contact() {
  try {
    const contactMethods = [
      {
        title: "Email",
        icon: "mail",
        action: () => window.open('mailto:info@dlegateus.com')
      },
      {
        title: "LinkedIn", 
        icon: "linkedin",
        action: () => window.open('https://www.linkedin.com/company/dlegateus-com', '_blank')
      },
      {
        title: "Facebook",
        icon: "facebook", 
        action: () => window.open('https://facebook.com/dlegateus', '_blank')
      }
    ];

    return (
      <section id="contact" className="section-padding bg-[var(--secondary-color)]" data-name="contact" data-file="components/Contact.js">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
              Contact
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-12">
              Connect with us
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <button
                  key={index}
                  onClick={method.action}
                  className="card text-center hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-[var(--primary-color)] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                    <div className={`icon-${method.icon} text-2xl text-white`}></div>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary-color)] transition-colors">
                    {method.title}
                  </h3>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}
