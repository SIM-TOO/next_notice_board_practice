
// dynamic route 방식

// detail/[id]/page.js

import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {

    const db = (await connectDB).db("forum");

    // findOne() 의 경우 object { } 자료를 넣으면 그 내용이 포함된 document를 하나 가져옵니다.
    let result = await db.collection("post").findOne({ _id: new ObjectId(props.params.id) });

    return (
        <div>
            <h4>상세페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
        </div>
    )
}