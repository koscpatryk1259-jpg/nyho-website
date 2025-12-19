'use client';

import Navigation from '../components/Navigation';
import { useState } from 'react';

export default function ManagePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentAddress: '',
    employmentStatus: '',
    monthlyIncome: '',
    moveInDate: '',
    numberOfOccupants: '',
    hasPets: '',
    creditScore: '',
    propertyInterested: '',
    additionalInfo: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('Thank you for your rental application! Our property management team will review it and contact you within 24-48 hours.');
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      currentAddress: '',
      employmentStatus: '',
      monthlyIncome: '',
      moveInDate: '',
      numberOfOccupants: '',
      hasPets: '',
      creditScore: '',
      propertyInterested: '',
      additionalInfo: ''
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl font-bold mb-6">MANAGE</h1>
          <p className="text-2xl opacity-95 max-w-3xl">
            Professional property management services. Find your next home or let us manage your investment property with care and expertise.
          </p>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Property Management Services</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Comprehensive management solutions that maximize returns and minimize stress
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 rounded-xl p-8">
              <div className="text-5xl mb-4">🏘️</div>
              <h3 className="text-2xl font-bold mb-4">For Property Owners</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Tenant screening & placement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Rent collection & accounting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Property maintenance & repairs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Legal compliance & evictions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Monthly financial reporting</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-8">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-4">Maintenance Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">24/7 emergency repairs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Regular property inspections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Vendor coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Preventive maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Capital improvement planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-8">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4">For Tenants</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Easy online rent payment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Quick maintenance requests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Responsive communication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Lease renewal assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Move-in/move-out support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 bg-gray-50 rounded-2xl p-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Properties Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Occupancy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-600">Avg Days to Lease</div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Rentals Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Current Rental Vacancies</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Quality apartments in prime Bronx locations - Apply today!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Rental 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-4xl">
                🏠
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">Modern 2BR Apartment</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">Available</span>
                </div>
                <p className="text-gray-600 mb-4">456 Grand Concourse, Bronx</p>
                <p className="text-3xl font-bold text-blue-600 mb-4">$2,200/mo</p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Bedrooms:</span>
                    <span className="font-semibold">2</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Bathrooms:</span>
                    <span className="font-semibold">1</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Square Feet:</span>
                    <span className="font-semibold">900 sq ft</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Available:</span>
                    <span className="font-semibold">January 1, 2025</span>
                  </div>
                </div>
                <ul className="space-y-1 mb-6 text-sm">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-600 mr-2">✓</span> Updated kitchen
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-600 mr-2">✓</span> Heat & hot water included
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-600 mr-2">✓</span> Near subway
                  </li>
                </ul>
                <a href="#application" className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors">
                  Apply Now
                </a>
              </div>
            </div>

            {/* Rental 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-4xl">
                🏢
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">Spacious 3BR Unit</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">Available</span>
                </div>
                <p className="text-gray-600 mb-4">789 Morris Avenue, Bronx</p>
                <p className="text-3xl font-bold text-blue-600 mb-4">$2,800/mo</p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Bedrooms:</span>
                    <span className="font-semibold">3</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Bathrooms:</span>
                    <span className="font-semibold">2</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Square Feet:</span>
                    <span className="font-semibold">1,300 sq ft</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Available:</span>
                    <span className="font-semibold">December 15, 2024</span>
                  </div>
                </div>
                <ul className="space-y-1 mb-6 text-sm">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-600 mr-2">✓</span> Renovated bathrooms
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-600 mr-2">✓</span> Washer/dryer in unit
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-600 mr-2">✓</span> Parking available
                  </li>
                </ul>
                <a href="#application" className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors">
                  Apply Now
                </a>
              </div>
            </div>

            {/* Rental 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-4xl">
                🏘️
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">Cozy 1BR Studio</h3>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">Soon</span>
                </div>
                <p className="text-gray-600 mb-4">321 Webster Avenue, Bronx</p>
                <p className="text-3xl font-bold text-blue-600 mb-4">$1,650/mo</p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Bedrooms:</span>
                    <span className="font-semibold">1</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Bathrooms:</span>
                    <span className="font-semibold">1</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Square Feet:</span>
                    <span className="font-semibold">650 sq ft</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Available:</span>
                    <span className="font-semibold">January 15, 2025</span>
                  </div>
                </div>
                <ul className="space-y-1 mb-6 text-sm">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-600 mr-2">✓</span> Hardwood floors
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-600 mr-2">✓</span> Natural light
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-600 mr-2">✓</span> Pet friendly
                  </li>
                </ul>
                <a href="#application" className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Application Section */}
      <section id="application" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Rental Application</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Complete this application to be considered for any of our rental properties
          </p>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Personal Information</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
              />
            </div>

            <input
              type="text"
              name="currentAddress"
              placeholder="Current Address *"
              value={formData.currentAddress}
              onChange={handleInputChange}
              required
              className="w-full px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none mb-6"
            />

            <h3 className="text-2xl font-bold mb-6 mt-8">Employment & Financial Information</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <select
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleInputChange}
                required
                className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
              >
                <option value="">Employment Status *</option>
                <option value="employed">Employed Full-Time</option>
                <option value="parttime">Employed Part-Time</option>
                <option value="selfemployed">Self-Employed</option>
                <option value="student">Student</option>
                <option value="retired">Retired</option>
                <option value="unemployed">Unemployed</option>
              </select>

              <input
                type="text"
                name="monthlyIncome"
                placeholder="Monthly Income *"
                value={formData.monthlyIncome}
                onChange={handleInputChange}
                required
                className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
              />
            </div>

            <select
              name="creditScore"
              value={formData.creditScore}
              onChange={handleInputChange}
              required
              className="w-full px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none mb-6"
            >
              <option value="">Credit Score Range *</option>
              <option value="excellent">Excellent (750+)</option>
              <option value="good">Good (700-749)</option>
              <option value="fair">Fair (650-699)</option>
              <option value="poor">Poor (Below 650)</option>
              <option value="none">No Credit History</option>
            </select>

            <h3 className="text-2xl font-bold mb-6 mt-8">Rental Details</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="date"
                name="moveInDate"
                placeholder="Desired Move-In Date *"
                value={formData.moveInDate}
                onChange={handleInputChange}
                required
                className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
              />

              <input
                type="number"
                name="numberOfOccupants"
                placeholder="Number of Occupants *"
                value={formData.numberOfOccupants}
                onChange={handleInputChange}
                required
                min="1"
                className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <select
                name="hasPets"
                value={formData.hasPets}
                onChange={handleInputChange}
                required
                className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
              >
                <option value="">Do you have pets? *</option>
                <option value="no">No</option>
                <option value="dog">Yes - Dog(s)</option>
                <option value="cat">Yes - Cat(s)</option>
                <option value="other">Yes - Other</option>
              </select>

              <input
                type="text"
                name="propertyInterested"
                placeholder="Property Interested In *"
                value={formData.propertyInterested}
                onChange={handleInputChange}
                required
                className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
              />
            </div>

            <textarea
              name="additionalInfo"
              placeholder="Additional Information (References, special requests, etc.)"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              rows={5}
              className="w-full px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none resize-none mb-6"
            ></textarea>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Submitting this application does not guarantee approval. Our team will review your application and contact you within 24-48 hours. A credit check and background check will be performed as part of the application process.
              </p>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              Submit Rental Application
            </button>
          </div>
        </div>
      </section>

      {/* Property Owners CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Property Owners: Let Us Manage Your Investment</h2>
          <p className="text-xl mb-8 opacity-95">
            Maximize your returns while we handle everything from tenant placement to maintenance. Our proven systems ensure your property is well-maintained and profitable.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Schedule a Consultation
            </button>
            <a 
              href="/property-management-info.pdf"
              download
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Download Info Packet
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 text-center">
        <p className="opacity-80">&copy; 2024 NYHO - NY HomeOwner Inc. All rights reserved.</p>
        <p className="mt-2 text-sm opacity-70">Building Generational Wealth in the Bronx, NY</p>
      </footer>
    </div>
  );
}