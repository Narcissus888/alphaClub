"use client";
import { useEffect, useState } from "react";

import { ExploreWrapper } from "@/components/custom/exploreWrapper";
import RewardsBackgroundImg from "@/assets/images/airdrop/rewardsBackground.png";
import rewardsRank from "@/assets/images/airdrop/rewards.png";
import styles from "./index.module.scss";
import copyIcon from "@/assets/images/copyIcon.png";
import { copyTextToClipboardSafari } from "@/lib/utils";

import { useSelector } from "react-redux";
import Image from "next/image";
import { getInviteCode } from "@/service/userService";

const Rewards = () => {
  //   const { userinfo } = useSelector((state: any) => state.user);

  const [inviteCodeList, setInviteCodeList] = useState<inviteCodeType[]>([]);

  useEffect(() => {
    getInviteCode().then((res) => {
      const { result } = res;
      setInviteCodeList(result);
    });
  }, []);

  const copyInviteCode = (code: string) => {
    console.log(code);
    copyTextToClipboardSafari(code);
  };

  return (
    <ExploreWrapper Title={"Rewards"} BgImg={undefined} BgColor={"black"}>
      <div
        style={{
          fontSize: "34px",
          fontWeight: "400",
          lineHeight: "40px",
          color: "#FED335",
          height: "165px",
          width: "330",
          marginTop: "22px",
          paddingLeft: "20px",
        }}
      >
        Points are airdropped every week and will have future uses in Alpha
      </div>
      <div
        style={{
          position: "absolute",
          right: 0,
          top: "23%",
        }}
      >
        <Image
          width={333}
          height={568}
          src={RewardsBackgroundImg}
          alt="Reward Background Img"
        ></Image>
      </div>
      <div
        style={{
          position: "absolute",
          left: "0",
          bottom: "20px",
          borderRadius: "15px",
          marginLeft: "20px",
          width: "94%",
        }}
      >
        <div className={styles.rewardstext}>
          <div className={styles.rewardsPoints}>
            <div>Your Reward Points</div>
            {/* <div>{userinfo.points}</div> */}
            <div className="">0</div>

            <div className={styles.inViteCode}>
              Invite a Friend
              {inviteCodeList.map((item, index) => {
                return (
                  <div key={index + "q"} className={styles.code}>
                    {item.inviteCode}
                    <Image
                      onClick={() => {
                        copyInviteCode(item.inviteCode);
                      }}
                      width={15}
                      height={15}
                      src={copyIcon}
                      alt=""
                    ></Image>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.rank}>
            <div>Your Rank</div>
            <Image width={142} height={32} src={rewardsRank} alt="" />
          </div>
        </div>
      </div>
    </ExploreWrapper>
  );
};
export default Rewards;
