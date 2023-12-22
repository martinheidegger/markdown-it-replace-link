
import type MarkdownIt from 'markdown-it';
import type { Token } from 'markdown-it';
import type { ChildNode } from 'domhandler';

export interface ReplaceLinkOptions {
  replaceLink(
    link: string,
    env: { [key: string]: unknown },
    token: Token,
    node: ChildNode
  ): string;
  processHTML: boolean;
}

export default function(md: MarkdownIt, opts: ReplaceLinkOptions): void;
