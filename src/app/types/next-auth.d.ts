export { };
// https://bobbyhadz.com/blog/typescript-make-types-global#declare-global-types-in-typescript

declare global {

    interface JWT {
        access_token: string;
        refresh_token: string;
        user: {
            username: string;
            email: string;
        }
    }

}
