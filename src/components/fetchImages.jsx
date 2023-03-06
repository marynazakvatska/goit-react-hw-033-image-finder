function fetchImages(name, onClick) {
    return fetch(`https://pixabay.com/api/?q=${name}&page=${() =>onClick()}&key=21675881-9f2314d809854342b3af65054&image_type=photo&orientation=horizontal&per_page=12`)
                /* .then(res => res.json()) */
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    return Promise.reject(
                        new Error(`no image with name ${name}`)
                    )
                })
}


export default fetchImages