import {prisma} from "../prisma";

async function getBalance(userId: number): Promise<number | undefined> {
    const balance = await prisma.balance.findUnique({
        where: {
            userId: userId
        }
    })
    return balance?.amount
}

export {getBalance}