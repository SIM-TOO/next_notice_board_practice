import { connectDB } from "@/util/database";

export default async function Home() {

  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return (
    <div>
      몽고 DB 연결 테스트용  
    </div>
  );
}
