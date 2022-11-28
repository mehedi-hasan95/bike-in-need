import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 dark:text-gray-400">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 cursor-pointer focus:outline-none focus-visible:ring-violet-400">What are the different ways to manage a state in a React application?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                            There are different ways to manage a state in a React application. The ways are:
                            1. Local State 
                            2. Global State 
                            3. Server State
                            4. URL State
                            <p><strong>Local State -</strong> Local state is often managed in React using the useState hook. Local state is the data that we manage in one or the other component.</p>
                            <p><strong>Global State –</strong> Global state is data that we manage across multiple components. That is, we use global state when we want to update data from any one place in our app.</p>
                            <p><strong>Server State -</strong> Data coming from an external server must be integrated with our UI state.</p>
                            <p><strong>URL State -</strong> The data that exists in our URL, including pathnames and query parameters.</p>
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 cursor-pointer focus:outline-none focus-visible:ring-violet-400">How does prototypical inheritance work?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Prototypical inheritance is something that one person inherits from another. As we take as a practical example grandfather's property father will get, father's property I will get. Prototypal inheritance is the method by which an object can inherit the properties and methods of another object.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 cursor-pointer focus:outline-none focus-visible:ring-violet-400">What is a unit test? Why should we write unit tests?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Unit testing is a very important part of the programming world. The development process is where the smallest testable parts of an application, called units, are individually and independently verified to operate correctly. Unit testing is an important step in the development process, because if done correctly, it can help identify early errors in code that may be more difficult to find in later testing phases.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 cursor-pointer focus:outline-none focus-visible:ring-violet-400">React vs. Angular vs. Vue?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                            <p><strong>ReactJS</strong> is built on an open-source platform; More component-rich libraries. With which the view layer of web and mobile applications (front-end) can be developed very easily. The Model View Controller (MVU) framework defines how your app will look. ReactJS is a flexible, declarative, and efficient JavaScript library. It is a component-based front-end library that can be used to create just one application's view layer.</p>
                            <p><strong>AngularJS</strong> is a JavaScript framework for building single page web applications. This framework is developed by Google. Angular JS is a JavaScript framework for building single page web applications. Almost all web pages today use Angular JS.</p>
                            <p><strong>Vue.js</strong> is a progressive framework for JavaScript used to create web interfaces and single-page applications. Not only for web interfaces, but View.JS is also used for developing desktop and mobile applications with the Electron framework. The HTML extension and JS base quickly made Vue a favorable front-end tool</p>
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;