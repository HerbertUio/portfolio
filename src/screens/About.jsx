import { Eye, Github, Linkedin, Facebook, Instagram } from 'lucide-react';
import Profile from '../assets/perfil-2.jpg';
import CV from '../assets/projectsImages/CV-Herbert-Daniel.pdf'

function About() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/HerbertUio',
      color: 'hover:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/herbert-daniel-56575a304/',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/share/15gwHxbh9V/',
      color: 'hover:bg-blue-500'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/d_herbert_b?igsh=MXdoM3U3MmtsbHF4OA==',
      color: 'hover:bg-pink-600'
    }
  ];

  return (
    <section id="about" className="py-20 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img 
            src={Profile} 
            alt="foto de perfil" 
            className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg" 
            style={{ objectPosition: 'top' }}
          />
          {/* Social Media Links */}
          <div className="mt-6 flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${social.color} hover:text-white group`}
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6 transition-transform group-hover:rotate-12" />
              </a>
            ))}
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Herbert Bustamante
          </h1>
          <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">
          Soy un desarrollador full stack junior especializado en el backend con experiencia en .NET C# y Python, apasionado por la arquitectura limpia y el desarrollo de aplicaciones web backend escalables.
          </p>
          <a 
            href={CV} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold"
          >
            <Eye className="w-6 h-6 mr-2" />
            Ver CV
          </a>
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Sobre mí</h3>
        <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">
        Actualmente, estoy ampliando mis habilidades en el desarrollo web, explorando nuevas tecnologías para crear proyectos sólidos y eficientes. Además, busco constantemente mejorar mis conocimientos para enfrentar desafíos en el mundo del desarrollo de software.
        </p>
        <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Estudios</h3>
        <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300 text-lg">
          <li>Ingeniería de Sistemas - Universidad Adventista de Bolivia</li>
        </ul>
      </div>
    </section>
  );
}

export default About;