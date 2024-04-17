import axios from 'axios';

const http = axios.create({
    baseURL: 'http://universities.hipolabs.com',
});

export class UniversitiesApiService {
    getUniversities() {
        return http.get('/search?country=peru');
    }
}