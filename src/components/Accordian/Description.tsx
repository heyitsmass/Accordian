import { motion } from "framer-motion";
import { ReactNode } from "react";

type DescriptionProps<T extends ReactNode = ReactNode> = {
  values: T[];
};

export default function Description<T extends ReactNode>({
  values
}: DescriptionProps<T>) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, height: 0 },
    show: { opacity: 1, height: "fit-content", duration: 0.2 }
  };

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{
        restSpeed: 1
      }}
      className={"px-12 !w-[400px] min-w-full flex flex-col gap-2"}
    >
      {values.map((value, j) => (
        <motion.li
          key={`bulletpoint-${j}`}
          className="list-disc"
          variants={item}
        >
          {value}
        </motion.li>
      ))}
    </motion.ul>
  );
}
