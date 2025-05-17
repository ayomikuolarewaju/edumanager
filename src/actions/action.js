"use server";
import axios from "axios";
import { redirect } from "next/navigation";
import { prisma } from "./db";

export async function createCourse(prevState, formData) {
  const name = formData.get("name");
  const description = formData.get("description");

  
  const response = await prisma.course.create({
    data:{
    name,
    description,
  }
  });

  console.log(response)
  if (response.data === "") {
    console.log("not ok");
    return { message: "user not found" };
  }

  return redirect("/course");
}

export async function updateCourse(prevState,formData){
  const name = formData.get("name");
  const description = formData.get("description");
  const id = formData.get("id");

  const res = await prisma.course.update({ 
    where:{
      id:id
    },
    data:{
        name,
        description,
    }
   
  })
  if (res.data === "") {
    console.log("not ok");
    return { message: "user not found" };
  }

  return redirect("/course");
}

export async function getCourseById(id){
  const res = await prisma.course.findUnique({
    where:{
      id:id
    }
  })
  return res;
}

export async function getAllCourses(){
  const courses = await prisma.course.findMany()
  return {
    data:courses
  };
}

export async function deleteById(id){
  const del = await prisma.course.delete({
    where:{
      id:id
    }
  })
  return del;
}

export async function createStudent(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phoneNumber = formData.get("phoneNumber");
  const course = formData.get("course");
  
    const response = await prisma.student.create({ data:{
    name,
    email,
    phoneNumber,
    course:{
      connect:{
        name:course,
      }
    },
  }});

  if (response.data === "") {
    console.log("not ok");
    return { message: "student not created" };
  }
  
  return redirect("/student");
 
  
}

export async function updateStudent(prevState,formData){
  const name = formData.get("name");
  const email = formData.get("email");
  const phoneNumber = formData.get("phoneNumber");
  const course = formData.get("courses");
  const id = formData.get("id");

 
   const res = await prisma.student.update({ 
    where:{
      id:id
    },
    data:{
    name,
    email,
    phoneNumber,
    course,
    }
   
  })
  if (res.data === "") {
    console.log("not ok");
    return { message: "user not found" };
  }

  return redirect("/student");
}
export async function getStudentById(id){
  const res = await prisma.student.findUnique({
    where:{
      id:id
    },
    include: {
      course:true
    }
  })
  return res;
}

export async function getAllStudents(){
  const courses = await prisma.student.findMany()
  return {
    data:courses
  };
}

export async function deleteStudentById(id){
  const del = await prisma.student.delete({
    where:{
      id:id
    }
  })
  return del;
}


