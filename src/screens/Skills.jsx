import { FaJs, FaHtml5, FaPhp, FaReact, FaCss3, FaPython, FaCode } from 'react-icons/fa';
import { SiMysql, SiTailwindcss } from 'react-icons/si';

function Skills() {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="w-8 h-8 text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3 className='w-8 h-8 text-blue-500' />},
    { name: 'JavaScript', icon: <FaJs className="w-8 h-8 text-yellow-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8 text-teal-500" /> },
    { name: 'React', icon: <FaReact className="w-8 h-8 text-blue-500" /> },
    { name: 'C#', icon: <FaCode className="w-8 h-8 text-green-600" /> },
    { name: 'Python', icon: <FaPython className="w-8 h-8 text-blue-600" /> },
    { name: 'PHP', icon: <FaPhp className="w-8 h-8 text-indigo-600" /> },
    { name: 'MySQL', icon: <SiMysql className="w-8 h-8 text-blue-700" /> },
  ];

  return (
    <section id="skills" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Habilidades</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            {skill.icon}
            <span className="text-lg">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
