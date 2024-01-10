import React from 'react';
import { marked } from 'marked';
import { Text } from 'ink';
// @ts-ignore - temporary fix for using a fork
import { markedTerminal, TerminalRendererOptions } from 'marked-terminal';

export type Props = TerminalRendererOptions & {
  children: string;
};

export default function Markdown({ children, ...options }: Props) {
  marked.use(markedTerminal(options));
  return <Text>{(marked.parse(children) as string).trim()}</Text>;
}
