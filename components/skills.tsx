"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Terminal, Server, Code, FileCode, Bug, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Skills() {
  const skills = [
    { name: "Penetration Testing", icon: <Shield className="h-5 w-5" />, level: 90 },
    { name: "Vulnerability Assessment", icon: <Bug className="h-5 w-5" />, level: 85 },
    { name: "CTF Competitions", icon: <Terminal className="h-5 w-5" />, level: 80 },
    { name: "Linux System Administration", icon: <Server className="h-5 w-5" />, level: 75 },
    { name: "Programming", icon: <Code className="h-5 w-5" />, level: 70 },
    { name: "Digital Forensics", icon: <FileCode className="h-5 w-5" />, level: 65 },
  ]

  const certifications = [
    {
      name: "Digital Forensic Essentials (DFE)",
      issuer: "EC-Council",
      date: "Jul 2023",
      image: "/placeholder.svg?height=200&width=300",
      url: "https://example.com/dfe-certificate",
    },
    {
      name: "Security+ ce Certification",
      issuer: "CompTIA",
      date: "Dec 2022",
      image: "/placeholder.svg?height=200&width=300",
      url: "https://example.com/security-plus-certificate",
    },
    {
      name: "Hacking Essentials (EHE) v1",
      issuer: "EC-Council",
      date: "Mar 2022",
      image: "/placeholder.svg?height=200&width=300",
      url: "https://example.com/ehe-certificate",
    },
    {
      name: "Ready4Security (Microsoft SC-900 & SC-200)",
      issuer: "InfraDigital Foundation",
      date: "Aug 2023",
      image: "/placeholder.svg?height=200&width=300",
      url: "https://example.com/ready4security-certificate",
    },
    {
      name: "Certified Network Security Practitioner (CNSP)",
      issuer: "TheSecOps Group",
      date: "Nov 2023",
      image: "/placeholder.svg?height=200&width=300",
      url: "https://example.com/cnsp-certificate",
    },
    {
      name: "Certified Appsec Practitioner (CAP)",
      issuer: "TheSecOps Group",
      date: "Nov 2023",
      image: "/placeholder.svg?height=200&width=300",
      url: "https://example.com/cap-certificate",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Certifications</h2>
          <div className="h-1 w-20 bg-green-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Certifications</h3>
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-800 border-gray-700 hover:border-green-500 transition-all hover:-translate-y-1 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-3 h-full">
                        <div className="relative h-32 md:h-full">
                          <Image
                            src={cert.image || "/placeholder.svg"}
                            alt={`${cert.name} Certificate`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4 md:col-span-2 flex flex-col justify-between">
                          <div>
                            <h4 className="font-semibold text-white">{cert.name}</h4>
                            <p className="text-sm text-gray-400">{cert.issuer}</p>
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <Badge variant="outline" className="bg-green-900/20 text-green-400 border-green-500">
                              {cert.date}
                            </Badge>
                            <a
                              href={cert.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-green-400 hover:text-green-300 flex items-center gap-1 text-sm"
                            >
                              View <ExternalLink className="h-3 w-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
