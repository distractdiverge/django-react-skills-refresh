import axios from 'axios';

const API_URL = 'http://localhost:8000/posts/';

class PostService {
    getPosts() {
        return axios.get(API_URL);
    }

    createPost(title, content) {
        // TODO: Sanitize Input
        return axios.post(API_URL, {title, content});
    }

    updatePost(id, title, content) {
        return axios.put(API_URL + 'id' + '/', {title, content});
    }

    deletePost(id) {
        return axios.delete(API_URL + id + '/');
    }
}

export default new PostService();
