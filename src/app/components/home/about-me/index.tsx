
const AboutMe = () => {
    const servicesBedge = [
  "Web Application Development",
  "Software Development",
  "API Development & Integration",
  "Dashboard & Admin Panels",
  "E-commerce Solutions",
  "SaaS Application Development",
  "Database Design & Optimization",
  "Responsive Web Design",
  "Performance Optimization",
  "Bug Fixing & Maintenance",
  "Cloud Deployment & Hosting",
  "Software Testing"
];
    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10 bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">About Me</p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">Hey, I’m a Software Enginner passionate about building scalable, secure, and high-performance web applications.</h2>
                            <h5 className="text-secondary font-normal">I build powerful web applications, enterprise systems, and interactive dashboards that solve real business challenges and deliver measurable results  <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)]">— crafting modern digital solutions </span> with clean architecture and seamless user experiences.</h5>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-primary uppercase font-medium">Services</p>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {servicesBedge?.map((value, index) => {
                                    return (
                                        <div key={index} className="w-fit py-1.5 px-3 border border-primary/10 rounded-lg">
                                            <p className="text-xs sm:text-sm font-medium text-primary">{value}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe