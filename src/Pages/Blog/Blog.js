import React from 'react';
import { BsPatchQuestionFill } from 'react-icons/bs';
import { MdQuestionAnswer } from 'react-icons/md';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='w-3/4 mx-auto'>
            <h2 className='text-5xl text-orange-600 text-center mb-4'>**Get The Answer Of Your Question**</h2>

            <div className='bg-slate-800 p-6 mb-4'>
                <h2 className='text-2xl text-bold bg-slate-900 p-2'><BsPatchQuestionFill className='inline'></BsPatchQuestionFill>  Difference between SQL and NoSQL.</h2>
                <p className='text-justify p-2'><MdQuestionAnswer className='inline text-2xl'></MdQuestionAnswer>  SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>

            <div className='bg-slate-800 p-6 mb-4'>
                <h2 className='text-2xl text-bold bg-slate-900 p-2'><BsPatchQuestionFill className='inline'></BsPatchQuestionFill>  What is JWT, and how does it work?</h2>
                <p className='text-justify p-2'><MdQuestionAnswer className='inline text-2xl'></MdQuestionAnswer>  JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br />
                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                </p>
            </div>

            <div className='bg-slate-800 p-6 mb-4'>
                <h2 className='text-2xl text-bold bg-slate-900 p-2'><BsPatchQuestionFill className='inline'></BsPatchQuestionFill>  What is the difference between javascript and NodeJS?</h2>
                <p className='text-justify p-2'><MdQuestionAnswer className='inline text-2xl'></MdQuestionAnswer>  JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                </p>
            </div>

            <div className='bg-slate-800 p-6 mb-4'>
                <h2 className='text-2xl text-bold bg-slate-900 p-2'><BsPatchQuestionFill className='inline'></BsPatchQuestionFill>  How does NodeJS handle multiple requests at the same time?</h2>
                <p className='text-justify p-2'><MdQuestionAnswer className='inline text-2xl'></MdQuestionAnswer>  NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                </p>
            </div>

        </div>
    );
};

export default Blog;

