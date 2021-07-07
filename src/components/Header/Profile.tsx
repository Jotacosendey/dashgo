import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && <Box mr="4" textAlign="right">
        <Text>João Victor Cosendey</Text>
        <Text color="gray.300" fontSize="small" >
          joaovictor_barros@hotmail.com
            </Text>
      </Box>}

      <Avatar size="md" name="Joao Victor Cosendey" src="https://github.com/Jotacosendey.png" />
    </Flex>
  );
}