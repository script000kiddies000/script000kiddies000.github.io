"use client"

import { motion } from "framer-motion"
import { Shield, Award, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-green-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-green-400">Junior Cybersecurity Specialist</h3>
            <p className="text-gray-300 mb-6">
              With over 3 years of experience in penetration testing, vulnerability assessment, and bug bounty programs.
              I'm certified in Ethical Hacking (EHE), Digital Forensics (DFE), and Security+ (CompTIA).
            </p>
            <p className="text-gray-300 mb-6">
              I specialize in identifying and addressing security risks in web and mobile applications, with a proven
              track record in CTF competitions and active contributions to the community.
            </p>
            <p className="text-gray-300">
              My mission is to enhance cybersecurity resilience through practical expertise and continuous learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-900/50 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Security Expert</h4>
                    <p className="text-gray-400">
                      Specialized in penetration testing and vulnerability assessment for web and mobile applications.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-900/50 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Certified Professional</h4>
                    <p className="text-gray-400">
                      Holding multiple certifications including EHE, DFE, and CompTIA Security+.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-900/50 p-3 rounded-lg">
                    <Code className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">CTF Competitor</h4>
                    <p className="text-gray-400">
                      Active participant in Capture The Flag competitions with multiple awards.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
