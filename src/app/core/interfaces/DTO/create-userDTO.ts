export interface CadastroDTO {
  username: string;
  email: string;
  senha: string;
  avatar?: File | null;
}