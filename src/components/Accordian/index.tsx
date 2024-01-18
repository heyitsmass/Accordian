import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useDropdownRef from "../../hooks/useDropdownRef";
import { TDataType } from "../../types";
import Item from "./Item";
export default function Accordian({ data }: { data: TDataType[] }) {
  const [open, setOpen] = useState(-1);

  const ref = useDropdownRef<HTMLDivElement>(() => setOpen(-1));

  useEffect(() => {}, [open]);

  const handleClick = (value: number) =>
    setOpen(value === open ? -1 : value);

  return (
    <motion.div
      className="w-[800px] h-[600px] flex flex-col gap-2 pb-10"
      ref={ref}
    >
      {data.map((item, i) => {
        return (
          <Item
            key={`list-${i}`}
            data={item}
            index={i}
            onClick={handleClick}
            isOpen={open === i}
          />
        );
      })}
    </motion.div>
  );
}
