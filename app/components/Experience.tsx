import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experienceCards: ExperienceCard[] = [
 
  {
    id: 3,
    title: "Corporate Website Revamp – Azentio Software",
    description:
      "Revamped and optimized a corporate web portal using Next.js and Node.js, focusing on performance, scalable backend APIs, improved SEO, and faster content delivery.",
    icon: "/cards/card-3.png",
  },
  {
    id: 4,
    title: "Doctor Appointment Booking Web App",
    description:
      "A full-stack appointment booking system with role-based dashboards for doctors and patients, secure authentication, payment integration, and admin management.",
    icon: "/cards/card-4.png",
  },
  {
    id: 5,
    title: "ERP Management System",
    description:
      "A scalable ERP application built with Node.js, SQL & NoSQL databases, and Prisma ORM to manage business operations, inventory, analytics, and reporting.",
    icon: "/cards/erp.avif",
  },
  {
    id: 6,
    title: "Admin Dashboard & API Platform",
    description:
      "A backend-driven admin dashboard with secure RESTful APIs, authentication, caching, and optimized database queries for enterprise-level applications.",
    icon: "/cards/card6.png",
  },
];


export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4"
            >
              <div className="mb-4 ">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-white/70 text-sm mb-4">
                {card.description}
              </p>
              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors inline-block"
              >
                {/* LEARN MORE → */}
              </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

