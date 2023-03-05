## Admin Login Endpoint

This README document describes the usage of the Admin Login Endpoint for a web application.
Overview

The Admin Login Endpoint is designed to handle HTTP requests and responses to enable communication between the web application and administrators who are responsible for managing the system. This endpoint serves as a means of authentication, allowing only authorized administrators to access restricted areas of the web application.
Endpoint URL

The Admin Login Endpoint URL for this web application is as follows:

https://fancy-worm-shoe.cyclic.app/api/admin/login

# Supported Requests

This Admin Login Endpoint supports the following HTTP requests:

    POST

# Request Parameters

The following parameters are required for a successful login:

    mail - the mail of the administrator.
    password - the password of the administrator.

# Authentication

The Admin Login Endpoint requires authentication to access it. To authenticate, administrators should include their valid login credentials in the request body as a JSON object containing their mail and password.

If the provided credentials are valid, the endpoint will generate and return a JSON Web Token (JWT) in the response body. The JWT should then be included in the HTTP header of subsequent requests to authenticate the administrator's identity and access to restricted areas of the web application.
Response

If the provided credentials are valid, the response to a POST request will be a JSON object containing a JWT as follows:

```json
{
  "token": "<JWT>",
  "user": "logged user detail"
}
```

If the provided credentials are invalid, the response will be an error message indicating that the login attempt failed and the reason for the failure.

## Get all students endpoint

This endpoint is protect only the admin can access it. The use of JWTs ensures that only authorized users can access the protected resources of the web application.
Endpoint URL

The URL for the JWT-protected GET request is as follows:

https://fancy-worm-shoe.cyclic.app/api/students

Supported Requests

The endpoint supports the following HTTP requests:

    GET

Authentication

To access the protected resource, the user must include a valid JWT in the HTTP header of their GET request. The JWT should be included in the "Authorization" field of the HTTP header using the "Bearer" scheme as follows:


```javascript
fetch("https://fancy-worm-shoe.cyclic.app/api/admin/login", {
  methods: "post",
  body: JSON.stringify(),
  headers: {
    "content-type": "application/json",
    Authorization: "Bearer <token here>",
  },
});
```

The JWT should be obtained by successfully logging in with valid credentials using the web application's authentication system.

# Response

If the provided JWT is valid and the user is authorized to access the requested resource, the response to a GET request will be a JSON object containing the requested data.

If the provided JWT is invalid or the user is not authorized to access the requested resource, the response will be an error message indicating that the request failed and the reason for the failure.

# Adding new student endpoint

The Student Creation Endpoint with Schema URL for this web application is as follows:

https://fancy-worm-shoe.cyclic.app/api/student/create
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

# Authentication

This endpoint requires authentication to access it. Only authorized users with valid login credentials can create student records within the system.

# Response

If the student record creation is successful and the data matches the JSON schema, the response to a POST request will be a JSON object containing the created.

# Student Login Endpoint

This API endpoint allows registered students to log in to the system.
Endpoint URL https://fancy-worm-shoe.cyclic.app/api/studen/login

The endpoint support
post request

The request must include a JSON object with the following properties:

| parameter | Type   |
| --------- | ------ |
| matric    | string |
| password  | string |

# Response

If the student's email and password are correct, the server will respond with a JSON object containing an access token . The token should be used to authenticate the student in subsequent requests. The token will be attach to the request headers.
