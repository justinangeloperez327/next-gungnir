type CodeBlockProps = {
  code: string;
  label?: string;
  terminal?: boolean;
};

export function CodeBlock({
  code,
  label = "Gungnir",
  terminal = false,
}: CodeBlockProps) {
  return (
    <figure className="overflow-hidden rounded-lg border border-line bg-surface-elevated">
      <figcaption className="flex items-center justify-between border-b border-line bg-surface-muted px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em]">
        <span className="text-gungnir-blue">{label}</span>
        {terminal && <span className="text-foreground/45">Terminal</span>}
      </figcaption>
      <pre className="overflow-x-auto p-5 text-sm leading-7 text-foreground">
        <code>{code}</code>
      </pre>
    </figure>
  );
}
