import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20">
    <div className="text-primary text-2xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Home = () => {
  const features = [
    {
      icon: "🔍",
      title: "Quick Answers",
      description: "Get instant responses to your health-related questions, available 24/7."
    },
    {
      icon: "📚",
      title: "Reliable Information",
      description: "Access comprehensive health information from trusted medical sources."
    },
    {
      icon: "🤝",
      title: "Easy to Use",
      description: "Simple, conversational interface that anyone can understand and use."
    }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            Welcome to HealthGPT
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
            Your intelligent health companion, providing instant answers to your medical questions with accuracy and care.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/chat"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Chatting Now
            </Link>
            <a
              href="#features"
              className="px-8 py-4 bg-white/80 text-gray-700 rounded-xl text-lg font-semibold hover:bg-white/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="max-w-6xl mx-auto mt-24">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Why Choose HealthGPT?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="max-w-4xl mx-auto mt-24 text-center">
          <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
            <p className="text-gray-700">
              <span className="text-red-500 text-xl">⚠️</span>
              <strong className="block text-lg mb-2">Important Disclaimer</strong>
              While HealthGPT provides helpful health information, it is not a substitute for professional medical advice. 
              Always consult with qualified healthcare professionals for medical decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
