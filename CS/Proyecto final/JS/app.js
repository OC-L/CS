const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'e1026820b6097e7688c202bee7141609'
const searchForm = document.querySelector('#form')
const identifiers = []
const userLibrary = []

const searchData = {
    search: ''
}

document.addEventListener('DOMContentLoaded', () => {
    showPopular();
    showRated();
    showAction();
    showComedy();
    showDocumentary();
    showHorror();
    showAnimation();
    cast();
})

searchForm.addEventListener('submit', (e) => {
    searchData.search = searchBox.value
    filterAll()
    //searchBox.reset()
})

function filterAll(){
    const finding = userLibrary.filter(filterSearch)

    if(finding.length) {
        console.log(finding)
    } else {
        console.log('Sin resultado')
    }
}

function filterSearch(element) {
    const {title} = searchData
        if(title) {
            element.title = title
        }
    return finding
}

function home() {
    location.href = "./index.html"
}

function modal() {

    const {title, poster_path, overview, id} = userLibrary

    `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                 <h5 class="modal-title" id="exampleModalLabel">${title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">Cerrar</button>
                </div>
                <div class="modal-body">
                    <img src="https://image.tmdb.org/t/p/w500/${poster_path}" class="logo card-img-top">
                    <p>${overview}</p>
                </div>
            </div>
        </div>
    </div>`
}

const showPopular = async() => {
    let i = 0

    try {
        const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-MX&page=1`)
        if(response.status === 200) {
            userLibrary.push(response.data.results)             
            let movies = ''
            response.data.results.forEach(el => {
                identifiers.push(response.data.results[i].id)             
                movies += `
                <div class="col-2 m-4 mb-1 pt-3">
                    <img src="https://image.tmdb.org/t/p/w500/${el.poster_path}" class="logo card-img-top">

                    <div class="">
                        <button type="button" class="btn boton" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick="modal()">${el.title}</button>
                    </div>
                </div>
                `
            //modal();
            })
            document.getElementById('cont1').innerHTML = movies
        } else if(response.status === 401) {
            console.log('401')
        } else if(response.status === 404) {
            console.log('404')
        } else {
            console.log('Otro error no especificado')
        }}

    catch(error) {
        console.log(error)
    }
}


const showRated = async() => {
    let i = 0

    try {
        const response = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=es-MX&page=1`)

        if(response.status === 200) {
            userLibrary.push(response.data.results)
            let movies = ''
            response.data.results.forEach(el =>{
                identifiers.push(response.data.results[i].id)
                movies += `
                <div class="col-2 m-4 mb-1 pt-3">
                    <img src="https://image.tmdb.org/t/p/w500/${el.poster_path}" class="logo card-img-top">
                    <div class="">
                        <button type="button" class="btn boton" data-bs-toggle="modal" data-bs-target="#exampleModal">${el.title}</button>
                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    
                    
                    </div>
                </div>
                `
            })
            document.getElementById('cont2').innerHTML = movies
        } else if(response.status === 401) {
            console.log('API-key incorrecta')
        } else if(response.status === 404) {
            console.log('Datos de búsqueda incorrectos')
        } else {
            console.log('Otro error no especificado')
        }}

    catch(error) {
        console.log(error)
    }
}


const showAction = async() => {
    let i = 0

    try {
        const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28&language=es-MX&page=1`)

        if(response.status === 200) {
            userLibrary.push(response.data.results)
            let movies = ''
            response.data.results.forEach(el =>{
                identifiers.push(response.data.results[i].id)
                movies += `
                <div class="col-2 m-4 mb-1 pt-3">
                    <img src="https://image.tmdb.org/t/p/w500/${el.poster_path}" class="logo card-img-top">
                    <div class="">
                        <button type="button" class="btn boton" data-bs-toggle="modal" data-bs-target="#exampleModal">${el.title}</button>
                    </div>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">${el.title}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">Cerrar</button>
                                </div>
                                <div class="modal-body">
                                    <img src="https://image.tmdb.org/t/p/w500/${el.poster_path}" class="logo card-img-top">
                                    <p>${el.overview}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
            })
            document.getElementById('cont3').innerHTML = movies
        } else if(response.status === 401) {
            console.log('API-key incorrecta')
        } else if(response.status === 404) {
            console.log('Datos de búsqueda incorrectos')
        } else {
            console.log('Otro error no especificado')
        }}

    catch(error) {
        console.log(error)
    }
}


