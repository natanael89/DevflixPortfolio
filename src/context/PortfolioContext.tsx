'use client'

import React, { createContext } from "react"

export interface Project {
    github: React.JSX.Element
    demo: React.JSX.Element
    id: number
    title: string
    image: string
    description: string
}

interface Skill {
    name: string
    level: number
}

interface PortfolioContextType {
    projects: Project[]
    skills: Skill[]
    addProject: (project: Project) => void
    addSkill: (skill: Skill) => void
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined)

export const usePortfolio = () => {
    const context = React.useContext(PortfolioContext)
    if (!context) {
        throw new Error("usePortfolio must be used within a PortfolioProvider")
    }
    return context
}

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const [projects, setProjects] = React.useState<Project[]>([
       {
           id: 1,
           title: "E-commerce Platform",
           image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
           description: "Full-stack e-commerce solution with React and Node.js"
       },
       {
           id: 2,
           title: "AI Image Generator",
           image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
           description: "AI-powered image generation using DALL-E API"
       },
       {
           id: 3,
           title: "Weather Dashboard",
           image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
           description: "Real-time weather tracking with OpenWeather API"
       },
       {
           id: 4,
           title: "Social Media App",
           image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
           description: "Social networking platform with real-time chat"
       },
       {
           id: 5,
           title: "Portfolio Website",
           image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
           description: "Personal portfolio showcasing projects and skills"
       },
       {
           id: 6,
           title: "Task Management",
           image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
           description: "Collaborative task management application"
       }
   ])

   const [skills, setSkills] = React.useState<Skill[]>([
       {
           name: "React",
           level: 9
       },
       {
           name: "Node.js",
           level: 8
       },
       {
           name: "TypeScript",
           level: 8
       },
       {
           name: "Next.js",
           level: 7
       },
       {
           name: "TailwindCSS",
           level: 9
       },
       {
           name: "MongoDB",
           level: 7
       },
       {
           name: "GraphQL",
           level: 6
       },
       {
           name: "Docker",
           level: 7
       },
       {
           name: "AWS",
           level: 6
       },
       {
           name: "Python",
           level: 8
       },
       {
           name: "Java",
           level: 7
       },
       {
           name: "C#",
           level: 6
       },
       {
           name: "C++",
           level: 5
       },
       {
           name: "C",
           level: 4
       },
       {
           name: "HTML",
           level: 9
       },
       {
           name: "CSS",
           level: 9
       },
       {
           name: "JavaScript",
           level: 8
       },
       {
           name: "SQL",
           level: 7
       },
       {
           name: "Git",
           level: 8
       },
       {
           name: "Bootstrap",
           level: 7
       }
   ])

   const addProject = (project: Project) => {
       setProjects([...projects, project])
   }

   const addSkill = (skill: Skill) => {
       setSkills([...skills, skill])
   }

   return (
       <PortfolioContext.Provider value={{ projects, skills, addProject, addSkill }}>
           {children}
       </PortfolioContext.Provider>
   )
}