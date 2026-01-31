import { useEffect, useState } from "react";
import axios from "axios";
import bloglist from "../api/bloglist";
import { tcit, cit } from "../api/gsmcity";
const BASE = import.meta.env.BASE_URL;
const SITE_ROOT = "https://www.lifepage.in";

/* ================= LEGACY MENU DATA ================= */
const legacyFooterMenu = [
  { label: "Home", icon: "home.png", link: "https://www.lifepage.in/index.php" },
  { label: "Abroad", icon: "studyabroad.png", link: "https://www.lifepage.in/studyabroad.php" },
  { label: "Plan", icon: "plan.png", link: "https://www.lifepage.in/plan.php" },
  { label: "Talks", icon: "list.png", link: "https://www.lifepage.in/careers.php" },
  { label: "Philosophy", icon: "philosophy.png", link: "https://www.lifepage.in/philosophy.php" },
  { label: "Seminar", icon: "choose.png", link: "https://www.lifepage.in/choose.php" },
  { label: "Workshop", icon: "placement.png", link: "https://www.lifepage.in/placement.php" },
  { label: "Pages", icon: "pages.png", link: "https://www.lifepage.in/pages.php" },
  { label: "Advisors", icon: "advisors.png", link: "https://www.lifepage.in/advisors.php" },
  { label: "Discuss", icon: "discuss.png", link: "https://www.lifepage.in/discuss.php" },
  { label: "Meet", icon: "meet.png", link: "https://www.lifepage.in/meet.php" },
  { label: "Advisor", icon: "advisor.png", link: "https://www.lifepage.in/advisor.php" },
  { label: "Story", icon: "story.png", link: "https://www.lifepage.in/story.php" },
  { label: "Fine Print", icon: "fineprint.png", link: "https://www.lifepage.in/fineprint.php" },
  { label: "Links", icon: "links.png", link: "https://www.lifepage.in/links.php" },
  { label: "Blog", icon: "blog.png", link: "https://blog.lifepage.in", blank: true },
  { label: "Testimonials", icon: "testimonials.png", link: "https://www.lifepage.in/testimonials.php" },
  { label: "Follow", icon: "follow.png", link: "https://www.lifepage.in/follow.php" },
];

