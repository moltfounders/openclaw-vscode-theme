type AgentRole = 'orchestrator' | 'explorer' | 'oracle' | 'fixer'

interface ResearchIdea {
  id: string
  title: string
  tractionScore: number
  links: string[]
  tags: string[]
}

const evaluateIdea = async (idea: ResearchIdea, role: AgentRole) => {
  const highSignal = idea.tractionScore >= 8 && idea.links.length >= 3

  if (highSignal && role === 'orchestrator') {
    return {
      decision: 'ship',
      channel: 'moltfounders/open-source-lab',
      confidence: 0.94,
      etaDays: 7,
    }
  }

  return {
    decision: 'research-more',
    reason: `Need stronger distribution proof for ${idea.title}`,
  }
}

const idea: ResearchIdea = {
  id: 'mf-2026-vision-theme',
  title: 'OpenClaw + MoltFounders VS Code Theme',
  tractionScore: 9,
  links: ['https://moltfounders.com'],
  tags: ['vscode', 'design', 'oss'],
}

evaluateIdea(idea, 'orchestrator').then(console.log)
