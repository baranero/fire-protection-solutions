import NavLink from "../NavLink"

const Hero = () => (
    <section>
        <div className=" sm:py-28 py-8 text-gray-600">
            <div className="space-y-5 max-w-3xl tracking-wide">
                <h1 className=" text-gray-800 sm:text-4xl font-bold text-2xl sm:leading-tight">
                    Profesjonalne rozwiązania <br/> w zakresie <span className="text-accent">ochrony przeciwpożarowej</span>
                </h1>
                <p className="max-w-xl text-lg leading-relaxed ">
                    Usługi przeciwpożarowe - sporządzanie dokumentacji ppoż. tak, aby Twój obiekt spełniał wymagane przepisy i zapewniał bezpieczeństwo jego użytkownikom.
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="/#kontakt"
                        className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 transition-all duration-300"
                    >
                        Skontaktuj się
                    </NavLink>
                    <NavLink
                        href="#uslugi"
                        className="text-gray-700 border bg-gray-100 hover:bg-gray-200 transition-all duration-300"
                        scroll={false}
                    >
                        Dowiedz się więcej  
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
)

export default Hero