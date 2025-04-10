"use server";
import axios from "axios";
import { redirect } from "next/navigation";

export async function createCourse(prevState, formData) {
  const name = formData.get("name");
  const description = formData.get("description");
  const date = formData.get("starttime");
  
  const response = axios.post("http://127.0.0.1:8080/api/v1/students/course", {
    name,
    description,
    date,
  });

  if (response.data === "") {
    console.log("not ok");
    return { message: "user not found" };
  }

  return redirect("/course");
}

export async function updateCourse(prevState,formData){
  const name = formData.get("name");
  const description = formData.get("description");
  const date = formData.get("starttime");
  const id = formData.get("id");

  const res = axios.post(`http://127.0.0.1:8080/api/v1/students/course/update/${id}`,{
    name,
    description,
    date,
  })
  if (res.data === "") {
    console.log("not ok");
    return { message: "user not found" };
  }

  return redirect("/course");
}

export async function createStudent(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phoneNumber = formData.get("phoneNumber");
  const course = formData.get("course");
  
  const response = axios.post("http://127.0.0.1:8080/api/v1/students/student", {
    name,
    email,
    phoneNumber,
    course,
  });

  if (response.data === "") {
    console.log("not ok");
    return { message: "user not found" };
  }

  return redirect("/student");
}

export async function updateStudent(prevState,formData){
  const name = formData.get("name");
  const email = formData.get("email");
  const phoneNumber = formData.get("phoneNumber");
  const course = formData.get("course");
  const id = formData.get("id");

  const res = axios.post(`http://127.0.0.1:8080/api/v1/students/update/${id}`,{
    name,
    email,
    phoneNumber,
    course,
  })
  if (res.data === "") {
    console.log("not ok");
    return { message: "user not found" };
  }

  return redirect("/student");
}
