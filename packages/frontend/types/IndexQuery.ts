/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IndexQuery
// ====================================================

export interface IndexQuery_fontFamilies_fonts {
  __typename: "Font";
  id: string;
  numGlyphs: number | null;
  ascender: number;
  descender: number;
}

export interface IndexQuery_fontFamilies {
  __typename: "FontFamily";
  id: string;
  family: string;
  fonts: IndexQuery_fontFamilies_fonts[];
}

export interface IndexQuery {
  fontFamilies: IndexQuery_fontFamilies[];
}
