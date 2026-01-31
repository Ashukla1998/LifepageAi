import React from "react";

/* ---------- CONSTANTS ---------- */
const BASE = import.meta.env.BASE_URL;
const SITE_ROOT = "https://www.lifepage.in";

/* ---------- DATA ---------- */
const legacyNav = [
  { label: "Home", icon: "home.png", link: `${SITE_ROOT}/` },
  { label: "Abroad", icon: "studyabroad.png", link: `${SITE_ROOT}/studyabroad.php` },
  { label: "Plan", icon: "plan.png", link: `${SITE_ROOT}/plan.php` },
  { label: "Talks", icon: "list.png", link: `${SITE_ROOT}/careers.php` },
  { label: "Philosophy", icon: "philosophy.png", link: `${SITE_ROOT}/philosophy.php` },
  { label: "Seminar", icon: "choose.png", link: `${SITE_ROOT}/choose.php` },
  { label: "Workshop", icon: "placement.png", link: `${SITE_ROOT}/placement.php` },
  { label: "Pages", icon: "pages.png", link: `${SITE_ROOT}/pages.php` },
  { label: "Advisors", icon: "advisors.png", link: `${SITE_ROOT}/advisors.php` },
  { label: "Discuss", icon: "discuss.png", link: `${SITE_ROOT}/discuss.php` },
  { label: "Meet", icon: "meet.png", link: `${SITE_ROOT}/meet.php` },
  { label: "Advisor", icon: "advisor.png", link: `${SITE_ROOT}/advisor.php` },
  { label: "Story", icon: "story.png", link: `${SITE_ROOT}/story.php` },
  { label: "Fine Print", icon: "fineprint.png", link: `${SITE_ROOT}/fineprint.php` },
  { label: "Links", icon: "links.png", link: `${SITE_ROOT}/links.php` },
  { label: "Blog", icon: "blog.png", link: `https://blog.lifepage.in` },
  { label: "Testimonials", icon: "testimonials.png", link: `${SITE_ROOT}/testimonials.php` },
  { label: "Follow", icon: "follow.png", link: `${SITE_ROOT}/follow.php` },
];

const socialIcons = [
  { name: "fb", link: "https://www.facebook.com/lifepage" },
  { name: "youtube", link: "https://www.youtube.com/@lifepage" },
  { name: "instagram", link: "https://www.instagram.com/lifepage" },
  { name: "twitter", link: "https://twitter.com/lifepage" },
  { name: "Linkedin", link: "https://www.linkedin.com/company/lifepage" },
  { name: "Quora", link: "https://www.quora.com/profile/LifePage" },
];

