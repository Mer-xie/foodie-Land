
const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY
export const BASE_URL = 'https://api.spoonacular.com'

export const fetchFromSpoonacular = async (endpoint, params = {}) => {
    const queryParams = new URLSearchParams({
        apiKey: API_KEY,
        ...params
    })

    const res = await fetch(`${BASE_URL}${endpoint}?${queryParams}`)
    const data = await res.json()
    return data
}