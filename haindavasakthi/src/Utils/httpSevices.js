
// Http Service - One for all api services
export function httpService(url, method, formData) {
    const username = 'test'
    const password = '12345'
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'multipart/form-data')
    myHeaders.append(
        'Authorization',
        `Basic ${encode(`${username}:${password}`)}`
    )
    return fetch(`${env.baseUrl}${url}`, {
        method: method,
        headers: myHeaders,
        body: formData
    })
}
