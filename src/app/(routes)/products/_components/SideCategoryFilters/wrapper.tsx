import React, { PropsWithChildren } from "react";

const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-white shadow p-6 flex flex-col gap-4 rounded-[20px]">
      {children}
    </div>
  );
};

export default Wrapper;
