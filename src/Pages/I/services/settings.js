const API_URL = 'https://swapi.dev/api/'

export async function getAllPeople() {
  try {
    const response = await fetch(`${API_URL}people/`)
    const data = await response.json()
    return data.results
  } catch (error) {
    console.log(error)
  }
}

export async function getAllPlanets() {
  try {
    const response = await fetch(`${API_URL}planets/`)
    const data = await response.json()
    return data.results
  } catch (error) {
    console.log(error)
  }
}
