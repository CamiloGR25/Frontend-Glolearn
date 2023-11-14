export interface Jwtres {
  datosUsuario: {
    id: number,
    usuario: string,
    correo: string,
    contraseña: string,
    accessToken: string,
    expiresIn: string
  }
}
