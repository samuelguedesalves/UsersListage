import { Box, Text } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { User } from "../../types/User";

interface Props {
  user: User;
}

export const Card: React.FC<Props> = ({ user }) => {
  return (
    <Box
      width="full"
      background="gray.100"
      borderRadius="lg"
      padding={4}
      display="flex"
      alignItems="center"
      columnGap={6}
      marginBottom={4}
      sx={{
        "@media (max-width: 570px)": {
          flexDirection: "column",
        },
      }}
    >
      <LazyLoadImage
        alt={`${user.first_name} ${user.last_name}`}
        src={user.avatar}
        height={60}
        width={60}
        effect="blur"
        style={{ height: 60, width: 60, borderRadius: 30, objectFit: "cover" }}
      />
      <Text fontSize={20}>
        {user.first_name} {user.last_name}
      </Text>
      <Text fontSize={20}>{user.email}</Text>
    </Box>
  );
};
