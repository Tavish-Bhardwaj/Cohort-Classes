import z from 'zod';

interface User{
    id: string;
    name: string;
    age: number;
    email: string;
};

// function sumOfAge(user1: User, user2: User) {
//     return user1.age + user2.age;
// };

// const age = sumOfAge({id: 'thisissomeid', name: 'Tavish', age: 20, email: 'bhardwajtavishofficial@gmail.com'}, {name: 'Jiro', age: 30});
// console.log(age);


// Advanced Typescript APIs:

// Pick
type UpdateProps = Pick<User, 'name' | 'age'  >;

// partial
type PartialUser = Partial<UpdateProps>;

// Readonly
// if we dont want to change the properties of the object we can use readonly with each property individually or with whole of the object at once.

// Exclude
type UserWithoutEmail = Exclude<User, 'email'>;

// Type inferences in zod
const A = z.string();
type A = z.infer<typeof A>;


// Docker
// Docker Intro completed.
// Docker Installation completed.   
// Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers. 
// The use of Linux containers to deploy applications is called containerization. Containers are not new,
//  but their use for easily deploying applications is.

// Learning SQL Relationships and Joins
