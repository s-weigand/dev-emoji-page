export interface IDevIcon {
  icon: string
  usage: string
}

export const iconList: Array<IDevIcon> = [
  { icon: '✨', usage: 'Feature' },
  { icon: '🧪', usage: 'Tests' },
  { icon: '♻️', usage: 'Refactor' },
  { icon: '🧹', usage: 'Cleanup' },
  { icon: '🐛', usage: 'Bug' },
  { icon: '🩹', usage: 'Fix' },
  { icon: '📚', usage: 'Docs' },
  { icon: '🔌', usage: 'Plugin' },
  { icon: '💬', usage: 'Question' },
  { icon: '🤔', usage: 'Idea' },
  { icon: '🚧', usage: 'Maintain' },
  { icon: '🔧', usage: 'Tooling' },
  { icon: '🚇', usage: 'Infra' },
  { icon: '⬆️', usage: 'Update' },
  { icon: '🚀', usage: 'Release' },
  { icon: '🛡️', usage: 'Security' },
]
