import { rest } from "msw";

const baseURL = 'https://souls-like-api-bc59577c0282.herokuapp.com/';

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                pk: 8,
                username: "matt",
                email: "",
                first_name: "",
                last_name: "",
                profile_id: 8,
                profile_image: "https://res.cloudinary.com/dyjun08nx/image/upload/v1/media/../default_profile_bubg9e"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];