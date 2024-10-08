import Image from "next/image";
import Link from "next/link";
import Logo from '../../../public/logos/logo.jpg'

const Brand = () => (
<Link className="flex items-center duration-150 hover:opacity-70 " href={"/"}>
            <Image className="sm:w-14 w-10 block z-0" src={Logo} width={80} height={100} alt="Logo" />
            <h1 className="sm:text-2xl text-base ml-2 tracking-wider ">
              Fire Protection <span className="text-accent">Solutions</span>
              {/* <br />Jakub <span className="text-accent">Baran</span> */}
            </h1>
          </Link>
)
export default Brand