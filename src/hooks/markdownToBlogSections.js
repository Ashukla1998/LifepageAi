// export function markdownToBlogSections(markdown) {
//   const sessionProfile = JSON.parse(
//     localStorage.getItem("selectedProfile")
//   );

//   const lines = markdown.split("\n");
//   const sections = [];

//   let currentSection = null;
//   let currentSub = null;
//   let introHandled = false;

//   // IMAGE COUNTER START
//   let imageCounter = 4; // 0004

//   const padNumber = (num) => String(num).padStart(4, "0");

//   const getImageUrl = () =>
//     `https://storage.googleapis.com/lifepage-video-android/${sessionProfile.profileid}/${sessionProfile.profileid}-${padNumber(imageCounter)}.JPG`;

//   const slugify = (text) =>
//     text
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, "-")
//       .replace(/(^-|-$)/g, "");

//   for (let i = 0; i < lines.length; i++) {
//     const line = lines[i].trim();

//     /* ---------------- MAIN TITLE (#) ---------------- */
//     if (line.startsWith("# ") && !introHandled) {
//       const title = line.replace("# ", "").trim();

//       currentSection = {
//         id: slugify(title),
//         title,
//         content: [],
//       };

//       sections.push(currentSection);
//       introHandled = true;
//       continue;
//     }

//     /* ---------------- INTRO TEXT ---------------- */
//     if (
//       introHandled &&
//       !line.startsWith("##") &&
//       !line.startsWith("###") &&
//       sections.length === 1 &&
//       currentSection.content.length === 0 &&
//       line !== ""
//     ) {
//       currentSection.content.push({
//         subtitle: "",
//         text: line,
//       });
//       continue;
//     }

//     /* ---------------- NEW SECTION (##) ---------------- */
//     if (line.startsWith("## ")) {
//       // GAP after previous category
//       if (currentSection && currentSection.content.length > 0) {
//         imageCounter += 1; // skip one image number
//       }

//       const title = line.replace("## ", "").trim();

//       currentSection = {
//         id: slugify(title),
//         title,
//         content: [],
//       };

//       sections.push(currentSection);
//       currentSub = null;
//       continue;
//     }

//     /* ---------------- SUB TITLE (###) ---------------- */
//     if (line.startsWith("### ")) {
//       currentSub = {
//         subtitle: line.replace("### ", "").trim(),
//         text: "",
//         image: getImageUrl(), 
//       };

//       currentSection.content.push(currentSub);

//       imageCounter += 1; // move to next image
//       continue;
//     }

//     /* ---------------- CONTENT ---------------- */
//     if (line !== "" && currentSection) {
//       if (!currentSub) {
//         currentSub = { subtitle: "", text: "" };
//         currentSection.content.push(currentSub);
//       }

//       currentSub.text +=
//         (currentSub.text ? "\n\n" : "") + line;
//     }
//   }

//   return sections;
// }

export function markdownToBlogSections(markdown) {
  const sessionProfile = JSON.parse(
    localStorage.getItem("selectedProfile")
  );
  // const titleImage = `https://storage.googleapis.com/lifepage-video-android/${sessionid}/${sessionid}.JPG`;
  const lines = markdown.split("\n");
  const sections = [];

  let currentSection = null;
  let currentSub = null;

  let imageCounter = 6;
  let imageEnabled = false; // 🔴 images OFF initially

  const pad = (n) => String(n).padStart(4, "0");

  const getImageUrl = () =>
    `https://storage.googleapis.com/lifepage-video-android/${sessionProfile.profileid}/${sessionProfile.profileid}-${pad(imageCounter)}.JPG`;

  const slugify = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const pushSub = () => {
    if (!currentSub) return;

    if (imageEnabled) {
      currentSub.image = getImageUrl();
      imageCounter += 1;
    }

    currentSection.content.push(currentSub);
    currentSub = null;
  };

  const finishCategory = () => {
    pushSub();
    if (imageEnabled) {
      imageCounter += 1; // GAP after category
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    /* MAIN TITLE */
    if (line.startsWith("# ") && !sections.length) {
      currentSection = {
        id: slugify(line.replace("# ", "")),
        title: line.replace("# ", ""),
        content: [],
      };
      sections.push(currentSection);
      continue;
    }

    /* NEW CATEGORY */
    if (line.startsWith("## ")) {
      if (currentSection) finishCategory();

      const title = line.replace("## ", "").trim();

      if (title.toLowerCase() === "education") {
        imageEnabled = true; // ✅ images start here
      }

      currentSection = {
        id: slugify(title),
        title,
        content: [],
      };
      sections.push(currentSection);
      continue;
    }

    /* SUBTEXT */
    if (line.startsWith("### ")) {
      pushSub();
      currentSub = {
        subtitle: line.replace("### ", "").trim(),
        text: "",
      };
      continue;
    }

    /* TEXT */
    if (line !== "") {
      if (!currentSub) {
        currentSub = { subtitle: "", text: "" };
      }
      currentSub.text += (currentSub.text ? "\n\n" : "") + line;
    }
  }

  finishCategory();
  return sections;
}
