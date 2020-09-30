
// Create a function, which displays a  subset of this data, depending on values of the variables: `role` and `subject`. 

let people = [
    {
        name: "Ann Anka", 
        position: "teacher", 
        subjects: "history"
    }, {
        name: "Berta Bert", 
        position: "student", 
        subjects: "history"
    }, {
        name: "Cora Carlson", 
        position: "teacher", 
        subjects: "mathematics"
    }, {
        name: "Dave Douglas ", 
        position: "teacher", 
        subjects: "physics"
    },{
        name: "Elmer Egg", 
        position: "student", 
        subjects: "Languages"
    },{
        name: "Finn Finnsson", 
        position: "teacher", 
        subjects: "history"
    },{
        name: "Gerd Glad", 
        position: "student", 
        subjects: "physics"
    },{
        name: "Harriet Harrison", 
        position: "teacher", 
        subjects: "physics"
    }, 
];

// First version: longer with specific conditions for input and output:
 
const findPeople = (role, subject, data) => {
    // If the value of `role` is set to `teacher` and the `subject` is set to `physics`, display all the teachers teaching physics. Do not display the students of this subject.
    if(role === "teacher" && subject === "physics") {
        let teachersOfASubject = data.filter(person => person.position === "teacher" && person.subjects === "physics" );
        console.log("teachers of physics", teachersOfASubject);
    }
    // If the value of `subject` is set to `history`, display all students and teacher of this subject. Role can have one of two values:
    else if((role === "teacher" || role === "student") && subject === "history") {
        let subjectPeople = data.filter(person => person.subjects === "history");
        console.log(" subject", subjectPeople);
    }

    // If the value of the variable `role` is set to `teacher`, display all teachers in the data.
    else if(role === "teacher") {
        let teachers = data.filter(person => person.position === "teacher");
        console.log("teachers", teachers);
    }
    
    // If the value of the variable `role` is set to `student`, display all students in the data.
    else if(role === "student") {
        let students = data.filter(person => person.position === "student");
        console.log("students", students);
    }
};

// define the variables:
let role = "teacher";
// let role = "student";
// let subject = "history";
let subject = "physics";
// call the function:

findPeople(role, subject, people);


// shorter version: refactoring: Finding students or teachers of a subject:

const refactoredFind = (data,subject,role = "") => {
    // only subject, i.e. role is an empty string, which evaluates to false:
    if(!role) {
        let peopleWithSubject = data.filter(person => person.subjects === subject );
        console.log("only subject", peopleWithSubject);
    }
    // only role:
    else if (!subject){
        let peopleWithRole = data.filter(person => person.position === role );
        console.log("only role", role, peopleWithRole);
    }
    else {
        let selection = data.filter(person => person.position === role && person.subjects === subject );
        console.log("role and subject defined", selection);
    }
};



// call without role, returns all students and teachers of a given subject.
// role can be left out, as we give it a default value in the function definition.
refactoredFind(people, subject);

// call without subject, returns all of a given role:
// subject can not be left out, but needs to be replaced by null. If it is not, role will take the place of subject. 

refactoredFind(people, null, role);

// call with role and subject defined: 
refactoredFind(people, subject ,role);



