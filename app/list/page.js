import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {

    const db = (await connectDB).db("forum");
    let result = await db.collection("post").find().toArray();

    return (
        <div className="list-bg">
            {result.map((a, i) =>
                <div className="list-item" key={i}>

                    {/* Link 방식 */}
                    <Link href={`/detail/${result[i]._id}`}><h4>{result[i].title}</h4></Link>
                    <Link href={'/edit/' + result[i]._id} className="list-btn">✏️</Link>

                    {/* useRouter 방식 */}
                    {/* <DetailLink id={result[i]._id} /> */}

                    <p>{result[i].content}</p>
                </div>
            )
            }
        </div>
    )
}