
export interface PilesType {
  id: string;
  name: string;
  shortDescription: string;
  urlPath: string;
}

export const pilesTypes: PilesType[] = [
  {
    id: "internal",
    name: "Internal Piles",
    shortDescription: "Located inside the rectum and usually painless but may cause bleeding.",
    urlPath: "/piles/internal"
  },
  {
    id: "external",
    name: "External Piles",
    shortDescription: "Develop under the skin around the anus, often causing pain and discomfort.",
    urlPath: "/piles/external"
  },
  {
    id: "bleeding",
    name: "Bleeding Piles",
    shortDescription: "Characterized by bright red blood during bowel movements, requiring prompt treatment.",
    urlPath: "/piles/bleeding"
  },
  {
    id: "blind",
    name: "Blind Piles",
    shortDescription: "Non-bleeding hemorrhoids that cause discomfort and pain without visible bleeding.",
    urlPath: "/piles/blind"
  },
  {
    id: "thrombosed",
    name: "Thrombosed Piles",
    shortDescription: "Blood clots form within external hemorrhoids, causing severe pain and inflammation.",
    urlPath: "/piles/thrombosed"
  },
  {
    id: "prolapsed",
    name: "Prolapsed Piles",
    shortDescription: "Internal hemorrhoids that protrude outside the anal opening, causing discomfort.",
    urlPath: "/piles/prolapsed"
  },
  {
    id: "aggregate",
    name: "Aggregate Piles",
    shortDescription: "A collection of multiple hemorrhoids that have developed simultaneously, requiring comprehensive treatment.",
    urlPath: "/piles/aggregate"
  },
  {
    id: "end-bearing",
    name: "End Bearing Piles",
    shortDescription: "Hemorrhoids located at the terminal end of the anal canal, often causing significant discomfort during bowel movements.",
    urlPath: "/piles/end-bearing"
  },
  {
    id: "steel",
    name: "Steel Piles",
    shortDescription: "A colloquial term for very firm or hardened hemorrhoids that are particularly resistant to conventional treatments.",
    urlPath: "/piles/steel"
  },
  {
    id: "friction",
    name: "Friction Pile",
    shortDescription: "Hemorrhoids that become irritated due to friction during movement or physical activity, common in athletes.",
    urlPath: "/piles/friction"
  },
  {
    id: "sheet",
    name: "Sheet Piles",
    shortDescription: "A term for hemorrhoids that have spread in a sheet-like pattern around the anal area, requiring specialized treatment.",
    urlPath: "/piles/sheet"
  },
  {
    id: "bored",
    name: "Bored Piles",
    shortDescription: "Internal hemorrhoids that have created deeper tissue damage, often requiring more intensive therapeutic approaches.",
    urlPath: "/piles/bored"
  }
];
