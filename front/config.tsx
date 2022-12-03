interface IConfig{
    backendURl: string,
    numberPostsPagination: number,
    sessionStorage: boolean
}

const Config: IConfig = {
    backendURl: "http://localhost:3000/",
    numberPostsPagination: 5,
    sessionStorage: true
};

export default Config
