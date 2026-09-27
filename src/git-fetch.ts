interface GitHubUser {
    login: string;
    name: string | null;
    public_repos: number;
}

async function fetchGit(username: string | undefined): Promise<GitHubUser> {
    if (!username) {
        throw new Error("Username is required");
    }
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) {
        throw new Error("Failed to fetch data " + res.status);
    }   
    return await res.json() as GitHubUser;
}

async function main1(username: string | undefined) {
    try {
    const user = await fetchGit(username);
        console.log(user.login)
        console.log(user.name ?? "No name");
        console.log(user.public_repos);
    } catch (e) {
        console.error((e as Error).message);
    }
}

main1("norito10311227");
main1("this-user-does-not-exist-12345");