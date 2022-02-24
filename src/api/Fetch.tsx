
export const FetchData = async(url:string): Promise<any> => {
  try {
    const response = await fetch(url);
      const data = await response.json();
      return data;
  }catch {
    return 'error'
  }
}
