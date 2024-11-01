let employee = "employee";
let enrolledMember = "enrolled member";
let subscribers = "Subscribers"

let isEmployee = true;
let isEnrolledMember = true;
let isSubscribers = false;

let employeeDietaryService;

if (isEmployee) {
    employeeDietaryService = "Employee Dietary Access granted"
}else {
    dietaryService = "No Access Granted!"
}console.log("Welcome Employee:", employeeDietaryService);

if (isEnrolledMember) {
    dietaryService = "Dietary Access granted"
}else {
    dietaryService = "No Access granted"
}console.log("Enrolled Member:", dietaryService);


if (isSubscribers) {
    dietaryService = "Dietary Access granted"
}else {
    dietaryService = "Please enroll or subscribe"
}console.log("User:", dietaryService);