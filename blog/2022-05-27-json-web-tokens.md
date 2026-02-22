---
slug: json-web-tokens
title: JWT
authors:
  name: Pavan Kumar
  title: tech-talks Core Team
  url: https://github.com/mrpavan
  image_url: https://github.com/mrpavan.png
tags: [jwt, jsonwebtokens, node, authentication, authorization]
---

You might have heard about JWT if you are in field of developing applications or not from other domains. **JSON Web Token** (JWT) is a standard for representing claims securely between two parties. It is typically used to securely transmit information between a server and a client, such as an API and a single-page application. JWTs are a useful tool for securely transmitting information between parties, and are commonly used in modern web applications for authentication and authorization

A JWT consists of three parts: a header, a payload, and a signature. The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA. The payload contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims. Registered claims are a set of predefined claims that are not mandatory but recommended, to provide a set of useful, interoperable claims. Some of the registered claims are: iss (issuer), exp (expiration time), sub (subject), aud (audience), and others. Public claims are claims that are defined in the IANA JSON Web Token Registry or defined in other specifications, but are not registered. Private claims are claims that are used to share information between parties that agree on using them and are neither registered or public claims...<!--truncate-->

The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way. The signature is created by taking the encoded header, the encoded payload, a secret, and the algorithm specified in the header, and signing that. For example, if you want to use the HMAC SHA256 algorithm, the signature will be created in the following way:

HMACSHA256(
base64UrlEncode(header) + "." +
base64UrlEncode(payload),
secret)

To verify the signature, the recipient of the JWT needs to compute the signature and compare it to the one provided in the JWT. If they match, the JWT is considered to be valid.

JWTs are commonly used to authenticate users. When a user logs in to a system, the server generates a JWT that contains the user's information, such as the user's name, email, and other details, and signs it with a secret. The JWT is then sent back to the client, where it is stored in a cookie or local storage. When the client makes a request to the server, it includes the JWT in the request header. The server verifies the signature and, if it is valid, grants the client access to the requested resource.

JWTs have a number of benefits over traditional authentication methods, such as cookies and sessions. They are stateless, meaning that the server does not need to store any information about the client in order to verify the JWT. This makes them scalable and easy to implement. They are also secure, as they are signed and can't be modified without the signature being invalidated.

**Example**
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

This JWT has three parts, separated by dots (.). The first part is the header, which consists of the type of the token (JWT) and the signing algorithm being used (HS256). The second part is the payload, which contains the claims. In this case, the claims are the subject (sub), which is the user's ID, and the name (name) of the user. The third part is the signature, which is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.

Here is the same JWT, with the parts decoded:

Header:
```json
{
"alg": "HS256",
"typ": "JWT"
}
```

Payload:
```json
{
"sub": "1234567890",
"name": "John Doe",
"iat": 1516239022
}
```

To create this JWT, you would first need to create the header and payload as JSON objects, and then encode them using base64Url encoding. Then, you would create the signature by signing the encoded header and payload with a secret using the HMAC SHA256 algorithm.

To verify the signature of this JWT, you would need to decode the header and payload and then recompute the signature using the same algorithm and secret. If the signature you compute matches the one provided in the JWT, the JWT is considered to be valid.

**nodejs sample**

To use JWTs in a Node.js application, you can use the jsonwebtoken library. This library provides functions for creating and verifying JWTs.

Here is an example of how you can use the jsonwebtoken library to create a JWT:

```js
const jwt = require('jsonwebtoken');

const payload = {
  sub: '1234567890',
  name: 'John Doe'
};

const secret = 'my-secret';

const token = jwt.sign(payload, secret);

```

The sign() function takes the payload and the secret as arguments, and returns the JWT. The payload can be any JSON object, and the secret is a string that is used to sign the JWT.

Here is an example of how you can use the jsonwebtoken library to verify a JWT:

```js
const jwt = require('jsonwebtoken');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
const secret = 'my-secret';

try {
  const payload = jwt.verify(token, secret);
  console.log(payload);
} catch (error) {
  console.error(error);
}

```

The verify() function takes the JWT and the secret as arguments, and returns the payload if the signature is valid. If the signature is invalid, it throws an error.

You can also pass additional options to the sign() and verify() functions, such as the expiration time of the JWT or the audience for which the JWT is intended.