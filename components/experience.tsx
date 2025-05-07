"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      title: "Staf Bidang Keamanan dan Infrastruktur Teknologi Informasi",
      company: "Dinkominfo Kota Surabaya",
      period: "Jan 2023 - Present",
      responsibilities: [
        "Resolving information security incidents and managing email accounts, mail servers, and email activities related to the Surabaya City Government and ASN.",
        "Scheduling and conducting security tests on web applications, as well as creating reports and inventorying security test results.",
        "Managing and resolving issues with VPN servers, servers, and server rooms at the Department of Communication and Information.",
      ],
    },
    {
      title: "Junior Pentester",
      company: "PT Delta Sinergi Prima",
      period: "Jan 2022 - Present",
      responsibilities: [
        "Conducting penetration testing on web and mobile applications to identify security vulnerabilities.",
        "Compiling bug reports and improvement recommendations.",
        "Developing automation tools for vulnerability assessment.",
      ],
    },
    {
      title: "Freelance Web Pentester",
      company: "Universitas Teknokrat Lampung",
      period: "Nov 2022 - Jan 2023",
      responsibilities: [
        "Conducting penetration testing on the company's web platform.",
        "Compiling risk reports and mitigation strategies.",
      ],
    },
    {
      title: "Freelance Web Pentester",
      company: "PT Skyshi Digital Indonesia",
      period: "Jul 2022 - Aug 2022",
      responsibilities: [
        "Conducting penetration testing on the company's web platform.",
        "Compiling risk reports and mitigation strategies.",
      ],
    },
    {
      title: "Junior Pentester Intern",
      company: "BuildWith Angga",
      period: "Aug 2022 - Sep 2022",
      responsibilities: [
        "Testing the buildwithangga.com application for security vulnerabilities.",
        "Simulating attacks and providing improvement recommendations.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-green-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700 overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                <CardHeader className="pb-2">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <CardTitle className="text-xl md:text-2xl font-bold text-white">{exp.title}</CardTitle>
                      <p className="text-green-400 mt-1">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="bg-green-900/30 text-green-400 border-green-500">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
