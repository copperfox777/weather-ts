export async function client(url) {
	try {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      return {data,error:false}
    }
    throw new Error(response.statusText)
  } catch (err) {
    return ({data:false,error:err.message})
  }
}