/* ---------- COMPONENT ---------- */
export default function Footer() {
  return (
    <div className="w-full mt-32 text-[#262626]" style={{ fontSize: "80%" }}>
      <div className="flex justify-center">
        <div className="w-full max-w-[600px] px-2 text-center">

          <Separator />

          {/* STUDY ABROAD */}
          <Card>
            <img
              src={`${BASE}support/abroad.jpg`}
              alt="LifePage Study Abroad Program"
              className="w-full"
            />
          </Card>

          <Spacing />

          <ExternalButton
            href={`${SITE_ROOT}/studyabroad.php`}
            label="Learn More"
          />

          <Spacing xl />

          <Separator />

          {/* LEARN ABOUT */}
          <div className="border border-[#909090] bg-[#FBFBF3] p-4 text-left">
            <SectionTitle title="Learn About" />

            <RightLink
              href={`${SITE_ROOT}/careers.php`}
              label="Explore all Career Options"
            />

            <Divider />

            <SectionTitle title="Profiles Of" />
            <Profiles />

            <RightLink
              href={`${SITE_ROOT}/pages.php`}
              label="Explore all LifePage Members"
            />

            <Divider />

            <b>Interesting Career Articles</b>
            <ArticleLinks />

            <Divider />

            <SectionTitle title="Follow Us" />

            <div className="flex justify-center gap-6 flex-wrap">
              {socialIcons.map((s) => (
                <a
                  key={s.name}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${BASE}support/${s.name}.png`}
                    alt={s.name}
                    className="h-10"
                  />
                </a>
              ))}
            </div>
          </div>

          <Spacing />

          {/* LEGACY NAV */}
          <div className="flex justify-center text-sm text-[#505050]">
            <div>
              {legacyNav.map((item, i) => (
                <div key={i} className="mb-2 bg-[#505050] whitespace-nowrap">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-2 py-1 text-white"
                  >
                    <img
                      src={`${BASE}support/${item.icon}`}
                      alt={item.label}
                      className="h-[25px] mr-2"
                    />
                    <span>{item.label}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <Spacing />

          {/* WHATSAPP */}
          <a
            href="https://api.whatsapp.com/send?phone=+919999980500&text=Hello! I am facing this problem in using LifePage:"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${BASE}support/helpbanner.jpg`}
              alt="Career Counselling"
              width="150"
              className="mx-auto rounded border border-[#505050]"
            />
          </a>

        </div>
      </div>
    </div>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

const Separator = () => (
  <div className="w-full h-px my-12 bg-[linear-gradient(to_right,rgba(248,158,84,0),rgba(248,158,84,0.75),rgba(248,158,84,0))]" />
);

const Divider = () => <div className="w-full h-px bg-[#999] my-6" />;

const Spacing = ({ xl }) => (
  <div className={xl ? "my-16" : "my-10"} />
);

const Card = ({ children }) => (
  <div className="bg-[#262626] rounded shadow-lg p-1">
    {children}
  </div>
);

const SectionTitle = ({ title }) => (
  <h2 className="text-xl font-semibold mb-6">{title}</h2>
);

const RightLink = ({ href, label }) => (
  <div className="text-right mb-6">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 font-semibold hover:underline"
    >
      [{label}]
      <img src={`${BASE}support/right.png`} alt="arrow" className="h-6" />
    </a>
  </div>
);

const ExternalButton = ({ href, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <button className="bg-[#2196f3] text-white font-bold text-lg px-6 py-3 rounded shadow-lg">
      {label}
    </button>
  </a>
);

const Profiles = () => (
  <>
    {[
      { name: "Archana Mishra", url: "https://www.lifepage.in/page/archanamishra" },
      { name: "Sumit Bahuguna", role: "IT Manager | Zee Entertainment Enterprises Ltd", url: "https://www.lifepage.in/page/sumitbahuguna" },
      { name: "Sankhadip Bhattacharya", role: "Senior Geologist | ONGC Ltd", url: "https://www.lifepage.in/page/sankhadipbhattacharya" },
      { name: "Dr. Srishti Bhatia", role: "Associate Director & Orthodontist | Bhatia Dentopulse", url: "https://www.lifepage.in/page/drsrishtibhatia" },
      { name: "Vishnupriya Kolipakam", role: "Scientist C | Wildlife Institute of India", url: "https://www.lifepage.in/page/vishnupriyakolipakam" },
    ].map((p, i) => (
      <div key={i} className="mb-4">
        <a href={p.url} target="_blank" rel="noopener noreferrer" className="font-bold">
          {p.name}
        </a>
        {p.role && <div>{p.role}</div>}
      </div>
    ))}
  </>
);

const ArticleLinks = () => (
  <>
    <p>Career in Political Economy Analysis:</p>
    <a href="http://paste4btc.com/eOPTSIcV" target="_blank" rel="noopener noreferrer">
      http://paste4btc.com/eOPTSIcV
    </a>

    <br /><br />

    <p>Career in Packaging Design:</p>
    <a href="https://5e203a8b426de.site123.me/" target="_blank" rel="noopener noreferrer">
      https://5e203a8b426de.site123.me/
    </a>
  </>
);
