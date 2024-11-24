export interface Snippet {
  title?: string;
  content: string;
}

export const snippetList: Snippet[] = [
  { content: "🚧📚 Add change to changelog" },
  { content: "⬆️ Update dependencies" },
  { content: "⬆️📚 Update docs" },
  {
    title: "🔍 Details (Markdown)",
    content: `\
<details>
  <summary>
  </summary>

  \`\`\`

  \`\`\`
</details>`,
  },
] as const;
