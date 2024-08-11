import { PessoaService } from "../service/PessoaService";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { PessoaRequestDto } from "../model/dto/PessoaRequestDto";
import { Route, Tags, Body, Post, Res, Put, Delete, Get, Query, TsoaResponse, Controller } from "tsoa";

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
        @Body() dto: PessoaRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ) : Promise < | void> {
        try {
            const pessoa = await this.PessoaService.atualizaPessoa(dto);
            return success(201, new BasicResponseDto("Pessoa atualizada com sucesso!", pessoa));
        } catch (error:any){
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Delete()
    async deletarPessoa (
        @Body() dto: PessoaRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ) : Promise < | void> {
        try {
            const pessoa = await this.PessoaService.deletaPessoa(dto);
            return success(201, new BasicResponseDto("Pessoa deletada com sucesso!", pessoa));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Get()
    async filtrarPessoa (
        @Query() id: number,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success : TsoaResponse<201, BasicResponseDto>
    ) : Promise < | void> {
        try {
            const pessoa = await this.PessoaService.filtraPessoa(id);
            return success(201, new BasicResponseDto("Pessoa encontrada com sucesso!", pessoa));
        } catch (error:any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Get("all")
    async listarPessoas(
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ) : Promise < | void> {
        try {
            const pessoas = await this.PessoaService.filtraPessoas();
            return success(201, new BasicResponseDto("Pessoas listadas com sucesso!", pessoas));
        } catch (error:any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    };
}

