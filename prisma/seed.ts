import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding ...')

  // Create default event types
  const eventTypes = [
    { name: 'Wedding' },
    { name: 'Corporate Event' },
    { name: 'Birthday Party' },
    { name: 'School Dance' },
    { name: 'Prom' },
    { name: 'Graduation Party' },
    { name: 'Anniversary' },
    { name: 'Holiday Party' },
    { name: 'Other' }
  ]

  for (const eventType of eventTypes) {
    // Check if event type already exists
    const existing = await prisma.eventType.findFirst({
      where: { name: eventType.name }
    })
    
    if (!existing) {
      const result = await prisma.eventType.create({
        data: eventType,
      })
      console.log(`Created event type: ${result.name}`)
    } else {
      console.log(`Event type already exists: ${existing.name}`)
    }
  }

  // Create default app settings
  const settings = await prisma.appSettings.upsert({
    where: { id: 1 },
    update: {},
    create: {
      acceptingSongRequests: true,
    },
  })
  console.log(`Created/found app settings: accepting requests = ${settings.acceptingSongRequests}`)

  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
