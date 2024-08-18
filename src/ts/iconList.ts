export interface DevIcon {
  icon: string;
  usage: string;
}

export const iconList: DevIcon[] = [
  { icon: "✔️", usage: "Success" },
  { icon: "❌", usage: "Fail" },
  { icon: "✨", usage: "Feature" },
  { icon: "👌", usage: "Improve" },
  { icon: "🧪", usage: "Tests" },
  { icon: "♻️", usage: "Refactor" },
  { icon: "🧹", usage: "Cleanup" },
  { icon: "⌨️", usage: "Typing" },
  { icon: "🐛", usage: "Bug" },
  { icon: "🩹", usage: "Fix" },
  { icon: "📚", usage: "Docs" },
  { icon: "🔌", usage: "Plugin" },
  { icon: "💬", usage: "Question" },
  { icon: "🤔", usage: "Idea" },
  { icon: "🚧", usage: "Maintain" },
  { icon: "🗑️", usage: "Deprecate" },
  { icon: "🧰", usage: "Tooling" },
  { icon: "👷", usage: "Build system" },
  { icon: "📦", usage: "Packaging" },
  { icon: "🚇", usage: "Infra" },
  { icon: "🐋", usage: "Docker" },
  { icon: "⬆️", usage: "Update" },
  { icon: "🎨", usage: "Style" },
  { icon: "🚀", usage: "Release" },
  { icon: "🛡️", usage: "Security" },
  { icon: "💥", usage: "BREAKING" },
] as const;
