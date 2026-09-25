async function fetchGit() {
    try {
        const res = await fetch("https://api.github.com/users/norito10311227");
        const json = await res.json();
        return json
    } catch(e) {
        return "failed";
    }
}

fetchGit().then((json)=>{
    console.log(json.name)
    console.log(json.public_repos)
})