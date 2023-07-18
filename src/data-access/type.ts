export interface UserDb {
    getUserByUserName: ({ username }: { username: string }) => Promise<any>;
    createUser: ({ username }: { username: string }) => Promise<any>;
}