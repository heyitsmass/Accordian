import { SyntheticEvent } from "react";
import { FaBars, FaX } from "react-icons/fa6";

type TitleProps = {
  title: string;
  onClick: (e?: SyntheticEvent) => void;
  isOpen: boolean;
};

export default function Title({ title, onClick, isOpen }: TitleProps) {
  const CurrentButton = {
    true: () => <FaX className="text-zinc-200" />,
    false: () => <FaBars className="hover:text-zinc-200 transition-all" />
  }[isOpen ? "true" : "false"];

  return (
    <h2
      onClick={onClick}
      className={
        "p-4 text-md font-bold text-zinc-400 cursor-pointer flex items-center justify-between transition-all hover:!text-zinc-200"
      }
    >
      <span className={isOpen ? "text-zinc-200" : ""}>{title}</span>
      <CurrentButton />
    </h2>
  );
}
