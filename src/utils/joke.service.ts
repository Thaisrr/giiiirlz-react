import axios from "axios/index";

/*
export async function getJoke(): Promise<string> {
    const url = 'https://v2.jokeapi.dev/joke/Programming?&type=single&safe-mode&category=programming';
    const response = await axios.get<{joke: string}>(url);
    return response.data.joke
}
*/


class JokeService {
    url = 'https://v2.jokeapi.dev/joke/Programming?&type=single&safe-mode&category=programming';
    async getRandom(): Promise<string> {
        try {
            //const url = 'https://v2.jokeapi.dev/joke/Programming?&type=single&safe-mode&category=programming';
            const response = await axios.get<{joke: string}>(this.url);
            return response.data.joke;
        } catch (e) {
            this.handleError(e);
            return '';
        }

    }

    async create(joke: string): Promise<string> {
        const response = await axios.post(this.url, joke);
        return response.data;
    }

    handleError(e: any) {
        console.log('Oups, c\'est cassé');
    }
}

export default new JokeService();

