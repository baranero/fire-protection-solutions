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
            icon:
            <FaFireExtinguisher size={25}/>,
            title: "Instrukcja Bezpieczeństwa Pożarowego",
            desc: "Instrukcja bezpieczeństwa pożarowego (IBP) to kluczowy dokument, który szczegółowo określa zasady ochrony przeciwpożarowej w budynkach i obiektach. Zgodnie z § 6 ust. 1 Rozporządzenia Ministra Spraw Wewnętrznych i Administracji z dnia 7 czerwca 2010 r. w sprawie ochrony przeciwpożarowej budynków, innych obiektów budowlanych i terenów (Dz. U. 2023 poz. 822), każda instrukcja powinna zawierać m.in. warunki ochrony przeciwpożarowej, zasady postępowania na wypadek pożaru, rozmieszczenie sprzętu gaśniczego oraz sposoby ewakuacji. Nasza firma oferuje kompleksowe usługi w zakresie opracowywania instrukcji bezpieczeństwa pożarowego, dostosowanych do specyfiki obiektu i zgodnych z obowiązującymi przepisami prawa. Zapewniamy profesjonalne doradztwo, aktualizację dokumentacji oraz szkolenia z zakresu ochrony przeciwpożarowej, co gwarantuje skuteczne zabezpieczenie przed pożarem i zgodność z wymaganiami prawnymi."
        },
        {
            icon:
            <FaDumpsterFire size={25}/>,
            title: "Operat przeciwpożarowy",
            desc: "Operat ppoż. dotyczący składowania odpadów to specjalistyczny dokument wymagany dla obiektów, w których prowadzi się działalność związaną z magazynowaniem, składowaniem lub przetwarzaniem odpadów. Zgodnie z art. 42 ust. 4a ustawy z dnia 14 grudnia 2012 r. o odpadach (Dz. U. 2023 poz. 1587), operat przeciwpożarowy jest niezbędny w celu uzyskania zezwolenia na zbieranie lub przetwarzanie odpadów. Dokument ten zawiera szczegółową analizę zagrożeń pożarowych, ocenę ryzyka oraz propozycje środków zapobiegawczych i organizacyjnych, które mają na celu minimalizację ryzyka pożaru. Nasza firma oferuje kompleksowe usługi w zakresie opracowywania operatów przeciwpożarowych dla składowisk odpadów, uwzględniając specyfikę danego obiektu, rodzaj składowanych odpadów oraz obowiązujące przepisy prawa. Zapewniamy profesjonalne doradztwo i dokumentację, która pomoże w spełnieniu wszystkich wymogów prawnych i zapewnieniu bezpieczeństwa na terenie składowiska."
        },
        {
            icon:
            <FaHouseFire size={25}/>
            ,
            title: "Audyt przeciwpożarowy",
            desc: "Audyt ppoż. budynku to kompleksowa ocena stanu ochrony przeciwpożarowej w obiekcie, mająca na celu identyfikację zagrożeń, weryfikację zgodności z obowiązującymi przepisami oraz wskazanie niezbędnych działań naprawczych. Audyt obejmuje szczegółową analizę dokumentacji technicznej, ocenę instalacji przeciwpożarowych, sprawdzenie dróg ewakuacyjnych, rozmieszczenie sprzętu gaśniczego oraz ocenę organizacji ochrony przeciwpożarowej w budynku. Nasza firma oferuje profesjonalne audyty PPOŻ., które są prowadzone przez doświadczonych specjalistów z zakresu ochrony przeciwpożarowej. W ramach audytu sporządzamy szczegółowy raport zawierający wyniki inspekcji, wykaz niezgodności oraz rekomendacje działań poprawiających poziom bezpieczeństwa pożarowego. Nasze usługi pomagają zapewnić pełną zgodność budynku z obowiązującymi normami i przepisami PPOŻ., co jest kluczowe dla ochrony życia, zdrowia i mienia użytkowników obiektu."
        }
    ]

    const nextFeatures = [
        {
            icon:
            <MdFireHydrantAlt size={25}/>,
            title: "Scenariusz rozwoju pożaru",
            desc: "Instrukcja bezpieczeństwa pożarowego (IBP) to kluczowy dokument, który szczegółowo określa zasady ochrony przeciwpożarowej w budynkach i obiektach. Zgodnie z § 6 ust. 1 Rozporządzenia Ministra Spraw Wewnętrznych i Administracji z dnia 7 czerwca 2010 r. w sprawie ochrony przeciwpożarowej budynków, innych obiektów budowlanych i terenów (Dz. U. 2023 poz. 822), każda instrukcja powinna zawierać m.in. warunki ochrony przeciwpożarowej, zasady postępowania na wypadek pożaru, rozmieszczenie sprzętu gaśniczego oraz sposoby ewakuacji. Nasza firma oferuje kompleksowe usługi w zakresie opracowywania instrukcji bezpieczeństwa pożarowego, dostosowanych do specyfiki obiektu i zgodnych z obowiązującymi przepisami prawa. Zapewniamy profesjonalne doradztwo, aktualizację dokumentacji oraz szkolenia z zakresu ochrony przeciwpożarowej, co gwarantuje skuteczne zabezpieczenie przed pożarem i zgodność z wymaganiami prawnymi."
        },
        {
            icon:
            <FaFire size={25}/>,
            title: "Ocena zagrożenia wybuchem",
            desc: "Operat ppoż. dotyczący składowania odpadów to specjalistyczny dokument wymagany dla obiektów, w których prowadzi się działalność związaną z magazynowaniem, składowaniem lub przetwarzaniem odpadów. Zgodnie z art. 42 ust. 4a ustawy z dnia 14 grudnia 2012 r. o odpadach (Dz. U. 2023 poz. 1587), operat przeciwpożarowy jest niezbędny w celu uzyskania zezwolenia na zbieranie lub przetwarzanie odpadów. Dokument ten zawiera szczegółową analizę zagrożeń pożarowych, ocenę ryzyka oraz propozycje środków zapobiegawczych i organizacyjnych, które mają na celu minimalizację ryzyka pożaru. Nasza firma oferuje kompleksowe usługi w zakresie opracowywania operatów przeciwpożarowych dla składowisk odpadów, uwzględniając specyfikę danego obiektu, rodzaj składowanych odpadów oraz obowiązujące przepisy prawa. Zapewniamy profesjonalne doradztwo i dokumentację, która pomoże w spełnieniu wszystkich wymogów prawnych i zapewnieniu bezpieczeństwa na terenie składowiska."
        },

    ]

    return (
        <SectionWrapper>
            <h2 className="text-center pt-6 pb-20 text-4xl text-accent">Oferta</h2>
            <div id="uslugi" className="custom-screen text-gray-600 text-sm px-28 mx-auto">
                <ul className="grid gap-x-20 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 pb-20 max-w-max">
                    {
                        features.map((item, idx) => (
                            <li key={idx} className="space-y-3 bg-slate-100 p-8">
                                <div className="w-12 h-12 border mx-auto text-accent rounded-full flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg text-center text-gray-800 font-semibold pb-4">
                                    {item.title}
                                </h4>
                                <div className="text-accent hover:opacity-60 group duration-150 flex items-center justify-center">
                                    <Link  href={"/"}>Zobacz więcej </Link>
                                    <FaArrowRight className="ml-2 group-hover:scale-110"/>
                                </div>
                                {/* <p className="text-justify">
                                    {item.desc}
                                </p> */}
                            </li>
                        ))
                    }
                </ul>
                <ul className="grid gap-x-20 gap-y-8 sm:grid-cols-2 lg:grid-cols-2 max-w-max mx-auto">
                    {
                        nextFeatures.map((item, idx) => (
                            <li key={idx} className="space-y-3 bg-slate-100 p-8">
                                <div className="w-12 h-12 border mx-auto text-accent rounded-full flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg text-center text-gray-800 font-semibold  pb-4">
                                    {item.title}
                                </h4>
                                <div className="text-accent hover:opacity-60 group duration-150 flex items-center justify-center">
                                    <Link  href={"/"}>Zobacz więcej </Link>
                                    <FaArrowRight className="ml-2 group-hover:scale-110"/>
                                </div>
                                {/* <p className="text-justify">
                                    {item.desc}
                                </p> */}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </SectionWrapper>
    )
}

export default Features