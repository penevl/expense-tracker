import {
  Button,
  Stack,
  Box,
  FormLabel,
  Input,
  InputGroup,
  Textarea,
  InputRightAddon,
  Select,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function ExpenseForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen} marginTop="3">
        Add an expense
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Add an expense</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="expense">Expense name</FormLabel>
                <Input
                  id="expense"
                  placeholder="Please enter an expense name"
                  type="text"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="expense">Expense ammount</FormLabel>
                <InputGroup>
                  <Input
                    id="expense"
                    placeholder="Please enter an expense ammount"
                    type="number"
                  />
                  <InputRightAddon>$</InputRightAddon>
                </InputGroup>
              </Box>

              <Box>
                <FormLabel htmlFor="type">Select expense type</FormLabel>
                <Select id="type" defaultValue="groceries">
                  <option value="entertainment">Entertainment</option>
                  <option value="utilities">Utilities</option>
                  <option value="groceries">Groceries</option>
                  <option value="Other">Other</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="description">
                  Description(Optional)
                </FormLabel>
                <Textarea id="description" />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ExpenseForm;
