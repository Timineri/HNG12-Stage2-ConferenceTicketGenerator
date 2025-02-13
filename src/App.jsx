// import React from "react";
import { useState } from "react";
import styled from "styled-components";
import UtilityHeader from "./components/UtilityHeader";
import SelectTicket from "./components/SelectTicket";
import "./index.css";
import TicketReady from "./components/TicketReady";
import AttendeeDetails from "./components/AttendeeDetails";
export default function App() {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  return (
    <Form>
      <UtilityHeader />
      <FormChild>
        {step === 1 && (
          <SelectTicket onNext={nextStep} onPrev={prevStep} step={step} />
        )}
        {step === 2 && (
          <AttendeeDetails onNext={nextStep} onPrev={prevStep} step={step} />
        )}
        {step === 3 && <TicketReady />}
      </FormChild>
    </Form>
  );
}

const Form = styled.div`
  background-color: #02191d;
  color: #ffffff;
  padding-top: 20px;
  height: 100vh;
`;

const FormChild = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
