// Only approved, public copy belongs in this file.
export const dispatches = [
  {
    slug: "kryvyi-rih",
    title: "Russian strike on central Kryvyi Rih kills two",
    summary: "Regional officials reported 60 wounded, including six children.",
    date: "2026-11-22",
    image: {
      src: "/assets/dispatches/kryvyi-rih.jpg",
      alt: "Deep Clearance Dispatch card with the strike headline and an illustrated Kryvyi Rih city grid.",
      width: 1774,
      height: 887,
      type: "image/jpeg",
    },
    paragraphs: [
      "A Russian strike hit central Kryvyi Rih on the evening of November 20. City officials said a seven-year-old boy and a 20-year-old woman were killed. The regional administration reported 60 people wounded, including six children.",
      "City officials reported damage to about 25 apartment buildings, a hospital, and schools. They also reported a subsequent strike on an industrial facility overnight.",
    ],
    sources: [
      { title: "Associated Press · November 21, 2026", url: "https://apnews.com/article/bfdee2ffadc2693e7338d6822e5356ef" },
      { title: "Ukrainska Pravda · November 21, 2026", url: "https://www.pravda.com.ua/eng/news/2026/11/21/8063901/" },
    ],
    updates: [],
  },
  {
    slug: "introducing-dispatches",
    title: "Introducing Deep Clearance Dispatch",
    summary: "A public record of new documents and what they change.",
    date: "2026-11-20",
    paragraphs: [
      "Deep Clearance researches institutional power through primary sources. Dispatches brings that approach to new filings, releases, and public records.",
      "Each dispatch links to the original source. When the record changes, we'll add a dated update to the same page.",
    ],
    sources: [
      {
        title: "Deep Clearance methodology",
        url: "https://deepclearance.com/methodology/",
      },
    ],
    updates: [],
  },
];

export function dispatchDate(date) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(date));
}
