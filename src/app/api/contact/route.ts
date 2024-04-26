import { handleSubmit } from "@/service/form";

export async function POST(data: FormData) {
  const result = await handleSubmit(data);
  console.log("여기타니", result);
  return result.message;
}
