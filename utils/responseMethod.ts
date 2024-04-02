

const BadRequest = (message: string) => {
    return ({status: '400', message})
}

export {BadRequest}