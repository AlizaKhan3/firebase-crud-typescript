import {
  Badge,
  Container,
  Flex,
  Heading,
  Icon,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import AddCourse from "../components/AddCourse";
import UpdateCourse from "../components/UpdateCourse";
import { useNavigate } from "react-router-dom";
import { SiFirebase } from "react-icons/si";
import CourseHelperClass, { ICourseDoc } from "../CoursesHelperClass";
// import getCourse

const Home = () => {
  const [courses, setCourses] = useState<ICourseDoc[]>([
    {
      id: "hi",
      CourseName: "react",
      CourseType: "hard",
      Fee: 9000
    },
  ]);
  const navigate = useNavigate();

  const courseHelper = new CourseHelperClass(); // Create an instance of the class
  const fetchCourses = async () => {
    const courses = await courseHelper.getCourses(); // Call the correct method
    setCourses(courses);
  }
  useEffect(() => {
    fetchCourses();
  }, [])

  return (
    <>
      <Flex py="4" bg="purple.800" justify="center" align="center" gap="4">
        <SiFirebase fontSize="50px" color="white" />{" "}
        <Heading
          fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
          color="white"
        >
          Firebase Basic v9 CRUD Operations
        </Heading>
      </Flex>
      <Container maxW="container.lg" mt="8">
        <AddCourse />
        <TableContainer>
          <Table variant="striped" colorScheme="purple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Fee</Th>
                <Th>Type</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map((course) => (
                <Tr key={course.id}>
                  <Td>{course.CourseName}</Td>
                  <Td>{course.Fee}</Td>
                  <Td>
                    <Badge
                      colorScheme={
                        course.CourseType === "easy"
                          ? "green"
                          : course.CourseType === "medium"
                            ? "blue"
                            : "red"
                      }
                    >
                      {course.CourseType}
                    </Badge>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Home;