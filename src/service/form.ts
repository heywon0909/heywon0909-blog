"use server";
import { z } from "zod";
interface SubmitData {
  email: string;
  subject: string;
  message: string;
}
const schema = z.object({
  email: z
    .string({
      invalid_type_error: "Invalid Email",
    })
    .email({ message: "Invalid email address" }),
  subject: z.string(),
  message: z.string(),
});

export async function handleSubmit(prevData: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });
  console.log("formData", formData);

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      message: "오류가 발생하였습니다.",
    };
  }
  return { message: "제출되었습니다." };
}
