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
export async function handleSubmit(formData: FormData) {
  "use server";

  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  console.log("rawFormData", validatedFields);
}
