import Image from "next/image";
import Exting from "../public/rop.jpg";

const IBP = () => {
  return (
    <div className="sm:px-28 sm:text-left text-center px-6 pt-10 flex flex-col sm:flex-row justify-between gap-x-20 ">
      <Image
        src={Exting}
        width={500}
        className="object-cover sm:w-[30vw] sm:pb-0 pb-10 sm:h-[70vh]"
        alt="Extinguisher"
      />
      <div className="">
        <h2 className="text-xl pb-6">Scenariusz rozwoju pożaru</h2>
        <p className="pb-10 ">
        Scenariusz pożarowy to opis sekwencji możliwych zdarzeń w czasie pożaru, reprezentatywnego dla danego miejsca jego wystąpienia lub obszaru oddziaływania, w szczególności dla strefy pożarowej lub strefy dymowej.
        </p>
        <h3 className="pb-6 text-lg">Kiedy scenariusz rozwoju zdarzeń w czasie pożaru jest wymagany?</h3>
        <p className="pb-10">
        Zgodnie z § 5 rozporządzenia MSWiA (Dz.U. z 2023 r., poz. 1563), scenariusz rozwoju pożaru jest wymagany w sytuacjach, gdy w budynku lub jego części konieczne jest zastosowanie systemu sygnalizacji pożarowej, stałych urządzeń gaśniczych, urządzeń oddymiających lub urządzeń zapobiegających zadymieniu. Kluczową rolę odgrywa tutaj system sygnalizacji pożaru, który działa automatycznie i koordynuje pracę innych instalacji i urządzeń przeciwpożarowych.
        </p>
        
        <h3 className="pb-6 text-lg">Podstawa prawna</h3>
        <p className="pb-10">
          Rozporządzenie Ministra Spraw Wewnętrznych i Administracji z dnia 8 sierpnia 2023 r. w
          sprawie uzgadniania projektu zagospodarowania działki lub terenu, projektu
          architektoniczno-budowlanego, projektu technicznego oraz projektu urządzenia
          przeciwpożarowego pod względem zgodności z wymaganiami ochrony przeciwpożarowej (Dz. U.
          2023 r. poz. 1563)
        </p>
        <h3 className="pb-6 text-lg">
          Dlaczego warto zlecić opracowanie scenariusza pożarowego mojej osobie?
        </h3>
        <p className=""></p>
        <ul className="list-disc pl-8 pb-10">
          <li>
            Indywidualne podejście – Każdy obiekt jest inny, dlatego mój scenariusz zawsze
            uwzględnia specyficzne zagrożenia i potrzeby Państwa obiektu.
          </li>
          <li>
            Doświadczenie i wiedza – jestem ekspertem z wieloletnim doświadczeniem w branży ochrony
            przeciwpożarowej.
          </li>
          <li>
            Zgodność z przepisami – scenariusze opracowuję zgodnie z obowiązującymi normami i
            przepisami, co jest kluczowe dla zgodności z wymaganiami prawnymi.
          </li>
          <li>
            Kompleksowe wsparcie – Oferuję nie tylko opracowanie dokumentacji, ale również doradztwo
            w zakresie ochrony przeciwpożarowej.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IBP;
