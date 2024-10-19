// unknown type

let result: unknown;
result = [1, 2, 3];
//To call the reduce() method on the result variable,
// you need to use the type assertion to explicitly tell the TypeScript compiler that the type of the result is array.
const total = (result as number[]).reduce((a: number, b: number) => a + b, 0);
console.log(total); // 6

const fetchData = async (url: string): Promise<unknown> => {
    const response = await fetch(url);
    return await response.json();
};

const showPosts = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const posts = await fetchData(url); // unknown type

        (
            posts as { userId: number; id: number; title: string; body: string }[]
        ).map((post) => console.log(post.title));
    } catch (err) {
        console.log(err);
    }
};

showPosts();