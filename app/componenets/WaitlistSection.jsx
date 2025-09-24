import React from 'react';

const waitlistFeatures = [
  {
    id: 1,
    icon: "🌐",
    title: "Early Access",
    description: "Be among the very first to experience Nüvia's revolutionary AI travel planning platform"
  },
  {
    id: 2,
    icon: "🎯",
    title: "Exclusive Discounts",
    description: "Receive special pricing and offers available only to whitelist members"
  },
  {
    id: 3,
    icon: "📞",
    title: "Testing Opportunities",
    description: "Help shape the future of AI travel technology by providing feedback on new features"
  },
  {
    id: 4,
    icon: "🔄",
    title: "Priority Support",
    description: "Get direct access to our dedicated support team for any questions or assistance"
  }
];

const WaitlistSection = () => {
  return (
    <div className='bg-[#18232D] py-16 px-8'>
      
      {/* Header Section */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h1 className="heading-large mb-6">
          Experience the Future of Travel Planning. Secure Your Spot.
        </h1>
        <div className="space-y-2">
          <p className="subheading-text">
            Join thousands of travelers who are ready to experience AI-powered trip planning.
          </p>
          <p className="subheading-text">
            Get early access, exclusive benefits, and be part of the travel revolution.
          </p>
          <p className="subheading-text">
            This is your chance to be among the first to simplify your adventures.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-7xl mx-auto">
        {waitlistFeatures.map((feature) => (
          <div 
            key={feature.id}
            className="flex bg-[#19262F] rounded-3xl pt-16 px-6 pb-6 flex-col items-center gap-4 flex-1 self-stretch text-center"
          >
            <span className="text-4xl mb-2">{feature.icon}</span>
            <h3 className='heading-large'>{feature.title}</h3>
            <p className='subheading-text'>{feature.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <button className="bg-white text-black font-semibold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
          Join Waitlist Now
        </button>
      </div>
    </div>
  )
}

export default WaitlistSection;