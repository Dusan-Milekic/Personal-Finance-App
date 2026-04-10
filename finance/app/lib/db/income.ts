import {prisma} from "../prisma"

async function GetIncome(userId: number) {
    const income = await prisma.income.findMany({
        where: { userId: userId }
    })
    return income[0]
}

async function CreateIncome(userId: number, amount: number, source: string) {
    const income = await prisma.income.create({
        data: {
            userId: userId,
            amount: amount,
            date: new Date()
        }
    })
    return income
}

export { GetIncome, CreateIncome }