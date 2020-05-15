class Github{
    constructor(){
        this.client_id="70c44424f2081a1a746f";
        this.client_secret="1ed658f64b550901e9ac686d28cf80c599490737";
        this.repos_count=5;
        this.repos_sort='created: asc';
    }
    async getUser(user){
    // using fetch to get the profile
    const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret} `);
    const profile=await profileResponse.json();

    return {
        profile,
    }

    }
}
