import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import ctaImage from "../../../public/fire.jpg"
import Image from "next/image"

const CTA = () => {
    return (
        <SectionWrapper id="o-mnie" className="px-6 sm:px-28">
                        <h2 className="text-center pt-6 pb-28 text-5xl text-accent">O mnie</h2>
            <div className="custom-screen text-sm">
                <div className="items-center gap-x-12 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image src={ctaImage} className="rounded-lg md:max-w-lg" alt="mgr inż. poż. Jakub Baran" />
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl text-center sm:text-justify">
                        <h2 className="text-gray-800 text-2xl  sm:text-3xl pb-8">
                            mgr inż. poż. Jakub <span className="text-accent">Baran</span>
                        </h2>
                        <p className="mt-3  text-gray-600">
                        Z ochroną przeciwpożarową jestem związany od 2015 roku. W roku 2019 uzyskałem tytuł naukowy i zawodowy inżyniera pożarnictwa kończąc Szkołę Główną Służby Pożarniczej w Warszawie. Podnosząc swoje kwalifikacje w roku 2021 uzyskałem tytuł magistra inżyniera pożarnictwa.
                        </p>
                        <p className="mt-3 text-gray-600">
                        Jestem czynnym funkcjonariuszem Państwowej Straży Pożarnej z prawie 10 letnim stażem. Ochroną przeciwpożarową zajmuję się również na rynku komercyjnym od 2019 roku, pracując jako projektant systemów przeciwpożarowych.
                        </p>
                        <p className="mt-3 text-gray-600">
                        Duże doświadczenie zawodowe daje mi szeroki wachlarz doboru rozwiązań w celu zapewnienia ochrony życia i zdrowia ludzkiego oraz mienia w Państwa obiekcie.
                        </p>
                        <p className="mt-3 text-gray-600">
                        Jeśli szukasz profesjonalizmu, skuteczności i indywidualnego podejścia - skontaktuj się ze mną.
                        </p>
                        {/* <NavLink
                            href="/get-started"
                            className="inline-block mt-4 font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"
                        >
                            Get started
                        </NavLink> */}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA