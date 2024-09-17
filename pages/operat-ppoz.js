import Image from "next/image";
import Exting from "../public/trash.jpg";

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
        <h2 className="text-xl pb-6">Operat przeciwpożarowy</h2>
        <p className="pb-10 ">
          Operat ppoż. to dokument określający zasady ochrony przeciwpożarowej dla instalacji,
          obiektu, jego części lub innego miejsca, w którym składowane są odpady. Warunki te muszą
          być uzgodnione z właściwym Komendantem Państwowej Straży Pożarnej. Zgodnie z art. 42 ust.
          4b Ustawy o odpadach (Dz. U. z 2023 r. poz. 1587), dokument ten należy dołączyć do wniosku
          o zezwolenie na przetwarzanie odpadów.
        </p>
        <h3 className="pb-6 text-lg">Kiedy operat przeciwpożarowy jest wymagany?</h3>
        <p>Zgodnie z art. 42 ust. 4b Ustawy o odpadach, do wniosków o wydanie pozwolenia na:</p>

        <ul className="list-disc pl-8">
          <li>zbieranie odpadów,</li>
          <li>przetwarzanie odpadów,</li>
        </ul>

        <p>
          oraz zgodnie z art. 184 ust. 4 pkt 5 Ustawy Prawo ochrony środowiska, do wniosków o
          wydanie pozwolenia na:
        </p>

        <ul className="list-disc pl-8">
          <li>
            wytwarzanie odpadów (dotyczy wytwórców odpadów, którzy w związku z eksploatacją
            instalacji wytwarzają odpady niebezpieczne w ilości powyżej 1 Mg/rok lub inne niż
            niebezpieczne w ilości powyżej 5 tysięcy Mg/rok),
          </li>
        </ul>

        <p>
          należy dołączyć m.in. operat przeciwpożarowy, który określa warunki ochrony
          przeciwpożarowej instalacji, obiektu, jego części lub innych miejsc magazynowania odpadów.
        </p>

        <p className=" pb-10">
          Złożenie wniosku o uzyskanie wymienionych zezwoleń bez prawidłowo sporządzonego operatu
          przeciwpożarowego spowoduje, że Państwowa Straż Pożarna nie wyda pozytywnej decyzji w tej
          sprawie. Dlatego warto zlecić sporządzenie tego dokumentu doświadczonej firmie
          specjalizującej się w ochronie przeciwpożarowej.
        </p>

        <h3 className="pb-6 text-lg">Podstawa prawna</h3>
        <ul className="list-disc pl-8 pb-10">
          <li>Ustawa o odpadach z dnia 14 grudnia 2012 r. (Dz. U. z 2023 r. poz. 1587)</li>
        

        <li>Rozporządzenie Ministra Spraw Wewnętrznych i Administracji z dnia 19 lutego 2020 r. w sprawie wymagań w zakresie ochrony przeciwpożarowej, jakie mają spełniać obiekty budowlane lub ich części oraz inne miejsca przeznaczone do zbierania, magazynowania lub przetwarzania odpadów (Dz.U. 2020 poz. 296)</li>
        </ul>
        <h3 className="pb-6 text-lg">Kto może opracować operat przeciwpożarowy?</h3>
        <p>
          Zależy to od tego, kto jest organem wydającym zezwolenie na wytwarzanie lub przetwarzanie
          odpadów:
        </p>

        <ul className="list-disc pl-8 pb-10">
          <li>
            Jeśli organem wydającym zezwolenie jest marszałek województwa albo regionalny dyrektor
            ochrony środowiska, operat może być sporządzony tylko przez rzeczoznawcę do spraw
            zabezpieczeń przeciwpożarowych.
          </li>
          <li>
            Jeśli organem właściwym jest starosta, operat może sporządzić również inżynier
            pożarnictwa lub osoba z ukończonymi studiami wyższymi w Szkole Głównej Służby
            Pożarniczej w zakresie inżynierii bezpieczeństwa, w specjalności inżynieria
            bezpieczeństwa pożarowego.
          </li>
        </ul>

        <h3 className="pb-6 text-lg">
          Dlaczego warto zlecić opracowanie operatu ppoż. mojej osobie?
        </h3>
        <p className=""></p>
        <ul className="list-disc pl-8 pb-10">
          <li>
            Indywidualne podejście – Każdy obiekt jest inny, dlatego moje opracowanie zawsze
            uwzględnia specyficzne zagrożenia i potrzeby Państwa obiektu.
          </li>
          <li>
            Doświadczenie i wiedza – jestem ekspertem z wieloletnim doświadczeniem w branży ochrony
            przeciwpożarowej.
          </li>
          <li>
            Zgodność z przepisami – Operaty opracowuję zgodnie z obowiązującymi normami i
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
