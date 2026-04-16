// import React from 'react';

// Card data structuring for maintainability
const expertiseCards = [
  {
    type: 'large',
    theme: 'light',
    icon: '✦',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    title: 'UI/UX Design',
    description: 'Crafting immersive interfaces that balance editorial aesthetics with intuitive user journeys. We build for the "Editorial Architect" within every user.',
    items: ['High-Fidelity Prototyping', 'Design Systems Architecture', 'User Behavioral Analytics'],
    imageType: 'uiMockup',
    className: 'md:col-span-2'
  },
  {
    type: 'small',
    theme: 'dark',
    icon: '📊',
    iconBg: 'bg-teal-500/20',
    iconColor: 'text-teal-400',
    title: 'Data Analytics',
    description: 'Transforming complex data streams into actionable intelligence with custom engineered visualization tools.',
    stats: true
  },
  {
    type: 'small',
    theme: 'light',
    icon: '</>',
    iconBg: 'bg-gray-100',
    iconColor: 'text-gray-500',
    font: 'mono',
    title: 'Website Development',
    description: 'Performant, SEO-ready architectures built with modern frameworks to ensure longevity and unparalleled speed.',
    pills: ['Modern Stack', 'Enterprise CMS'],
    pillSubtext: ['React, Next.js, Tailwind', 'Headless Architecture']
  },
  {
    type: 'large',
    theme: 'gradient',
    icon: '💼',
    iconBg: 'bg-white',
    iconColor: 'text-slate-800',
    title: 'Business Applications',
    description: 'Custom ERP, CRM, and bespoke operational tools designed to streamline complex corporate workflows.',
    cta: 'Explore Solutions',
    imageType: 'blurGradient',
    className: 'md:col-span-2'
  },
  {
    type: 'small',
    theme: 'darkGreen',
    icon: '📱',
    iconBg: 'bg-teal-500/20',
    iconColor: 'text-teal-300',
    title: 'Digital Applications',
    description: 'Native first mobile and desktop application that bridge the gap between human’s and high-end software utility.',
    techPills: ['iOS & Android', 'Web', 'Cross Platform']
  },
  {
    type: 'large',
    theme: 'light',
    icon: '📈',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    title: 'Digital Marketing',
    description: 'Strategic growth engineering combining creative content with algorithmic precision to dominate search and social landscapes.',
    itemsColumn: [['Performance SEO', 'Content Funnels'], ['Social Strategy', 'PPC Engineering']],
    imageType: 'laptopGraphic',
    className: 'md:col-span-2'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-16">
      
      {/* --- HEADER SECTION --- */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.25em] text-[10px] md:text-xs text-gray-400 font-bold mb-4">
              OUR EXPERTISE
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-800">
              Architecting the <br />
              <span className="text-teal-600">Digital Frontier</span>
            </h1>
            <p className="mt-8 text-gray-600 text-lg md:text-xl max-w-xl leading-relaxed">
              We combine high-end architectural design principles with cutting-edge engineering to build scalable, premium digital experiences for forward-thinking enterprises.
            </p>
          </div>
          
          <div className="hidden md:flex bg-slate-100 w-28 h-28 rounded-full items-center justify-center border-4 border-white shadow-inner">
             <span className="text-3xl text-slate-400 font-light">▲</span>
          </div>
        </div>
      </section>

      {/* --- BENTO GRID SECTION --- */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {expertiseCards.map((card, index) => {
            // Base class for all cards
            let cardClasses = `rounded-[2.5rem] p-10 flex flex-col hover:shadow-xl transition-shadow duration-300 ${card.className || ''}`;
            
            // Theme specific classes
            if (card.theme === 'dark') {
              cardClasses += ' bg-slate-950 text-white';
            } else if (card.theme === 'darkGreen') {
                cardClasses += ' bg-teal-950 text-white';
            } else if (card.theme === 'gradient') {
              cardClasses += ' bg-gradient-to-br from-slate-50 to-slate-200 border border-slate-100 flex-row-reverse justify-end items-center';
            } else {
              cardClasses += ' bg-white border border-gray-100 shadow-sm';
            }

            // Large card specific adjustment for layout
            if (card.type === 'large' && card.theme !== 'gradient' && card.theme !== 'lightWithImage') {
                cardClasses += ' md:flex-row justify-between items-start';
            }

            return (
              <div key={index} className={cardClasses}>
                
                {/* Content Container */}
                <div className={`${card.type === 'large' ? 'max-w-sm w-full' : ''} ${card.theme === 'gradient' ? 'max-w-md ml-10' : ''}`}>
                  <div className={`${card.iconBg} ${card.iconColor} w-12 h-12 rounded-2xl flex items-center justify-center mb-8 shadow-inner`}>
                    <span className={`text-xl ${card.font === 'mono' ? 'font-mono' : ''}`}>{card.icon}</span>
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${card.theme === 'dark' || card.theme === 'darkGreen' ? 'text-white' : 'text-slate-900'}`}>{card.title}</h3>
                  <p className={`text-sm leading-relaxed mb-8 ${card.theme === 'dark' || card.theme === 'darkGreen' ? 'text-slate-300' : 'text-gray-600'}`}>
                    {card.description}
                  </p>

                  {/* Optional: Checkmarks List */}
                  {card.items && (
                    <ul className="space-y-3.5 text-sm font-semibold text-slate-800">
                      {card.items.map(item => (
                        <li key={item} className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-teal-500 rounded-full"></span> {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Optional: Stats Bars */}
                  {card.stats && (
                    <div className="mt-auto space-y-4">
                       <div className="h-1.5 bg-teal-500/10 w-full rounded-full overflow-hidden">
                         <div className="bg-teal-400 h-full w-4/5"></div>
                       </div>
                       <div className="h-1.5 bg-teal-500/10 w-full rounded-full overflow-hidden">
                         <div className="bg-teal-400 h-full w-3/5"></div>
                       </div>
                       <p className="text-[11px] text-slate-500 font-mono mt-5 uppercase tracking-wider">LEVEL: ADVANCED DATA VISUALIZATION</p>
                    </div>
                  )}

                   {/* Optional: Pills with Subtext */}
                  {card.pills && (
                    <div className="grid grid-cols-2 gap-4">
                      {card.pills.map((pill, i) => (
                        <div key={pill} className="bg-white p-4 rounded-2xl border border-gray-100 text-[11px] font-bold text-slate-800">
                            {pill}<br/>
                            <span className="text-gray-400 font-medium">{card.pillSubtext?.[i]}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Optional: CTA */}
                  {card.cta && (
                    <button className="text-slate-950 font-bold flex items-center gap-2 group mt-auto pt-4 hover:gap-3 transition-all">
                      {card.cta} <span>→</span>
                    </button>
                  )}

                   {/* Optional: Simple Tech Pills */}
                  {card.techPills && (
                    <div className="flex flex-wrap gap-2 mt-auto pt-6">
                      {card.techPills.map(pill => (
                        <div key={pill} className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[11px] font-bold text-teal-100 shadow-sm">
                            {pill}
                        </div>
                      ))}
                    </div>
                  )}

                   {/* Optional: Marketing List Columns */}
                  {card.itemsColumn && (
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3.5 text-sm font-semibold text-slate-800 mt-auto pt-4">
                      {card.itemsColumn.map((col, idx) => (
                          <div key={idx} className='space-y-3.5'>
                              {col.map(item => (
                                <div key={item} className="flex items-center gap-3">
                                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span> {item}
                                </div>
                              ))}
                          </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Image/Graphic Container (for large cards) */}
                {card.imageType && (
                  <div className={`w-full ${card.theme === 'gradient' ? 'w-auto flex-1 h-full' : 'md:w-[45%] mt-10 md:mt-0'} flex items-center justify-center relative`}>
                    {card.imageType === 'uiMockup' && (
                        <div className="w-full h-56 md:h-64 bg-gradient-to-b from-gray-50 to-gray-200 rounded-2xl border border-gray-100 flex items-center justify-center overflow-hidden shadow-inner">
                           {/* Simplified UI Mockup */}
                           <div className="flex gap-2 p-6">
                             <div className="w-16 h-24 bg-white rounded shadow-sm opacity-50 border border-gray-100"></div>
                             <div className="w-20 h-32 bg-white rounded shadow-sm border border-gray-100"></div>
                             <div className="w-16 h-24 bg-white rounded shadow-sm opacity-50 border border-gray-100"></div>
                           </div>
                        </div>
                    )}
                    {card.imageType === 'blurGradient' && (
                        <>
                         <div className="w-44 h-44 bg-white/40 rounded-full blur-3xl opacity-60 absolute right-12"></div>
                         <div className="w-60 h-full bg-slate-100 rounded-3xl opacity-40"></div>
                        </>
                    )}
                    {card.imageType === 'laptopGraphic' && (
                        <div className="w-full h-64 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center shadow-lg relative overflow-hidden group">
                           {/* Simplified Laptop with abstract screen */}
                           <div className='absolute bottom-2 inset-x-4 h-1 bg-slate-900 rounded-b-xl'></div>
                           <div className="w-3/4 h-2/3 bg-slate-950 rounded-xl relative overflow-hidden p-3 border-4 border-slate-900">
                             <div className="absolute inset-2 bg-teal-500/10 rounded-lg blur-xl"></div>
                             <div className="relative grid grid-cols-4 gap-1.5 h-full z-10 opacity-70">
                                {Array.from({length: 12}).map((_, i) => (
                                    <div key={i} className={`bg-teal-400/50 rounded ${i%3===0 ? 'col-span-2' : ''}`}></div>
                                ))}
                             </div>
                           </div>
                        </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

        </div>
      </section>

      {/* --- CALL TO ACTION (CTA) SECTION --- */}
      <section className="mt-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-slate-950 rounded-[3.5rem] py-24 px-10 text-center text-white relative overflow-hidden group">
          {/* Subtle Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none transition-opacity duration-1000 group-hover:opacity-20">
             <div className="absolute -top-10 -left-10 w-64 h-64 bg-teal-500 rounded-full blur-[130px]"></div>
             <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-indigo-500 rounded-full blur-[150px]"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-2xl mx-auto leading-tight text-white tracking-tight">
              Ready to build the future of your architecture?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-14 text-sm md:text-base leading-relaxed">
              Join a network of global industry leaders who trust Zenta Tech to deliver sophisticated, high-performance digital ecosystems.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-5">
              <button className="bg-white text-slate-950 px-12 py-4.5 rounded-full text-sm font-bold hover:bg-teal-50 transition shadow-xl shadow-white/10 active:scale-95">
                Start Your Project
              </button>
              <button className="bg-transparent border border-slate-700 text-white px-12 py-4.5 rounded-full text-sm font-bold hover:bg-slate-800 transition active:scale-95">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}