export interface AuthResponse {
    body: {
      user: User;
      accessToken: string;
      refreshToken: string;  
    };
}
// Errores al no llenar todos los campos de un formulario.
export interface AuthResponseError {
    body: {
        error: string;
    };
}

export interface User {
    _id: string;
    name: string;
    username: string;
}

export interface AccessTokenResponse {
    statusCode: number;
    body:{
        accessToken: string;
    };
    error?: string; // Si no es correcto devuelve el statusCode y el error.
}