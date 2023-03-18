# Login end point

The  Login Endpoint is designed to handle HTTP requests and responses to enable communication between the web application and administrators who are responsible for managing the system. This endpoint serves as a means of authentication, allowing only authorized administrators to access restricted areas of the web application.


The admin
The  Login Endpoint URL for this web application

https://fancy-worm-shoe.cyclic.app/api/login

## Supported Requests

    POST

## Request Parameters

The following parameters are required for a successful login:

```javascript
{
  "user": "string: email or student matric number",
  "password": "string"
}
```
**If the provided credentials are invalid, the response will be an error message indicating that the login attempt failed and the reason for the failure**

## response
the backend will response with the access token to be use in subsequent. here are the parameter that will be send back after correct credential have been supply
```javascript
    {user : object(), token : string()}
```
this how subsequent request will be like
```javascript
fetch("https://fancy-worm-shoe.cyclic.app/api/admin/sample", {
  methods: "post",
  body: JSON.stringify(),
  headers: {
    "content-type": "application/json",
    Authorization: "Bearer <token here>",
  },
});
```

# Get all students endpoint

This endpoint is protect only the admin can access it. The use of JWTs ensures that only authorized users can access the protected resources of the web application.
Endpoint URL

The URL for the JWT-protected GET request is as follows:

https://fancy-worm-shoe.cyclic.app/api/students

Supported Requests

The endpoint supports the following HTTP requests:

    GET


# Adding new student endpoint

The Student Creation Endpoint with Schema URL for this web application is as follows:

https://fancy-worm-shoe.cyclic.app/api/student/add-student
Supported Requests

This Student Creation Endpoint with Schema supports the following HTTP requests:

    POST

Request Parameters

The following parameters are required for a successful student record creation:

```javascript
const schema = Joi.object({
  first_name: Joi.string().required().min(2),
  last_name: Joi.string().required().min(2),
  other_name: Joi.string(),
  matric_no: Joi.string().required().min(4),
  department: Joi.string().required(),
  level: Joi.number().min(3).required(),
  gender: Joi.string().required().equal("female", "male"),
});
```

This JSON schema enforces the data types, formats, and constraints for each parameter.

## Authentication

This endpoint requires authentication to access it. Only authorized users with valid login credentials can create student records within the system, users such as admin and the moderator. JWT must be include in the request headers 

## Response

If the student record creation is successful and the data matches the JSON schema, the response to a POST request will be a JSON object containing the created.

# Single  student endpoint

This endpoint is protect only logged in user  can access it. the user id has to be attach to the endpoint as params

The URL for this endpoint:

https://fancy-worm-shoe.cyclic.app/api/students/{id}/details

Supported Requests

The endpoint supports the following HTTP requests:

    GET

Authentication

this endpoint response includes students information so the route is protected you have to be authorise to access the endpoint by providing token in request headers 

# Allocated students endpoint
This endpoint cant only be access by the admins to get all the students that are allocated.

The URL for this endpont
https://fancy-worm-shoe.cyclic.app/api/allocated-students

The endpoint supports the following HTTP requests:

    GET
## Authentication
only admin can access this endpoint

# Add new Admin 
This endpoint can only be access by the admins only. student id need to be include in the params

 Here is the URL 
 https://fancy-worm-shoe.cyclic.app/api/add-admin/{id}

The endpoint supports the following HTTP requests:

GET


# Student reciept
This endpoint supply the details and hosel of the student to be printed as pdf.
the id of the student will be supply as params to get the exalt student details

endpoint URL
 https://fancy-worm-shoe.cyclic.app/api/students/{id}/reciept

 The endpoint supports the following HTTP requests:

    GET

# edit student endpoint

this endpoint is for the student where the student can change their or register phone number and email. when making this request the user id must be attach to the params. email are unique in this route no two or more student can use a single mail and there is response for that and also checking for correct mail,phone number

endpoint url:

 https://fancy-worm-shoe.cyclic.app/api/students/update/{id}

The endpoint supports the following HTTP requests:

    PATCH
    
## Authentication
the user must be lock in before the make any changes


# All hostel endpoint
 get all the hostel and and rooms 

 https://fancy-worm-shoe.cyclic.app/api/hostels

The endpoint supports the following HTTP requests:
    GET

# Get all the vacant hostel endpoint
 https://fancy-worm-shoe.cyclic.app/api/vacant-hostels

The endpoint supports the following HTTP requests:
    GET
# update student infor endpoint such as names etc
this endpoint is for updating student information incase of error or miss spelling when registering a student.

 https://fancy-worm-shoe.cyclic.app/api/edit/{id}/students

this enpoint supports the following http request:

### patch

| parameters (keys) | value |
|-------------------|-------|
|    first_name     |string ,required |
|    last_name | string, required|
| other_name   |string|
|gender | string , expected([female or male]), required|
|student_level | number, require|
|matric_no | string, required|
|student_department | string , required|



   
  
