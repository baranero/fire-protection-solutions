import Image from "next/image";
import Exting from "../public/audit.jpg";

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
        <h2 className="text-xl pb-6">Audyt przeciwpożarowy</h2>
        <p className="pb-10 ">
          Audyt ppoż. to kompleksowa ocena stanu ochrony przeciwpożarowej w budynkach, obiektach lub
          instalacjach. Celem audytu jest identyfikacja potencjalnych zagrożeń pożarowych oraz ocena
          zgodności z obowiązującymi przepisami prawnymi i normami bezpieczeństwa pożarowego. Audyt
          ten jest istotnym elementem zarządzania bezpieczeństwem pożarowym i ma na celu
          minimalizację ryzyka pożaru oraz poprawę stanu ochrony przeciwpożarowej.
        </p>
        <h3 className="pb-6 text-lg">Dlaczego warto przeprowadzić audyt ppoż?</h3>
        <p className="pb-10">
          Zgodnie z art. 4 Ustawy o ochronie przeciwpożarowej,
          właściciele, zarządcy oraz użytkownicy budynków, obiektów budowlanych lub terenów mają
          obowiązek przestrzegać wymagań przeciwpożarowych, w tym zapewnić odpowiednie wyposażenie w
          urządzenia przeciwpożarowe i gaśnice, ich konserwację, a także przygotować obiekt do
          ewakuacji i prowadzenia działań ratowniczych. Ponadto, muszą zapoznać pracowników z
          przepisami przeciwpożarowymi i ustalić procedury postępowania na wypadek pożaru lub innego
          zagrożenia, co ma na celu zapewnienie bezpieczeństwa osób oraz ochrony mienia.
        </p>

        <h3 className="pb-6 text-lg">Podstawa prawna</h3>
        <p className="pb-10">
          Ustawa z dnia 24 sierpnia 1991 r. o ochronie przeciwpożarowej (Dz. U. z 2024 r. poz. 275)
        </p>
        <h3 className="pb-6 text-lg">
          Dlaczego warto zlecić opracowanie audytu przeciwpożarowgo mojej osobie?
        </h3>
        <p className=""></p>
        <ul className="list-disc pl-8 pb-10">
          <li>
            Indywidualne podejście – Każdy obiekt jest inny, dlatego mój audyt zawsze
            uwzględnia specyficzne zagrożenia i potrzeby Państwa obiektu.
          </li>
          <li>
            Doświadczenie i wiedza – jestem ekspertem z wieloletnim doświadczeniem w branży ochrony
            przeciwpożarowej.
          </li>
          <li>
            Zgodność z przepisami – Audyty opracowuję zgodnie z obowiązującymi normami i
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
