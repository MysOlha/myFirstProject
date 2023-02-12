import * as firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  type: "service_account",
  project_id: "first-react-native-proje-4355b",
  private_key_id: "4d35ef54c2b36f2ad7aae1a8242300859101d063",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCziHmpwp88w7Ec\nUU5rE6T6pBlQ2laRC96+4w8QT2tQiZtupqLF8jyRGD0Fnj5lLWO/rpHfYPy0VvbC\nMKYdzvCGKA8CPnKg2ximaPpz/Wfjhf3ZlVno5KvI/VVijZk5J5LXodDMvzNLL2on\nyXIE2RLYyLisNHxYYM5sCHRvTXECuTPzH1BeWhvQGSAYZkvm1oJ19vVShb+8Qr4E\n36Blw4uoB2IljXEanfI2cwyt+NdqroaLEAgnztnLJQinti9z4snUpnxWbMr2Y6c5\nwbY7MB6T/E2sac0GFV5U71+Pau53/VhRbYxNuIJsgJCW+tvfQ5UVi6elw+wxNDDJ\nPIEXzH8ZAgMBAAECggEABmFsJYGNDuf2OZyVeLkULMjmkhjjE7juxoJOV5Ti/6lB\nqhSSW2OeYxplQiJbcwAXzUkDK9kIEia3ErQPlfvz+2idY/CGkBCerHy1o1KsaF8r\nju8/vfGxPe2W+m+FibejgItiiYGlbTTMWolOcT1VGKRFlUUw7Xkp95fzVL4AArSK\ni4nqHpOeM8nZ7mNQFvIBDW2Ib8/xqx7FFqmRjs6glwmKqgJ/utc6M0uhpywl8Fum\ndhWRjZKVkXHhGzkZiNmPyZGnGJ9r3L3wU+OIgrDq/g3tYrAJNq+ndkDAnxCdKFNl\nxBZSMlLYNLUMSSbYyVWZtV3z6hLjSGsQW0dOkrfucwKBgQD9Jn4RdPG3/jFqO6Gf\nlPckaen5Ktaqxl5Sy4jUACbMkWPmHZOw63dpJyeen7hCRbWG2KBRjh8vHgkPun+6\n8syzSK5KzDBG73D2FettW4RhmO4Ow3+pg05ozANL0WZNQV3P1Xt/AOiBDdVjy7QO\nP9xmvEexseaL1B/eze0oFk2MvwKBgQC1jda32dj/z8Y37vyQqtEGN7sUcaYEMS1u\ndJmnoI8XmnGLbmmhs52jJIafVeF/awfkq32MA0berdRXeZ5+Ztf96ZVPkfuwP4mE\nqdoDrb4gyFKLHsLWle85ncgYYOqTJsWNVxj76xRGXp9XkF5GofGEYCdfFEFRtjvS\nOlzBN3FyJwKBgQCsu40eADvHHg09vX6k0xJnqFVcDRz43e4SdIrijU/sGfCeXeQe\nvix2dZ8VH0qs/b/FSR7rRxyEG+x27Pym5XFDi/5RT05JuKvNXluL/PwxVBZrwH3l\nfpEL9Njy7OjvIgEPBU4E9Ouw022dcKtlZbHP7/zDhO4Yzx8H+l8uETnNJQKBgDoz\n+IwEKM8JuxAfa5StTkliAHWzYXeilF/+vWvBy13Tw2bhxLd0L6sngIkALUR9+Y/T\ncnI6crPcomBQuwDm04OxKI7TzA5asCl5kkzvnC5CSkQTXn8QnhqofIdkOo9mNJr1\nOys3184fc5HM1IxsSlMXyEdw5OffNhpVX3sJ3TKtAoGBAPbNFL2fOBOwvabwjwyU\nbUkbvvWILKAVBkeRXV0ttj2FE2NtbJgAsCfvO6R+jEBuzvYHtsZ46refqL+SHrHu\nkE+k0l0ssik45hkr38WjcyT/Px7J1DmmwEIk8gmIgpIJyuK+XjPL3IC33IppbZMn\nvOIvBOYpY2cFwk0gLAVVyAqU\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-gereb@first-react-native-proje-4355b.iam.gserviceaccount.com",
  client_id: "117235249690318438592",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-gereb%40first-react-native-proje-4355b.iam.gserviceaccount.com",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
