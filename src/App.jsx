// import React from "react";
import styled from "styled-components";
import UtilityHeader from "./components/UtilityHeader";
// import SelectTicket from "./components/SelectTicket";
import "./index.css";
import AttendeeDetails from "./components/AttendeeDetails";
export default function App() {
  return (
    <Form>
      <UtilityHeader />
      <FormChild>
        {/* <SelectTicket /> */}
        <AttendeeDetails />
      </FormChild>
    </Form>
  );
}

const Form = styled.div`
  background-color: #02191d;
  color: #ffffff;
  padding-top: 20px;
`;

const FormChild = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
