import { nftContract } from "@/consts/parameters";
import { truncateAddress } from "@/utils/truncateAddress";
import type { FC } from "react";

export const PoweredBy: FC = () => {
  return (
    <a
      href={`https://thirdweb.com/${nftContract.chain.id}/${nftContract.address}`}
      target="_blank"
      rel="noreferrer"
      className="mr-4 flex max-w-[163px] cursor-pointer items-center justify-center gap-3 rounded-lg bg-white/5 px-4 py-2 shadow-2xl md:ml-auto"
    >
      <div className="flex flex-col">
        <p className="text-xs font-semibold text-white">
          {truncateAddress(nftContract.address)}
        </p>
      </div>
    </a>
  );
};
