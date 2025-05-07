"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, User, Briefcase, Code, Award, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  icon: React.ReactNode
  href: string
}

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState<string>("home")
  const [isMobile, setIsMobile] = useState(false)

  const navItems: NavItem[] = [
    { name: "Home", icon: <Home className="h-5 w-5" />, href: "#home" },
    { name: "About", icon: <User className="h-5 w-5" />, href: "#about" },
    { name: "Experience", icon: <Briefcase className="h-5 w-5" />, href: "#experience" },
    { name: "Skills", icon: <Code className="h-5 w-5" />, href: "#skills" },
    { name: "Achievements", icon: <Award className="h-5 w-5" />, href: "#achievements" },
    { name: "Contact", icon: <Mail className="h-5 w-5" />, href: "#contact" },
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        return rect.top <= 200 && rect.bottom >= 200
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [navItems])

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn("fixed left-4 top-[25%] z-50 flex flex-col items-center gap-4", isMobile && "left-2")}
    >
      <div className="flex flex-col gap-3">
        {navItems.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <a
              href={item.href}
              className={cn(
                "nav-item flex items-center justify-center h-11 w-11 rounded-full shadow-lg transition-all",
                "bg-gray-800 hover:bg-gray-700 border group",
                activeSection === item.href.substring(1)
                  ? "border-green-500 text-green-400"
                  : "border-gray-700 text-gray-300 hover:border-green-500/50",
              )}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById(item.href.substring(1))
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              aria-label={`Navigate to ${item.name} section`}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              <span className="label opacity-0 max-w-0 overflow-hidden whitespace-nowrap">{item.name}</span>
            </a>
          </motion.div>
        ))}
      </div>

      <style jsx global>{`
        .nav-item {
          transition: all 0.3s ease;
        }
        
        .nav-item:hover {
          width: auto;
          padding-left: 0.75rem;
          padding-right: 1rem;
          border-radius: 9999px;
          justify-content: flex-start;
        }
        
        .nav-item:hover .label {
          opacity: 1;
          max-width: 100px;
          margin-left: 0.5rem;
          transition: all 0.3s ease;
        }
      `}</style>
    </motion.div>
  )
}
