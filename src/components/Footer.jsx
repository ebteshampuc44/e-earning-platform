import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'হোম', path: '/' },
    { name: 'সকল কোর্স', path: '/courses' },
    { name: 'ক্যাটাগরি', path: '/categories' },
    { name: 'ইনস্ট্রাক্টর', path: '/instructors' },
    { name: 'ব্লগ', path: '/blog' },
  ];

  const categories = [
    'কৃষি ও ফার্মিং',
    'প্রোগ্রামিং ও টেক',
    'একাডেমিক শিক্ষা',
    'দক্ষতা উন্নয়ন',
    'ব্যবসা পরিচালনা',
  ];

  const contactInfo = [
    { icon: '📧', text: 'support@shikkhon.com' },
    { icon: '📞', text: '+৮৮০ ১২৩৪ ৫৬৭৮৯০' },
  ];

  return (
    <footer style={{ backgroundColor: 'rgb(233,231,253)' }} className="text-gray-900 py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Brand Info - Compact */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div 
                style={{ backgroundColor: 'rgb(229,230,250)' }} 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
              >
                <span className="font-bold text-xl" style={{ color: '#4F46E5' }}>শি</span>
              </div>
              <div>
                <h2 className="text-xl font-bold" style={{ color: '#4F46E5' }}>শিখন</h2>
                <p className="text-xs text-gray-600">E-Learning Platform</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-4">
              বাংলাদেশের সর্ববৃহৎ ই-লার্নিং প্লাটফর্ম।
            </p>
            <div className="flex space-x-3">
              {['Twitter', 'YouTube', 'Facebook', 'LinkedIn'].map((platform, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  style={{ backgroundColor: 'rgb(229,230,250)' }} 
                  className="p-1.5 rounded-full transition-colors duration-200 hover:scale-110"
                >
                  <div className="w-4 h-4" style={{ color: '#4F46E5' }}></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Compact */}
          <div>
            <h3 className="footer-title text-base font-bold mb-4" style={{ color: '#4F46E5' }}>দ্রুত লিঙ্ক</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories - Compact */}
          <div>
            <h3 className="footer-title text-base font-bold mb-4" style={{ color: '#4F46E5' }}>ক্যাটাগরি</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Compact */}
          <div>
            <h3 className="footer-title text-base font-bold mb-4" style={{ color: '#4F46E5' }}>যোগাযোগ</h3>
            <ul className="space-y-3 mb-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span style={{ color: '#4F46E5' }}>{info.icon}</span>
                  <span className="text-gray-700 text-sm">{info.text}</span>
                </li>
              ))}
            </ul>
            
            {/* Newsletter Subscription - Compact */}
            <div>
              <h4 className="font-bold mb-3 text-sm">নিউজলেটার</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="ইমেইল" 
                  className="input w-full max-w-xs rounded-r-none text-sm py-2"
                  style={{ 
                    backgroundColor: 'rgb(229,230,250)', 
                    borderColor: '#4F46E5',
                    height: '36px'
                  }}
                />
                <button 
                  className="rounded-l-none px-3 text-white text-sm"
                  style={{ 
                    backgroundColor: '#4F46E5',
                    height: '36px'
                  }}
                >
                  সাবস্ক্রাইব
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Compact */}
        <div className="border-t mt-8 pt-6" style={{ borderColor: 'rgb(229,230,250)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-gray-600 text-xs">
              © ২০২৪ শিখন. সর্বস্বত্ব সংরক্ষিত।
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-gray-600">
              <a href="#" className="hover:text-gray-900 transition-colors duration-200">প্রাইভেসি</a>
              <a href="#" className="hover:text-gray-900 transition-colors duration-200">টার্মস</a>
              <a href="#" className="hover:text-gray-900 transition-colors duration-200">রিফান্ড</a>
              <a href="#" className="hover:text-gray-900 transition-colors duration-200">সাইটম্যাপ</a>
            </div>
          </div>
          
          {/* Payment Methods - Compact */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="text-gray-600 text-xs">পেমেন্ট মেথড:</div>
            <div className="flex space-x-2">
              {['bKash', 'Nagad', 'Rocket', 'Card'].map((method, idx) => (
                <div 
                  key={idx} 
                  style={{ backgroundColor: 'rgb(229,230,250)' }} 
                  className="px-2 py-1 rounded text-xs"
                >
                  <span className="font-bold" style={{ color: '#4F46E5' }}>{method}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;