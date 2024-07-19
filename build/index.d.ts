import React from 'react';
import { TerminalRendererOptions } from 'marked-terminal';
export type Props = TerminalRendererOptions & {
    children: string;
};
export default function Markdown({ children, ...options }: Props): React.JSX.Element;
