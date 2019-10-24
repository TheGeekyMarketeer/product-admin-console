import axios from "axios";
import qs from "qs";

class  ApiRestService {

    token_url =
        "https://<your_cloud_provider_url>/auth/realms/UPI/protocol/openid-connect/token";

    product_url = "https://<your_service_url>/api/v1";

    authData = {
        clientId: "<>",
        clientSecret: "<>"
    };

    headers = [];

    getAccessToken = (authCode, config) => {
        return axios
            .post(
                this.token_url,
                qs.stringify({
                    grant_type: "authorization_code",
                    code: authCode,
                    client_id: config.clientId,
                    redirect_uri: config.redirectUrl,
                    client_secret: config.clientSecret,
                    scope: config.scope
                }),
                {
                    
                }
            )
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }

    getProductList = (token) => {
        return axios
            .get(`${this.product_url}/products/`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "x-access-token"
            }
        })
        .then(response => {
            return response;
        })
        .catch(error => {
            return error;
        });
    }
}

export default new ApiRestService();