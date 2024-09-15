import NavLink from "../NavLink"

const Hero = () => (
    <section>
        <div className="custom-screen  sm:py-28 py-8 text-gray-600">
            <div className="space-y-5 max-w-3xl mx-auto">
                <h1 className=" text-gray-800 font-extrabold mx-auto sm:text-4xl sm:leading-[4rem]">
                    Profesjonalne rozwiązania <br/> w zakresie <span className="text-accent">ochrony przeciwpożarowej</span>
                </h1>
                <p className="max-w-xl text-lg">
                    Usługi przeciwpożarowe - sporządzanie dokumentacji ppoż. tak, aby Twój obiekt spełniał wymagane przepisy i zapewniał bezpieczeństwo jego użytkownikom.
                </p>
                <div className="flex items-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="/#kontakt"
                        className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 transition-all duration-300"
                    >
                        Skontaktuj się
                    </NavLink>
                    <NavLink
                        href="#cta"
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