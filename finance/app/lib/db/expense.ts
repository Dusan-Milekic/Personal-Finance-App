import {prisma} from "../prisma"
async function  getExpense(userId:number) {
    const expense = await prisma.expense.findMany({
        where: {userId:  userId},
    })
    return expense[0]
}

export {getExpense}