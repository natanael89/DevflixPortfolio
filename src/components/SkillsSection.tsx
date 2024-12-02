'use client'

import React from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import { 
    FaReact, 
    FaNodeJs, 
    FaDocker, 
    FaAws, 
    FaPython, 
    FaJava, 
    FaHtml5, 
    FaCss3Alt, 
    FaJs,
    FaGitAlt,
    FaBootstrap
} from 'react-icons/fa'
import { 
    SiTypescript, 
    SiNextdotjs, 
    SiTailwindcss, 
    SiMongodb, 
    SiGraphql,
    SiCsharp,
    SiCplusplus,
    SiC,
    SiMysql
} from 'react-icons/si'

const skillIcons: { [key: string]: JSX.Element } = {
    'React': <FaReact className="text-[#61DAFB]" />,
    'Node.js': <FaNodeJs className="text-[#339933]" />,
    'TypeScript': <SiTypescript className="text-[#3178C6]" />,
    'Next.js': <SiNextdotjs className="text-white" />,
    'TailwindCSS': <SiTailwindcss className="text-[#06B6D4]" />,
    'MongoDB': <SiMongodb className="text-[#47A248]" />,
    'GraphQL': <SiGraphql className="text-[#E10098]" />,
    'Docker': <FaDocker className="text-[#2496ED]" />,
    'AWS': <FaAws className="text-[#FF9900]" />,
    'Python': <FaPython className="text-[#3776AB]" />,
    'Java': <FaJava className="text-[#ED8B00]" />,
    'C#': <SiCsharp className="text-[#239120]" />,
    'C++': <SiCplusplus className="text-[#00599C]" />,
    'C': <SiC className="text-[#A8B9CC]" />,
    'HTML': <FaHtml5 className="text-[#E54D26]" />,
    'CSS': <FaCss3Alt className="text-[#1572B6]" />,
    'JavaScript': <FaJs className="text-[#F7DF1E]" />,
    'SQL': <SiMysql className="text-[#4479A1]" />,
    'Git': <FaGitAlt className="text-[#F05032]" />,
    'Bootstrap': <FaBootstrap className="text-[#7952B3]" />
}

const SkillsSection = () => {
    const { skills } = usePortfolio()

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill) => (
                <div 
                    key={skill.name}
                    className="group relative bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                    <div className="flex flex-col items-center space-y-4">
                        <div className="text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:transform group-hover:rotate-[360deg]">
                            {skillIcons[skill.name]}
                        </div>
                        <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                            <div 
                                className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                                style={{ 
                                    width: `${(skill.level / 10) * 100}%`,
                                    backgroundColor: getColorForLevel(skill.level)
                                }}
                            />
                        </div>
                        <span className="text-sm text-gray-400">
                            {skill.level}/10
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

const getColorForLevel = (level: number): string => {
    if (level >= 9) return '#22c55e' // green-500
    if (level >= 7) return '#3b82f6' // blue-500
    if (level >= 5) return '#eab308' // yellow-500
    return '#ef4444' // red-500
}

export default SkillsSection