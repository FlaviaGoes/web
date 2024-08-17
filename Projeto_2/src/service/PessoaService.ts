import { Pessoa } from "../model/entity/pessoa";
import { PessoaRepository } from "../repository/PessoaRepository";

export class PessoaService {
    private PessoaRepository = PessoaRepository.getInstance();

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

        pessoaEncontrada = await this.PessoaRepository.confirmaNameEmailByID(pessoa.id, pessoa.name);

        if(pessoaEncontrada.length == 0){
            throw new Error("Pessoa com nome informado não cadastrado.");
        }

        pessoaEncontrada = await this.PessoaRepository.confirmaNameEmailByID(pessoa.id, pessoa.email);

        if(pessoaEncontrada.length == 0){
            throw new Error("Email informado não cadastrado.");
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

        pessoaEncontrada = await this.PessoaRepository.confirmaNameEmailByID(pessoa.id, pessoa.name);

        if(pessoaEncontrada.length == 0){
            throw new Error("Pessoa com nome informado não cadastrado.");
        }

        pessoaEncontrada = await this.PessoaRepository.confirmaNameEmailByID(pessoa.id, pessoa.email);

        if(pessoaEncontrada.length == 0){
            throw new Error("Email informado não cadastrado.");
        }

        await this.PessoaRepository.deletaPessoa(pessoa);
        console.log("Deletado: ", pessoa);
        return pessoa;
    }

    async filtraPessoa(pessoaData: any):Promise<Pessoa[]|null>{
        const id = parseInt(pessoaData, 10);

        const pessoa: Pessoa[] = await this.PessoaRepository.filtrarPessoaByNameId(id, undefined, undefined);
        console.log("Filtrado: ", pessoa);

        if(pessoa.length > 0){
            return pessoa;
        }
        return null
    }

    async filtraPessoas():Promise<Pessoa[]> {
        const pessoas = await this.PessoaRepository.filtrarPessoas();
        console.log("Filtrado: ", pessoas);
        return pessoas;
    }
}