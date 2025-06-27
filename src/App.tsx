import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Smartphone, 
  Palette, 
  Activity, 
  Zap,
  Shield,
  Sparkles,
  Watch,
  Bluetooth,
  Battery,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Menu,
  X,
  Play,
  Waves,
  Brain,
  Gem,
  Github,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentColor, setCurrentColor] = useState(0);

  const moodColors = [
    'from-blue-500 to-cyan-400',
    'from-purple-500 to-pink-400',
    'from-green-500 to-teal-400',
    'from-orange-500 to-red-400',
    'from-indigo-500 to-purple-400'
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prev) => (prev + 1) % moodColors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-pink-900/20"></div>
        
        {/* Floating Orbs with Color Changes */}
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r ${moodColors[currentColor]} opacity-10 rounded-full blur-3xl animate-pulse transition-all duration-3000`}></div>
        <div className={`absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r ${moodColors[(currentColor + 1) % moodColors.length]} opacity-10 rounded-full blur-3xl animate-pulse delay-1000 transition-all duration-3000`}></div>
        <div className={`absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-r ${moodColors[(currentColor + 2) % moodColors.length]} opacity-10 rounded-full blur-3xl animate-pulse delay-2000 transition-all duration-3000`}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Animated Particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-gradient-to-r ${moodColors[i % moodColors.length]} rounded-full animate-ping opacity-30`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Header */}
      <header className={`border-b border-slate-800/50 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-slate-900/95 shadow-2xl' : 'bg-slate-900/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2 group">
              <div className={`w-8 h-8 bg-gradient-to-br ${moodColors[currentColor]} rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300`}>
                <Heart className="w-5 h-5 text-white animate-pulse" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                MoodSync
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {['ACCUEIL', 'PRODUIT', 'TECHNOLOGIE', 'ÉQUIPE', 'CONTACT'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-slate-300 hover:text-white transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="text-slate-300 hover:text-white transition-colors duration-300 hidden md:block">
                Connexion
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                Précommander
              </button>
              <button 
                className="md:hidden text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-4 space-y-2 bg-slate-800/50 backdrop-blur-xl">
            {['ACCUEIL', 'PRODUIT', 'TECHNOLOGIE', 'ÉQUIPE', 'CONTACT'].map((item) => (
              <a key={item} href="#" className="block py-2 text-slate-300 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className={`bg-gradient-to-r ${moodColors[currentColor]} bg-clip-text text-transparent animate-gradient-x transition-all duration-3000`}>
                  MoodSync
                </span><br />
                Le Bracelet de Mode<br />
                <span className="text-slate-300">Connecté</span>
              </h1>
            </div>
            <div className="animate-fade-in-up delay-200">
              <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                Révélez votre éclat, apaisez votre âme. Un bracelet intelligent qui transforme vos émotions 
                en symphonie de couleurs tout en favorisant votre équilibre psychologique.
              </p>
            </div>
            <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 font-semibold flex items-center justify-center">
                Précommander maintenant
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group border border-slate-600 hover:border-purple-500 px-8 py-4 rounded-lg transition-all duration-300 hover:bg-purple-500/10 backdrop-blur-sm flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Voir la démo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 transform hover:scale-[1.02]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  {/* Bracelet Visualization */}
                  <div className="absolute inset-0 rounded-full border-4 border-slate-700/50"></div>
                  <div className={`absolute inset-4 rounded-full bg-gradient-to-r ${moodColors[currentColor]} opacity-20 animate-pulse transition-all duration-3000`}></div>
                  <div className={`absolute inset-8 rounded-full bg-gradient-to-r ${moodColors[currentColor]} opacity-40 animate-pulse delay-500 transition-all duration-3000`}></div>
                  <div className="absolute inset-12 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center">
                    <Watch className={`w-16 h-16 text-gradient-to-r ${moodColors[currentColor].split(' ')[1]} animate-pulse`} />
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute top-4 right-4 animate-bounce delay-1000">
                    <Heart className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="absolute bottom-4 left-4 animate-bounce delay-2000">
                    <Activity className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="absolute top-1/2 left-0 animate-bounce delay-3000">
                    <Sparkles className="w-6 h-6 text-yellow-400" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold mb-4">
                  Où la <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">mode</span> rencontre l'<span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">âme</span>
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  MoodSync utilise des capteurs avancés pour détecter votre état émotionnel et transforme 
                  ces données en magnifiques jeux de lumière LED qui s'adaptent à votre humeur et votre style.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded-lg p-4 backdrop-blur-sm border border-slate-700/30 hover:border-purple-500/30 transition-all duration-300">
                    <Heart className="w-8 h-8 text-red-400 mb-2" />
                    <h4 className="font-semibold mb-1">Détection Cardiaque</h4>
                    <p className="text-sm text-slate-400">Moniteur de rythme cardiaque intégré</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 backdrop-blur-sm border border-slate-700/30 hover:border-blue-500/30 transition-all duration-300">
                    <Activity className="w-8 h-8 text-blue-400 mb-2" />
                    <h4 className="font-semibold mb-1">Capteurs de Mouvement</h4>
                    <p className="text-sm text-slate-400">Accéléromètres et gyroscopes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">
              Caractéristiques <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Principales</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Une technologie révolutionnaire au service de votre bien-être et de votre style
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { 
                icon: Palette, 
                title: 'Personnalisation Visuelle', 
                desc: 'LED haute résolution avec motifs et couleurs dynamiques contrôlés via application mobile.',
                color: 'bg-purple-600',
                gradient: 'from-purple-500 to-pink-500'
              },
              { 
                icon: Brain, 
                title: 'Détection Intelligente', 
                desc: 'Capteurs de mouvement et moniteur cardiaque analysent votre activité émotionnelle en temps réel.',
                color: 'bg-blue-600',
                gradient: 'from-blue-500 to-cyan-500'
              },
              { 
                icon: Waves, 
                title: 'Stabilisation Psychique', 
                desc: 'Séquences de couleurs apaisantes basées sur la chromothérapie pour favoriser le calme.',
                color: 'bg-green-600',
                gradient: 'from-green-500 to-teal-500'
              },
              { 
                icon: Gem, 
                title: 'Design Haut de Gamme', 
                desc: 'Matériaux premium : acier inoxydable, silicone hypoallergénique ou cuir vegan.',
                color: 'bg-orange-600',
                gradient: 'from-orange-500 to-red-500'
              },
              { 
                icon: Smartphone, 
                title: 'Application Connectée', 
                desc: 'Personnalisation des motifs et suivi des tendances émotionnelles pour une meilleure conscience de soi.',
                color: 'bg-indigo-600',
                gradient: 'from-indigo-500 to-purple-500'
              },
              { 
                icon: Battery, 
                title: 'Autonomie Longue Durée', 
                desc: '7 jours d\'autonomie avec recharge rapide USB-C et connectivité Bluetooth 5.0.',
                color: 'bg-teal-600',
                gradient: 'from-teal-500 to-green-500'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center group animate-fade-in-up hover:transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-current/25 transition-all duration-300 transform group-hover:rotate-3`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Cas d'<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Utilisation</span></h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Mode et Expression',
                desc: 'Changez les motifs pour assortir votre bracelet à votre tenue ou laissez-le refléter votre humeur pour une touche d\'authenticité.',
                image: 'fashion',
                color: 'purple'
              },
              {
                icon: Heart,
                title: 'Bien-Être au Quotidien',
                desc: 'Le bracelet détecte votre stress et diffuse des couleurs relaxantes pour vous recentrer lors de journées difficiles.',
                image: 'wellness',
                color: 'blue'
              },
              {
                icon: Gem,
                title: 'Cadeau Idéal',
                desc: 'Un accessoire unique qui allie style et soin personnel, parfait pour les amateurs de mode et de technologie.',
                image: 'gift',
                color: 'pink'
              }
            ].map((useCase, index) => (
              <div 
                key={index}
                className={`bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-${useCase.color}-500/50 transition-all duration-300 transform hover:scale-105 group animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r from-${useCase.color}-500 to-${useCase.color}-600 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-current/25 transition-all duration-300`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
                  {useCase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">Notre Équipe</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
              Les visionnaires passionnés derrière MoodSync, dédiés à révolutionner 
              l'intersection entre la mode, la technologie et le bien-être.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                initials: 'EM', 
                name: 'Emma Martin', 
                role: 'CEO & Fondatrice', 
                desc: 'Experte en mode connectée avec 12 ans d\'expérience dans l\'innovation technologique.',
                gradient: 'from-purple-500 to-pink-600'
              },
              { 
                initials: 'LD', 
                name: 'Lucas Dubois', 
                role: 'CTO', 
                desc: 'Ingénieur en IA spécialisé dans les capteurs biométriques et l\'analyse émotionnelle.',
                gradient: 'from-blue-500 to-cyan-600'
              },
              { 
                initials: 'CR', 
                name: 'Camille Rousseau', 
                role: 'Directrice Design', 
                desc: 'Designer primée focalisée sur l\'expérience utilisateur et l\'esthétique moderne.',
                gradient: 'from-green-500 to-teal-600'
              },
              { 
                initials: 'AM', 
                name: 'Antoine Moreau', 
                role: 'VP Innovation', 
                desc: 'Spécialiste en chromothérapie et bien-être numérique avec expertise en neurosciences.',
                gradient: 'from-orange-500 to-red-600'
              }
            ].map((member, index) => (
              <div 
                key={index}
                className="text-center group animate-fade-in-up hover:transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-32 h-32 bg-gradient-to-br ${member.gradient} rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold group-hover:shadow-2xl group-hover:shadow-current/25 transition-all duration-300 transform group-hover:rotate-3`}>
                  {member.initials}
                </div>
                <h3 className="text-xl font-semibold mb-1 group-hover:text-purple-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-purple-400 mb-2 font-medium">{member.role}</p>
                <p className="text-sm text-slate-400 mb-4 group-hover:text-slate-300 transition-colors duration-300">
                  {member.desc}
                </p>
                <div className="flex justify-center space-x-3">
                  <Instagram className="w-5 h-5 text-slate-400 hover:text-purple-400 cursor-pointer transition-all duration-300 transform hover:scale-110" />
                  <Twitter className="w-5 h-5 text-slate-400 hover:text-purple-400 cursor-pointer transition-all duration-300 transform hover:scale-110" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Chose Section */}
      <section className="py-20 bg-slate-800/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">Pourquoi MoodSync est <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Unique</span></h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto animate-fade-in-up delay-200">
              Nos choix technologiques et de design sont guidés par l'innovation, l'élégance et l'efficacité thérapeutique. 
              Découvrez pourquoi MoodSync redéfinit l'accessoire connecté.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Innovation Technologique',
                desc: 'Nous avons choisi l\'IA et les capteurs biométriques avancés pour créer une expérience utilisateur révolutionnaire et intuitive.',
                features: ['Intelligence artificielle intégrée', 'Capteurs biométriques de pointe', 'Algorithmes d\'apprentissage adaptatif'],
                color: 'purple'
              },
              {
                icon: Shield,
                title: 'Bien-Être Scientifique',
                desc: 'Basé sur des recherches en chromothérapie et neurosciences, MoodSync offre un soutien psychologique prouvé scientifiquement.',
                features: ['Chromothérapie validée cliniquement', 'Approche neuroscientifique', 'Protocoles de relaxation certifiés'],
                color: 'blue'
              },
              {
                icon: Gem,
                title: 'Excellence Artisanale',
                desc: 'Conçu avec des matériaux premium et un design intemporel pour allier durabilité, confort et élégance absolue.',
                features: ['Matériaux hypoallergéniques', 'Design ergonomique étudié', 'Finitions haut de gamme'],
                color: 'pink'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-${item.color}-500/50 transition-all duration-300 transform hover:scale-105 group animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-current/25 transition-all duration-300`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition-colors duration-300">
                  {item.desc}
                </p>
                <ul className="text-sm text-slate-400 space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center group-hover:text-slate-300 transition-colors duration-300">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 rounded-xl p-8 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 animate-fade-in-up delay-600">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                L'Avenir du Bien-Être Connecté
              </h3>
              <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
                MoodSync n'est pas seulement un bijou technologique, c'est un compagnon de vie qui transforme 
                vos émotions en expression visuelle tout en vous guidant vers l'équilibre psychologique. 
                Chaque moment devient une expérience esthétique et apaisante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-12 backdrop-blur-sm">
            <h2 className="text-4xl font-bold mb-6">
              Rejoignez la révolution <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">MoodSync</span>
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Portez votre humeur, vivez votre équilibre. Soyez parmi les premiers à découvrir l'avenir du bien-être connecté.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 font-semibold flex items-center justify-center">
                Précommander - Édition Limitée
                <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </button>
              <button className="group border border-purple-500 hover:border-pink-500 px-8 py-4 rounded-lg transition-all duration-300 hover:bg-purple-500/10 backdrop-blur-sm">
                Découvrir la technologie
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-slate-800/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4 group">
                <div className={`w-8 h-8 bg-gradient-to-br ${moodColors[currentColor]} rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                  <Heart className="w-5 h-5 text-white animate-pulse" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  MoodSync
                </span>
              </div>
              <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
                Le bracelet connecté révolutionnaire qui transforme vos émotions en art visuel 
                tout en favorisant votre équilibre psychologique et votre bien-être quotidien.
              </p>
              <div className="flex space-x-4">
                {[Instagram, Twitter, Github].map((Icon, index) => (
                  <div 
                    key={index}
                    className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>
            
            {[
              {
                title: 'Produit',
                links: ['Caractéristiques', 'Technologie', 'Application', 'Compatibilité', 'Support']
              },
              {
                title: 'Entreprise',
                links: ['À propos', 'Équipe', 'Carrières', 'Presse', 'Partenaires']
              },
              {
                title: 'Support',
                links: ['Centre d\'aide', 'Documentation', 'Garantie', 'Contact']
              }
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4 text-white">{section.title}</h4>
                <ul className="space-y-3 text-slate-400">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-slate-800/50 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-slate-400">
                <p>&copy; 2025 MoodSync. Tous droits réservés.</p>
                <div className="flex space-x-6">
                  {['Politique de confidentialité', 'Conditions d\'utilisation', 'Cookies'].map((link, index) => (
                    <a key={index} href="#" className="hover:text-white transition-colors duration-300">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-slate-400 mt-4 md:mt-0">
                <div className="flex items-center space-x-1 hover:text-white transition-colors duration-300">
                  <MapPin className="w-4 h-4" />
                  <span>Paris, France</span>
                </div>
                <div className="flex items-center space-x-1 hover:text-white transition-colors duration-300">
                  <Clock className="w-4 h-4" />
                  <span>Support 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;