const showComedy = async() => {
    let i = 0

    try {
        const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35&language=es-MX&page=1`)

        if(response.status === 200) {
            userLibrary.push(response.data.results)
            let movies = ''
            response.data.results.forEach(el =>{
                identifiers.push(response.data.results[i].id)
                movies += `
                <div class="col-2 m-4 mb-1 pt-3">
                    <img src="https://image.tmdb.org/t/p/w500/${el.poster_path}" class="logo card-img-top">
                    <div class="">
                        <button type="button" class="btn boton" data-bs-toggle="modal" data-bs-target="#exampleModal">${el.title}</button>
                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    </div>
                </div>
                `
            })
            document.getElementById('cont4').innerHTML = movies
        } else if(response.status === 401) {
            console.log('API-key incorrecta')
        } else if(response.status === 404) {
            console.log('Datos de búsqueda incorrectos')
        } else {
            console.log('Otro error no especificado')
        }}

    catch(error) {
        console.log(error)
    }
}


const showDocumentary = async() => {
    let i = 0

    try {
        const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99&language=es-MX&page=1`)

        if(response.status === 200) {
            userLibrary.push(response.data.results)
            let movies = ''
            response.data.results.forEach(el =>{
                identifiers.push(response.data.results[i].id)
                movies += `
                <div class="col-2 m-4 mb-1 pt-3">
                    <img src="https://image.tmdb.org/t/p/w500/${el.poster_path}" class="logo card-img-top">
                    <div class="">
                        <button type="button" class="btn boton" data-bs-toggle="modal" data-bs-target="#exampleModal">${el.title}</button>
                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    </div>
                </div>
                `
            })
            document.getElementById('cont5').innerHTML = movies
        } else if(response.status === 401) {
            console.log('API-key incorrecta')
        } else if(response.status === 404) {
            console.log('Datos de búsqueda incorrectos')
        } else {
            console.log('Otro error no especificado')
        }}

    catch(error) {
        console.log(error)
    }
}


const showHorror = async() => {
    let i = 0

    try {
        const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27&language=es-MX&page=1`)

        if(response.status === 200) {
            userLibrary.push(response.data.results)
            let movies = ''
            response.data.results.forEach(el => {
                identifiers.push(response.data.results[i].id)
                movies += `
                <div class="col-2 m-4 mb-1 pt-3">
                    <img src="https://image.tmdb.org/t/p/w500/${el.poster_path}" class="logo card-img-top">
                    <div class="">
                        <button type="button" class="btn boton" data-bs-toggle="modal" data-bs-target="#exampleModal">${el.title}</button>
                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    </div>
                </div>
                `
            })
            document.getElementById('cont6').innerHTML = movies
        } else if(response.status === 401) {
            console.log('401')
        } else if(response.status === 404) {
            console.log('404')
        } else {
            console.log('Otro error no especificado')
        }}

    catch(error) {
        console.log(error)
    }
}


const showAnimation = async() => {
    let i = 0

    try {
        const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&language=es-MX&page=1`)

        if(response.status === 200) {
            userLibrary.push(response.data.results)
            let movies = ''
            response.data.results.forEach(el =>{
                identifiers.push(response.data.results[i].id)
                movies += `
                <div class="col-2 m-4 mb-1 pt-3">
                    <img src="https://image.tmdb.org/t/p/w500/${el.poster_path}" class="logo card-img-top">
                    <div class="">
                        <button type="button" class="btn boton" data-bs-toggle="modal" data-bs-target="#exampleModal">${el.title}</button>
                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    </div>
                </div>
                `
            })
            document.getElementById('cont7').innerHTML = movies
            console.log('Identificadores', identifiers)
            console.log('Arrays completos', userLibrary)
        } else if(response.status === 401) {
            console.log('API-key incorrecta')
        } else if(response.status === 404) {
            console.log('Datos de búsqueda incorrectos')
        } else {
            console.log('Otro error no especificado')
        }}

    catch(error) {
        console.log(error)
    }
}