export default function Footer() {
  // SAME AS PHP: shuffle($bloglist) + limit 5
  const readAboutList = [...bloglist]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  return (
    <div className="lifepage-footer w-full max-w-[1100px] px-4 mx-auto text-center">
      <div className="flex justify-center">
        <div className="w-full max-w-[600px] px-2 text-center">

          <hr className="my-12 h-px border-0 bg-gradient-to-r from-transparent via-[#f89e54] to-transparent" />

          {/* STUDY ABROAD CARD */}
          <div className="bg-[#262626] rounded shadow-lg p-1">
            <img
              src={`${BASE}support/abroad.jpg`}
              alt="LifePage Study Abroad Program"
              className="w-full"
            />
          </div>

          <div className="my-10">
            <ExternalButton
              href={`${SITE_ROOT}/studyabroad.php`}
              label="Learn More"
            />
          </div>

          <hr className="my-12 h-px border-0 bg-gradient-to-r from-transparent via-[#f89e54] to-transparent" />

          {/* LEARN ABOUT CARD */}
          <div className="border border-[#909090] bg-[#FBFBF3] text-left p-4">

            <Section title="Learn About" />

            <RightLink
              href="https://www.lifepage.in/careers.php"
              label="Explore all Career Options"
            />

            <GreyLine />

            {/* PROFILES OF */}
            <ProfilesOf />

            {/* READ ABOUT */}
            <Section title="Read About" />

            {readAboutList.map((item, index) => (
              <div key={index} className="my-3">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </a>
              </div>
            ))}

            <RightLink
              href="https://blog.lifepage.in/category/career-choice/"
              label="Explore the LifePage Blog"
            />

            <GreyLine />
            <InterestingCareerArticles />
            {/* <GreyLine/> */}
            <CareerCounsellingCities/>
            <Section title="Follow Us" />
   
            <div className="grid grid-cols-6 gap-4 text-center my-6">
              {["fb", "youtube", "instagram", "twitter", "Linkedin", "Quora"].map((i) => (
                <img
                  key={i}
                  src={`${BASE}support/${i}.png`}
                  className="h-10 mx-auto"
                  alt={i}
                />
              ))}
            </div>

          </div>

          {/* ================= LEGACY FOOTER MENU ================= */}
          <div className="w-full flex justify-center mt-16 text-[#505050]">
            <div className="text-center">
              <table
                cellPadding="5"
                cellSpacing="3"
                className="mx-auto"
                style={{ borderCollapse: "separate", borderSpacing: "0 8px" }}
              >
                <tbody>
                  {legacyFooterMenu.map((item, i) => (
                    <tr key={i} valign="bottom">
                      <td className="whitespace-nowrap w-[139px] h-[38px] bg-[#505050] text-white">
                        <a
                          href={item.link}
                          target={item.blank ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <img
                            src={`${BASE}support/${item.icon}`}
                            className="h-[25px] pl-1 pb-[2px]"
                            alt={item.label}
                          />
                          <span className="px-3 text-[14px] font-normal leading-[1.45] text-white">
                            {item.label}
                          </span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* WHATSAPP HELP */}
              <div className="my-8">
                <a
                  href="https://api.whatsapp.com/send?phone=+919999980500&text=Hello! I am facing this problem in using LifePage:"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${BASE}support/helpbanner.jpg`}
                    width="150"
                    className="mx-auto border border-[#505050] rounded"
                    alt="WhatsApp Help"
                  />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ================= PROFILES OF (AXIOS, EXACT PHP LOGIC) ================= */

const ProfilesOf = () => {
  const [profiles, setProfiles] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios
      .get(
        "https://lifepage.in/n/api/getPagesData",
        { id: "1234" },
        { headers: { Accept: "application/json" } }
      )
      .then((res) => {
        const records = res?.data?.data || [];
        setTotal(records.length);

        const shuffled = [...records].sort(() => Math.random() - 0.5);

        const selected = [];
        for (let i = 0; i < shuffled.length; i++) {
          if (selected.length >= 5) break;
          if (shuffled[i].profilepic && shuffled[i].profilepic.length > 5) {
            selected.push(shuffled[i]);
          }
        }

        setProfiles(selected);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Section title="Profiles Of" />

      {profiles.map((p) => (
        <div key={p.profileid} className="my-4">
          <a href={`https://www.lifepage.in/page/${p.profileid}`}>
            {p.name}
          </a>
          {(p.designation || p.organisation) && (
            <div>
              {p.designation}
              {p.designation && p.organisation && " | "}
              {p.organisation}
            </div>
          )}
        </div>
      ))}

      <RightLink
        href="https://www.lifepage.in/pages.php"
        label={`Explore all ${total} LifePage Members`}
      />

      <GreyLine />
    </>
  );
};

/* ================= HELPERS ================= */

const Section = ({ title }) => (
  <h2 className="my-4">{title}</h2>
);

const RightLink = ({ href, label }) => (
  <div className="text-right my-6">
    <a href={href} className="inline-flex items-center gap-2">
      [{label}]
      <img src={`${BASE}support/right.png`} className="h-6" />
    </a>
  </div>
);

const ExternalButton = ({ href, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <button className="bg-[#2196f3] text-white px-6 py-3 rounded shadow-lg">
      {label}
    </button>
  </a>
);

const GreyLine = () => (
  <hr className="my-8 border-t border-[#999]" />
);

const LegacyRow = ({ children }) => (
  <>
    <table cellPadding="0" cellSpacing="0">
      <tbody>
        <tr>
          <td>{children}</td>
        </tr>
      </tbody>
    </table>
    <div className="spacer" />
  </>
);

const CareerCounsellingCities = () => {
  const top = [...tcit].sort(() => Math.random() - 0.5).slice(0, 2);
  const other = [...cit].sort(() => Math.random() - 0.5).slice(0, 3);

  return [...top, ...other].map((city, i) => (
    <LegacyRow key={i}>
      <a href={`https://www.lifepage.in/career-counselling/${city}`}>
        <strong>Career Counselling in {city}</strong>
      </a>
    </LegacyRow>
  ));
};

const InterestingCareerArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://lifepage.in/n/api/seoSession", {
        headers: { Accept: "application/json" },
      })
      .then((res) => {
        const records = res?.data?.data || [];
        setArticles(records);
      })
      .catch((err) => {
        console.error("SEO Session API error:", err);
      });
  }, []);

  return (
    <>
      <Section title="Interesting Career Articles" />

      {articles.map((item, index) => (
        <div key={index} className="my-3">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Career in {item.topic}
          </a>
          <br />
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.link}
          </a>
        </div>
      ))}

      <GreyLine />
    </>
  );
};
