import { paramsType, studentInterface } from "@/_types";
import { calculateAge, generateRandomStudent, isNull } from "./utils";

export async function getStudents(searchParams: paramsType) {
  const { grade, sortGender, sortGrade, ageGroup, per, page } = searchParams;

  let resp = await generateRandomStudent();

  if (!isNull(grade)) {
    resp = resp?.filter(item => item.grade === Number(grade));
  }
  if (!isNull(sortGender)) {
    resp.sort((a, b) => {
      if (a.gender === "female" && b.gender === "male") {
        return sortGender === "female" ? -1 : 1;
      } else if (a.gender === "male" && b.gender === "female") {
        return sortGender === "female" ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  if (!isNull(sortGrade)) {
    if (sortGrade === "asc") {
      resp.sort((a, b) => a.grade - b.grade);
    }
    if (sortGrade === "desc") {
      resp.sort((a, b) => b.grade - a.grade);
    }
  }

  if (!isNull(ageGroup)) {
    if (ageGroup === "child") {
      resp = resp?.filter(item => calculateAge(item.dateOfBirth) < 12);
    }
    if (ageGroup === "teenage") {
      resp = resp?.filter(item => calculateAge(item.dateOfBirth) > 11);
    }
  }
  // handle pagination
  const itemsPerPage = Number(per) || 10;
  const currentPage = Number(page) || 1;
  const totalStudents = resp.length;
  const totalPages = Math.ceil(resp.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = resp.slice(indexOfFirstItem, indexOfLastItem);

  return { data: currentItems, totalPages, currentPage, total: totalStudents };
}

export const getStudentsById = async (param: { student: string }) => {
  const { student } = param;
  let resp = await generateRandomStudent();
  const data = resp.find(item => item?.id === student) as studentInterface;
  return { data };
};
