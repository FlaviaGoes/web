import { PessoaService } from "../service/PessoaService";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { PessoaRequestDto } from "../model/dto/PessoaRequestDto";
import { PessoaDto } from "../model/dto/PessoaDto";
import { Route, Tags, Body, Post, Res, Put, Delete, Get, TsoaResponse, Controller, Path } from "tsoa";
import { Pessoa } from "../model/entity/pessoa";

@Route("pessoa")
@Tags("Pessoa")
export class pessoaController extends Controller {
    
    PessoaService = new PessoaService();

    @Post()
    async cadastrarPessoa (
        @Body() dto: PessoaRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
        ) : Promise < | void> {
            try {
                const pessoa = await this.PessoaService.cadastraPessoa(dto);
                return success (201, new BasicResponseDto("Pessoa cadastrada com sucesso!", pessoa));
            } catch (error: any) {
                return fail(400, new BasicResponseDto(error.message, undefined));
            }
    };

    @Put()
    async atualizarPessoa(
        @Body() dto: PessoaDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ) : Promise < | void> {
        try {
            const pessoa = await this.PessoaService.atualizaPessoa(dto);
            return success(200, new BasicResponseDto("Pessoa atualizada com sucesso!", pessoa));
        } catch (error:any){
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Delete()
    async deletarPessoa (
        @Body() dto: PessoaDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ) : Promise < | void> {
        try {
            const pessoa = await this.PessoaService.deletaPessoa(dto);
            return success(200, new BasicResponseDto("Pessoa deletada com sucesso!", pessoa));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Get("id/{id}")
    async filtrarPessoa (
        @Path() id: number,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success : TsoaResponse<200, BasicResponseDto>
    ) : Promise < | void> {
        try {
            const pessoa = await this.PessoaService.filtraPessoa(id);
            return success(200, new BasicResponseDto("Pessoa encontrada com sucesso!", pessoa));
        } catch (error:any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Get("all")
    async listarPessoas(
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ) : Promise < | void> {
        try {
            const pessoas: Pessoa[] = await this.PessoaService.filtraPessoas();
            return success(200, new BasicResponseDto("Pessoas listadas com sucesso!", pessoas));
        } catch (error:any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    };
}

