import { Usuario } from "../model/entity/usuario";
import { UsuarioRepository } from "../repository/UsuarioRepository";

export class UsuarioService {
    private UsuarioRepository = UsuarioRepository.getInstance();

    async cadastraUsuario(usuarioData: any):Promise<Usuario>{
        const {idPessoa, senha} = usuarioData;
        
        const usuario = new Usuario(undefined, idPessoa, senha);

        const novoUsuario = await this.UsuarioRepository.insereUsuario(usuario);
        console.log("Cadastrado:", novoUsuario);
        return novoUsuario;
    }

    async atualizaUsuario(usuarioData: any):Promise<Usuario>{
        const {id, idPessoa, senha} = usuarioData;

        const usuario = new Usuario(id, idPessoa, senha);

        await this.UsuarioRepository.atualizaUsuario(usuario);
        console.log("Atualizado:", usuario);
        return usuario;
    }

    async deletaUsuario(usuarioData: any):Promise<Usuario>{
        const {id, idPessoa, senha} = usuarioData;

        const usuario = new Usuario(id, idPessoa, senha);

        await this.UsuarioRepository.deletaUsuario(usuario);
        console.log("Deletado: ", usuario);
        return usuario;
    }

    async filtraUsuario(usuarioData: any):Promise<Usuario>{
        const id = parseInt(usuarioData, 10);

        const usuario = await this.UsuarioRepository.filtraUsuario(id);
        console.log("Filtrado: ", usuario);
        return usuario;
    }

    async filtrarUsuarios():Promise<Usuario[]> {
        const usuarios = await this.UsuarioRepository.filtrarUsuarios();
        console.log("Filtrado: ", usuarios);
        return usuarios;
    }
}