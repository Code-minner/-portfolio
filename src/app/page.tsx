'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Menu, X, ExternalLink, ChevronRight, ArrowUpRight, Circle, CheckCircle2, Briefcase, Calendar, TrendingUp, Users, Code2, Rocket, Award, Zap, Target, Star, MessageSquare, Clock, Shield, Layers, BarChart3, Globe, Sparkles, Download, ArrowRight, CheckCircle, Moon, Sun, ChevronUp, Filter, Send, Github } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeTab, setActiveTab] = useState('frontend');
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [projectFilter, setProjectFilter] = useState('all');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);

      const sections = ['home', 'about', 'services', 'expertise', 'projects', 'process', 'testimonials', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const projects = [
    {
      title: "Netan Technology",
      category: "Corporate Platform",
      tags: ["corporate", "web"],
      description: "Technology company website showcasing services and projects. Built for speed, scalability, and ease of content management.",
      challenge: "Create a professional corporate presence with seamless content management while maintaining exceptional performance.",
      solution: "Architected a Next.js-based platform with headless CMS integration, optimized images, and edge caching for global performance.",
      results: [
        "Achieved 98 Lighthouse performance score",
        "Reduced load time to under 1.5 seconds",
        "Increased organic traffic by 150% in 6 months",
        "99.9% uptime with automated deployments"
      ],
      tech: ["Next.js 14", "React", "Tailwind CSS", "Vercel", "CMS"],
      link: "https://netantech.com",
      metrics: { performance: "98", users: "50K+", uptime: "99.9%" },
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      title: "Symbol Stores",
      category: "E-commerce Platform",
      tags: ["ecommerce", "web"],
      description: "Full-featured e-commerce platform with complete product catalog, shopping cart, and secure checkout flow.",
      challenge: "Build a scalable e-commerce solution that handles high traffic during peak sales while ensuring payment security.",
      solution: "Developed a React-based storefront with Node.js backend, PostgreSQL database, and integrated Stripe payment processing with real-time inventory management.",
      results: [
        "Processing 1000+ monthly transactions",
        "3.2% conversion rate (above industry average)",
        "Serving 5000+ active customers",
        "Zero payment processing errors"
      ],
      tech: ["React", "Node.js", "PostgreSQL", "Stripe API", "Redis"],
      link: "https://www.symbolstores.com",
      metrics: { transactions: "1K+/mo", conversion: "3.2%", revenue: "$50K+" },
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop"
    },
    {
      title: "Opulence Interiors",
      category: "Portfolio Website",
      tags: ["portfolio", "web"],
      description: "Marketing and portfolio site for an interior design company with gallery pages and project showcases.",
      challenge: "Create a visually stunning portfolio that showcases design work while maintaining fast load times despite image-heavy content.",
      solution: "Implemented Next.js with optimized image delivery, lazy loading, and progressive enhancement for smooth user experience.",
      results: [
        "10K+ monthly visitors",
        "250+ qualified leads generated",
        "A+ performance rating",
        "40% increase in project inquiries"
      ],
      tech: ["Next.js", "React", "Tailwind CSS", "Cloudinary", "SEO"],
      link: "https://www.opulenceinteriors.com.ng",
      metrics: { visitors: "10K+", leads: "250+", speed: "A+" },
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"
    }
  ];

  const services = [
    {
      icon: Globe,
      title: "Web Application Development",
      description: "Full-stack web applications built with modern frameworks and best practices",
      features: ["React & Next.js development", "RESTful API design", "Database architecture", "Cloud deployment"],
      popular: true
    },
    {
      icon: Code2,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration and inventory management",
      features: ["Shopping cart & checkout", "Payment gateway integration", "Admin dashboards", "Analytics & reporting"]
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Speed up existing applications and improve user experience",
      features: ["Core Web Vitals optimization", "SEO improvements", "Code refactoring", "Caching strategies"]
    },
    {
      icon: Layers,
      title: "API Development & Integration",
      description: "Robust backend systems and third-party service integration",
      features: ["REST & GraphQL APIs", "Microservices architecture", "Third-party integrations", "API documentation"]
    },
    {
      icon: Shield,
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines and infrastructure management",
      features: ["Docker containerization", "GitHub Actions pipelines", "Cloud infrastructure", "Monitoring & logging"]
    },
    {
      icon: Users,
      title: "Technical Consulting",
      description: "Expert guidance on technology choices and architecture decisions",
      features: ["Tech stack selection", "Architecture review", "Code audits", "Team mentoring"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content: "Opeyemi delivered our e-commerce platform ahead of schedule with exceptional quality. His attention to detail and proactive communication made the entire process smooth.",
      rating: 5,
      image: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Founder",
      company: "StartupXYZ",
      content: "Working with Opeyemi was a game-changer for our startup. He provided valuable insights that improved our product significantly. His technical expertise is outstanding.",
      rating: 5,
      image: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "CTO",
      company: "DesignHub",
      content: "Opeyemi's work exceeded expectations. The performance optimizations he implemented resulted in a 60% faster load time. Highly skilled and a pleasure to work with.",
      rating: 5,
      image: "ER"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "Understanding your goals, requirements, and target audience to create a comprehensive project roadmap.",
      deliverables: ["Project scope document", "Technical architecture", "Timeline & milestones"]
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes and interactive prototypes to visualize the solution before development begins.",
      deliverables: ["Wireframes", "Interactive prototype", "Design system"]
    },
    {
      number: "03",
      title: "Development",
      description: "Building your application with clean, maintainable code using modern best practices and regular updates.",
      deliverables: ["Working application", "Code documentation", "Regular progress updates"]
    },
    {
      number: "04",
      title: "Testing & Launch",
      description: "Rigorous testing across devices and browsers, followed by smooth deployment and post-launch support.",
      deliverables: ["QA testing report", "Deployment", "Launch support"]
    }
  ];

  const skillCategories = {
    frontend: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5/CSS3", level: 95 }
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "REST APIs", level: 95 },
      { name: "PostgreSQL", level: 85 },
      { name: "Firebase", level: 85 },
      { name: "GraphQL", level: 75 }
    ],
    devops: [
      { name: "Docker", level: 85 },
      { name: "CI/CD Pipelines", level: 90 },
      { name: "GitHub Actions", level: 90 },
      { name: "Vercel/Netlify", level: 95 },
      { name: "AWS", level: 75 },
      { name: "Linux", level: 80 }
    ]
  };

  const stats = [
    { number: "4+", label: "Years Experience", icon: Calendar },
    { number: "50+", label: "Projects Delivered", icon: Briefcase },
    { number: "99.9%", label: "Client Satisfaction", icon: TrendingUp },
    { number: "15+", label: "Technologies", icon: Code2 }
  ];

  const achievements = [
    { icon: Award, text: "50+ production apps" },
    { icon: TrendingUp, text: "60% avg performance boost" },
    { icon: Users, text: "5+ developers mentored" },
    { icon: Rocket, text: "Zero downtime deploys" }
  ];

  const experience = [
    {
      period: "2021 – Present",
      role: "Full Stack Developer",
      company: "Netan Technology",
      location: "Remote",
      achievements: [
        "Architected and deployed 20+ production-grade web applications serving thousands of users daily",
        "Implemented CI/CD pipelines with Docker and GitHub Actions, reducing deployment time by 60%",
        "Led technical integration for e-commerce platforms processing $500K+ in annual transactions",
        "Mentored junior developers and established coding standards across the engineering team"
      ]
    },
    {
      period: "2019 – 2021",
      role: "Freelance Web Developer",
      company: "Independent",
      location: "Remote",
      achievements: [
        "Delivered 30+ custom websites and applications for SMEs, startups, and agencies",
        "Built complete e-commerce solutions with payment integration and admin dashboards",
        "Achieved 95+ average client satisfaction score with 100% project completion rate"
      ]
    }
  ];

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on complexity. A simple website typically takes 2-3 weeks, while complex web applications can take 2-3 months. I provide detailed timelines during the planning phase."
    },
    {
      question: "Do you work with clients internationally?",
      answer: "Absolutely! I work with clients globally across different time zones. I'm flexible with meeting times and maintain excellent communication through Slack, email, and video calls."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in React, Next.js, Node.js, and TypeScript for modern web applications. I also have extensive experience with databases, DevOps tools, and cloud platforms."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes! I offer flexible maintenance packages including bug fixes, updates, performance monitoring, and feature additions. I believe in long-term partnerships with my clients."
    }
  ];

  const currentWork = [
    { project: "AI Analytics Dashboard", status: "In Progress", progress: 75 },
    { project: "Fitness Mobile App", status: "Planning", progress: 30 }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 1500);
  };

  const filteredProjects = projectFilter === 'all'
    ? projects
    : projects.filter(p => p.tags.includes(projectFilter));

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? darkMode
            ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-blue-500/10'
            : 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transform hover:rotate-12 transition-transform">
                <span className="text-white font-bold text-xl">OB</span>
              </div>
              <span className="text-xl font-bold">Opeyemi Boluwatife</span>
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-4 py-2 rounded-lg transition-all ${activeSection === item.toLowerCase()
                      ? darkMode
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-50 text-blue-600 font-medium'
                      : darkMode
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`ml-2 p-2 rounded-lg transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a
                href="mailto:boluwatifeagbo@gmail.com"
                className="ml-4 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-medium shadow-lg shadow-blue-600/30"
              >
                Let's Talk
              </a>
            </div>

            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`lg:hidden border-t shadow-lg ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'}`}>
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left px-6 py-4 transition-colors ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-110"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* Hero Section */}
      <section id="home" className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-blue-50/30 to-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-600/10 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Circle className="w-2 h-2 fill-current animate-pulse" />
                <span>Available for new opportunities</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Full-Stack Developer
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Building Digital Excellence
                </span>
              </h1>
              <p className={`text-xl mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Crafting scalable, high-performance web applications with 4+ years of expertise in React, Next.js, and Node.js.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center space-x-2 font-medium shadow-lg shadow-blue-600/30 hover:shadow-xl transform hover:scale-105"
                >
                  <span>View My Work</span>
                  <ArrowUpRight size={18} />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`px-8 py-4 rounded-lg transition-all flex items-center space-x-2 font-medium border-2 transform hover:scale-105 ${darkMode
                      ? 'bg-gray-800 border-gray-700 hover:border-gray-600'
                      : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                >
                  <span>Get in Touch</span>
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="flex flex-wrap gap-4">
                {achievements.map((achievement, idx) => (
                  <div key={idx} className={`flex items-center space-x-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <achievement.icon className="text-blue-600" size={16} />
                    <span>{achievement.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border-2 transition-all transform hover:scale-105 hover:shadow-xl ${darkMode
                      ? 'bg-gray-800 border-gray-700 hover:border-blue-600'
                      : 'bg-white border-gray-100 hover:border-blue-600'
                    }`}
                >
                  <stat.icon className="text-blue-600 mb-3" size={24} />
                  <div className="text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {stat.number}
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Work Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className={`p-8 rounded-2xl border-2 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-blue-100'}`}>
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold flex items-center">
                  <Rocket className="mr-3 text-blue-600" size={28} />
                  Currently Working On
                </h3>
                <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Active projects in development</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                Available for hire
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {currentWork.map((work, idx) => (
                <div key={idx} className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-lg">{work.project}</h4>
                    <span className="text-sm text-blue-600 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                      {work.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Progress</span>
                      <span className="font-bold text-blue-600">{work.progress}%</span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-500"
                        style={{ width: `${work.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Me</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-6">
              Passionate About Building <span className="text-blue-600">Great Software</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              A detail-oriented developer who thrives on solving complex problems
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className={`p-8 rounded-2xl shadow-sm border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <p className={`leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  With over 4 years of professional experience, I specialize in building high-performance web applications. Currently at Netan Technology, I've worked on everything from e-commerce platforms to government projects with strict security requirements.
                </p>
                <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I'm driven by a passion for clean code, performance optimization, and continuous learning. I believe in building exceptional user experiences that drive business results.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className={`p-6 rounded-xl transform hover:scale-105 transition-transform ${darkMode ? 'bg-gradient-to-br from-blue-900/30 to-blue-800/20' : 'bg-gradient-to-br from-blue-50 to-blue-100/50'}`}>
                  <Award className="text-blue-600 mb-3" size={28} />
                  <h4 className="font-bold mb-2">Research-Oriented</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Expert at identifying the right tech</p>
                </div>
                <div className={`p-6 rounded-xl transform hover:scale-105 transition-transform ${darkMode ? 'bg-gradient-to-br from-purple-900/30 to-purple-800/20' : 'bg-gradient-to-br from-purple-50 to-purple-100/50'}`}>
                  <Zap className="text-purple-600 mb-3" size={28} />
                  <h4 className="font-bold mb-2">Fast Learner</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Quickly adapts to new frameworks</p>
                </div>
                <div className={`p-6 rounded-xl transform hover:scale-105 transition-transform ${darkMode ? 'bg-gradient-to-br from-green-900/30 to-green-800/20' : 'bg-gradient-to-br from-green-50 to-green-100/50'}`}>
                  <Target className="text-green-600 mb-3" size={28} />
                  <h4 className="font-bold mb-2">Results-Driven</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Committed to exceptional outcomes</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Core Values</h3>
              <div className="space-y-4">
                {['Clean, maintainable code', 'Performance-first approach', 'User-centric design', 'Continuous improvement', 'Team collaboration', 'Ownership mindset'].map((value, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle2 size={20} className="flex-shrink-0" />
                    <span>{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-blue-100 mb-4">Ready to discuss your project?</p>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all font-medium transform hover:scale-105"
                >
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-24 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Services</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-6">What I Can Do For You</h2>
            <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Comprehensive development services to bring your digital vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`group p-8 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${service.popular
                    ? darkMode
                      ? 'border-blue-600 bg-gray-900 shadow-xl shadow-blue-600/20'
                      : 'border-blue-600 bg-white shadow-xl shadow-blue-600/10'
                    : darkMode
                      ? 'border-gray-700 bg-gray-900 hover:border-blue-600 hover:shadow-xl'
                      : 'border-gray-100 bg-white hover:border-blue-600 hover:shadow-xl'
                  }`}
              >
                {service.popular && (
                  <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium mb-4">
                    Most Popular
                  </div>
                )}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors ${darkMode ? 'bg-gray-800' : 'bg-blue-50'
                  }`}>
                  <service.icon className={`group-hover:text-white transition-colors ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className={`flex items-start text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <CheckCircle className="text-blue-600 flex-shrink-0 mr-2 mt-0.5" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium inline-flex items-center space-x-2 transform hover:scale-105 shadow-lg"
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Expertise</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-6">Technical Proficiency</h2>
            <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Deep expertise across the modern web development stack
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className={`inline-flex p-1 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              {Object.keys(skillCategories).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === category
                      ? darkMode
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-blue-600 shadow-sm'
                      : darkMode
                        ? 'text-gray-400 hover:text-gray-200'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className={`p-8 rounded-2xl shadow-sm border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
              <div className="space-y-6">
                {skillCategories[activeTab as keyof typeof skillCategories].map((skill, idx) => (
                  <div key={idx} className="transform hover:scale-102 transition-transform">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="font-bold text-blue-600">{skill.level}%</span>
                    </div>
                    <div className={`h-3 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`mt-12 p-8 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-gray-800 to-blue-900/20' : 'bg-gradient-to-br from-gray-50 to-blue-50'}`}>
            <h3 className="text-2xl font-bold mb-6 text-center">Additional Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {['Git', 'Jira', 'Figma', 'Postman', 'Stripe', 'Supabase', 'Redis', 'Jest', 'React Native', 'Webpack', 'Vite', 'SEO'].map((tech) => (
                <div key={tech} className={`p-4 rounded-xl text-center font-medium transition-all transform hover:scale-105 hover:shadow-md border ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-blue-600' : 'bg-white border-gray-100 hover:border-blue-600'
                  }`}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-24 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-6">Featured Projects</h2>
            <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Real-world applications delivering measurable business value
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className={`inline-flex items-center space-x-2 p-1 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <Filter className="ml-2 text-gray-400" size={20} />
              {[
                { value: 'all', label: 'All Projects' },
                { value: 'web', label: 'Web Apps' },
                { value: 'ecommerce', label: 'E-commerce' },
                { value: 'corporate', label: 'Corporate' }
              ].map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setProjectFilter(filter.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${projectFilter === filter.value
                      ? 'bg-blue-600 text-white'
                      : darkMode
                        ? 'text-gray-400 hover:text-gray-200'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className={`group rounded-2xl overflow-hidden shadow-sm border-2 transition-all duration-300 transform hover:scale-[1.02] ${darkMode
                    ? 'bg-gray-900 border-gray-700 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-500/20'
                    : 'bg-white border-gray-100 hover:border-blue-600 hover:shadow-2xl'
                  }`}
              >
                <div className="grid lg:grid-cols-5 gap-8 p-8">
                  <div className="lg:col-span-3 space-y-6">
                    <div>
                      <div className="inline-block bg-blue-600/10 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                        {project.category}
                      </div>
                      <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold mb-2">Challenge</h4>
                        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{project.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Solution</h4>
                        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{project.solution}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className={`px-4 py-2 rounded-lg text-sm font-medium ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
                          }`}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group/link"
                    >
                      <span>View Live Project</span>
                      <ExternalLink size={18} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  </div>

                  <div className="lg:col-span-2 space-y-4">
                    <div className={`rounded-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className={`p-6 rounded-xl ${darkMode ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
                      <h4 className="font-bold mb-4 flex items-center">
                        <BarChart3 className="mr-2 text-blue-600" size={20} />
                        Key Metrics
                      </h4>
                      <div className="space-y-3">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center">
                            <span className={`capitalize ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{key}</span>
                            <span className="font-bold text-lg text-blue-600">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                      <h4 className="font-bold mb-3 flex items-center">
                        <Sparkles className="mr-2 text-purple-600" size={20} />
                        Results
                      </h4>
                      <ul className="space-y-2">
                        {project.results.map((result, i) => (
                          <li key={i} className={`flex items-start text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            <CheckCircle className="text-green-600 flex-shrink-0 mr-2 mt-0.5" size={16} />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-12 text-center p-8 rounded-2xl border ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-100'}`}>
            <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
            <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>I've worked on 50+ projects across various industries and technologies</p>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium inline-flex items-center space-x-2 transform hover:scale-105"
            >
              <span>Let's Discuss Your Project</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Process</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-6">How I Work</h2>
            <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              A proven methodology for delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className={`p-8 rounded-2xl border-2 transition-all h-full transform hover:scale-105 hover:shadow-xl ${darkMode
                    ? 'bg-gray-800 border-gray-700 hover:border-blue-600'
                    : 'bg-white border-gray-100 hover:border-blue-600'
                  }`}>
                  <div className="text-5xl font-bold text-blue-600/10 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{step.description}</p>
                  <div>
                    <p className="text-sm font-semibold mb-2">Deliverables:</p>
                    <ul className="space-y-1">
                      {step.deliverables.map((item, i) => (
                        <li key={i} className={`text-sm flex items-start ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <ChevronRight className="text-blue-600 flex-shrink-0 mr-1 mt-0.5" size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-blue-900/30 to-blue-800/20' : 'bg-gradient-to-br from-blue-50 to-blue-100/50'}`}>
              <Clock className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Quick iterations and regular updates keep projects moving forward efficiently</p>
            </div>
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-purple-900/30 to-purple-800/20' : 'bg-gradient-to-br from-purple-50 to-purple-100/50'}`}>
              <MessageSquare className="text-purple-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Clear Communication</h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Regular updates and transparent communication throughout the project lifecycle</p>
            </div>
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-green-900/30 to-green-800/20' : 'bg-gradient-to-br from-green-50 to-green-100/50'}`}>
              <Shield className="text-green-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Rigorous testing and quality assurance ensure rock-solid applications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`py-24 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-6">What Clients Say</h2>
            <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Don't just take my word for it - hear from satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className={`p-8 rounded-2xl shadow-sm border transition-all transform hover:scale-105 hover:shadow-xl ${darkMode
                  ? 'bg-gray-900 border-gray-700 hover:border-blue-600'
                  : 'bg-white border-gray-100 hover:border-blue-100'
                }`}>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                  ))}
                </div>
                <p className={`mb-6 leading-relaxed italic ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{testimonial.role}</div>
                    <div className="text-sm text-blue-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-12 text-center p-8 rounded-2xl border ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-100'}`}>
            <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Want to work together?</p>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium inline-flex items-center space-x-2 transform hover:scale-105"
            >
              <span>Start Your Project</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Experience</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3">Professional Journey</h2>
          </div>

          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full hidden lg:block" />
                <div className={`lg:ml-12 p-8 rounded-2xl border-2 transition-all transform hover:scale-[1.02] hover:shadow-xl ${darkMode
                    ? 'bg-gray-800 border-gray-700 hover:border-blue-600'
                    : 'bg-white border-gray-100 hover:border-blue-600'
                  }`}>
                  <div className="flex flex-wrap items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                      <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
                      <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{exp.location}</p>
                    </div>
                    <div className="bg-blue-600/10 text-blue-600 px-4 py-2 rounded-lg font-medium">
                      {exp.period}
                    </div>
                  </div>
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <ChevronRight className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                        <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-24 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-6">Frequently Asked Questions</h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Quick answers to common questions about working with me
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`p-6 rounded-xl border transition-all hover:shadow-md transform hover:scale-[1.02] ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-100'
                }`}>
                <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="mb-6 text-blue-100">I'm happy to discuss your specific needs and answer any questions you may have</p>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all font-medium inline-flex items-center space-x-2 transform hover:scale-105"
            >
              <span>Get in Touch</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Let's Build Something Great Together</h2>
            <p className="text-xl text-blue-100 mb-12">
              I&apos;m always interested in hearing about new projects and opportunities. Whether you need a complete web application, want to optimize an existing project, or just want to chat about tech, I&apos;d love to hear from you!
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <a
                href="mailto:boluwatifeagbo@gmail.com"
                className="flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all border border-white/20"
              >
                <Mail className="mr-3" size={24} />
                <div className="text-left">
                  <div className="text-sm text-blue-100">Email</div>
                  <div className="font-medium">boluwatifeagbo@gmail.com</div>
                </div>
              </a>
              <a
                href="tel:+2349045900732"
                className="flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all border border-white/20"
              >
                <Phone className="mr-3" size={24} />
                <div className="text-left">
                  <div className="text-sm text-blue-100">Phone</div>
                  <div className="font-medium">+234 904 590 0732</div>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/opeyemiboluwatife"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all border border-white/20"
              >
                <Linkedin className="mr-3" size={24} />
                <div className="text-left">
                  <div className="text-sm text-blue-100">LinkedIn</div>
                  <div className="font-medium">Connect with me</div>
                </div>
              </a>
              <a
                href="https://wa.me/2349045900732"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all border border-white/20"
              >
                <Phone className="mr-3" size={24} />
                <div className="text-left">
                  <div className="text-sm text-blue-100">WhatsApp</div>
                  <div className="font-medium">Message me</div>
                </div>
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Open to Opportunities</h3>
              <p className="text-blue-100 mb-6">
                Currently accepting freelance projects and full-time positions. I&apos;m particularly interested in challenging roles where I can contribute to innovative products and work with talented teams.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:boluwatifeagbo@gmail.com"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all font-medium"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRight size={18} />
                </a>
                <a
                  href="/Opeyemi-Boluwatife-CV.pdf"
                  download="Opeyemi-Boluwatife-CV.pdf"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all font-medium border border-white/20"
                >
                  <Download size={18} />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">OB</span>
                </div>
                <span className="text-xl font-bold">Opeyemi Boluwatife</span>
              </div>
              <p className="text-gray-400">
                Full-Stack Developer building scalable web and mobile applications
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Services', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="space-y-2 text-gray-400">
                <p>boluwatifeagbo@gmail.com</p>
                <p>+234 904 590 0732</p>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>© 2025 Opeyemi Boluwatife. All rights reserved.</p>
            <p className="text-sm mt-4 md:mt-0">Built with React, Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}