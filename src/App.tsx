import { Container } from "@chakra-ui/react";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  return (
    <Container centerContent={true}>
      <ExpenseForm />
    </Container>
  );
}

export default App;
