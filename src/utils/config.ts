const API_URL_LIVE = "https://app-api-m.mynncapp.com";
const API_URL_DEV = "https://app-api-m.mynncapp.com";
const API_URL = __DEV__ ? API_URL_DEV : API_URL_LIVE;
// const API_URL="http://localhost:9001"
const JWT_MOBILE_PUBLIC_KEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwEBqnUeESqOfBsTUzu1T\n" +
"kwPVR2rs6BjLY5nG1w+gwEVd+TG8U7AlqPA3vVPdpvdJGNy5++3UEjK+f62R3jyZ\n" +
"eU2h3zZtxc0HE/1/pRJ6sO1x71GHfqGUtX/DhnMHNtyvoKdIELnIC0i19SMcPWBn\n" +
"KWNWfq3jH+HWk7WnFqwUWPF1krk2UaCinFqPXgjKHHsmG9w6EbjQEUwOpe5G/oiv\n" +
"YXa5F0H5xAxTa6OF6KZ9CgYXmQNamLeZ4VwowZCYrVjMqILbciqGIi09Im4fo9CD\n" +
"L7B44xQuxG9uMR+yLyAGUclhykbdyOlSAesqbxEl4SQ5GdqvSVRi+pGAq9F89Jbz\n" +
"4wIDAQAB"
// const API_URL="https://app-api.mynncapp.com"

const IMAGE_BASE = `${API_URL}/images`;
// const API_URL="http://192.168.1.23:9000";
// const API_URL="https://app-api.mynncapp.com"
export { API_URL,JWT_MOBILE_PUBLIC_KEY};
// /api/v1/profile?userId=6647707982488ea0dd1133e7