const showMovies = async() => {

    try {
        const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-MX&page=1`)
        console.log(response.data)
        if(response.status === 200) {
            
            let movies = ''
            response.data.results.forEach(el =>{
                movies += `
                <div class="col-2 m-4 mb-1 ms-2">
                    <img src="https://image.tmdb.org/t/p/w500/${el.poster_path}" class="logo card-img-top">
                    <div class="">
                        <button type="button" class="btn boton" data-bs-toggle="modal" data-bs-target="#exampleModal">${el.title}</button>
                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    </div>
                </div>
                `
            })
            const container = document.getElementById('con')
            container.classList.add('pe-0', 'me-0', 'ms-3', 'ps-3')
            document.getElementById('con').innerHTML = movies

            console.log(response)

        } else if(response.status === 401) {
            console.log('API-key incorrecta')
        } else if(response.status === 404) {
            console.log('Datos de búsqueda incorrectos')
        } else {
            console.log('Otro error no especificado')
        }}

    catch(error) {
        console.log(error)
    }
}


const showSeries = async() => {

    try {
        const response = await axios.get(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=es-MX&page=1`)
        console.log(response.data)
        if(response.status === 200) {
            
            let movies = ''
            response.data.results.forEach(el =>{
                movies += `
                <div class="col-2 m-4 mb-1 ms-2">
                    <img src="https://image.tmdb.org/t/p/w500/${el.poster_path}" class="logo card-img-top">
                    <div class="">
                        <button type="button" class="btn boton" data-bs-toggle="modal" data-bs-target="#exampleModal">${el.name}</button>
                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    </div>
                </div>
                `
            })
            const container = document.getElementById('con')
            container.classList.add('pe-0', 'me-0', 'ms-3', 'ps-3')
            document.getElementById('con').innerHTML = movies

            console.log(response)

        } else if(response.status === 401) {
            console.log('API-key incorrecta')
        } else if(response.status === 404) {
            console.log('Datos de búsqueda incorrectos')
        } else {
            console.log('Otro error no especificado')
        }}

    catch(error) {
        console.log(error)
    }
}


const showList = async() => {

    try {
        const response = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=es-MX`)
        console.log(response.data)
        if(response.status === 200) {
            
            let movies = ''
            response.data.genres.forEach(el =>{
                movies += `
                <div class="col-3 m-4 mb-1 ms-3 ps-3 d-flex">
                    <div class="">
                        <button type="button" class="btn boton" data-bs-toggle="modal" data-bs-target="#exampleModal">${el.name}</button>
                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    </div>
                </div>
                `
            })
            const container = document.getElementById('con')
            container.classList.add('pe-0', 'me-0', 'ms-3', 'ps-3')
            document.getElementById('con').innerHTML = movies

            console.log(response)

        } else if(response.status === 401) {
            console.log('API-key incorrecta')
        } else if(response.status === 404) {
            console.log('Datos de búsqueda incorrectos')
        } else {
            console.log('Otro error no especificado')
        }}

    catch(error) {
        console.log(error)
    }
}


const cast = async() => {

    const {id} = identifiers
    try {
        const people = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key${API_KEY}&language=es-MX`)
        console.log(people)
    } catch(error) {
        console.log(error)
    }
}