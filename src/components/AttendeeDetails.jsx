// import React from "react";
import styled from "styled-components";

export default function AttendeeDetails() {
  return (
    <AttendeDetails>
      <AttendeeDetailsHeader>
        <h1>Attendee Details</h1>
        <p>Step 2/3</p>
      </AttendeeDetailsHeader>
      <AttendeeDetailsBody>
        <UploadContainerMain>
          <UploadText>Upload Profile Photo:</UploadText>
          <UploadContainer>
            <DragDrop>
              <i className="fa-solid fa-cloud-arrow-down"></i>
              <p>Drag & drop or click to upload</p>
            </DragDrop>
          </UploadContainer>
        </UploadContainerMain>
        <hr />
        <AttendeeDetailsMain>
          <Form>
            <div>
              <label>Enter your name</label> <br />
              <Input type="text" name="name" />
            </div>

            <div>
              <label>Enter your email*</label> <br />
              <Input type="text" name="name" />
            </div>

            <div>
              <label>Special request?</label> <br />
              <TextArea name="postContent" placeholder="Textarea" />
            </div>
          </Form>
        </AttendeeDetailsMain>

        <Buttons>
          <Button className="button-cancel">Back</Button>
          <Button className="button-next">Get my Free Ticket</Button>
        </Buttons>
      </AttendeeDetailsBody>
    </AttendeDetails>
  );
}

const AttendeDetails = styled.div`
  border: 1px solid #197686;
  border-radius: 12px;
  margin-top: 30px;
  padding: 48px;
  max-width: 604px;
  max-height: 923px;
  background-color: #041e23;
`;

const AttendeeDetailsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AttendeeDetailsBody = styled.div`
  text-align: center;
  border: 1px solid #0e464f;
  border-radius: 12px;
  padding: 24px;
  background-color: #08252b;
`;

const UploadContainerMain = styled.div`
  border: 1px solid #07373f;
  background-color: #052228;
  border-radius: 24px;
  margin-bottom: 20px;
`;
const UploadText = styled.p`
  text-align: left;
  padding-left: 20px;
  padding-bottom: 20px;
`;

const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid #07373f;
  max-width: 508px;
  max-height: 200px;
  padding: 0 25px;
  margin: 20px;
`;
const DragDrop = styled.div`
  background-color: #0e464f;
  padding: 12px 24px;
  max-width: 240px;
  height: 200px;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AttendeeDetailsMain = styled.div``;

const Form = styled.form`
  text-align: left;
  line-height: 35px;
`;

const Input = styled.input`
  background-color: inherit;
  width: 95%;
  padding: 12px;
  border: 1px solid #07373f;
  border-radius: 12px;
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  background-color: inherit;
  width: 100%;
  border: 1px solid #07373f;
  border-radius: 12px;
  line-height: 50px;
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
