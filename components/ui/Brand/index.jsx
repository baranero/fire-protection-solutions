import Link from "next/link";

const Brand = () => (
    <Link className="flex items-center" href="/">
        <img
            src="./logos/logo.jpg"
            width={50}
            height={50}
            alt="Blinder logo"
        />
        <div className="text-2xl ml-2 font-[200] tracking-wide">Fire Protection <span className="text-accent">Solutions</span></div>
    </Link>
)
export default Brand