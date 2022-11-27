export interface IPost{
    date: string,
    location: string,
    title: string,
    body: string,
    url: string
}
export interface IUserFormState {
    title: string,
    location: string,
    body: string,
    tags: string[]
}