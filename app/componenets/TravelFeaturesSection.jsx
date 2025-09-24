import React from 'react'

const features = [
  {
    id: 1,
    icon: "🌐",
    title: "Seamless Experience",
    description: "From visa assistance to local transport, every aspect of your trip flows seamlessly through one orchestrated by our intelligent AI"
  },
  {
    id: 2,
    icon: "🎯",
    title: "Perfect Personalization", 
    description: "Every trip is uniquely tailored to your specific preferences, travel style, and budget, ensuring an experience that truly resonates with you"
  },
  {
    id: 3,
    icon: "📞",
    title: "24/7 AI Support",
    description: "Your AI Assistant is available anytime for changes, questions, or emergency assistance, providing unparalleled peace of mind"
  },
  {
    id: 4,
    icon: "🔒",
    title: "Guaranteed Coordination",
    description: "All bookings are synchronized and managed by Nüvia so you never have to worry about planning your time on the ground"
  },
  {
    id: 5,
    icon: "⏳",
    title: "Save Massive Time",
    description: "Plan complex multi-destination trips in minutes instead of days or weeks. Our AI handles the heavy lifting"
  },
  {
    id: 6,
    icon: "💰",
    title: "Save Significant Money",
    description: "AI optimization and our aggregated purchasing power reduce costs by up to 40% on your overall travel expenses"
  },
  {
    id: 7,
    icon: "😊",
    title: "Eliminate Stress",
    description: "No more juggling multiple bookings, comparing endless tabs, or worrying about coordination. Nüvia takes care of everything"
  }
];

const TravelFeaturesSection = () => {
  return (
    <div className='bg-[#18232D] p-8'>
      
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="heading-large mb-4">
          More Time Exploring, Less Time Planning. Travel Without Complexity.
        </h1>
        <p className="subheading-text">
          Nüvia removes travel planning stress, letting you focus on enjoying your journey
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div 
            key={feature.id}
            className="flex bg-[#19262F] rounded-3xl pt-16 px-6 pb-6 flex-col items-center gap-4 flex-1 self-stretch"
          >
            <span className="text-4xl">{feature.icon}</span>
            
        
            <h3 className='heading-large text-center'>{feature.title}</h3>
            <p className='subheading-text text-center'>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TravelFeaturesSection