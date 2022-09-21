const axios = require('axios').default;

const getData = async (number)=> {
    try {
        const {data:user} = await axios.get(`https://jsonplaceholder.typicode.com/users/${number}`)
        const {data:posts} = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)
        
        return {user,posts}
        
    }
    catch (error) {
        console.log(error);
    }
    
}

module.exports = getData;