
const FetchData = async(url:string): Promise<string[]> => {
  try {
    const response = await fetch(url);
      const data = await response.json();
      return data;
  }catch {
    throw('API is not working')
  }
}

export default FetchData
