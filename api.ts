import defaultAxios from "axios";

const axios = defaultAxios.create({
  baseURL: "https://simple-blog-api.crew.red/",
});

export const getPosts = async () => {
    try {
        const posts = await axios.get("/posts");
        return posts.data;
    } catch (err) {
        console.error(err);
    }
}

export const createPost = async (body) => {
    try {
        const response = await axios.post('/posts', body);
        return response.data;
    } catch (err) {
        console.error(err);
    }
}

export const getPost = async (postId: string[] | string) => {
    try {
        const post = await axios.get(`/posts/${postId}?_embed=comments`);
        return post.data;
    } catch (err) {
        console.error(err);
    }
};

export const deletePost = async (postId: string | string[]) => {
    try {
        const response = await axios.delete(`/posts/${postId}`);
        return response.data;
    } catch (err) {
        console.error(err);
    }
};

export const updatePost = async (postId: string | string[], body) => {
    try {
        const response = await axios.put(`/posts/${postId}`, body);
        return response.data;
    } catch (err) {
        console.error(err);
    }
};

export const createComment = async (body) => {
    try {
       console.log(body);
        const response = await axios.post(`/comments`, body);
        return response.data;
    } catch (err) {
        console.error(err);
    }
};
