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
  return (
    <div className="w-full bg-white text-[#262626] text-[80%] mt-24">
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

          {/* YELLOW SEPARATOR */}
          <hr className="my-12 h-px border-0 bg-gradient-to-r from-transparent via-[#f89e54] to-transparent" />

          {/* LEARN ABOUT CARD */}
          <div className="border border-[#909090] bg-[#FBFBF3] text-left p-4">

            <Section title="Learn About" />

            <RightLink
              href="https://www.lifepage.in/careers.php"
              label="Explore all Career Options"
            />

            <GreyLine />

            <Section title="Profiles Of" />

            <Profile
              name="Dr Luana Amaro Muniz"
              role="Psychiatrist | Brazilian Government"
              link="http://www.lifepage.in/page/luanaamaromuniz"
            />
            <Profile
              name="Dr Rishabh Kumar Chaturvedi"
              role="Retd. Assistant Director | Archaeological Survey of India"
              link="http://www.lifepage.in/page/rishabhkumarchaturvedi"
            />
            <Profile
              name="Vineet KKN Panchhi"
              role="Founder & Creative Director | Jingles India"
              link="http://www.lifepage.in/page/vineetkknpanchhi"
            />
            <Profile
              name="Shabhnam Praveen"
              link="http://www.lifepage.in/page/shabhnampraveen"
            />
            <Profile
              name="Nimmish Chaudhary"
              role="Account Manager | LifePage"
              link="http://www.lifepage.in/page/nimmishchaudhary"
            />

            <RightLink
              href="https://www.lifepage.in/pages.php"
              label="Explore all LifePage Members"
            />

            <GreyLine />

            <Section title="Read About" />

            <Article link="https://blog.lifepage.in/mission-iit-jee-indias-biggest-tragedy" text="Mission IIT JEE – India’s biggest tragedy!" />
            <Article link="https://blog.lifepage.in/resume-2-0-based-on-functional-areas-not-designations" text="Resume 2.0 – based on functional areas not designations" />
            <Article link="https://blog.lifepage.in/whats-next-after-boards" text="What’s Next – After Boards?" />
            <Article link="https://medium.com/@kapil.dehradun/free-career-counselling-4ef9ec696e38" text="Free Career Counselling" />
            <Article link="https://blog.lifepage.in/education-system-in-india" text="Education System in India" />

            <RightLink
              href="https://blog.lifepage.in/category/career-choice/"
              label="Explore the LifePage Blog"
            />

            <GreyLine />

            <Section title="Follow Us" />

            <div className="grid grid-cols-6 gap-4 text-center my-6">
              {["fb","youtube","instagram","twitter","Linkedin","Quora"].map(i => (
                <img
                  key={i}
                  src={`${BASE}support/${i}.png`}
                  className="h-10 mx-auto"
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
                style={{
                  borderCollapse: "separate",
                  borderSpacing: "0 8px",
                }}
              >

                <tbody>
                  {legacyFooterMenu.map((item, i) => (
                    <tr key={i} valign="bottom">
                      <td className="whitespace-nowrap bg-[#505050] text-white">
                        <a
                          href={item.link}
                          target={item.blank ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <img
                            src={`${BASE}support/${item.icon}`}
                            className="h-[25px] pl-1 pb-[2px]"
                          />
                          <span className="text-[16px] px-3">
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

/* ---------- HELPERS ---------- */

const Section = ({ title }) => (
  <h2 className="text-lg font-semibold my-6">{title}</h2>
);

const RightLink = ({ href, label }) => (
  <div className="text-right my-6">
    <a href={href} className="font-semibold inline-flex items-center gap-2">
      [{label}]
      <img src={`${import.meta.env.BASE_URL}support/right.png`} className="h-6" />
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

const GreyLine = () => (
  <hr className="my-8 border-t border-[#999]" />
);

const Profile = ({ name, role, link }) => (
  <div className="my-4">
    <a href={link} className="font-bold">{name}</a>
    {role && <div>{role}</div>}
  </div>
);

const Article = ({ link, text }) => (
  <div className="my-3">
    <a href={link} target="_blank" className="font-bold">
      {text}
    </a>
  </div>
);
