
const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-ayush-50 to-herb-50 p-4">
      <div className="text-center w-full max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-gray-800 animate-fade-in">
          Welcome to AYUSH Health Care
        </h1>
        <p className="text-xl text-gray-700 mb-8 animate-slide-in delay-200">
          Specialized care for anorectal diseases by Dr. S. Soma Rao
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 animate-scale-in delay-300">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover-scale">
            <h3 className="text-xl font-bold mb-3 text-ayush-600">Expert Care</h3>
            <p className="text-gray-600">Over 20 years of specialized experience in treating anorectal conditions</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover-scale">
            <h3 className="text-xl font-bold mb-3 text-herb-600">Advanced Treatments</h3>
            <p className="text-gray-600">Combining ancient Ayurvedic wisdom with modern medical techniques</p>
          </div>
        </div>
        
        <div className="animate-fade-in delay-400">
          <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-ayush-600 text-white font-semibold hover:bg-ayush-700 transition-all duration-150 mr-4 hover-scale">
            Book Appointment
          </a>
          <a href="/services" className="inline-flex items-center px-6 py-3 rounded-lg border border-ayush-600 text-ayush-600 font-semibold hover:bg-ayush-50 transition-all duration-150 hover-scale">
            Our Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
