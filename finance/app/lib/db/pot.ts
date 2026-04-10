import { prisma } from "../prisma"

async function getPot(userId: number) {
  const pot = await prisma.pot.findFirst({
    where: { userId: userId }
  })
  return pot
}

export { getPot }