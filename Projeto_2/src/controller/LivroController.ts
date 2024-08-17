import { LivroService } from "../service/LivroService";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { LivroDto } from "../model/dto/LivroDto";
import { LivroRequestDto } from "../model/dto/LivroRequestDto";
import { Route, Tags, Body, Post, Put, Delete, Get, TsoaResponse, Controller, Path, Res } from "tsoa";
import { Livro } from "../model/entity/livro";

@Route("livro")
@Tags("Livro")
export class livroController extends Controller {
    livroService = new LivroService();

    @Post()
    async cadastrarLivro (
        @Body() dto: LivroRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ) : Promise < | void> {
        try {
            const livro = await this.livroService.cadastrarLivro(dto);
            return success(201, new BasicResponseDto("Livro cadastrado com sucesso!", livro));
        } catch (error:any){
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Put()
    async atualizarLivro(
        @Body() dto: LivroDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ) : Promise < | void> {
        try {
            const livro = await this.livroService.atualizaLivro(dto);
            return success(200, new BasicResponseDto("Livro atualizado com sucesso!", livro));
        } catch (error:any){
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Delete()
    async deletarLivro (
        @Body() dto: LivroDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ) : Promise < | void> {
        try {
            const livro = await this.livroService.deletaLivro(dto);
            return success(200, new BasicResponseDto("Livro deletado com sucesso!", livro));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Get("id/{id}")
    async filtrarLivro (
        @Path() id: number,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success : TsoaResponse<200, BasicResponseDto>
    ) : Promise < | void> {
        try {
            const livro = await this.livroService.filtraLivro(id)
            return success(200, new BasicResponseDto("Livro encontrado com sucesso!", livro));
        } catch (error:any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Get("all")
    async listaLivros(
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ) : Promise < | void> {
        try {
            const livros : Livro[] = await this.livroService.filtrarLivros()
            return success(200, new BasicResponseDto("Livros listados com sucesso!", livros));
        } catch (error:any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    };
}