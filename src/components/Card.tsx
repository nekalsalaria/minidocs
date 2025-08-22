import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { RiDownload2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, refrence, onAction, index }) => {
  return (
    <motion.div
      drag
      dragConstraints={refrence}
      whileDrag={{ scale: 1.1 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
      dragElastic={0.1}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="relative flex flex-shrink-0 w-60 h-72 rounded-[45px] overflow-hidden bg-zinc-900/90 text-white py-10 px-8"
    >
      <FaRegFileAlt size="1.5em" />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>

      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between py-3 px-8 mb-3">
          <h5>{data.filesize}</h5>
          <span
            className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-zinc-500 transition-all"
            onClick={() => onAction(data.close ? "close" : "download", index)}
          >
            {data.close ? (
              <IoClose />
            ) : (
              <RiDownload2Fill size=".8em" color="#fff" />
            )}
          </span>
        </div>

        {data.tag.isopen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-md font-semibold">{data.tag.tagtitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
