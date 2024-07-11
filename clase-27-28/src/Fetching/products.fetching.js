export const obtenerProductos = async () => {
    const response = await fetch("/data.json",{method: "GET"})
    console.log({response})
    const data = await response.json()
    console.log(data)
}