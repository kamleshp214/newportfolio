import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7777883214',
      href: 'tel:+917777883214'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'porwalkamlesh5@gmail.com',
      href: 'mailto:porwalkamlesh5@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ujjain, Madhya Pradesh, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/kamlesh-porwal'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://kamleshp214.github.io'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleItems(new Array(contactInfo.length + socialLinks.length).fill(true));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-gray-800/10 to-gray-700/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-gray-700/10 to-gray-600/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-gray-800 border border-gray-700 rounded-full px-6 py-3 animate-glow">
              <MessageCircle className="w-5 h-5 text-gray-400" />
              <span className="font-mono text-sm text-gray-300">Contact</span>
            </div>
          </div>
          
          <h2 className="text-5xl font-bold text-gray-100 mb-6 animate-slide-up font-mono">
            <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 font-mono animate-slide-up" style={{animationDelay: '0.2s'}}>
            Ready to collaborate on your next project? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:shadow-2xl hover:shadow-gray-900/50 transition-all duration-700 hover:scale-[1.02] group animate-slide-in-left">
              <h3 className="text-2xl font-bold text-gray-100 mb-6 font-mono">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-4 group/item ${
                        visibleItems[index] ? 'animate-slide-in-right' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="w-12 h-12 bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center text-gray-300 group-hover/item:scale-110 group-hover/item:bg-gray-600 transition-all duration-300">
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 font-medium font-mono">{info.label}</p>
                        {info.href !== '#' ? (
                          <a
                            href={info.href}
                            className="text-gray-300 hover:text-gray-100 transition-colors duration-200 font-mono"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-300 font-mono">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-8">
                <h4 className="text-lg font-semibold text-gray-100 mb-4 font-mono">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="lg"
                        onClick={() => window.open(social.href, '_blank')}
                        className={`flex items-center gap-2 bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-gray-100 hover:border-gray-500 transition-all duration-300 hover:scale-105 font-mono ${
                          visibleItems[contactInfo.length + index] ? 'animate-slide-in-up' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${(contactInfo.length + index) * 0.2}s` }}
                      >
                        <IconComponent size={20} />
                        {social.label}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:shadow-2xl hover:shadow-gray-900/50 transition-all duration-700 hover:scale-[1.02] animate-slide-in-right">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center mx-auto mb-6 group hover:scale-110 transition-transform duration-500">
                <span className="text-3xl animate-pulse group-hover:scale-110 transition-transform duration-300">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-100 mb-4 font-mono">
                Ready to Start a Project?
              </h3>
              <p className="text-gray-300 mb-6 font-mono">
                I'm always excited to work on innovative projects and collaborate with talented teams.
              </p>
              <Button
                onClick={() => window.open('mailto:porwalkamlesh5@gmail.com', '_blank')}
                className="bg-gray-700 hover:bg-gray-600 text-gray-100 border border-gray-600 hover:border-gray-500 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 font-mono"
              >
                Send Me an Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;