import { Usuario } from "../model/entity/usuario";
import { UsuarioRepository } from "../repository/UsuarioRepository";
import { PessoaRepository } from "../repository/PessoaRepository";

export class UsuarioService {
    private PessoaRepository = PessoaRepository.getInstance();
    private UsuarioRepository = UsuarioRepository.getInstance();

    async cadastraUsuario(usuarioData: any):Promise<Usuario>{
        const {idPessoa, senha} = usuarioData;
        
        const usuario = new Usuario(undefined, idPessoa, senha);

        let pessoaExiste = await this.PessoaRepository.filtrarPessoaByNameId(usuario.idPessoa)

        if(pessoaExiste.length == 0){
            throw new Error("Pessoa com id inexistente.");
        }

        let usuarioEncontrado = await this.UsuarioRepository.filtrarUsuarioById(undefined, usuario.idPessoa)

        if(usuarioEncontrado.length > 0){
            throw new Error("Usuario com esse idPessoa já cadastrado!");
        }

        const novoUsuario = await this.UsuarioRepository.insereUsuario(usuario);
        console.log("Cadastrado:", novoUsuario);
        return novoUsuario;
    }

    async atualizaUsuario(usuarioData: any):Promise<Usuario>{
        const {id, idPessoa, senha} = usuarioData;

        const usuario = new Usuario(id, idPessoa, senha);

        let usuarioEncontrado = await this.UsuarioRepository.filtrarUsuarioById(usuario.id, undefined)

        if(usuarioEncontrado.length == 0){
            throw new Error("Usuario não encontrado!");
        }

        let pessoaExiste = await this.PessoaRepository.filtrarPessoaByNameId(usuario.idPessoa)

        if(pessoaExiste.length == 0){
            throw new Error("Pessoa com id inexistente.");
        }

        await this.UsuarioRepository.atualizaUsuario(usuario);
        console.log("Atualizado:", usuario);
        return usuario;
    }

    async deletaUsuario(usuarioData: any):Promise<Usuario>{
        const {id, idPessoa, senha} = usuarioData;

        const usuario = new Usuario(id, idPessoa, senha);

        let usuarioEncontrado = await this.UsuarioRepository.filtrarUsuarioById(id)

        if(usuarioEncontrado.length == 0){
            throw new Error("Usuario não encontrado.");
        }

        usuarioEncontrado = await this.UsuarioRepository.confirmaSenhaById(usuario.id, usuario.idPessoa, undefined)

        if(usuarioEncontrado.length == 0){
            throw new Error("Usuario com idPessoa não compatível");
        }

        usuarioEncontrado = await this.UsuarioRepository.confirmaSenhaById(usuario.id, undefined, usuario.senha)

        if(usuarioEncontrado.length == 0){
            throw new Error("Usuario com senha não compatível.");
        }

        await this.UsuarioRepository.deletaUsuario(usuario);
        console.log("Deletado: ", usuario);
        return usuario;
    }

    async filtraUsuario(usuarioData: any):Promise<Usuario[]>{
        const id = parseInt(usuarioData, 10);

        let usuarioEncontrado = await this.UsuarioRepository.filtrarUsuarioById(id)

        if(usuarioEncontrado.length == 0){
            throw new Error("Usuario não encontrado.");
        }

        let usuario = await this.UsuarioRepository.filtrarUsuarioById(id);
        console.log("Filtrado: ", usuario);
        return usuario;
    }

    async filtrarUsuarios():Promise<Usuario[]> {
        const usuarios = await this.UsuarioRepository.filtrarUsuarios();
        console.log("Filtrados: ", usuarios);
        return usuarios;
    }
}