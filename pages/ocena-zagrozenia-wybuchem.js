import Image from "next/image";
import Exting from "../public/explo.jpg";

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
        <h2 className="text-xl pb-6">Ocena zagrożenia wybuchem</h2>
        <p className="pb-10 ">
          Ocena zagrożenia wybuchem to proces oceny ryzyka wystąpienia wybuchu w obiektach i na
          terenach przyległych, gdzie są prowadzone procesy technologiczne z użyciem materiałów
          mogących tworzyć mieszaniny wybuchowe lub w których takie materiały są magazynowane. Ocena
          ta jest kluczowa dla zapewnienia bezpieczeństwa w miejscach, gdzie istnieje ryzyko
          powstania atmosfery wybuchowej, i ma na celu identyfikację zagrożeń oraz wdrożenie
          odpowiednich środków ochronnych.
        </p>
        <h3 className="pb-6 text-lg">Kiedy stosuje się ocenę zagrożenia wybuchem?</h3>
        <p>Ocena zagrożenia wybuchem jest wymagana w sytuacjach, gdy:</p>
        <ul className="list-disc pl-8 pb-10">
          <li>
            <strong>Procesy technologiczne:</strong> W obiektach, gdzie prowadzone są procesy
            technologiczne z użyciem substancji, które mogą tworzyć mieszaniny wybuchowe, takie jak
            gazy, pary, mgły lub pyły.
          </li>
          <li>
            <strong>Magazynowanie materiałów wybuchowych:</strong> W miejscach, gdzie materiały
            mogące tworzyć mieszaniny wybuchowe są przechowywane.
          </li>
        </ul>

        <h3 className="pb-6 text-lg">Pomieszczenia zagrożone wybuchem:</h3>
        <p className="pb-6">
          Pomieszczenie uznaje się za zagrożone wybuchem, jeśli może w nim powstać mieszanina
          wybuchowa o takiej ilości palnych substancji, której wybuch mógłby spowodować przyrost
          ciśnienia przekraczający 5 kPa. Dodatkowo, strefę zagrożenia wybuchem należy wyznaczyć,
          jeśli mieszanina wybuchowa o objętości co najmniej 0,01 m<sup>3</sup> może występować w
          zwartej przestrzeni.
        </p>

        <p className="pb-10">
          Ocena zagrożenia wybuchem jest więc kluczowym elementem zapewnienia bezpieczeństwa w
          zakładach przemysłowych i wszędzie tam, gdzie istnieje ryzyko wybuchu, dzięki czemu
          możliwe jest wdrożenie odpowiednich środków ochronnych i zarządzania ryzykiem.
        </p>

        <h3 className="pb-6 text-lg">Podstawa prawna</h3>
        <p className="pb-10">
          Rozporządzenie Ministra Spraw Wewnętrznych i Administracji z dnia 7 czerwca 2010 r. w
          sprawie ochrony przeciwpożarowej budynków, innych obiektów budowlanych i terenów (Dz. U. z
          2023 r. poz. 822)
        </p>
        <h3 className="pb-6 text-lg">
          Dlaczego warto zlecić opracowanie scenariusza pożarowego mojej osobie?
        </h3>
        <p className=""></p>
        <ul className="list-disc pl-8 pb-10">
          <li>
            Indywidualne podejście – Każdy obiekt jest inny, dlatego moja ocena zawsze uwzględnia
            specyficzne zagrożenia i potrzeby Państwa obiektu.
          </li>
          <li>
            Doświadczenie i wiedza – jestem ekspertem z wieloletnim doświadczeniem w branży ochrony
            przeciwpożarowej.
          </li>
          <li>
            Zgodność z przepisami – oceny opracowuję zgodnie z obowiązującymi normami i przepisami,
            co jest kluczowe dla zgodności z wymaganiami prawnymi.
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
