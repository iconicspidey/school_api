# Login end point

The  Login Endpoint is designed to handle HTTP requests and responses to enable communication between the web application and administrators who are responsible for managing the system. This endpoint serves as a means of authentication, allowing only authorized administrators to access restricted areas of the web application.

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

# Request Body

| Field               | Type   | Required | Constraints                                             |
| ------------------- | ------ | -------- | ------------------------------------------------------- |
| first_name          | string | Yes      | Minimum length: 2                                       |
| last_name           | string | Yes      | Minimum length: 2                                       |
| other_name          | string | No       | Allowed values: "", null                                |
| matric_no           | string | Yes      |                                                         |
| student_department  | string | Yes      |                                                         |
| student_level       | number | Yes      |                                                         |
| gender              | string | Yes      | Allowed values: "female", 

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


# Allocate Hostel Endpoint

This endpoint allows an administrator to allocate a hostel to a student.
Endpoint

GET /allocate/:matric/:hostelId

# Parameters

|Name|Type|Description|
|----|----|-----------|
|matric|string|The matric number of the student to allocate a hostel to|
|hostelID|Number|The ID of the hostel to allocate to the student|

# RESPONSE 

|Status Code|Description|
|------------|----------|
|200|Hostel allocated successfully.|
|404|Student not found.|
|500|	Internal server error.|

## 200 Hostel Allocated Successfully

If the hostel is allocated successfully, the server will return a 200 OK status code and a plain text message in the response body indicating that the student has been allocated a space.

Example response:

```json
    { "message" :  "student have been allocated a space" }
```
## 404 Student Not Found

If the student is not found in the database, the server will return a 404 Not Found status code and a JSON object with an error message.

Example response:

```json

{
  "message": "student does not exist in the database"
}
```
500 Internal Server Error

If an error occurs on the server, the server will return a 500 Internal Server Error status code and a JSON object with an error message.

Example response:

```json

{
  "message": "Internal server error"
}
```

Sure, here's the raw README file for the changePassword endpoint:
Change Password Endpoint

This endpoint allows students to change their passwords.
Endpoint

PUT /change-password/:id

Parameters
|Name|	Type|	Description|
|----|------|--------------|
|id	 |string|The ID of the student whose password needs to be changed.|
## Request Body

|Name|	Type|	Required|	Description|
|----|------|----------|---------------|
|oldPassword|	string	|Yes	The old password.|
|newPassword|	string	|Yes	The new password.|
|confirmPassword|	string|	Yes	The new password again for confirmation.|
## Responses
|Status Code | 	Description|
|-----|-------|
|200|	Validation errors|.
|201|	Password changed successfully.|
|500|	Internal server error.|
|200| Validation Errors|

If the request body fails validation, the server will return a JSON array of validation error messages. The messages will correspond to the invalid fields in the request body.

Example response:

```json

[  {    "field": "oldPassword",    "message": "Old password is required."  },  {    "field": "newPassword",    "message": "New password must be between 6 and 8 characters."  },  {    "field": "confirmPassword",    "message": "Confirm password must match new password."  }]
```
## 201 Password Changed Successfully

If the password is changed successfully, the server will return a JSON object with a success message.

Example response:

```json

{
  "message": "Password changed successfully."
}
```
## 500 Internal Server Error

If an error occurs on the server, the server will return a 500 status code.

# Allocating student from other department
This endpoint is used to allocate a student to a hostel in a school system. It receives a POST request with the necessary details of the student and updates the corresponding hostel's student information in the database.

# Endpoint URL
POST /allocate-other-dept/{hostelId}

| Parameter | Type   | Description                                |
| --------- | ------ | ------------------------------------------ |
| hostelId  | string | The ID of the hostel to allocate the student to. This parameter is required. |

# Request Body

| Field               | Type   | Required | Constraints                                             |
| ------------------- | ------ | -------- | ------------------------------------------------------- |
| first_name          | string | Yes      | Minimum length: 2                                       |
| last_name           | string | Yes      | Minimum length: 2                                       |
| other_name          | string | No       | Allowed values: "", null                                |
| matric_no           | string | Yes      |                                                         |
| student_department  | string | Yes      |                                                         |
| student_level       | number | Yes      |                                                         |
| gender              | string | Yes      | Allowed values: "female", "male"                         |

# Response

| Status Code | Response                                            |
| -----------| --------------------------------------------------- |
| 201        | Successful allocation of student to hostel.         |
| 200        | Student has already been allocated.                 |
| 400        | Validation error.                                   |
| 500        | Internal server error.                              |
Successful Response Body (201)


If the request is successful, the server responds with a JSON object with a message property:

```json

{
    "message": "student has been allocated successfuly"
}
```
## Validation Error
HTTP/1.1 400 Bad Request

```json
[
  { "first_name": "First name is required." },
  { "last_name": "Last name is required." },
  { "matric_no": "Matriculation number is required." },
  { "student_department": "Student department is required." },
  { "student_level": "Student level is required." },
  { "gender": "Gender is required." }
]
```
# Error Response Body (500)

If there is an internal server error, the server responds with a JSON object containing an error property, which is a message describing the error.

```json

{
    "error": "An error occurred while allocating student to hostel."
}
```

# Download Template Endpoint 

### request type
GET
## Request URL
/download