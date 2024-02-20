import { connectDB } from "@/util/database";

import ListItem from "./ListItem";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {

    const db = (await connectDB).db("forum");
    let result = await db.collection("post").find().toArray();
    return (
        <div className="list-bg">
            <ListItem result={result} />

            {/* useRouter 방식 */}
            {/* <DetailLink id={result[i]._id} /> */}
        </div>
    )
}