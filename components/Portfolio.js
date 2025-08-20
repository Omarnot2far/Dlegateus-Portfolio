function Portfolio() {
  try {
    const timelineItems = [
      {
        title: "Company start date",
        date: "05 Jan 2024",
        description: "Acme Foods Ltd incorporated and accounting systems established.",
        status: "complete"
      },
      {
        title: "First VAT registration",
        date: "14 Mar 2024", 
        description: "VAT registered with HMRC and digital links set for MTD.",
        status: "complete"
      },
      {
        title: "Quarterly VAT returns submission",
        date: "30 Jun 2024",
        description: "Timely submission via MTD. Reconciled ledgers and supporting schedules.",
        status: "complete"
      },
      {
        title: "Payroll cycle & submission",
        date: "Monthly 2024",
        description: "RTI submissions processed. Payslips issued and PAYE settled.",
        status: "active"
      },
      {
        title: "Year end filing",
        date: "05 Jan 2025",
        description: "Statutory accounts prepared and filed with Companies House.",
        status: "upcoming"
      }
    ];

    return (
      <section id="portfolio" className="section-padding bg-white" data-name="portfolio" data-file="components/Portfolio.js">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
              Demo Company — How We Manage Every Aspect of Finance
            </h2>
            <p className="text-xl text-[var(--text-secondary)]">
              A transparent, compliance-first journey you can verify.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timelineItems.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className={`timeline-dot ${item.status === 'complete' ? 'bg-[var(--accent-color)]' : item.status === 'active' ? 'bg-[var(--primary-color)]' : 'bg-[var(--text-secondary)]'}`}></div>
                
                <div className="card ml-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">{item.title}</h3>
                    <span className="text-sm text-[var(--text-secondary)] mt-1 sm:mt-0">{item.date}</span>
                  </div>
                  
                  <p className="text-[var(--text-secondary)] mb-4">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <button className="btn-secondary text-sm">
                      View Full Document
                    </button>
                    
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        item.status === 'complete' ? 'bg-[var(--accent-color)]' : 
                        item.status === 'active' ? 'bg-[var(--primary-color)]' : 
                        'bg-[var(--text-secondary)]'
                      }`}></div>
                      <span className="text-sm text-[var(--text-secondary)] capitalize">{item.status}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Portfolio component error:', error);
    return null;
  }
}