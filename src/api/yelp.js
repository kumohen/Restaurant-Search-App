import axios from "axios"

export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization: 'Bearer MO3tH7boeudJofyerS_PBLDsNn_ZrZe6KgLmUyrpIJD0ylFYuXPNOl1UfzuW4wMyLoeQczPfNcUWWxmaKUb3RP4hKLrB3SXROeH2XbGpZjh4rsfFGM-bK-hl8enkXXYx'
    }
})