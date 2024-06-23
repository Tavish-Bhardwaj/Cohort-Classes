interface User {
    id: string;
    name: string;
}

type UsersAge={
    [key: string]: number;
};

const age: UsersAge = {
    'Tavish': 20,
    'Jiro': 30,
    'John': 40
};



// Records and  Maps:

// Records are used to create an object type whose keys are of a union of string literal types.
// Maps are used to create an object type whose keys are of a union of string literal types.
 type Users = Record<string, User>;


 const users = new Map<string, User>();