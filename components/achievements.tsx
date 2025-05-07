"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Target, Award, ExternalLink, BookOpen, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function Achievements() {
  const ctfCompetitions = [
    { name: "Anon Cyber Team (ACT) 2024", achievement: "Rank 4", icon: <Trophy className="h-5 w-5 text-yellow-400" /> },
    { name: "IDF 2022", achievement: "Juara 2", icon: <Trophy className="h-5 w-5 text-yellow-400" /> },
    { name: "IDF Hackathon 2023", achievement: "16 Tim Terbaik", icon: <Award className="h-5 w-5 text-blue-400" /> },
    {
      name: "IDF Hackathon 2022",
      achievement: "Presentasi Terbaik",
      icon: <Award className="h-5 w-5 text-blue-400" />,
    },
    { name: "Surabaya Hackerlink 2019", achievement: "Juara 2", icon: <Trophy className="h-5 w-5 text-yellow-400" /> },
  ]

  const bugBounties = [
    {
      name: "X-Code (PT Teknologi Server Indonesia)",
      certificateImage: "/placeholder.svg?height=200&width=300",
      certificateUrl: "https://example.com/certificate1",
    },
    {
      name: "Cyber Jawara",
      certificateImage: "/placeholder.svg?height=200&width=300",
      certificateUrl: "https://example.com/certificate2",
    },
    {
      name: "CSIRT Dinkominfo Kota Cimahi",
      certificateImage: "/placeholder.svg?height=200&width=300",
      certificateUrl: "https://example.com/certificate3",
    },
    {
      name: "CSIRT Dinkominfo Tanggerang Selatan",
      certificateImage: "/placeholder.svg?height=200&width=300",
      certificateUrl: "https://example.com/certificate4",
    },
    {
      name: "CSIRT Kementerian Kesehatan RI",
      certificateImage: "/placeholder.svg?height=200&width=300",
      certificateUrl: "https://example.com/certificate5",
    },
    {
      name: "CSIRT Dinkominfo Kota Malang",
      certificateImage: "/placeholder.svg?height=200&width=300",
      certificateUrl: "https://example.com/certificate6",
    },
    {
      name: "Universitas Teknokrat",
      certificateImage: "/placeholder.svg?height=200&width=300",
      certificateUrl: "https://example.com/certificate7",
    },
    {
      name: "Universitas Brawijaya",
      certificateImage: "/placeholder.svg?height=200&width=300",
      certificateUrl: "https://example.com/certificate8",
    },
    {
      name: "Institut Teknologi Bandung (ITB)",
      certificateImage: "/placeholder.svg?height=200&width=300",
      certificateUrl: "https://example.com/certificate9",
    },
    {
      name: "CSIRT Provinsi DKI Jakarta",
      certificateImage: "/placeholder.svg?height=200&width=300",
      certificateUrl: "https://example.com/certificate10",
    },
    {
      name: "Aguna Course",
      certificateImage: "/placeholder.svg?height=200&width=300",
      certificateUrl: "https://example.com/certificate11",
    },
    {
      name: "Kreen.id",
      certificateImage: "/placeholder.svg?height=200&width=300",
      certificateUrl: "https://example.com/certificate12",
    },
    {
      name: "Adinusa",
      certificateImage: "/placeholder.svg?height=200&width=300",
      certificateUrl: "https://example.com/certificate13",
    },
    {
      name: "Buildwithangga.com",
      certificateImage: "/placeholder.svg?height=200&width=300",
      certificateUrl: "https://example.com/certificate14",
    },
    {
      name: "Dibimbing.id",
      certificateImage: "/placeholder.svg?height=200&width=300",
      certificateUrl: "https://example.com/certificate15",
    },
    {
      name: "Yesplis.com",
      certificateImage: "/placeholder.svg?height=200&width=300",
      certificateUrl: "https://example.com/certificate16",
    },
    {
      name: "Dicoding.com",
      certificateImage: "/placeholder.svg?height=200&width=300",
      certificateUrl: "https://example.com/certificate17",
    },
    {
      name: "Gobis Suroboyobus",
      certificateImage: "/placeholder.svg?height=200&width=300",
      certificateUrl: "https://example.com/certificate18",
    },
    {
      name: "Sanbercode",
      certificateImage: "/placeholder.svg?height=200&width=300",
      certificateUrl: "https://example.com/certificate19",
    },
  ]

  const bootcamps = [
    {
      name: "Punggawa Cyber Security Bootcamp",
      provider: "PT Punggawa Siber Solusi",
      materials: [
        "Network Security Fundamentals",
        "Web Application Security",
        "Penetration Testing Methodologies",
        "Vulnerability Assessment",
        "Security Incident Response",
      ],
    },
    {
      name: "Cyber Sentinel Secure",
      provider: "PT Teknologi Server Indonesia",
      materials: [
        "Advanced Penetration Testing",
        "Exploit Development",
        "Secure Coding Practices",
        "Mobile Application Security",
        "Cloud Security",
      ],
    },
    {
      name: "Adinusa Bootcamp",
      provider: "PT Boer Technology (Btech)",
      materials: [
        "Infrastructure Security",
        "DevSecOps Practices",
        "Container Security",
        "Kubernetes Security",
        "CI/CD Pipeline Security",
      ],
    },
    {
      name: "Web Penetration Testing",
      provider: "CyberArmyID",
      materials: [
        "OWASP Top 10 Vulnerabilities",
        "SQL Injection Techniques",
        "Cross-Site Scripting (XSS)",
        "Authentication Bypass Methods",
        "API Security Testing",
      ],
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <div className="h-1 w-20 bg-green-500 mx-auto"></div>
        </motion.div>

        <Tabs defaultValue="ctf" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-800">
              <TabsTrigger
                value="ctf"
                className="data-[state=active]:bg-green-900/50 data-[state=active]:text-green-400"
              >
                CTF Competitions
              </TabsTrigger>
              <TabsTrigger
                value="bugbounty"
                className="data-[state=active]:bg-green-900/50 data-[state=active]:text-green-400"
              >
                Bug Bounty Programs
              </TabsTrigger>
              <TabsTrigger
                value="bootcamp"
                className="data-[state=active]:bg-green-900/50 data-[state=active]:text-green-400"
              >
                Bootcamps
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="ctf" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {ctfCompetitions.map((comp, index) => (
                <Card
                  key={index}
                  className="bg-gray-800 border-gray-700 hover:border-green-500 transition-all hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-gray-700 p-3 rounded-full">{comp.icon}</div>
                      <div>
                        <h4 className="font-semibold text-white">{comp.name}</h4>
                        <p className="text-green-400">{comp.achievement}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="bugbounty" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {bugBounties.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-800 border-gray-700 h-full hover:border-green-500 transition-all hover:-translate-y-1">
                    <CardContent className="p-4 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <Target className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <p className="font-medium">{program.name}</p>
                      </div>
                      <div className="relative h-40 w-full mb-3 overflow-hidden rounded-md">
                        <Image
                          src={program.certificateImage || "/placeholder.svg"}
                          alt={`${program.name} Certificate`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <a
                            href={program.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 text-white px-3 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                            View Certificate
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="bootcamp" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {bootcamps.map((bootcamp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-800 border-gray-700 hover:border-green-500 transition-all hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-green-900/50 p-3 rounded-full mt-1">
                          <BookOpen className="h-5 w-5 text-green-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-lg">{bootcamp.name}</h4>
                          <p className="text-green-400">{bootcamp.provider}</p>
                        </div>
                      </div>
                      <div className="pl-14">
                        <h5 className="font-medium text-gray-300 mb-2">Materials Covered:</h5>
                        <ul className="space-y-2">
                          {bootcamp.materials.map((material, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{material}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
