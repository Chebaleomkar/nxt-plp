// Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Instagram,Linkedin} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black text-white px-4 md:px-16 py-10">
            <div className="flex items-center w-full justify-between ">
                {/* Subscribe section */}
                <div>
                    <h4 className="font-bold text-sm mb-2">BE THE FIRST TO KNOW</h4>
                    <p className="text-xs mb-4">
                        Sign up for updates from mettä muse.
                    </p>
                    <div className="flex max-w-xs gap-3">
                        <input
                            type="email"
                            placeholder="Enter your E-ail..."
                            className="w-full text-black border-amber-50 bg-white p-2 text-sm"
                        />
                        <button className="bg-white text-black px-4">SUBSCRIBE</button>
                    </div>
                </div>

                {/* Contact & currency */}
                <div>
                    <h4 className="font-bold text-sm mb-2">CONTACT US</h4>
                    <p className="text-xs">+44 221 133 5360</p>
                    <p className="text-xs mb-4">customercare@mettamuse.com</p>
                    <h4 className="font-bold text-sm mb-2">CURRENCY</h4>
                    <div className="flex items-center gap-2 text-xs">
                        <Image src="https://cdn.britannica.com/76/4476-050-E643DD49/Betsy-Ross-legend-flag-united-states.jpg" alt="USD" width={30} height={30} className="rounded-full" /> USD
                    </div>
                    <p className="text-[10px] mt-1">
                        Transactions will be completed in Euros and a currency reference is available on hover.
                    </p>
                </div>
            </div>
        <hr className="mt-3 mb-3" />
            <div className="flex items-center justify-between">
                <div>
                    <h4 className="font-bold ">mettā muse</h4>
                    <ul className="space-y-1 text-xs">
                        <li className="py-1"><Link href="#">About Us</Link></li>
                        <li className="py-1"><Link href="#">Stories</Link></li>
                        <li className="py-1"><Link href="#">Artisans</Link></li>
                        <li className="py-1"><Link href="#">Boutiques</Link></li>
                        <li className="py-1"><Link href="#">Contact Us</Link></li>
                        <li className="py-1"><Link href="#">EU Compliances Docs</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-sm mb-2">QUICK LINKS</h4>
                    <ul className="space-y-1 text-xs ">
                        <li className="py-1"><Link href="#">Orders & Shipping</Link></li>
                        <li className="py-1"><Link href="#">Join/Login as a Seller</Link></li>
                        <li className="py-1"><Link href="#">Payment & Pricing</Link></li>
                        <li className="py-1"><Link href="#">Return & Refunds</Link></li>
                        <li className="py-1"><Link href="#">FAQs</Link></li>
                        <li className="py-1"><Link href="#">Privacy Policy</Link></li>
                        <li className="py-1"><Link href="#">Terms & Conditions</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-20  items-start ">

                    <div className="flex  flex-col items-center gap-4 text-white text-xl">
                        <span className="font-bold">Follow Us</span>
                        <div className="flex gap-3">
                            <Link className="border-2 rounded-full p-1" href="#"><Instagram size={20} /></Link>
                            <Link  className="border-2 rounded-full p-1" href="#"><Linkedin size={20} /></Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Image 
                            src="https://play-lh.googleusercontent.com/HArtbyi53u0jnqhnnxkQnMx9dHOERNcprZyKnInd2nrfM7Wd9ivMNTiz7IJP6-mSpwk"
                            alt="Google Pay"
                            width={40}
                            height={24}
                            className="object-contain"
                        />
                        <Image 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD7oa6-WXok1YXYt8GN4CWbzJOpeBf69159Q&s"
                            alt="Mastercard"
                            width={40}
                            height={24}
                            className="object-contain"
                        />
                        <Image 
                            src="https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png"
                            alt="PayPal"
                            width={40}
                            height={24}
                            className="object-contain"
                        />
                        <Image 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZpywg_J2dLATjgisBcj2Pxmta-m0lNyHHCg&s"
                            alt="American Express"
                            width={40}
                            height={24}
                            className="object-contain"
                        />
                        <Image 
                            src="https://developer.apple.com/news/images/og/apple-pay-og-twitter.jpg"
                            alt="Apple Pay"
                            width={40}
                            height={24}
                            className="object-contain"
                        />
                        <Image 
                            src="https://a.storyblok.com/f/162198/2400x1440/0942c18c8a/shoppay.jpg/m/1600x0/filters:quality(50)"
                            alt="Shop Pay"
                            width={40}
                            height={24}
                            className="object-contain"
                        />
                    </div>
                </div>

                
            </div>

            {/* Copyright */}
            <p className="text-xs text-center text-gray-400 mt-6">
                Copyright © 2023 mettamuse. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
