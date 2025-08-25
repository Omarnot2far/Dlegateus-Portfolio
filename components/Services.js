function Services() {
  try {
    const services = [
      {
        title: "Bookkeeping & Financial Records",
        description: "Clean ledgers, reconciliations, and audit-ready workflows.",
        icon: "book-open",
        sampleUrl: "https://docs.google.com/spreadsheets/d/1QRF8W13ZA8byzhRBSYRJT-IXeyBUHalh/edit?usp=drive_link&ouid=108183626079313624490&rtpof=true&sd=true"
      },
      {
        title: "VAT & HMRC Compliance", 
        description: "MTD-ready VAT returns and HMRC submissions without stress.",
        icon: "shield-check",
        sampleUrl: "https://drive.google.com/drive/folders/16x9Je7QrKNUPlJFxr1Ri0B1CJa1wMTTu?usp=sharing"
      },
      {
        title: "Payroll & Employee Management",
        description: "Accurate RTI, payslips, and PAYE compliance each cycle.",
        icon: "users",
        sampleUrl: "https://drive.google.com/drive/folders/1JRHiEi7jB87T6D7Atwn_-IwNJdxK8MfH?usp=sharing"
      },
      {
        title: "Annual Accounts & Companies House Filings",
        description: "Statutory accounts and filings delivered on time.",
        icon: "file-text",
        sampleUrl: "https://drive.google.com/drive/folders/1LlMUgMxe1bkMnDCZKmlAn9_IT5Q_-wUZ?usp=sharing"
      },
      {
        title: "Tax Return Preparation",
        description: "Corporation and director returns prepared with clarity.",
        icon: "calculator",
        sampleUrl: "https://www.gov.uk/corporation-tax-returns"
      },
      {
        title: "Management Reports & Forecasting",
        description: "Insightful reports that guide decisions and cashflow.",
        icon: "trending-up",
        sampleUrl: "https://www.gov.uk/guidance/corporation-tax-admin-burdens"
      },
      {
        title: "Corporate Tax (CT600)",
        description: "Accurate CT600 preparation and submissions for companies.",
        icon: "building",
        sampleUrl: "https://drive.google.com/drive/folders/1On784ZLSWmQ9pJQVbwObAHs5vSsFbT0L?usp=sharing"
      },
      {
        title: "Self Assessment (SA100)",
        description: "Personal tax returns filed with clarity and compliance.",
        icon: "user-check",
        sampleUrl: "https://drive.google.com/drive/folders/1zZhdrv2guMWs3DuhbmLnKWu5YXDnUoqG?usp=sharing"
      }
    ];

    return (
      <section id="services" className="section-padding bg-[var(--secondary-color)]" data-name="services" data-file="components/Services.js">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
              Services We Provide
            </h2>
            <p className="text-xl text-[var(--text-secondary)]">
              Detailed, modern and compliant by design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-700 transition-colors">
                    <div className={`icon-${service.icon} text-xl text-white`}></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <button 
                  onClick={() => window.open(service.sampleUrl, '_blank')}
                  className="btn-secondary w-full"
                >
                  View sample document
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Services component error:', error);
    return null;
  }
}
