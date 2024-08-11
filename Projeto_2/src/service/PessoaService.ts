import { Pessoa } from "../model/entity/pessoa";
import { PessoaRepository } from "../repository/PessoaRepository";

export class PessoaService {
    private PessoaRepository = PessoaRepository.getInstance();

    async cadastraPessoa(pessoaData: any):Promise<Pessoa> {
        const {name, email} = pessoaData;
        
        const pessoa = new Pessoa(undefined, name, email);

        const novaPessoa = await this.PessoaRepository.inserePessoa(pessoa);
        console.log("Cadastrado:", novaPessoa);
        return novaPessoa;
    }

    async atualizaPessoa(pessoaData: any):Promise<Pessoa>{
        const {id, name, email} = pessoaData;

        const pessoa = new Pessoa(id, name, email);

        await this.PessoaRepository.atualizaPessoa(pessoa);
        console.log("Atualizado:", pessoa);
        return pessoa;
    }

    async deletaPessoa(pessoaData: any):Promise<Pessoa>{
        const {id, name, email} = pessoaData;

        const pessoa = new Pessoa(id, name, email);

        await this.PessoaRepository.deletaPessoa(pessoa);
        console.log("Deletado: ", pessoa);
        return pessoa;
    }

    async filtraPessoa(pessoaData: any):Promise<Pessoa>{
        const id = parseInt(pessoaData, 10);

        const pessoa = await this.PessoaRepository.filtrarPessoa(id);
        console.log("Filtrado: ", pessoa);
        return pessoa;
    }

    async filtraPessoas():Promise<Pessoa[]> {
        const pessoas = await this.PessoaRepository.filtrarPessoas();
        console.log("Filtrado: ", pessoas);
        return pessoas;
    }
}