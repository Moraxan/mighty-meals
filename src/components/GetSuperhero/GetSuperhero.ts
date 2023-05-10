

export const getSuperhero = async (id: number) =>  {

    try {
      const url = `https://superheroapi.com/api/10160055512027950/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        return result.results;
    }
    catch{
    }
}