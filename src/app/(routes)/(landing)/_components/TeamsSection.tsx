import React from "react";
import img from "@/images/images/team-member.svg";
import Image from "next/image";
import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import YoutubeIcon from "@/components/icons/YoutubeIcon";
import Link from "next/link";

const links: { icon: React.ReactNode; link: string }[] = [
  { icon: <FacebookIcon />, link: "" },
  { icon: <InstagramIcon />, link: "" },
  { icon: <TwitterIcon />, link: "" },
  { icon: <YoutubeIcon />, link: "" },
];

export default function TeamsSection() {
  return (
    <section className="main-container">
      <div className="text-center">
        <h2 className="text-primary font-bold uppercase tracking-[4px]">
          Our Team
        </h2>
        <p className="text-main text-3xl font-bold mt-2 storing-header">
          Meet Our Expert <span className="text-primary">Team</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {Array.from({ length: 4 }).map((_, i) => {
          return (
            <div
              key={i}
              style={{ boxShadow: "0px 1px 5px 0px #00000033" }}
              className="p-6 pb-4 rounded-[40px]"
            >
              <Image src={img} alt="" className="w-full" />
              <div className="font-bold text-center text-lg py-4 border-b border-[#757F95]">
                <p className="text-main">Ahmed Mohamed</p>
                <p className="text-primary">Senior Manager</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                {links.map((icon, j) => {
                  return (
                    <Link
                      key={j}
                      href={icon.link}
                      className="size-9 flex items-center justify-center bg-primary rounded-full"
                    >
                      {icon.icon}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
