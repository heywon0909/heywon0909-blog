export default function page() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="">
        <div className="gap-3 flex flex-col">
          <h1 className="text-2xl font-extrabold">Contact me</h1>
          <span className="text-xs">hw731911@gmail.com</span>
          <div className="w-full h-full  flex flex-col bg-black p-2 text-white rounded-md gap-2">
            <label htmlFor="email">email</label>
            <input type="text" id="email" name="email" />
            <label htmlFor="subject">subject</label>
            <input type="text" id="subject" name="subject" />
            <label htmlFor="message">message</label>
            <textarea id="message" name="message" />
          </div>
        </div>
      </div>
    </div>
  );
}
