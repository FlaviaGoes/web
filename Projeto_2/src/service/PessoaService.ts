import { Pessoa } from "../model/entity/pessoa";
import { PessoaRepository } from "../repository/PessoaRepository";
import { UsuarioRepository } from "../repository/UsuarioRepository";

export class PessoaService {
    private PessoaRepository = PessoaRepository.getInstance();
    private UsuarioRepository = UsuarioRepository.getInstance();

    async cadastraPessoa(pessoaData: any):Promise<Pessoa> {
        const {name, email} = pessoaData;
        
        const pessoa = new Pessoa(undefined, name.toLowerCase(), email);
 
        let pessoaEncontrada: Pessoa[] = await this.PessoaRepository.filtrarPessoaByNameId(undefined, name.toLowerCase(), undefined)

        if(pessoaEncontrada.length > 0){
            throw new Error("Pessoa com esse nome já cadastrada!");
        }

        pessoaEncontrada = await this.PessoaRepository.filtrarPessoaByNameId(undefined, undefined, email.toLowerCase());

        if(pessoaEncontrada.length > 0){
            throw new Error("Pessoa com esse email já cadastrada!");
        }

        const novaPessoa = await this.PessoaRepository.inserePessoa(pessoa);
        console.log("Cadastrado:", novaPessoa);
        return novaPessoa;
    }

    async atualizaPessoa(pessoaData: any):Promise<Pessoa>{
        const {id, name, email} = pessoaData;

        if(typeof id !== 'number') {
            throw new Error("Informe um ID correto.");
        }

        const pessoa = new Pessoa(id, name, email);

        let pessoaEncontrada: Pessoa[] = await this.PessoaRepository.filtrarPessoaByNameId(pessoa.id)

        if(pessoaEncontrada.length == 0){
            throw new Error("Pessoa informada com id inexistente.");
        }

        await this.PessoaRepository.atualizaPessoa(pessoa);
        console.log("Atualizado:", pessoa);
        return pessoa;
    }

    async deletaPessoa(pessoaData: any):Promise<Pessoa>{
        const {id, name, email} = pessoaData;

        if(typeof id !== 'number') {
            throw new Error("Informe um ID correto.");
        }

        const pessoa = new Pessoa(id, name, email);
        let pessoaEncontrada: Pessoa[]= await this.PessoaRepository.filtrarPessoaByNameId(pessoa.id)

        if(pessoaEncontrada.length == 0){
            throw new Error("Pessoa informada com id inexistente.");
        }

        pessoaEncontrada = await this.PessoaRepository.confirmaNameEmailByID(pessoa.id, pessoa.name, undefined);

        if(pessoaEncontrada.length == 0){
            throw new Error("Pessoa com nome informado não cadastrada.");
        }

        pessoaEncontrada = await this.PessoaRepository.confirmaNameEmailByID(pessoa.id, undefined, pessoa.email);

        if(pessoaEncontrada.length == 0){
            throw new Error("Email incorreto");
        }

        let usuarioPessoa = await this.UsuarioRepository.filtrarUsuarioById(undefined, pessoa.id);

        if(usuarioPessoa.length > 0){
            throw new Error("Não é possível deletar essa pessoa, primeiro desabilite o usuario.");
        }

        await this.PessoaRepository.deletaPessoa(pessoa);
        console.log("Deletado: ", pessoa);
        return pessoa;
    }

    async filtraPessoa(pessoaData: any):Promise<Pessoa[]|null>{
        const id = parseInt(pessoaData, 10);

        let pessoaEncontrada: Pessoa[] = await this.PessoaRepository.filtrarPessoaByNameId(id)

        if(pessoaEncontrada.length == 0){
            throw new Error("Pessoa informada com id inexistente.");
        }

        const pessoa: Pessoa[] = await this.PessoaRepository.filtrarPessoaByNameId(id, undefined, undefined);
        console.log("Filtrado: ", pessoa);
        return pessoa;
    }

    async filtraPessoas():Promise<Pessoa[]> {
        const pessoas = await this.PessoaRepository.filtrarPessoas();
        console.log("Filtrado: ", pessoas);
        return pessoas;
    }
}