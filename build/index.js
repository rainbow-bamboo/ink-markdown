import React from 'react';
import { marked } from 'marked';
import { Text } from 'ink';
// @ts-ignore - temporary fix for using a fork
import { markedTerminal } from 'marked-terminal';
export default function Markdown({ children, ...options }) {
    marked.use(markedTerminal(options));
    return React.createElement(Text, null, marked.parse(children).trim());
}
