import Accordian from "./components/Accordian";
import data from "./data";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          height: 0
        },
        show: {
          opacity: 1,
          height: "max-content",
          transition: {
            delayChildren: 2,
            type: "spring",
            duration: "2s"
          }
        }
      }}
      animate="show"
      initial="hidden"
      className="border border-zinc-700 rounded-md p-4 shadow-xl bg-zinc-700 bg-opacity-80 background-filter-blur flex flex-col gap-4"
    >
      <h2 className="flex justify-between items-center">
        <p className="text-2xl font-bold">Accordian</p>{" "}
        <small>Brandon Cannon</small>
      </h2>
      <Accordian data={data} />
    </motion.div>
  );
}

export default App;
