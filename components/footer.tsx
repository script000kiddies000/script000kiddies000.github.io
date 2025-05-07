import { Shield } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-gray-800 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Shield className="h-6 w-6 text-green-500" />
          <span className="text-xl font-bold">Muhammad Rizky Rahmattullah</span>
        </div>

        <div className="text-center md:text-right">
          <p className="text-gray-400">&copy; {currentYear} All Rights Reserved</p>
          <p className="text-sm text-gray-500 mt-1">Junior Cybersecurity Specialist</p>
        </div>
      </div>
    </footer>
  )
}
