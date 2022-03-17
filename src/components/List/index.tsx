import { useEffect, useState } from "react";
import { Box, Button, Container, Text } from "@chakra-ui/react";
import { User } from "../../types/User";
import { Card } from "../Card";
import axios from "axios";

interface ResponseProps {
  page: number;
  total_pages: number;
  data: User[];
}

export const List: React.FC = () => {
  const [pageToFetch, setPageToLoad] = useState<number>(1);
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async function fetchUsers() {
      setLoading(true);

      const response = await axios.get(
        `https://reqres.in/api/users?page=${pageToFetch}`
      );
      const { page, total_pages, data: users } = response.data as ResponseProps;

      setUsers(users);
      setPage(page);
      setTotalPages(total_pages);

      setLoading(false);
    })();
  }, [pageToFetch]);

  return (
    <Box>
      <Container maxWidth={"container.md"} paddingY={5}>
        <Box>
          <Text fontSize="2xl">Users</Text>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginBottom={4}
          >
            <Text fontSize={20}>Current page: {page}</Text>

            <Box display="flex" columnGap={6}>
              <Button
                disabled={page !== 1 ? false : true}
                onClick={() => setPageToLoad(page - 1)}
              >
                Back
              </Button>
              <Button
                disabled={totalPages !== page ? false : true}
                onClick={() => setPageToLoad(page + 1)}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Box>
        {loading ? (
          <Text textAlign="center">Loading...</Text>
        ) : (
          <>
            {users.map((user) => {
              return <Card key={user.id} user={user} />;
            })}
          </>
        )}
      </Container>
    </Box>
  );
};
