
const Footer = () => {

    let date = new Date();
    let year = date.getFullYear();

    return (
        <footer className="w-full text-gray-700 py-5 bg-[#ebebeb]">
            <div className="w-[90%] sm:max-w-[943px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-between">
                {/* Quick Links Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#navbar"
                                className="text-sm hover:underline hover:text-gray-500"
                            >
                                About Me
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                className="text-sm hover:underline hover:text-gray-500"
                            >
                                My skills
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-sm hover:underline hover:text-gray-500"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact</h3>
                    <p className="text-sm">
                        Email:{" "}
                        <a
                            href="mailto:muhammadali@example.com"
                            className="hover:underline"
                        >
                            zokerzokerivic795@gmail.com
                        </a>
                    </p>
                    <p className="text-sm">Phone: +998 95 011 86 02</p>
                    <div className="mt-4 flex space-x-4">
                        <a
                            href="https://github.com/Muhammadali-fr"
                            className="text-sm hover:text-gray-500 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://x.com/Muhammadali_fr"
                            className="text-sm hover:text-gray-500 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Twitter
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-400 mt-8 pt-4 text-center text-sm">
                &copy; {year} Muhammadali Jamolov. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
