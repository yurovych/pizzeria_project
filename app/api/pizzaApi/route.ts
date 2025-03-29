import { connectToDB } from '@/utils/database'
import Pizza from '@/models/pizza'

export const GET = async (request: Request
) => {

    try {
        await connectToDB();

        const pizza = await Pizza.find({});

        return new Response(JSON.stringify(pizza), { status: 200 })
    } catch (error) {
        return new Response(`Failed to fetch pizza data. Error is ${error}`, { status: 500 })
    }
}