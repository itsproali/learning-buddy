import React from "react";

const Blog = () => {
  return (
    <div className="parent">
      <h1 className="text-4xl font-bold text-center my-4 active">
        Popular Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="blog-container p-4 shadow-xl">
          <h1 className="question text-3xl font-semibold">
            What is the difference between Authorization and Authentication ?
          </h1>
          <p className="text-xl text-slate-600 mt-3">
            <b>Authorization</b> is a system of giving the user permission to
            access a specific resource or function. Giving someone permission to
            access a banking website is a great example of Authorization
          </p>
          <p className="text-xl text-slate-600 mt-3">
            <b>Authentication </b>
            is the process of validating the user. There is some specific access
            to some specific users. By authentication, it is found whether the
            user is able to access it or not.
          </p>
        </div>

        <div className="blog-container p-4 shadow-xl">
          <h1 className="question text-3xl font-semibold">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h1>
          <p className="text-xl text-slate-600 mt-3">
            In this Website I used firebase for authentication and Online
            Hosting. Some alternative of Firebase authentication are:
            <ul className="list-disc ml-6">
              <li>Auth0</li>
              <li>MongoDB</li>
              <li>Passport</li>
              <li>Okta</li>
              <li>Keycloak</li>
            </ul>
          </p>
        </div>

        <div className="blog-container p-4 shadow-xl">
          <h1 className="question text-3xl font-semibold">
            What other services does firebase provide other than authentication?
          </h1>
          <p className="text-xl text-slate-600 mt-3">
            <b>Firebase</b> Provides lots of services. One them is
            Authentications. Firebase also provides these services below:
            <ul className="list-disc ml-6">
              <li>Hosting</li>
              <li>Cloud Firestore,</li>
              <li>Cloud Functions,</li>
              <li>Cloud Storage,</li>
              <li>Google Analytics,</li>
              <li>Cloud Messaging, etc.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
