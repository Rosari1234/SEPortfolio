"use client";
import Image from "next/image"
import { useEffect, useState } from "react";

const Experience = () => {
    const [experienceData, setExperienceData] = useState<any>( [
  {
    icon: "/icons/company1.png",
    role: "Senior Software Enginner",
    startYear: "2026",
    endYear: "Present",
    location: "Hybird, Sri Lanka",
    bulletPoints: [
 "Lead frontend development using React.js, improving application performance and scalability.",
"Designed reusable component libraries and enforced frontend best practices.",
"Mentored junior developers and conducted code reviews to ensure code quality.",
"Collaborated with UX/UI teams to deliver responsive, accessible, and high-performance applications."
    ]
  },
  {
    icon: "/icons/company2.png",
    role: "Software Engineer,",
    startYear: "2022",
    endYear: "2025",
    location: "Hybird, Sri Lanka",
    bulletPoints: [
      "Built responsive front-end applications using React.js, Redux, and modern CSS techniques.",
"Integrated RESTful APIs and handled state management for complex applications.",
"Optimized performance and improved user experience across multiple projects."
    ]
  },
  {
    icon: "/icons/company3.png",
    role: "Associate Software Engineer",
    startYear: "2021",
    endYear: "2022",
    location: "Colombo, Sri Lanka",
    bulletPoints: [
      "Contributed to full-stack development in projects, ensuring clean, maintainable code.",
      "Contributed to documentation of user manuals, software features, and troubleshooting for future support.",
      "Ensured code quality with testing and code reviews."
    ]
  }
]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await fetch('/api/page-data')
    //             if (!res.ok) throw new Error('Failed to fetch')
    //             const data = await res.json()
    //             setExperienceData(data?.experienceData)
    //         } catch (error) {
    //             console.error('Error fetching services:', error)
    //         }
    //     }

    //     fetchData()
    // }, [])

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Experience</p>
                        </div>
                    </div>
                    <div className="border-t border-primary/10">
                        <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16 ">
                            {experienceData?.map((value: any, index: any) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-col gap-5 border-dashed border-b border-primary/10 last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0 last:pb-0">
                                        {/* <Image src={value?.icon} alt="icon" width={32} height={19} /> */}
                                        <div className="flex flex-wrap gap-5 items-center justify-between">
                                            <h5>{value?.role}</h5>
                                            <div className="flex items-center gap-2.5 border border-primary/10 rounded-lg py-1.5 px-3">
                                                <div className={`w-4 h-2 rounded-sm ${value?.endYear == "Present" ? 'bg-primary' : 'bg-primary/10'} `} />
                                                <p className="text-sm xs:text-base text-primary">{value?.startYear} – {value?.endYear} · {value?.location}</p>
                                            </div>
                                        </div>
                                        <ul>
                                            {value?.bulletPoints?.map((point: any, index: any) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="flex items-start gap-2 text-base font-normal text-secondary"
                                                    >
                                                        <span className="w-2.5 h-2.5 text-secondary">•</span>
                                                        {point}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Experience