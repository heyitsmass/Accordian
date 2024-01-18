import { AnimatePresence } from "framer-motion";
import { Dispatch, useMemo } from "react";
import { TDataType } from "../../types";
import Description from "./Description";
import Title from "./Title";

type TItemProps = {
  data: TDataType;
  index: number;
  onClick: Dispatch<number>;
  isOpen: boolean;
};

export default function Item({
  data,
  index: i,
  onClick,
  isOpen
}: TItemProps) {
  const { title, description } = useMemo(() => data, [data]);

  return (
    <section
      key={`section-${i}`}
      className={[
        isOpen ? "border-zinc-400 shadow-lg scale-100 pb-6" : "",
        "border border-zinc-500 rounded-lg bg-zinc-800 scale-95 hover:scale-100 transition-all"
      ].join(" ")}
    >
      <Title title={title} onClick={() => onClick(i)} isOpen={isOpen} />
      <AnimatePresence>
        {isOpen && <Description values={description} />}
      </AnimatePresence>
    </section>
  );
}
