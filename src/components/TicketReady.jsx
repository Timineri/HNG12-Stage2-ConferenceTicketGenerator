// import React from "react";
import styled from "styled-components";

export default function TicketReady({
  name,
  email,
  request,
  inputTicketNo,
  step,
  onNext,
  onPrev,
  imagePreview,
}) {
  return (
    <TicketReadyMain>
      <TicketReadyHeader>
        <h1>Ready</h1>
        <p>Step 3/3</p>
      </TicketReadyHeader>
      <TicketReadyText>
        <h1>Your Ticket is Booked!</h1>
        <p>
          Check your email for a copy or you can <a href="">download</a>
        </p>
      </TicketReadyText>
      <TicketReadyBody>
        <h2>Techember Fest &quot;25</h2>
        <p>
          ! 04 Rumens road, Ikoyi, Lagos <br /> ! March 15, 2025 | 7:00PM
        </p>
        <UploadContainer>
          <DragDrop>{imagePreview}</DragDrop>
        </UploadContainer>
        <Details>
          <Row>
            <Column>
              <Label>Enter your name</Label>
              <Value>{name}</Value>
            </Column>
            <Column>
              <Label>Enter your email *</Label>
              <Value>{email}</Value>
            </Column>
          </Row>
          <Row>
            <Column>
              <Label>Ticket Type:</Label>
              <Value>VIP</Value>
            </Column>
            <Column>
              <Label>Ticket for:</Label>
              <Value>{inputTicketNo}</Value>
            </Column>
          </Row>
          <SpecialRequest>
            <Label>Special request?</Label>
            <SpecialRequestText>{request}</SpecialRequestText>
          </SpecialRequest>
        </Details>
      </TicketReadyBody>
      <Buttons>
        {step > 0 && (
          <Button className="button-cancel" onClick={onPrev}>
            Book Another Ticket
          </Button>
        )}
        {step <= 3 && <Button className="button-next">Download Ticket</Button>}
      </Buttons>
    </TicketReadyMain>
  );
}

const TicketReadyMain = styled.div`
  border: 1px solid #197686;
  border-radius: 12px;
  margin-top: 30px;
  padding: 48px;
  /* max-width: 700px;
  max-height: 1025px; */
  background-color: #041e23;
`;

const TicketReadyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TicketReadyText = styled.div`
  text-align: center;
`;

const TicketReadyBody = styled.div`
  border: 1px solid #197686;
  border-radius: 12px;
  margin-top: 30px;
  padding: 48px;
  /* max-width: 604px;
  max-height: 923px; */
  text-align: center;
  background: radial-gradient(
      103.64% 57.39% at 14.02% 32.06%,
      rgba(36, 160, 181, 0.2) 0%,
      rgba(36, 160, 181, 0) 100%
    ),
    rgba(10, 12, 17, 0.1);
`;

const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DragDrop = styled.div`
  background-color: #0e464f;
  padding: 12px 24px;
  width: 240px;
  height: 180px;
  border-radius: 32px;
`;

const Details = styled.div`
  max-width: 332px;
  background-color: #08343c;
  border-radius: 12px;
  margin-top: 25px;
  padding: 10px;
  text-align: left;
`;

const Row = styled.div`
  display: flex;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.2); */
  padding: 4px;
`;

const Column = styled.div`
  flex: 1;
  /* border-left: 1px solid rgba(255, 255, 255, 0.2); */
  padding: 4px;
`;

const Label = styled.p`
  opacity: 0.7;
`;

const Value = styled.p`
  font-weight: bold;
`;

const SpecialRequest = styled.div`
  padding: 4px;
`;

const SpecialRequestText = styled.p`
  opacity: 0.8;
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
