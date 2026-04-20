export default function Home() {
  return (
    <main className="bg-[#f6f6f8] min-h-screen text-gray-800">
      {/* HERO SECTION */}
      <div className="bg-[#f5f6f8] py-16 px-4">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">

    {/* Left Content */}
    <div className="flex-1">
      <p className="text-sm text-gray-500 mb-4 font-medium tracking-wide">
        SERVICE SPOTLIGHT
      </p>

      <h1 className="text-4xl md:text-5xl font-bold text-[#1c2541] leading-tight mb-6">
        Digital Marketing & Growth

      </h1>

      <p className="text-gray-600 mb-6 max-w-lg">
        We transform fragmented data streams into a cohesive architectural
        vision. Our editorial approach to analytics ensures every insight is
        actionable, strategic, and visually profound.
      </p>

      <div className="flex gap-4">
        <button className="bg-[#2c2f5b] text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
          Request Assessment →
        </button>

        <button className="bg-white border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
          View Case Studies
        </button>
      </div>
    </div>

    {/* Right Image */}
    <div className="flex-1 flex justify-center">
      <div className="bg-black rounded-xl p-6 w-full max-w-md">
        <img
          src="/banner (2).jpeg"
          alt="analytics"
          className="rounded-lg w-full opacity-80"
        />
      </div>
    </div>

  </div>
</div>

      {/* CORE CAPABILITIES */}
      <div className="bg-[#f5f6f8] py-16 px-4">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <h2 className="text-3xl font-bold text-gray-800 mb-2">
      Core Capabilities
    </h2>
    <p className="text-gray-500 mb-10 max-w-xl">
      Four pillars of our editorial data methodology, designed to scale with your architectural complexity.
    </p>

    {/* Grid */}
    <div className="grid md:grid-cols-2 gap-6">

      {/* Left Top Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <img
          src="https://your-url.com/icon1.png"
          className="w-10 h-10 mb-4"
          alt="icon"
        />
        <h3 className="text-lg font-semibold text-[#1c2541] mb-2">
          Big Data Processing
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Infrastructure built for volume. We engineer pipelines that ingest,
          clean, and structure raw data at scale without sacrificing latency.
        </p>

        <img
          src="/card1.jpg"
          alt="card"
          className="rounded-lg w-full h-40 object-cover"
        />
      </div>

      {/* Right Big Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between">
        <div>
          <img
            src="https://your-url.com/icon2.png"
            className="w-10 h-10 mb-4"
            alt="icon"
          />

          <h3 className="text-lg font-semibold text-[#1c2541] mb-2">
            Business Intelligence Dashboards
          </h3>

          <p className="text-gray-600 text-sm mb-4">
            Our BI solutions aren’t just displays—they are curated narratives.
            We design interfaces that allow stakeholders to interrogate data.
          </p>

          <ul className="space-y-2 text-sm text-gray-700">
            <li>✅ Real-time KPI monitoring</li>
            <li>✅ Custom drill-down architectures</li>
            <li>✅ Stakeholder-specific reporting views</li>
          </ul>
        </div>

        <img
          src="/card2.jpg"
          alt="dashboard"
          className="rounded-lg w-full h-40 object-cover mt-6"
        />
      </div>

      {/* Bottom Left Green Card */}
      <div className="bg-[#0b3d2e] text-white p-6 rounded-xl flex flex-col justify-between">
        <div>
          <img
            src="https://your-url.com/icon3.png"
            className="w-10 h-10 mb-4"
            alt="icon"
          />

          <h3 className="text-lg font-semibold mb-2">
            Predictive Analytics
          </h3>

          <p className="text-sm text-gray-200">
            Move from hindsight to foresight with ML models designed for precision forecasting.
          </p>
        </div>

        <p className="mt-6 text-sm font-medium">
          EXPLORE MODELS →
        </p>
      </div>

      {/* Bottom Right Small Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <img
          src="https://your-url.com/icon4.png"
          className="w-10 h-10 mb-4"
          alt="icon"
        />

        <h3 className="text-lg font-semibold text-[#1c2541] mb-2">
          Data Visualization
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          We craft bespoke visual assets that make complexity legible.
        </p>

        <div className="flex items-center gap-2">
          <span className="w-6 h-6 bg-indigo-500 rounded-full"></span>
          <span className="w-6 h-6 bg-green-400 rounded-full"></span>
          <span className="w-6 h-6 bg-gray-300 rounded-full"></span>
        </div>
      </div>

    </div>
  </div>
</div>

      {/* APPROACH SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

  {/* Left Image with Overlay */}
  <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
    
    <img
      src="/bannerimages.jpeg" // 👉 இங்க உன் image path set பண்ணு
      alt="insight"
      className="w-full h-full object-cover grayscale"
    />

    {/* Overlay Card */}
    <div className="absolute bottom-[-20px] left-6 bg-white p-5 rounded-xl shadow-lg w-60">
      <p className="text-2xl font-bold text-[#1c2541]">94%</p>
      <p className="text-xs text-gray-500">
        Average increase in decision-making speed across our architectural portfolio.
      </p>
    </div>

  </div>

  {/* Right Content */}
  <div>
    <h2 className="text-3xl font-semibold text-[#1c2541] mb-8">
      The Architectural Approach to Insight.
    </h2>

    <div className="space-y-8">

      <div className="flex gap-4">
        <span className="text-gray-400 font-semibold">01</span>
        <div>
          <h4 className="font-semibold text-[#1c2541]">Discovery & Audit</h4>
          <p className="text-sm text-gray-500">
            We map your current data ecosystem, identifying silos and structural weaknesses that hinder clarity.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <span className="text-gray-400 font-semibold">02</span>
        <div>
          <h4 className="font-semibold text-[#1c2541]">Schema Design</h4>
          <p className="text-sm text-gray-500">
            Engineering a robust foundation that ensures data integrity and high-performance querying.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <span className="text-gray-400 font-semibold">03</span>
        <div>
          <h4 className="font-semibold text-[#1c2541]">Editorial Narrative</h4>
          <p className="text-sm text-gray-500">
            Developing the visual and interactive layer that tells the story hidden within the numbers.
          </p>
        </div>
      </div>

    </div>
  </div>

</section>
    </main>
  );
}