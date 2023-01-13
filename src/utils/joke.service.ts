import axios from "axios";

/*
export async function getJoke(): Promise<string> {
    const url = 'https://v2.jokeapi.dev/joke/Programming?&type=single&safe-mode&category=programming';
    const response = await axios.get<{joke: string}>(url);
    return response.data.joke
}
*/


class JokeService {
    url = 'https://v2.jokeapi.dev/joke/';
    async getRandom(category: 'Programming' | 'Dark' | 'Spooky' = 'Programming'): Promise<string> {
        try {
            //https://v2.jokeapi.dev/joke/Dark?type=single&safe=true
            const response = await axios.get<{joke: string}>(this.url + category, {
                params : {
                    type: 'single',
                    safe: true,
                },
                headers: {
                    Authorization: 'bearer blahblahblah',
                    'Content-Type': 'application/json',
                }
            });
            return response.data.joke;
        } catch (e) {
            this.handleError(e);
            return '';
        }
    }
    /*
    Avec axios :
        get et delete prennent en paramétre ( url, {options} )
        post, patch, put ( url, body, {options} )
        monapi.com/user/:id, user, {}
     */

    async create(joke: string): Promise<string> {
        const response = await axios.post(this.url, joke, {});
        return response.data;
    }

    handleError(e: any) {
        console.log('Oups, c\'est cassé');
    }
}

export default new JokeService();

