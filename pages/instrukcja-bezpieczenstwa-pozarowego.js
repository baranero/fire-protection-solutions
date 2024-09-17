import Image from "next/image";
import Exting from "../public/exting.jpg";

const IBP = () => {
  return (
    <div className="sm:px-28 text-center px-6 pt-10 flex flex-col sm:flex-row justify-between gap-x-20 ">
      <Image
        src={Exting}
        width={500}
        className="object-cover sm:w-[30vw] sm:pb-0 pb-10 sm:h-[70vh]"
        alt="Extinguisher"
      />
      <div className="">
        <h2 className="text-xl pb-6">Instrukcja Bezpieczeństwa Pożarowego</h2>
        <p className="pb-10 ">
          Instrukcja Bezpieczeństwa Pożarowego (IBP) to kluczowy dokument określający zasady ochrony
          przeciwpożarowej w budynkach. Oferuję kompleksowe opracowanie Instrukcji Bezpieczeństwa
          Pożarowego, dostosowanej do specyfiki Państwa obiektu, zgodnie z najnowszymi przepisami
          prawa.
        </p>
        <h3 className="pb-6 text-lg">Kiedy Instrukcja Bezpieczeństwa Pożarowego jest wymagana?</h3>
        <p className="pb-10">
          Zgodnie z prawem Właściciele, zarządcy lub użytkownicy obiektów bądź ich części
          stanowiących odrębne strefy pożarowe, przeznaczonych do wykonywania funkcji użyteczności
          publicznej, zamieszkania zbiorowego, produkcyjnych, magazynowych oraz inwentarskich,
          zapewniają i wdrażają instrukcję bezpieczeństwa pożarowego.
        </p>
        <h3 className="pb-6 text-lg">
          Kiedy Instrukcja Bezpieczeństwa Pożarowego <u>nie</u> jest wymagana?
        </h3>
        <p className="">Instrukcja bezpieczeństwa pożarowego nie jest wymagana, gdy:</p>
        <ul className="list-disc pl-8 pb-10">
          <li>
            kubatura brutto budynku lub jego części stanowiącej odrębną strefę pożarową nie
            przekracza 1000 m3
          </li>
          <li>kubatura brutto budynku inwentarskiego nie przekracza 1500 m3</li>
          <li>powierzchnia strefy pożarowej obiektu innego niż budynek nie przekracza 1000 m2</li>
        </ul>
        <h3 className="pb-6 text-lg">Podstawa prawna</h3>
        <p className="pb-10">
          &#167;6 Rozporządzenia Ministra Spraw Wewnętrznych i Administracji z dnia 7 czerwca 2010
          r. w sprawie ochrony przeciwpożarowej budynków, innych obiektów budowlanych i terenów.
          (Dz. U. z 2023 r., poz. 822).
        </p>
        <h3 className="pb-6 text-lg">
          Dlaczego warto zlecić opracowanie Instrukcji Bezpieczeństwa Pożarowego mojej osobie?
        </h3>
        <p className=""></p>
        <ul className="list-disc pl-8 pb-10">
          <li>
            Indywidualne podejście – Każdy obiekt jest inny, dlatego moja instrukcja zawsze
            uwzględnia specyficzne zagrożenia i potrzeby Państwa obiektu.
          </li>
          <li>
            Doświadczenie i wiedza – jestem ekspertem z wieloletnim doświadczeniem w branży ochrony
            przeciwpożarowej.
          </li>
          <li>
            Zgodność z przepisami – Instrukcje opracowuję zgodnie z obowiązującymi normami i
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
