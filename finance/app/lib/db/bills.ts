import {prisma} from "../prisma"
async function getBills(userId:number) {
    const bills = await prisma.bill.findMany({
        where: {userId:  userId},    
    })
    return bills[0]
}

export {getBills}