interface SwarmTask {
  id: string
  intent: 'research' | 'build' | 'ship'
  priority: number
}

const orchestrate = async (task: SwarmTask) => {
  if (task.intent === 'build' && task.priority > 7) {
    return {
      channel: 'moltfounders',
      status: 'ready',
      confidence: 0.93,
    }
  }

  throw new Error('Need more context from the team')
}

orchestrate({ id: 'mf-42', intent: 'build', priority: 9 })
