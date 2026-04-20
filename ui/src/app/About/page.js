import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-emerald-100 font-sans">
      {/* Hero Section */}
 
      <section className="px-4 py-20 max-w-7xl mx-auto min-h-[70vh] flex flex-col items-center justify-center text-center">
        <div className="space-y-8 flex flex-col items-center">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-gray-900">
            Architecting the <br />
            <span className="text-emerald-500">Digital Future</span> <br />
            with Precision.
          </h1>
<<<<<<< Updated upstream

          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
=======
          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
>>>>>>> Stashed changes
            At Zervia Tech Solutions, we don't just build software; we engineer
            ecosystems. Founded on the principle of editorial clarity in
            technology, we blend architectural precision with modern innovation.
          </p>
        </div>
<<<<<<< Updated upstream
=======

        {/* Main Hero Image */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-100 to-blue-50 rounded-2xl blur opacity-30"></div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
              alt="Architectural Workspace"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>
>>>>>>> Stashed changes
      </section>

      {/* Mission & Vision - Light Cards */}
      <section className="px-8 py-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 border border-gray-100 p-12 rounded-[2.5rem] hover:bg-white hover:shadow-xl hover:border-emerald-200 transition-all duration-500 group">
          <div className="w-12 h-12 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-center mb-8 transition-colors group-hover:bg-indigo-500">
            <div className="w-2 h-2 bg-indigo-500 rotate-45 group-hover:bg-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4 tracking-tight">
            Our Mission
          </h3>
          <p className="text-gray-500 leading-relaxed text-sm md:text-base">
<<<<<<< Updated upstream
            To empower businesses globally by delivering high-fidelity digital
            solutions that bridge the gap between complex engineering and
            intuitive human experiences. We strive for excellence in every line
            of code we ship.
=======
            Zervia Tech Solutions empowers businesses with tailored tech
            services, integrating development, applications, and marketing to
            drive results with innovation, professionalism, and long-term client
            value.
>>>>>>> Stashed changes
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-100 p-12 rounded-[2.5rem] hover:bg-white hover:shadow-xl hover:border-emerald-200 transition-all duration-500 group">
          <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center mb-8 transition-colors group-hover:bg-emerald-500">
            <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover:bg-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4 tracking-tight">Our Vision</h3>
          <p className="text-gray-500 leading-relaxed text-sm md:text-base">
<<<<<<< Updated upstream
            To be the global benchmark for editorial-grade software
            architecture, where design and technology exist in perfect symmetry,
            fostering a world connected by seamless and beautiful digital
            infrastructure.
=======
            Zervia Tech Solutions delivers innovative digital solutions, driving
            sustainable growth and operational excellence, while transforming
            businesses through technology and client-focused service for
            long-term success..
>>>>>>> Stashed changes
          </p>
        </div>
      </section>

      {/* Why Partners Choose Us - Grid Section */}
      <section className="px-8 py-24 text-center">
        <h2 className="text-4xl font-bold mb-6 tracking-tighter">
          Why Partners Choose Zervia
        </h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto mb-20 rounded-full" />

        <div className="grid md:grid-cols-3 gap-0 max-w-6xl mx-auto border border-gray-200 rounded-[2rem] overflow-hidden bg-white shadow-sm">
          {/* Feature 1 */}
          <div className="p-12 border-b md:border-b-0 md:border-r border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-1.5 h-1.5 bg-black rounded-full" />
            </div>
<<<<<<< Updated upstream
            <h4 className="text-lg font-bold mb-4">Uncompromising Quality</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every project undergoes a rigorous architectural audit to ensure
              long-term performance.
=======
            <h4 className="text-lg font-bold mb-4">
              {" "}
              Excellence in Every Build
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              We ensure high-quality, scalable, and reliable digital solutions
              through expert engineering.
>>>>>>> Stashed changes
            </p>
          </div>

          {/* Feature 2 - Highlighted */}
          <div className="p-12 border-b md:border-b-0 md:border-r border-gray-100 bg-gray-50/50 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-emerald-500" />
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
            <h4 className="text-lg font-bold mb-4 text-emerald-600">
<<<<<<< Updated upstream
              Strategic Innovation
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              We don't follow trends, we set them. Our tech stack leverages the
              latest in edge computing and AI.
=======
              Client-Centric Collaboration
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              We work as an extension of your team, ensuring transparency,
              trust, and shared success.
>>>>>>> Stashed changes
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-12 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-1.5 h-1.5 bg-black rounded-full opacity-30" />
            </div>
<<<<<<< Updated upstream
            <h4 className="text-lg font-bold mb-4">Collaborative Ethos</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your vision is our blueprint. We work synchronously with your team
              as a true partner.
=======
            <h4 className="text-lg font-bold mb-4">
              {" "}
              Forward-Thinking Innovation
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leveraging modern technologies, we craft solutions that keep you
              ahead of the competition.
>>>>>>> Stashed changes
            </p>
          </div>
        </div>
      </section>

      {/* Culture Masonry Section */}
      <section className="px-8 py-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-5xl font-extrabold mb-8 leading-tight tracking-tighter">
<<<<<<< Updated upstream
            Our Culture of <br />
            Excellence
          </h2>
          <p className="text-gray-600 mb-12 text-lg leading-relaxed max-w-lg">
            Beyond the screens and the code, Zervia is a collective of thinkers,
            designers, and engineers who share a passion for high-end digital
            craftsmanship.
          </p>
          <div className="grid grid-cols-2 gap-y-12 gap-x-8">
            {[
              { val: "98%", lab: "Retention" },
              { val: "120+", lab: "Dev Experts" },
              { val: "15+", lab: "Awards" },
              { val: "500+", lab: "Shipped" },
=======
            Driven by
            <br /> Excellence
          </h2>
          <p className="text-gray-600 mb-12 text-lg leading-relaxed max-w-lg">
            Behind every line of code is a team committed to precision,
            innovation, and performance. At Zervia, we craft digital experiences
            that are built to last and designed to lead.
          </p>
          <div className="grid grid-cols-2 gap-y-12 gap-x-8">
            {[
              { val: "15+", lab: "Years Industry Experience" },
              { val: "20+", lab: "Project Deliveries" },
              { val: "20+", lab: "Team Strength" },
              { val: "97%", lab: "Client Retention Rate" },
>>>>>>> Stashed changes
            ].map((stat, idx) => (
              <div key={idx} className="border-l-2 border-emerald-500 pl-6">
                <div className="text-4xl font-black text-black mb-1">
                  {stat.val}
                </div>
                <div className="text-[10px] text-emerald-600 font-bold uppercase tracking-[0.2em]">
                  {stat.lab}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Masonry Image Grid */}
        <div className="order-1 lg:order-2 grid grid-cols-6 grid-rows-6 gap-4 h-[500px]">
          <div className="col-span-4 row-span-4 rounded-[2rem] overflow-hidden border border-gray-200 relative shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
              alt="Team"
            />
          </div>
          <div className="col-span-2 row-span-3 rounded-[2rem] overflow-hidden border border-gray-200 relative shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
              alt="Collaboration"
            />
          </div>
          <div className="col-span-3 row-span-2 rounded-[2rem] overflow-hidden border border-gray-200 relative shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
              alt="Office"
            />
          </div>
          <div className="col-span-3 row-span-3 rounded-[2rem] overflow-hidden border border-gray-200 relative shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
              alt="Focus"
            />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-gray-50 py-32 px-8 border-t border-gray-100 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tighter text-gray-900">
            Ready to Build Something <br />
            Extraordinary?
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            Let's discuss how our architectural approach can elevate your
            business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-emerald-500 text-white px-10 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
              Schedule Consultation
            </button>
            <button className="bg-white border border-gray-200 text-black px-10 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all shadow-sm">
              View Case Studies
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
