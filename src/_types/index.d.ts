type person = {
  firstName: string;
  middleName: string;
  lastName: string;
};
interface TypeParent extends person {
  phoneNumber: string;
}
export interface studentInterface extends person {
  id: string;
  image: string;
  dateOfBirth: Date;
  gender: string;
  grade: number;
  parent: TypeParent;
}

export type studentResponseType = Promise<{
  data: studentInterface[];
  totalPages: number;
  currentPage: number;
  total: number;
}>;

export type paramsType = {
  sortGender?: "female" | "male";
  sortGrade?: "asc" | "desc";
  grade?: string;
  ageGroup?: string;
  per: number;
  page: number;
};

export type searchParamsType = {
  searchParams: paramsType;
};
export type ParamsType = {
  params: {
    student: string;
  };
};

export type paginationParams = {
  currentPage: number;
  totalPages: number;
  total: number;
  display: number;
};
