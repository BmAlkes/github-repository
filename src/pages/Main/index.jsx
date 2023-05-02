import { MainContainer, SubmitButton, Form } from "./style";
import { FaGithub, FaPlus } from "react-icons/fa";

const Main = () => {
  return (
    <MainContainer>
      <h1>
        <FaGithub />
        My repository
      </h1>
      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Add repository" />
        <SubmitButton>
          <FaPlus color="#fff" size={14} />
        </SubmitButton>
      </Form>
    </MainContainer>
  );
};

export default Main;
