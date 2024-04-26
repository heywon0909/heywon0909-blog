import UserForm from "@/components/form/UserForm";
import { handleSubmit } from "@/service/form";

export default function page() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="gap-3 flex flex-col sm:w-1/3 w-11/12">
        <h1 className="text-2xl font-extrabold text-white">Contact me 🖐</h1>
        <span className="text-xs text-white">hw731911@gmail.com</span>
        <UserForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
