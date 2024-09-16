import SectionWrapper from "../../SectionWrapper"
import { FaFire } from "react-icons/fa";
import { FaFireExtinguisher } from "react-icons/fa";
import { FaHouseFire } from "react-icons/fa6";
import { FaDumpsterFire } from "react-icons/fa";
import { MdFireHydrantAlt } from "react-icons/md";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Features = () => {

    const features = [
        {
            icon: <FaFireExtinguisher size={25} />,
            title: "Instrukcja Bezpieczeństwa Pożarowego",
            desc: "Instrukcja bezpieczeństwa pożarowego (IBP) to kluczowy dokument, który szczegółowo określa zasady ochrony przeciwpożarowej w budynkach i obiektach...",
            link: "/instrukcja-bezpieczenstwa-pozarowego", // Specific link for "Instrukcja Bezpieczeństwa Pożarowego"
        },
        {
            icon: <FaDumpsterFire size={25} />,
            title: "Operat przeciwpożarowy",
            desc: "Operat ppoż. dotyczący składowania odpadów to specjalistyczny dokument wymagany dla obiektów, w których prowadzi się działalność związaną z magazynowaniem...",
            link: "/operat-ppoz", // Generic or specific link can be adjusted here
        },
        {
            icon: <FaHouseFire size={25} />,
            title: "Audyt przeciwpożarowy",
            desc: "Audyt ppoż. budynku to kompleksowa ocena stanu ochrony przeciwpożarowej w obiekcie, mająca na celu identyfikację zagrożeń, weryfikację zgodności z obowiązującymi...",
            link: "/audyt-ppoz", // Generic or specific link can be adjusted here
        }
    ];

    const nextFeatures = [
        {
            icon: <MdFireHydrantAlt size={25} />,
            title: "Scenariusz rozwoju pożaru",
            desc: "Instrukcja bezpieczeństwa pożarowego (IBP) to kluczowy dokument, który szczegółowo określa zasady ochrony przeciwpożarowej w budynkach i obiektach...",
            link: "/scenariusz-rozwoju-pozaru", // Generic or specific link can be adjusted here
        },
        {
            icon: <FaFire size={25} />,
            title: "Ocena zagrożenia wybuchem",
            desc: "Operat ppoż. dotyczący składowania odpadów to specjalistyczny dokument wymagany dla obiektów, w których prowadzi się działalność związaną z magazynowaniem...",
            link: "/ocena-zagrozenia-wybuchem", // Generic or specific link can be adjusted here
        },
    ];

    return (
        <SectionWrapper>
            <h2 className="text-center pt-6 pb-28 text-5xl text-accent">Oferta</h2>
            <div id="uslugi" className="text-gray-600 text-sm sm:px-28 px-6 justify-center">
                <ul className="grid mx-auto sm:gap-x-20 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 sm:pb-20 pb-8 max-w-max">
                    {features.map((item, idx) => (
                        <li key={idx} className="space-y-3 bg-slate-100 p-8">
                            <div className="w-12 h-12 border mx-auto text-accent rounded-full flex items-center justify-center">
                                {item.icon}
                            </div>
                            <h4 className="text-lg text-center text-gray-800 font-semibold pb-4">
                                {item.title}
                            </h4>
                            <div className="text-accent hover:opacity-60 group duration-150 flex items-center justify-center">
                                <Link href={item.link}>Zobacz więcej</Link>
                                <FaArrowRight className="ml-2 group-hover:scale-110" />
                            </div>
                            {/* <p className="text-justify">{item.desc}</p> */}
                        </li>
                    ))}
                </ul>
                <ul className="grid mx-auto sm:gap-x-20 gap-y-8 sm:grid-cols-2 lg:grid-cols-2 max-w-max mx-auto">
                    {nextFeatures.map((item, idx) => (
                        <li key={idx} className="space-y-3 bg-slate-100 p-8">
                            <div className="w-12 h-12 border mx-auto text-accent rounded-full flex items-center justify-center">
                                {item.icon}
                            </div>
                            <h4 className="text-lg text-center text-gray-800 font-semibold pb-4">
                                {item.title}
                            </h4>
                            <div className="text-accent hover:opacity-60 group duration-150 flex items-center justify-center">
                                <Link href={item.link}>Zobacz więcej</Link>
                                <FaArrowRight className="ml-2 group-hover:scale-110" />
                            </div>
                            {/* <p className="text-justify">{item.desc}</p> */}
                        </li>
                    ))}
                </ul>
            </div>
        </SectionWrapper>
    );
}

export default Features;
