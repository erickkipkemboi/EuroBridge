"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export default function TopContactBar() {
  return (
    <div className="w-full bg-gray-900 text-white text-2xs py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2">
        
        {/* Email */}
        <div className="flex items-center gap-2">
          <Mail size={16} />
          <a href="mailto:info@myschool.com" className="hover:underline">
            info@eurobridge.ac.ke
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <a href="tel:+254722108799" className="hover:underline">
            +2547-2210-8799
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>Eldoret, Kenya</span>
        </div>
      </div>
    </div>
  )
}
