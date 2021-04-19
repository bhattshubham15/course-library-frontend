import { gql } from 'apollo-boost';

export const GET_COURSE = gql
    `query {
    getCourse {
        id,
        course_name,
        category
    }
  }`;

export const GET_COURSEDETAILS = gql
    `query ($id: Int){
    getCourseInfo(id: $id) {
        course_name
    }
  }`;

export const ADD_COURSE = gql
    `mutation createCourse(
      $course_name: String!,
      $category: String!,
      $language: String!,
      $email: String!,
      $price: Int!,
      $stack: String!
      ) {
    createCourse(input: {course_name: $course_name, category: $category, language: $language, email: $email, price: $price, stack: $stack})
  }`;
