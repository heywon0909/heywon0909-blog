export async function POST(request: Request) {
  console.log("form", request);
  const formData = await request.formData();

  const subject = formData.get("subject");
  const email = formData.get("email");
  const message = formData.get("message");
  return Response.json({ email, subject, message });
}
