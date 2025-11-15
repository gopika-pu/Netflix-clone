import './Footer.css';
function Footer() {


    return (

        <div className="bg-black text-gray-400 py-10 px-6 md:px-20">

            {/* Contact Info */}
            <p className="mb-6 text-sm">
                Questions? Call <span className="underline cursor-pointer">000-800-919-1743</span>
            </p>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">

                <ul className="space-y-2 text-sm">
                    <li><a href="/#" className="hover:underline">FAQ</a></li>
                    <li><a href="/#" className="hover:underline">Investor Relations</a></li>
                    <li><a href="/#" className="hover:underline">Privacy</a></li>
                    <li><a href="/#" className="hover:underline">Speed Test</a></li>
                </ul>

                <ul className="space-y-2 text-sm">
                    <li><a href="/#" className="hover:underline">Help Centre</a></li>
                    <li><a href="/#" className="hover:underline">Jobs</a></li>
                    <li><a href="/#" className="hover:underline">Cookie Preferences</a></li>
                    <li><a href="/#" className="hover:underline">Legal Notices</a></li>
                </ul>

                <ul className="space-y-2 text-sm">
                    <li><a href="/#" className="hover:underline">Account</a></li>
                    <li><a href="/#" className="hover:underline">Ways to Watch</a></li>
                    <li><a href="/#" className="hover:underline">Corporate Information</a></li>
                    <li><a href="/#" className="hover:underline">Only on Netflix</a></li>
                </ul>

                <ul className="space-y-2 text-sm">
                    <li><a href="/#" className="hover:underline">Media Centre</a></li>
                    <li><a href="/#" className="hover:underline">Terms of Use</a></li>
                    <li><a href="/#" className="hover:underline">Contact Us</a></li>
                </ul>

            </div>

            {/* Language Selector */}
            <button className="border border-gray-500 text-sm px-3 py-1 rounded">
                🌐 English
            </button>

            {/* Country */}
            <p className="text-sm mt-6">Netflix India</p>
        </div>

    );

}

export default Footer;