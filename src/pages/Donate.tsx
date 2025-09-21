import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Donate: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const donationImpacts = [
    {
      title: 'Empower Underserved Youth',
      description: 'Expand access to quality tech education for young people in rural and underserved areas across Ghana.',
      icon: 'EDU'
    },
    {
      title: 'Equip Classrooms',
      description: 'Help us provide computers, internet access, and software to underserved communities.',
      icon: 'TEC'
    },
    {
      title: 'Fund Free Training',
      description: 'Sponsor scholarships for students unable to afford our programs.',
      icon: 'IMP'
    },
    {
      title: 'Inspire Innovation',
      description: 'Support competitions, hackathons, and mentorship programs that foster creativity and innovation.',
      icon: 'INN'
    }
  ]

  const paymentMethods = [
    {
      title: 'Bank Transfer',
      details: [
        { label: 'Bank Name', value: 'GCB Bank Plc.' },
        { label: 'Branch', value: 'Dome' },
        { label: 'Account Name', value: 'I.T. For Youth Ghana Foundation' },
        { label: 'Account Number', value: '1321180005217' },
        { label: 'Swift Code', value: 'GHCBGHAC' },
        { label: 'Sort Code', value: '040132' }
      ],
      icon: 'BNK'
    },
    {
      title: 'Mobile Money',
      details: [
        { label: 'Account Name', value: 'I.T. For Youth Ghana Foundation (Peter Duodu)' },
        { label: 'Account Number', value: '0530444141' },
        { label: 'Momo ID', value: '509778' }
      ],
      icon: 'MOB'
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-hero-overlay"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Make a Difference With Your Donation</h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-secondary">
              Empower Ghana's Youth Through Technology!
            </h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
              Every student matters. Every donation counts. Every day, progress is made.
            </p>
            <motion.button
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-float hover:shadow-blue-glow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('donation-methods')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Donate Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section ref={ref} className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Here's How Your Support Can Transform Lives
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {donationImpacts.map((impact, index) => (
              <motion.div
                key={impact.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="card card-body text-center group"
              >
                <motion.div 
                  className="text-6xl mb-6"
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.2
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{impact.icon.slice(0,3)}</span>
                  </div>
                </motion.div>
                <h3 className="heading-sm mb-4 group-hover:text-accent transition-colors duration-300">
                  {impact.title}
                </h3>
                <p className="text-body">{impact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Methods */}
      <section id="donation-methods" className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Donation Options</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Choose your preferred payment method to support our mission
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-neutral-50 to-secondary/10 rounded-3xl p-8 border border-secondary/20"
              >
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{method.icon}</span>
                  <h3 className="heading-md">{method.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {method.details.map((detail, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-secondary/10">
                      <span className="font-semibold text-body">{detail.label}:</span>
                      <span className="text-primary font-medium">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Online Payment Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-primary to-blue rounded-3xl p-8 text-white text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-lg">PAY</span>
              </div>
            </div>
            <h3 className="heading-lg mb-4 text-white">Card Payment</h3>
            <p className="text-lead text-white/90 mb-6">
              We accept all major online payments through Paystack including Mastercard, Visa, and More. 
              Click below to make an online donation today.
            </p>
            <motion.button
              className="btn btn-secondary btn-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate Online Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="heading-xl text-white mb-6">Every Contribution Makes a Difference</h2>
            <p className="text-lead text-white/90 max-w-3xl mx-auto mb-8">
              Your support helps us break down barriers and create opportunities for Ghana's youth. 
              Together, we can build a brighter, more inclusive tech future.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="btn btn-secondary btn-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Donate Today
              </motion.button>
              <motion.button
                className="btn btn-secondary btn-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Donate