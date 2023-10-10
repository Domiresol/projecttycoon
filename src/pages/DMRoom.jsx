import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import { AiOutlinePlus } from "react-icons/ai";
import DMmodal from "../DMSet/DMmodal";
import { DMListCall } from "../DMSet/DM";
/** DM room을 담고있는 콘테이너 태그 */
const Container = styled.div`
  transition: 200ms;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: relative;
`;
/** 하단에 fix되어 항상 보이는 버튼 태그 */
const HoverIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: white;
  border-radius: 50%;
  background-color: black;
  user-select: none;
  font-size: 25px;
  :active {
    background-color: #3b3b3b;
  }
  position: fixed;
  bottom: 10px;
  right: 20px;
  animation: ${(props) => {
      return props.status ? "trueRotate" : "falseRotate";
    }}
    300ms ease-in-out both;
  @keyframes trueRotate {
    from {
      rotate: 0deg;
    }
    to {
      rotate: 45deg;
      background-color: #3b3b3b;
    }
  }
  @keyframes falseRotate {
    from {
      rotate: 45deg;
    }
    to {
      rotate: 0deg;
    }
  }
`;
function DMRoom({ userData }) {
  /** 자신의 DM 리스트 state */
  const [DMList, setDMList] = useState([]);
  /** DM 창이 열려있는지 확인하는 state */
  const [DMOpen, setDMOpen] = useState(false);
  /** DM창의 모드를 확인하는 state */
  const [sendMod, setSendMod] = useState("chatlist");
  /** DM창의 모드를 변경하는 function */
  const handleSetMod = useCallback((value) => {
    setSendMod(value);
  }, []);
  /** 자신의 ID를 통해 자신의 DM 리스트를 가져오는 funtion */
  const handleGetList = useCallback(() => {
    DMListCall(userData?.memberId).then((res) => {
      setDMList(res);
    });
  }, [userData?.memberId]);
  return (
    <Container>
      <DMmodal
        status={DMOpen}
        DMList={DMList}
        Mod={sendMod}
        myId={userData?.memberId}
        handleSetMod={handleSetMod}
        handleGetList={handleGetList}
      />
      <HoverIcon
        onClick={() => {
          setDMOpen(!DMOpen);
          setSendMod("chatlist");
          if (!DMOpen) {
            handleGetList();
          }
        }}
        status={DMOpen}
      >
        <AiOutlinePlus />
      </HoverIcon>
    </Container>
  );
}

export default DMRoom;
