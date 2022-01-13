import { CommentData } from '@/types';
import axios from '@/api/index';
export default {
    get: async (id: number): Promise<CommentData[]> => {
        const comments = await axios.get(`posts/${id}/comments`);
        return comments.data;
    },

    store: (body: CommentData) => {
        return axios.post('comments', body);
    }
}

