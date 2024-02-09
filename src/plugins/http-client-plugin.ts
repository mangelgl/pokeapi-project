
export const http = {

    get: async (url: string) => {
        const res = await fetch(url);
        return res.json();
    },
    post: async (url: string, body: any) => {}
};