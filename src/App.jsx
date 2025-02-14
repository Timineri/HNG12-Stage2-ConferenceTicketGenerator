// import React from "react";
import { useState } from "react";
import styled from "styled-components";
import UtilityHeader from "./components/UtilityHeader";
import SelectTicket from "./components/SelectTicket";
import TicketReady from "./components/TicketReady";
import AttendeeDetails from "./components/AttendeeDetails";

import "./index.css";
export default function App() {
  const [inputName, setInputName] = useState(" ");
  const [inputEmail, setInputEmail] = useState(" ");
  const [inputRequest, setInputRequest] = useState("");
  const [inputTicketNo, setInputTicketNo] = useState(1);
  const [step, setStep] = useState(1);
  const [imagePreview, setImagePreview] = useState(null);

  const handleName = (event) => {
    setInputName(event.target.value);
  };

  const handleEmail = (event) => {
    setInputEmail(event.target.value);
  };

  const handleRequest = (event) => {
    setInputRequest(event.target.value);
  };

  const handelTicketNo = (event) => {
    setInputTicketNo(event.target.value);
  };
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
    setInputName(" ");
    setInputEmail(" ");
    setInputRequest(" ");
    setInputTicketNo(1);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Form>
      <UtilityHeader />
      <FormChild>
        {step === 1 && (
          <SelectTicket
            onNext={nextStep}
            onPrev={prevStep}
            step={step}
            onChangeTicket={handelTicketNo}
            inputTicketNo={inputTicketNo}
          />
        )}
        {step === 2 && (
          <AttendeeDetails
            onNext={nextStep}
            onPrev={prevStep}
            step={step}
            name={inputName}
            onChangeName={handleName}
            email={inputEmail}
            onChangeEmail={handleEmail}
            request={inputRequest}
            onChangeRequest={handleRequest}
            handleImageChange={handleImageChange}
            imagePreview={imagePreview}
          />
        )}
        {step === 3 && (
          <TicketReady
            onNext={nextStep}
            onPrev={prevStep}
            step={step}
            name={inputName}
            email={inputEmail}
            request={inputRequest}
            inputTicketNo={inputTicketNo}
            imagePreview={imagePreview}
          />
        )}
      </FormChild>
    </Form>
  );
}

const Form = styled.div`
  background-color: #02191d;
  color: #ffffff;
  padding-top: 20px;
  height: 150vh;
`;

const FormChild = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
