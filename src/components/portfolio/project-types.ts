import type { ReactNode } from "react";

export type Category = "react" | "next" | "native";

export type Project = {
  id: string;
  title: string;
  descEn: string;
  descAr: string;
  longEn: string;
  longAr: string;
  highlightsEn: string[];
  highlightsAr: string[];
  stack: string[];
  link: string;
  repo: string;
  cover: string;
  gallery: string[];
  category: Category;
};

export type WithChildren = { children?: ReactNode };
