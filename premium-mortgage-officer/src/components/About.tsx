import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-tl-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-100 rounded-br-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=988&q=80" 
                alt="Alex Sauceda" 
                className="rounded-xl shadow-lg w-full object-cover h-[500px]"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              About Alex Sauceda
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Alex brings a strong foundation in mortgage lending built from years of experience inside the loan approval process. Beginning his career as an FHA and conventional mortgage underwriter, he developed a deep understanding of how loans are evaluated and approved from the lender’s perspective. This background allows Alex to anticipate potential challenges early, structure stronger applications, and guide clients through the home financing process with confidence and clarity.
              </p>
              <p>
                Today, Alex applies that expertise as a mortgage loan officer, helping clients navigate one of the most important financial decisions of their lives. He is committed to making the home buying process as smooth and stress free as possible by providing clear communication, thoughtful guidance, and practical solutions tailored to each borrower’s situation. Whether working with first time homebuyers or experienced real estate investors, Alex takes the time to ensure every client understands their options and feels supported at every stage of the transaction.
              </p>
              <p>
                Alex strongly believes that homeownership represents far more than a financial investment. To him, owning a home is a pathway to long term stability, security, and opportunity. Because of this belief, he focuses on educating and empowering his clients so they can make informed decisions that support their future goals and financial well being.
              </p>
              <p>
                Above all, Alex strives to be a trusted advisor and long term partner to the people he serves. By combining his underwriting background with a client first mindset, he works to deliver personalized lending solutions and dependable support throughout the entire mortgage journey, helping clients turn the dream of homeownership into a meaningful and rewarding reality.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">15+</span>
                <span className="text-sm text-slate-500">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">Top 1%</span>
                <span className="text-sm text-slate-500">Originator in MO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
