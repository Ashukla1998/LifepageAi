import React from "react";

export default function Footer() {
    return (
        <div
            className="w-full text-[#262626] mt-32"
            style={{ fontSize: "80%" }}
        >
            {/* MAIN CONTAINER */}
            <div className="w-full flex justify-center">
                <div className="w-full max-w-[600px] px-2 text-center">

                    {/* TOP YELLOW SEPARATOR */}
                    <div
                        className="w-full h-px
            bg-[linear-gradient(to_right,rgba(248,158,84,0),rgba(248,158,84,0.75),rgba(248,158,84,0))]"
                    />

                    <br /><br /><br /><br />

                    {/* STUDY ABROAD CARD */}
                    <div
                        className="w-full bg-[#262626] text-white rounded
            shadow-[0_4px_8px_rgba(0,0,0,0.2),0_3px_10px_rgba(0,0,0,0.19)]"
                    >
                        <div className="p-1">
                            <img
                                src="support/abroad.jpg"
                                alt="LifePage Study Abroad Program"
                                title="LifePage Study Abroad Program"
                                className="w-full"
                            />
                        </div>
                    </div>

                    {/* spacing */}
                    <br /><br /><br />

                    {/* LEARN MORE BUTTON */}
                    <a
                        href="https://www.lifepage.in/studyabroad.php"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            className="bg-[#2196f3] text-white font-bold text-lg
              px-6 py-3 rounded
              shadow-[0_8px_16px_rgba(0,0,0,0.2),0_6px_20px_rgba(0,0,0,0.19)]"
                        >
                            &nbsp; Learn More &nbsp;
                        </button>
                    </a>

                    <br /><br /><br /><br /><br />

                    {/* BOTTOM YELLOW SEPARATOR */}
                    <div
                        className="w-full h-px
            bg-[linear-gradient(to_right,rgba(248,158,84,0),rgba(248,158,84,0.75),rgba(248,158,84,0))]"
                    />

                    <br /><br /><br /><br />

                    {/* LEARN ABOUT CARD */}
                    <div
                        className="w-full border border-[#909090]
            bg-[#FBFBF3] text-[#262626] p-4 text-left"
                    >
                        <br /><br />
                        <h2 className="text-xl font-semibold text-left">
                            Learn About
                        </h2>
                        <br /><br />

                        {/* EXPLORE CAREERS */}
                        <div className="text-right">
                            <h3 className="text-lg font-semibold">
                                <a
                                    href="https://www.lifepage.in/careers.php"
                                    className="hover:underline inline-flex items-center gap-2"
                                >
                                    [Explore all Career Options]
                                    <img
                                        src="support/right.png"
                                        alt="Right Arrow"
                                        className="h-6"
                                    />
                                </a>
                            </h3>
                        </div>

                        <br /><br />

                        {/* GREY LINE */}
                        <div className="w-full h-px bg-[#999]" />
                        <br /><br />

                        {/* PROFILES */}
                        <h2 className="text-xl font-semibold">Profiles Of</h2>
                        <br />

                        {[
                            {
                                name: "Archana Mishra",
                                url: "https://www.lifepage.in/page/archanamishra",
                            },
                            {
                                name: "Sumit Bahuguna",
                                role: "IT Manager | Zee Entertainment Enterprises Ltd",
                                url: "https://www.lifepage.in/page/sumitbahuguna",
                            },
                            {
                                name: "Sankhadip Bhattacharya",
                                role: "Senior Geologist | ONGC Ltd",
                                url: "https://www.lifepage.in/page/sankhadipbhattacharya",
                            },
                            {
                                name: "Dr. Srishti Bhatia",
                                role:
                                    "Associate Director & Orthodontist | Bhatia Dentopulse",
                                url: "https://www.lifepage.in/page/drsrishtibhatia",
                            },
                            {
                                name: "Vishnupriya Kolipakam",
                                role:
                                    "Scientist C | Wildlife Institute of India",
                                url: "https://www.lifepage.in/page/vishnupriyakolipakam",
                            },
                        ].map((p, i) => (
                            <div key={i} className="mb-4">
                                <a href={p.url} className="font-bold">
                                    {p.name}
                                </a>
                                {p.role && <div>{p.role}</div>}
                            </div>
                        ))}

                        <br />

                        {/* EXPLORE MEMBERS */}
                        <div className="text-right">
                            <h3 className="text-lg font-semibold">
                                <a
                                    href="https://www.lifepage.in/pages.php"
                                    className="hover:underline inline-flex items-center gap-2"
                                >
                                    [Explore all LifePage Members]
                                    <img
                                        src="right.png"
                                        alt="Right Arrow"
                                        className="h-6"
                                    />
                                </a>
                            </h3>
                        </div>

                        <br /><br />
                        <div className="w-full h-px bg-[#999]" />
                        <br /><br />
                        {/* INTERESTING ARTICLES */}
                        <b>Interesting Career Articles</b>
                        <br /><br />

                        Career in Political Economy Analysis:<br />
                        <a href="http://paste4btc.com/eOPTSIcV" target="_blank" rel="noopener noreferrer">
                            http://paste4btc.com/eOPTSIcV
                        </a><br /><br />

                        Career in Packaging Design:<br />
                        <a href="https://5e203a8b426de.site123.me/" target="_blank" rel="noopener noreferrer">
                            https://5e203a8b426de.site123.me/
                        </a><br /><br />

                        Career in Software Engineering:<br />
                        <a href="https://articlewipe.com/?p=336591&preview=true&_preview_nonce=5d55a5e0b1" target="_blank" rel="noopener noreferrer">
                            https://articlewipe.com/?p=336591
                        </a><br /><br />

                        Career in Accountancy:<br />
                        <a href="https://theonlinearticleplace.com/?p=299340&preview=true&_preview_nonce=90a234418b" target="_blank" rel="noopener noreferrer">
                            https://theonlinearticleplace.com/?p=299340
                        </a><br /><br />

                        Career in Navigation:<br />
                        <a href="https://pearsonnewspress.com/?p=298711&preview=true&_preview_nonce=dee3630f98" target="_blank" rel="noopener noreferrer">
                            https://pearsonnewspress.com/?p=298711
                        </a>

                        <br /><br />

                        {/* GREY LINE */}
                        <div className="w-full h-px bg-[#999]" />
                        <br /><br />

                        {/* FOLLOW US */}
                        <h2 className="text-xl font-semibold text-left">
                            Follow Us
                        </h2>
                        <br /><br />

                        <div className="flex justify-center gap-6 flex-wrap">
                            {[
                                "fb",
                                "youtube",
                                "instagram",
                                "twitter",
                                "Linkedin",
                                "Quora",
                            ].map((icon, i) => (
                                <img
                                    key={i}
                                    src={`support/${icon}.png`}
                                    alt={icon}
                                    className="h-10"
                                />
                            ))}
                        </div>

                        <br /><br /><br />

                    </div>

                    {/* BOTTOM LEGACY NAVIGATION */}
                    <br /><br /><br />

                    <div className="flex justify-center">
                        <div className="text-sm" style={{ color: "#505050" }}>

                            {[
                                { label: "Home", icon: "home.png", link: "/ai/" },
                                { label: "Abroad", icon: "studyabroad.png", link: "https://www.lifepage.in/studyabroad.php" },
                                { label: "Plan", icon: "plan.png", link: "/ai/plan" },
                                { label: "Talks", icon: "list.png", link: "https://www.lifepage.in/careers.php" },
                                { label: "Philosophy", icon: "philosophy.png", link: "/ai/philosophy" },
                                { label: "Seminar", icon: "choose.png", link: "/ai/choose" },
                                { label: "Workshop", icon: "placement.png", link: "/ai/placement" },
                                { label: "Pages", icon: "pages.png", link: "https://www.lifepage.in/pages.php" },
                                { label: "Advisors", icon: "advisors.png", link: "/ai/advisors" },
                                { label: "Discuss", icon: "discuss.png", link: "/ai/discuss" },
                                { label: "Meet", icon: "meet.png", link: "/ai/meet" },
                                { label: "Advisor", icon: "advisor.png", link: "/ai/advisor" },
                                { label: "Story", icon: "story.png", link: "/ai/story" },
                                { label: "Fine Print", icon: "fineprint.png", link: "/ai/fineprint" },
                                { label: "Links", icon: "links.png", link: "/ai/links" },
                                { label: "Blog", icon: "blog.png", link: "https://blog.lifepage.in" },
                                { label: "Testimonials", icon: "testimonials.png", link: "/ai/testimonials" },
                                { label: "Follow", icon: "follow.png", link: "/ai/follow" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="mb-2"
                                    style={{
                                        backgroundColor: "#505050",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    <a
                                        href={item.link}
                                        target={item.link.startsWith("http") ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        className="flex items-center px-2 py-1 text-white"
                                    >
                                        <img
                                            src={`support/${item.icon}`}
                                            alt={item.label}
                                            className="h-[25px] mr-2"
                                        />
                                        <span className="text-base">{item.label}</span>
                                    </a>
                                </div>
                            ))}
                        <br /><br /><br />
                        {/* <a href="#"> hello from this</a>
                         */}
                         <a href="https://api.whatsapp.com/send?phone=+919999980500&amp;text=Hello! I am facing this problem in using LifePage: ">				  
                                      <img src="support/helpbanner.jpg" width="150px" alt="Career Counselling 2.0" style={{borderRadius: "5px", border: "1px solid #505050"}} />
                                      </a>
                        </div>
                    </div>

                    <br /><br /><br />

                </div>
            </div>
        </div>
    );
}
