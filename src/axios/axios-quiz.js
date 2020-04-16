import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-99c71.firebaseio.com/'
});