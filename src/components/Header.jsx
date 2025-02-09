import React from "react";

const Header = () => {
  return (
    <div className="text-3xl text-white font-semibold flex justify-center items-center bg-zinc-900 h-15 w-1/2 rounded-full mt-3">
      To-Do List's
    </div>
  );
};

export default React.memo(Header);
