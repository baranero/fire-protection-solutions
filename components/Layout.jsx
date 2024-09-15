import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"
import { Sora } from "@next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
    return (
        <div className={`   ${sora.variable} font-sora `}>
            <Head>
                <title>Fire Protection Solutions</title>
                <meta name='description' content='Usługi ppoż. w województwie wielkopolskim. Instrukcje bezpieczeństwa pożarowego IBP, operaty przeciwpożarowe, operaty ppoż., audyty ppoż. budynków' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/public/logos/logo.jpg' />
            </Head>
            <Navbar />
            <main >{children}</main>
            <Footer />
        </div>
    )
}

export default Layout