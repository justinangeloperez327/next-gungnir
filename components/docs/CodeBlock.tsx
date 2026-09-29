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
    <figure className="overflow-hidden rounded-lg border border-gungnir-silver bg-gungnir-white">
      <figcaption className="flex items-center justify-between border-b border-gungnir-silver bg-gungnir-silver/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em]">
        <span className="text-gungnir-blue">{label}</span>
        {terminal && <span className="text-ink/45">Terminal</span>}
      </figcaption>
      <pre className="overflow-x-auto p-5 text-sm leading-7 text-ink">
        <code>{code}</code>
      </pre>
    </figure>
  );
}
