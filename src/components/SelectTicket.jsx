// import React from "react";
import styled from "styled-components";

const typeAccess = [
  { name: "REGULAR ACCESS", quantity: "20 left!", amount: "Free" },
  { name: "VIP ACCESS", quantity: "20 left!", amount: "$50" },
  { name: "VVIP ACCESS", quantity: "20 left!", amount: "$150" },
];

export default function SelectTicket({
  onChangeTicket,
  inputTicketNo,
  step,
  onNext,
}) {
  return (
    <TicketSelection>
      <TicketSelectionHeader>
        <h1>Ticket Selection</h1>
        <p>Step 1/3</p>
      </TicketSelectionHeader>
      <TicketSelectionBody>
        <TechemberText>
          <div>
            <h2 className="road-rage-regular">Techember Fest &quot;25</h2>
            <p>
              Join us for an unforgettable experience at <br /> Techies Talk!
              Secure your spot now.
            </p>
            <p>! F.C.T, Abuja || March 15, 2025 || 7:00PM</p>
          </div>
        </TechemberText>
        <TicketSelectionMain>
          <TicketSelectionTypeText>Select Ticket Type:</TicketSelectionTypeText>
          <TicketSelectionContent>
            {typeAccess.map((access) => {
              return (
                <TicketSelectionChild key={access.name}>
                  <div>
                    <p>{access.name}</p>
                    <p>{access.quantity}</p>
                  </div>
                  <TicketAmount>{access.amount}</TicketAmount>
                </TicketSelectionChild>
              );
            })}
          </TicketSelectionContent>
        </TicketSelectionMain>
        <TicketNumber>
          <p>Number of Tickets</p>
          <Select onChange={onChangeTicket} value={inputTicketNo}>
            {Array.from({ length: 30 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </Select>
        </TicketNumber>
        <Buttons>
          <Button className="button-cancel">Cancel</Button>

          {step < 3 && (
            <Button className="button-next" onClick={onNext}>
              Next
            </Button>
          )}
        </Buttons>
      </TicketSelectionBody>
    </TicketSelection>
  );
}

const TicketSelection = styled.div`
  border: 1px solid #197686;
  border-radius: 12px;
  margin-top: 30px;
  padding: 48px;
  /* max-width: 700px;
  max-height: 902px; */
  background-color: #041e23;
`;

const TicketSelectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TicketSelectionBody = styled.div`
  text-align: center;
  border: 1px solid #0e464f;
  border-radius: 12px;
  padding: 24px;
  background-color: #08252b;
`;

const TechemberText = styled.div`
  background: radial-gradient(
      103.64% 57.39% at 14.02% 32.06%,
      rgba(36, 160, 181, 0.2) 0%,
      rgba(36, 160, 181, 0) 100%
    ),
    rgba(10, 12, 17, 0.1);
  border: 1px solid #07373f;
  /* max-width: 556px;
  max-height: 200px; */
  padding: 24px;
  margin: 20px;
  border-radius: 12px;
`;
const TicketSelectionMain = styled.div``;
const TicketSelectionTypeText = styled.p`
  text-align: left;
  border-top: 5px solid #07373f;
  padding-top: 20px;
`;

const TicketSelectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  /* max-width: 556px;
  max-height: 186px; */
  border: 1px solid #07373f;
  border-radius: 12px;
  padding: 16px;
  margin: 20px;
`;

const TicketSelectionChild = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 25px;
  /* max-width: 242px;
  max-height: 65px; */
  padding: 10px;
  border-radius: 12px;
  border: 1px solid #07373f;
  justify-content: center;
`;

const TicketAmount = styled.p`
  padding: 8px;
  border: 1px solid #2ba4b9;
  border-radius: 12px;
  /* max-width: 80px;
  max-height: 30px; */
  background-color: #0e464f;
  display: flex;
  justify-content: end;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
`;

const TicketNumber = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Select = styled.select`
  background-color: #08252b;
  color: #ffffff;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #07373f;
  margin-bottom: 10px;
`;

const Buttons = styled.div`
  border: 1px solid #0e464f;
  border-radius: 24px;
  padding: 0;
  margin-top: 10px;
`;

const Button = styled.button`
  width: 214px;
  height: 48px;
  /* padding: 24px 12px; */
  border-radius: 8px;
`;
