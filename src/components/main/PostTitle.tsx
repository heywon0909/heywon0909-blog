interface Props {
  title: string;
}
export default function PostTitle({ title }: Props) {
  return <h1 className="text-lg font-bold">{title}</h1>;
}
