"use client";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";

const FeaturedWork = () => {
    const [featureWork, setFeatureWork] = useState<any>( 
 [
    {
      image: "/projects/enterprise-dashboard.jpg",
      title: "Enterprise Management Dashboard",
      roles: ["Software Development", "React.js", "Node.js", "MongoDB", "API Integration"],
    },
    {
      image: "/projects/ecommerce-platform.jpg",
      title: "E-Commerce Platform",
      roles: ["Next.js", "MySQL", "Payment Gateway", "Responsive UI"],
    },
    {
      image: "/projects/desktop-app.jpg",
      title: "Cross-Platform Desktop App",
      roles: ["React", "Tauri", "Node.js", "Local Database", "Secure Storage"],
    },
    {
      image: "/projects/social-media-app.jpg",
      title: "Social Media Application",
      roles: ["MERN Stack", "Real-Time Chat", "Post Feed", "User Authentication"],
    },
    {
      image: "/projects/courier-app.jpg",
      title: "Courier Management System",
      roles: ["Laravel", "MySQL", "Driver Tracking", "Order Management"],
    },
    {
      image: "/projects/e-channeling.jpg",
      title: "E-Channeling App (Mental Health)",
      roles: ["Next.js", "Node.js", "Video Sessions", "Booking System", "Stripe Integration"],
    },
    {
      image: "/projects/fund-donation.jpg",
      title: "Fund Donation Platform",
      roles: ["MERN Stack", "Online Payments", "Campaign Management", "User Dashboard"],
    },
    {
      image: "/projects/driver-booking.jpg",
      title: "Driver Booking Application",
      roles: ["React.js", "Node.js", "Google Maps API", "Socket.io", "Real-Time Tracking"],
    },
    {
      image: "/projects/saas-analytics.jpg",
      title: "SaaS Analytics System",
      roles: ["MERN Stack", "Data Visualization", "Cloud Deployment", "Chart.js"],
    },
    {
      image: "/projects/crm-portal.jpg",
      title: "Customer Relationship Portal",
      roles: ["React.js", "Node.js", "Role-Based Access", "Performance Optimization"],
    },
    {
      image: "/projects/portfolio-builder.jpg",
      title: "Customizable Personal Website Builder",
      roles: ["Next.js", "Dynamic Themes", "CMS Integration", "Deployment Automation"],
    },
    {
      image: "/projects/inventory-system.jpg",
      title: "Inventory & Billing Management System",
      roles: ["Laravel", "MySQL", "Report Generation", "Multi-User Access"],
    },
    {
      image: "/projects/real-time-dashboard.jpg",
      title: "Real-Time Admin Dashboard",
      roles: ["Next.js", "Socket.io", "Dynamic Charts", "Scalable Backend"],
    },
  ]
);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await fetch('/api/featured-work')
    //             if (!res.ok) throw new Error('Failed to fetch')
    //             const data = await res.json()
    //             setFeatureWork(data?.featureWork)
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
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Featured work</p>
                            {/* <Link href={"/"} className="w-fit rounded-full py-3 px-5 border border-primary/10 hover:bg-primary/10">
                                Download Portfolio
                            </Link> */}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-primary/10">
                        {featureWork?.map((value: any, index: number) => {
                            const isRightCol = index % 2 === 1;

                            return (
                                <div
                                    key={index}
                                    className={`group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 ${isRightCol ? 'md:border-l md:border-primary/10' : ''}`}
                                >
                                    {/* <Link href={"/"} className="overflow-hidden">
                                        <Image
                                            src={value?.image}
                                            alt="Image"
                                            width={490}
                                            height={300}
                                            className="w-full h-full group-hover:scale-105 transition-all duration-300 ease-in-out"
                                        />
                                    </Link> */}
                                    <div className="flex flex-col gap-1 sm:gap-2 px-2">
                                        <Link href={"/"}><h4>{value?.title}</h4></Link>
                                        <div className="flex">
                                            <p>{value?.roles?.join(', ')}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FeaturedWork