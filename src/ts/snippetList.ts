export interface Snippet {
  title?: string;
  content: string;
}

export const snippetList: Snippet[] = [
  { content: "🚧📚 Added change to changelog" },
  { content: "⬆️ Update dependencies" },
  { content: "⬆️📚 Updated docs" },
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
