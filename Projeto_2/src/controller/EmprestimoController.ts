import { EmprestimoService } from "../service/EmprestimoService";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { EmprestimoRequestDto } from "../model/dto/EmprestimoRequestDto";
import { EmprestimoDto } from "../model/dto/EmprestimoDto";
import { Route, Tags, Body, Post, Put, Delete, Get, TsoaResponse, Controller, Path, Res } from "tsoa";
import { Emprestimo } from "../model/entity/emprestimo";

@Route("emprestimo")
@Tags("Emprestimo")
export class EmprestimoController extends Controller {
    emprestimoService = new EmprestimoService();

    @Post()
    async registrarEmprestimo(
        @Body() dto: EmprestimoRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ) : Promise < | void> {
        try{
            const emprestimo = await this.emprestimoService.registraEmprestimo(dto);
            return success(201, new BasicResponseDto("Emprestimo registrado com sucesso!", emprestimo));
        } catch (error:any){
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Put()
    async atualizarEmprestimo(
        @Body() dto: EmprestimoDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ) : Promise < | void> {
        try{
            const emprestimo = await this.emprestimoService.atualizaEmprestimo(dto);
            return success(201, new BasicResponseDto("Emprestimo atualizado com sucesso!", emprestimo));
        } catch (error:any){
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Delete()
    async deletaEmprestimo(
        @Body() dto: EmprestimoDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ) : Promise < | void> {
        try{
            const emprestimo = await this.emprestimoService.deletaEmprestimo(dto);
            return success(201, new BasicResponseDto("Emprestimo deletado com sucesso!", emprestimo));
        } catch (error:any){
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Get("id/{id}")
    async filtraEmprestimo(
        @Path() id: number,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ) : Promise < | void> {
        try{
            const emprestimo = await this.emprestimoService.filtraEmprestimo(id);
            return success(201, new BasicResponseDto("Emprestimo encontrado com sucesso!", emprestimo));
        } catch (error:any){
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Get("all")
    async listarEmprestimos(
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ) : Promise < | void> {
        try {
            const emprestimos : Emprestimo[] = await this.emprestimoService.filtrarEmprestimos()
            return success(200, new BasicResponseDto("Emprestimos listados com sucesso!", emprestimos));
        } catch (error:any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    };
}