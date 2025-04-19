"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { downloadCV } from "@/app/actions"

export function DownloadCVButton() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)

    try {
      // In a real implementation, this would trigger the download
      // For demonstration purposes, we'll create a simple download mechanism

      // Create a blob with the CV content
      const cvContent = `YACINE ABADA
Automation and Industrial Computing Engineer
Blida, Algerian, Adl, ouled-yaich,
Yacineabada26@gmail.com+213549108529

SUMMARY
Recent graduate, I am 26 years old, dynamic, I have a Master's degree in Automation and Industrial Computing
(Electrical Engineering sector), I am looking for a job that will allow me to enrich my professional career and acquire
new skills and continue to evolve.

EXPERIENCE
• Maintenance technician, SALD COMPANY
Nov 2024 — May 2025
preventive and corrective maintenance (electrical and mechanical)

• Machine operator, ACG COMPANY
Feb 2024 — Sep 2025
Programmer number for use of CNC machines to perform maintenance work.

• Machine operator, GICA CEMENT COMPANY
Nov 2022 — Jun 2023
Drawing of plans and printing. Completed practical training for the master's Degree graduation thesis projects
regulation of the elevator power according to the feed flow using PCS7 software.

EDUCATION
• University of Saad Dahleb-Blida 1
2020 — 2022
Master's Degree, Automation and Industrial Computing

• University of Saad Dahleb-Blida 1
2017 — 2020
Bachelor's Degree, Automation

• Rabeh Bitat High School
2014 — 2017
High School Certificate, Experimental Sciences

SKILLS
C/C++, Python, MATLAB, CCNA-CISCO, Arduino programming, Siemens Tia Portal, GE Proficy Machine Edition, Siemens WinCC

LANGUAGES
Arabic, English, French

CERTIFICATIONS AND LICENSES
Electrical cabinet wiring training 'sonaltech': Learned to read control circuit diagrams and apply them in practical
electrical cabinet wiring.`

      const blob = new Blob([cvContent], { type: "text/plain" })

      // Create a download link
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.setAttribute("download", "Yacine_Abada_CV.txt")

      // Append to the body, click and remove
      document.body.appendChild(link)
      link.click()
      link.parentNode?.removeChild(link)

      // Call the server action (in a real implementation, this might handle analytics or other server-side tasks)
      await downloadCV()
    } catch (error) {
      console.error("Error downloading CV:", error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <Button onClick={handleDownload} disabled={isDownloading} className="flex items-center gap-2">
      <Download className="h-4 w-4" />
      {isDownloading ? "Downloading..." : "Download CV"}
    </Button>
  )
}
