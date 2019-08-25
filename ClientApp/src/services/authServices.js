const loginUser = function (username, authtoken) {
    localStorage.setItem('username', username);
    localStorage.setItem('authtoken', authtoken);
}
export const isAuthenticated = (() => {
    console.log(localStorage.getItem('authtoken'))
    return localStorage.getItem('authtoken') !== null
})();



export const authService = {
    computed: {
        authentication: function () {
            if (this.$store.state.authtoken !== "" || localStorage.getItem('authtoken') !== null) {
                if (!this.$store.state.authtoken || !this.$store.state.username) {
                    this.$store.commit('username', localStorage.getItem('username'));
                    this.$store.commit('authtoken', localStorage.getItem('authtoken'));
                }

                return true;
            }
            else {
                return false;
            }
        }
    }
}

export const registerUser = {

    methods: {
        register: function () {
            const authString = btoa(`${this.appKey}:${this.appSecret}`);
            const url = `https://baas.kinvey.com/user/${this.appKey}`;
            const headers = {
                method: 'POST',
                body: JSON.stringify({
                    username: this.username,
                    password: this.password
                }),
                headers: {
                    Authorization: `Basic ${authString}`,
                    'Content-Type': 'application/json'
                }
            }
            fetch(url, headers)
                .then(res => res.json())
                .then(data => {
                    if (data._kmd) {
                        console.log(data)
                        loginUser(this.$store.state.username, data._kmd.authtoken);
                        this.$store.commit('authtoken', data._kmd.authtoken)
                        this.$router.push({ path: '/' });
                    } else {
                        this.message = 'Username already exists';
                    }
                });
        }
    }
}