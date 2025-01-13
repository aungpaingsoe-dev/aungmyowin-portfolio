import React, { useState, useEffect } from "react";
import { Circle, Briefcase, Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Timeline = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
      {children}
    </div>
  );
};

const TimelineItem = ({ children }: { children: React.ReactNode }) => {
  return <div className="mb-10 ml-6">{children}</div>;
};

const TimelineIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
      {children}
    </span>
  );
};

const TimelineContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
      {children}
    </div>
  );
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems = ["home", "about", "experience", "contact"];

  return (
    <div>
      <nav className="mx-auto bg-slate-50 shadow-md border py-4 fixed w-full top-0 z-10">
        <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold mb-4 md:mb-0">Aung Myo Win</div>
          <div className="flex gap-4 items-center">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`cursor-pointer capitalize ${
                  activeSection === item ? " font-bold" : "text-gray-600"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto pt-24 md:pt-16">
        <section
          id="home"
          className="min-h-screen flex flex-col md:flex-row items-center relative py-8 md:py-0"
        >
          <div className="w-full md:w-1/2 flex flex-col gap-3 mb-8 md:mb-0">
            <div className="text-xl md:text-2xl">Hi my name is</div>
            <div className="text-3xl md:text-5xl font-mono font-bold">
              Aung Myo Win
            </div>
            <div className="text-base md:text-xl">
              Detail-oriented and dedicated Civil Engineering graduate with over
              3 years of experience as an Assistant Site Engineer at Radiant
              Construction Co., Ltd. Proven expertise in site management,
              project coordination, and technical support for construction
              activities. Seeking to contribute my skills and experience to a
              dynamic construction team in Singapore
            </div>
            <div className="absolute top-[200px] start-[400px] bg-slate-500 w-[50px] h-[50px] rounded-full opacity-30 hidden md:block"></div>
            <div className="absolute bottom-[100px] bg-slate-500 w-[100px] h-[100px] rounded-full opacity-30 hidden md:block"></div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-center w-full relative">
              <img
                src="/personal.jpg"
                className="w-[250px] h-[350px] md:w-[350px] md:h-[500px] mx-auto grayscale object-cover"
                alt=""
              />
              <div className="absolute bottom-[-20px] end-[40px] bg-slate-500 w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full opacity-30"></div>
              <div className="absolute bottom-[-40px] end-[100px] bg-slate-700 w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full opacity-30"></div>
            </div>
          </div>
        </section>

        <section id="about" className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                About Me
              </h2>
              <p className="text-base md:text-xl text-gray-600">
                My personal information and details are here.
              </p>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap">
              <div className="w-full md:w-1/2 mb-10 md:mb-0">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                  Biography
                </h3>
                <table className="w-full text-sm md:text-lg">
                  <tbody>
                    {[
                      ["Gender", "Male"],
                      ["Birthday", "18.3.1992"],
                      ["Weight", "155lb"],
                      ["Height", "180 cm"],
                      ["Religion", "Buddhist"],
                      ["Marital status", "Married"],
                    ].map(([key, value]) => (
                      <tr key={key} className="border-b border-gray-200">
                        <td className="py-3 font-semibold text-gray-700">
                          {key}
                        </td>
                        <td className="py-3 text-gray-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="w-full md:w-1/2 md:pl-10">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                  Skills
                </h3>
                <div className="space-y-4">
                  {[
                    ["Project Management", 90],
                    ["AutoCAD", 85],
                    ["Site Coordination", 95],
                    ["Technical Documentation", 80],
                  ].map(([skill, percentage]) => (
                    <div key={skill}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm md:text-base font-medium text-gray-700">
                          {skill}
                        </span>
                        <span className="text-xs md:text-sm font-medium text-gray-600">
                          {percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-gray-600 h-2.5 rounded-full"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mt-10">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-xl md:text-2xl font-bold flex items-center gap-1 text-gray-900 mb-6">
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="font-bold">
                      Bachelor of Engineering (Civil){" "}
                    </span>{" "}
                    Kalay Technological University, Myanmar — 2014
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-xl md:text-2xl font-bold flex items-center gap-1 text-gray-900 mb-6">
                  Languages
                </h3>
                <div className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex gap-1 items-center">
                      <Circle className="h-[10px]" />
                      English (Fluent)
                    </div>
                    <div className="flex gap-1 items-center">
                      <Circle className="h-[10px]" />
                      Chinese (Basic)
                    </div>
                    <div className="flex items-center gap-1">
                      <Circle className="h-[10px]" />
                      Hindi (Basic)
                    </div>
                    <div className="flex items-center gap-1">
                      <Circle className="h-[10px]" />
                      Burmese (Native)
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <h3 className="text-xl md:text-2xl font-bold items-center flex gap-1 text-gray-900 mb-6">
                  Qualifications
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-1 items-center">
                    <Circle className="h-[10px]" />
                    Diploma in Construction Level 1 IVQ Technician
                  </div>
                  <div className="flex gap-1 items-center">
                    <Circle className="h-[10px]" />
                    AutoCAD 2D & 3D , SketchUp
                  </div>
                  <div className="flex items-center gap-1">
                    <Circle className="h-[10px]" />
                    Microsoft Office Suite
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-12 md:py-20">
          <Card className="border-none shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-center">
                Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="md:flex justify-center gap-10 mb-8">
                <img src="/exp.png" alt="" className="md:mb-0 mb-5 " />
                <img src="/exp2.png" alt="" />
              </div>
              <Timeline>
                <TimelineItem>
                  <TimelineIcon>
                    <Briefcase className="h-4 w-4" />
                  </TimelineIcon>
                  <TimelineContent>
                    <h3 className="text-lg md:text-xl font-bold">
                      Assistant Site Engineer
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Radiant Construction Co., Ltd.
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      2020 to 2023 | Myanmar
                    </p>
                    <ul className="mt-4 list-disc list-inside space-y-2 text-sm md:text-base">
                      <li>
                        Project Leadership: Spearheaded day-to-day site
                        activities, ensuring seamless coordination among
                        multiple teams and timely project completion.
                      </li>
                      <li>
                        Safety and Compliance: Enforced strict adherence to
                        safety protocols, reducing on-site incidents by 20%.
                      </li>
                      <li>
                        Technical Excellence: Drafted and revised AutoCAD plans,
                        ensuring alignment with project goals and client
                        requirements.
                      </li>
                      <li>
                        Stakeholder Management: Maintained open lines of
                        communication with suppliers, subcontractors, and
                        clients, addressing concerns promptly and efficiently.
                      </li>
                      <li>
                        Progress Monitoring: Conducted detailed site inspections
                        and delivered comprehensive progress reports to senior
                        engineers.
                      </li>
                    </ul>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </CardContent>
          </Card>
        </section>

        <section>
          <div className="px-5 pb-12">
            <div className="text-2xl font-bold mb-5">Key Achievements</div>
            <ul className=" list-disc ">
              <li>
                Successfully managed a residential construction project valued
                at over $1.5 million.
              </li>
              <li>
                Implemented innovative problem-solving techniques, reducing
                project delays by 15%.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div className="px-5">
            <div className="text-2xl font-bold mb-5">Projects</div>
            <div>
              <ul className=" list-decimal ">
                <li>
                  <div className=" text-xl font-bold">
                    Residential Complex Development
                  </div>
                  Role: Oversaw construction planning and ensured all phases met
                  quality benchmarks.
                </li>
                <li>
                  <div className=" text-xl font-bold">
                    Urban Infrastructure Upgrade
                  </div>
                  Role: Supervised site safety and coordinated with
                  cross-functional teams.
                </li>
              </ul>
            </div>
            <div className=" flex gap-3 mt-4 ">
              <img src="/public/pro1.png" alt="" />
              <img src="/public/pro2.png" alt="" />
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-20">
          <Card className="border-none shadow-none">
            <CardHeader className="border-none">
              <CardTitle className="text-2xl md:text-3xl font-bold text-center">
                Contact Me
              </CardTitle>
            </CardHeader>
            <CardContent className="border-none">
              <div className="flex flex-col items-center space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  <p className="text-sm md:text-lg">+959268493172</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  <a
                    href="mailto:aungmyowin268493@gmail.com"
                    className="text-sm md:text-lg hover:underline"
                  >
                    aungmyowin268493@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  <p className="text-sm md:text-lg">
                    Kalamyo, Sagaing Region, Myanmar
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default App;
