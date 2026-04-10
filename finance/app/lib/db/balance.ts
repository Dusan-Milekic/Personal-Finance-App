import {prisma} from "../prisma";

async function getBalance(userId: number): Promise<number | undefined> {
    const balance = await prisma.balance.findUnique({
        where: {
            userId: userId
        }
    })
    return balance?.amount
}

 async function addBalance(userId: number, amount: number) {
  try {
    await prisma.balance.upsert({
      where: { userId },
      update: { amount: { increment: amount } },
      create: { userId, amount },
    });

    return { message: "Successfully deposited!" };
  } catch (e) {
    console.error(e);
    return { message: "Server error" };
  }
}

export {getBalance,addBalance}