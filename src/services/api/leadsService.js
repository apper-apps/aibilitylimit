import leadsData from '@/services/mockData/leads.json'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const leadsService = {
  async getAll() {
    await delay(300)
    return [...leadsData]
  },

  async getById(id) {
    await delay(200)
    const lead = leadsData.find(lead => lead.Id === id)
    if (!lead) {
      throw new Error('Lead not found')
    }
    return { ...lead }
  },

  async create(leadData) {
    await delay(500)
    const newLead = {
      ...leadData,
      Id: Math.max(...leadsData.map(l => l.Id)) + 1
    }
    leadsData.push(newLead)
    return { ...newLead }
  },

  async update(id, leadData) {
    await delay(400)
    const index = leadsData.findIndex(lead => lead.Id === id)
    if (index === -1) {
      throw new Error('Lead not found')
    }
    leadsData[index] = { ...leadsData[index], ...leadData }
    return { ...leadsData[index] }
  },

  async delete(id) {
    await delay(300)
    const index = leadsData.findIndex(lead => lead.Id === id)
    if (index === -1) {
      throw new Error('Lead not found')
    }
    const deletedLead = leadsData.splice(index, 1)[0]
    return { ...deletedLead }
  }
}