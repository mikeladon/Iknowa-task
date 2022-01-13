// GET - https://jsonplaceholder.typicode.com/users/1/posts
// POST - https://jsonplaceholder.typicode.com/posts
// GET - https://jsonplaceholder.typicode.com/posts/1/comments
// POST - https://jsonplaceholder.typicode.com/comments

import axios from 'axios';
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/', //url prexix for api
    timeout: 240000,
    // You can add your headers here
})