import { X } from "lucide-react"
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

export const Footer = () => {
    return (
        <div className="footer bg-black text-white/60 sm:footer-horizontal bg-base-200 text-base-content p-10">
            <aside>
            <h6 className="footer-title text-2xl text-white">CS Ticket System</h6>
                <p>
                    The ultimate customer support ticket system designed to streamline your <br /> support process and enhance customer satisfaction.
                    <br />
                    Providing reliable tech since 1992
                </p>
            </aside>
            <nav>
                <h6 className="footer-title text-white">Company</h6>
                <a className="link link-hover">About</a>
                <a className="link link-hover">Our mission</a>
                <a className="link link-hover">Contact</a>
            </nav>
            <nav>
                <h6 className="footer-title text-white">Service</h6>
                <a className="link link-hover">Product and Services</a>
                <a className="link link-hover">Customer Stories</a>
                <a className="link link-hover">Download Apps</a>
            </nav>
            <nav>
                <h6 className="footer-title text-white">Information</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Join Us</a>
            </nav>
            <nav>
                <h6 className="footer-title text-white">Social Links</h6>
                
                <a className="link link-hover"> <FaXTwitter className="inline-block" /> @cs_ticket</a>
                <a className="link link-hover"> <FaLinkedin className="inline-block"  /> @cs_ticket</a>
                <a className="link link-hover"> <FaFacebook className="inline-block" /> @cs_ticket</a>
                <a className="link link-hover"> <MdEmail className="inline-block" /> @cs_ticket</a>
                
            </nav>
        </div>
    )
}
