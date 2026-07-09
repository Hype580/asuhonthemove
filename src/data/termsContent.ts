// Content is generated from terms_and_conditions.pdf by scripts/build_terms.py.
// Do not edit termsContent.json by hand — update the PDF and re-run the script.
import raw from './termsContent.json';

export type TermsBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'list'; ordered: boolean; start: number; items: string[] };

export interface TermsSection {
  id: string;
  heading: string;
  blocks: TermsBlock[];
}

export interface ITermsContent {
  title: string;
  intro: TermsBlock[];
  sections: TermsSection[];
}

export const termsContent = raw as ITermsContent;
