import { PostData } from "@/types";
import axios from '@/api/index';
export default {
    get: async (id: number): Promise<PostData[]> => {
        const posts = await axios.get(`users/${id}/posts`);
        return posts.data;
    },

    getSinglePost: async (userId: number, postId: number): Promise<PostData> => {
        const post = await axios.get(`users/${userId}/posts/`);
        return post.data.find((post: PostData) => post.id === postId);
    },

    store: (body: string) => {
        return axios.post('users', body);
    }
}
