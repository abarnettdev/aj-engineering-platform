type AskAjAnswerContentProps = {
  content: string;
  isPending?: boolean;
};

export function AskAjAnswerContent({
  content,
  isPending = false,
}: AskAjAnswerContentProps) {
  if (!content) {
    return (
      <p className="text-sm leading-relaxed md:text-base">
        Preparing response...
      </p>
    );
  }

  const blocks = content.trim().split(/\n{2,}/);

  return (
    <div className="space-y-4 break-words text-sm leading-relaxed md:text-base">
      {blocks.map((block, index) => {
        const lines = block.split("\n").filter(Boolean);
        const isList = lines.every((line) => /^[-*]\s+/.test(line));

        if (isList) {
          return (
            <ul key={`${index}-${block}`} className="list-disc space-y-1 pl-5">
              {lines.map((line) => (
                <li key={line}>
                  {cleanPlainText(line.replace(/^[-*]\s+/, ""))}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={`${index}-${block}`}>{cleanPlainText(lines.join(" "))}</p>
        );
      })}
      {isPending && (
        <span className="sr-only">Answer is still being written.</span>
      )}
    </div>
  );
}

function cleanPlainText(value: string) {
  return value
    .replace(/\*\*/g, "")
    .replace(/__/g, "")
    .replace(/`/g, "")
    .replace(/^#{1,6}\s+/, "");
}
