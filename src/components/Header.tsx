import HeaderList from "./HeaderList";

export default function Header() {
  return (
    <header className="w-full h-20 flex items-center p-2 justify-center fixed">
      <div className="w-5/6 flex justify-around">
        <h1 className="font-semibold text-2xl">heywon0909</h1>
        <HeaderList />
      </div>
    </header>
  );
}
