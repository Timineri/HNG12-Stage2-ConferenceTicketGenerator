// import React from "react";
import styled from "styled-components";
import hugeicons from "../img/hugeicons_ticket-01.png";
import ticz from "../img/ticz.png";
import myticket from "../img/Property 1=bigger, State=Def.png";

const links = [
  { name: "Event" },
  { name: "My Ticket" },
  { name: "About Project" },
];
export default function UtilityHeader() {
  return (
    <Head>
      <Header>
        <div>
          <span>
            <img src={hugeicons} alt="" />
          </span>
          <span>
            <img src={ticz} alt="" />
          </span>
        </div>
        <div>
          <HeaderParentList>
            {links.map((link) => {
              return (
                <HeaderChildList key={link.name}>{link.name}</HeaderChildList>
              );
            })}
          </HeaderParentList>
        </div>
        <div>
          <img src={myticket} alt="" />
        </div>
      </Header>
    </Head>
  );
}
const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 90%;
  max-height: 76px;
  box-sizing: border-box;
  border: 1px solid #197686;
  border-radius: 12px;
  padding: 16px 12px;
  background-color: #041e23;
`;

const HeaderParentList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: #b3b3b3;
  max-width: 341px;
  max-height: 34px;
`;

const HeaderChildList = styled.div`
  list-style: none;
  &:hover {
    color: #ffffff;
  }
`;
