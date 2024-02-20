import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {

    if (요청.method == 'DELETE') {
        try {
            let db = (await connectDB).db('forum')
            let result = await db.collection('post').deleteOne({ _id: new ObjectId(요청.body) });
            응답.status(200).json('삭제 완료');
        }
        catch (error) {
            응답.status(500)
        }

        // result 결과가 이상하면 응답.status(500)
        // result 결과가 정상이면 응답.status(200)
    }
}