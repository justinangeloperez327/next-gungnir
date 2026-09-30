"use client";

import { useState } from "react";

type CodeBlockProps = {
  code: string;
  label?: string;
  terminal?: boolean;
};

const keywordPattern =
  /(\b(?:model|controller|migration|middleware|policy|event|listener|notification|mail|Response|Request|return|const|async|await|string|bool|true|false|class|public|void|override)\b|"(?:[^"\\]|\\.)*")/g;

function renderCode(code: string) {
  return code.split("\n").map((line, lineIndex) => (
    <div key={lineIndex} className="table-row">
      <span
        aria-hidden="true"
        className="table-cell w-10 select-none pr-4 text-right text-foreground/25"
      >
        {lineIndex + 1}
      </span>
      <span className="table-cell whitespace-pre">
        {line.split(keywordPattern).map((token, tokenIndex) => {
          if (/^(model|controller|migration|middleware|policy|event|listener|notification|mail|Response|Request|return|const|async|await|string|bool|true|false|class|public|void|override)$/.test(token)) {
            return (
              <span key={tokenIndex} className="text-gungnir-blue">
                {token}
              </span>
            );
          }

          if (/^".*"$/.test(token)) {
            return (
              <span key={tokenIndex} className="text-foreground/65">
                {token}
              </span>
            );
          }

          return token;
        })}
      </span>
    </div>
  ));
}

export function CodeBlock({
  code,
  label = "Gungnir",
  terminal = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <figure className="overflow-hidden rounded-lg border border-line bg-surface-elevated">
      <figcaption className="flex min-h-10 items-center justify-between gap-4 border-b border-line bg-surface-muted px-4 text-xs">
        <div className="flex min-w-0 items-center gap-3">
          <span className="truncate font-medium text-foreground/70">{label}</span>
          {terminal && (
            <span className="rounded border border-line px-1.5 py-0.5 text-[10px] uppercase tracking-[0.12em] text-foreground/45">
              Terminal
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={copyCode}
          className="min-h-9 rounded px-2 text-xs font-medium text-foreground/55 transition-colors hover:bg-surface hover:text-gungnir-blue"
          aria-label={copied ? "Code copied" : "Copy code"}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </figcaption>
      <pre className="overflow-x-auto p-5 text-[13px] leading-7 text-foreground sm:text-sm">
        <code className="table min-w-full">{renderCode(code)}</code>
      </pre>
    </figure>
  );
}
