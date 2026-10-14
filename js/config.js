/* =====================================================================
   EVERYTHING YOU NEED TO EDIT LIVES IN THIS FILE.
   Replace the sample text, then add your own projects at the bottom.
   ===================================================================== */
const SITE = {
  name: "Your Name",
  tagline: "I build things, break them on purpose, and write down what I learned.",
  currently: "Currently building: a solar-tracking sensor mount",

  /* COLOR THEME: "ocean" | "ice" | "midnight" (defined at the top of css/style.css) */
  theme: "ocean",

  /* Small label under your name, styled like a drawing dimension line */
  heroDimension: "Your Name, drawn to scale",

  /* The "drawing title block" in the hero. Edit, add, or delete rows. */
  titleBlock: [
    ["Drawn by", "Your Name"],
    ["Focus", "Mechanical + electrical"],
    ["Scale", "1:1"],
    ["Revision", "Fall 2026"]
  ],

  /* Order of sections. Delete a name to hide that section. */
  sections: ["about", "timeline", "projects", "skills", "awards", "contact"],

  /* BACKGROUNDS: any CSS background value. Leave "" for the default blueprint grid.
     Examples:  "url(images/hero.jpg) center/cover"
                "linear-gradient(180deg,#0b1b2e,#123a63)"
                "#0f2a4a"                                              */
  backgrounds: { page: "", hero: "", about: "", timeline: "", projects: "", skills: "", awards: "", contact: "" },

  about: {
    photo: "",  // e.g. "images/me.jpg"
    text: [
      "Write 2 to 3 short paragraphs here. Start with what you love building and why, then what you want to learn next.",
      "Admissions readers want your voice, so mention a failed prototype you are proud of."
    ],
    funFacts: ["Owns more multimeters than socks.", "Has rebuilt the same bike derailleur three times.", "Replace these with your own."]
  },

  skills: [
    { group: "Design and fabrication", items: ["CAD (Fusion 360)", "3D printing", "Laser cutting", "Soldering"] },
    { group: "Electronics and code", items: ["Arduino", "Python", "C++", "KiCad"] },
    { group: "Process", items: ["Prototyping", "Data logging", "Testing and iteration"] }
  ],

  awards: [
    { year: "2026", title: "Regional Science and Engineering Fair, 2nd place", note: "Water quality sensor project" },
    { year: "2025", title: "Robotics team, mechanical lead", note: "Designed the intake and drivetrain" }
  ],

  contact: {
    email: "you@example.com",
    resume: "",  // e.g. "resume.pdf"
    links: [{ label: "GitHub", url: "https://github.com/your-username" }]
  },

  /* =====================================================================
     PROJECTS. To add one: copy a whole { ... } block, paste it after the
     last one (keep the comma), and change the text. Order doesn't matter:
     the timeline sorts by "date" (YYYY-MM).

     Each project has STAGES (shown as numbered steps inside the project
     window). Each stage has a "media" list. Add as many items as you like:
       { src: "images/rover/cad.jpg", caption: "First CAD model" }
       { type: "video", src: "images/rover/test.mp4", caption: "Test run" }
       { youtube: "VIDEO_ID", caption: "Demo" }
     An item with no src shows a dashed "add media" placeholder.
     ===================================================================== */
  projects: [
    {
      id: "rover",
      title: "Line-following rover",
      date: "2025-03",
      status: "Completed",
      tags: ["Arduino", "PID control", "3D printing"],
      cover: "",  // e.g. "images/rover/cover.jpg"
      summary: "A small rover that follows a track and corrects itself using a PID controller.",
      description: "Longer description. What problem did you pick, why, and what was the result? Include a number if you have one.",
      links: [{ label: "Code on GitHub", url: "https://github.com/your-username/rover" }],
      stages: [
        { title: "Problem and goals", date: "2025-03", text: "What you wanted to build and how you would know it worked.", media: [{ caption: "Sketch from my notebook" }] },
        { title: "Design and prototype", date: "2025-04", text: "Key design choices and the tradeoffs you made.", media: [{ caption: "CAD model" }, { caption: "First print" }] },
        { title: "Testing and what failed", date: "2025-05", text: "What broke, what the data showed, what you changed.", media: [{ type: "video", caption: "Test run" }] },
        { title: "Final result", date: "2025-06", text: "Final performance and what you would do next.", media: [{ caption: "Finished rover" }] }
      ]
    },
    {
      id: "sensor",
      title: "Low-cost water quality sensor",
      date: "2026-01",
      status: "In progress",
      tags: ["Electronics", "Data", "Field testing"],
      cover: "",
      summary: "A sensor that logs turbidity and temperature for under $30.",
      stages: [
        { title: "Research", date: "2026-01", text: "What existing sensors cost and why that matters.", media: [{ caption: "Cost comparison" }] },
        { title: "First prototype", date: "2026-03", text: "Circuit and enclosure v1.", media: [{ caption: "Breadboard version" }, { caption: "Enclosure" }] }
      ]
    }
  ]
};
