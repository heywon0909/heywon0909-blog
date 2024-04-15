export default function page() {
  async function handleSubmit(formData: FormData) {
    "use server";

    const rawFormData = {
      customerId: formData.get("customerId"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    console.log("rawFormData", rawFormData);
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="gap-3 flex flex-col sm:w-1/4 w-2/3">
        <h1 className="text-2xl font-extrabold">Contact me</h1>
        <span className="text-xs">hw731911@gmail.com</span>
        <form
          className="w-full h-full  flex flex-col bg-slate-800 p-2 text-white rounded-md gap-3"
          action={handleSubmit}
        >
          <label htmlFor="email">email</label>
          <input type="text" id="email" name="email" className="text-black" />
          <label htmlFor="subject">subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="text-black"
          />
          <label htmlFor="message">message</label>
          <textarea
            id="message"
            name="message"
            className="resize-none text-black"
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}
