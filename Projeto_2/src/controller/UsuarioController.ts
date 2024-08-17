import { UsuarioService } from "../service/UsuarioService";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { UsuarioDto } from "../model/dto/UsuarioDto";
import { UsuarioRequestDto } from "../model/dto/UsuarioRequestDto";
import { Route, Tags, Body, Post, Put, Delete, Get, TsoaResponse, Controller, Path, Res } from "tsoa";
import { Usuario } from "../model/entity/usuario";

@Route("usuario")
@Tags("Usuario")
export class usuarioController extends Controller {
    UsuarioService = new UsuarioService();
    
    @Post()
    async cadastrarUsuario (
        @Body() dto: UsuarioRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ) : Promise < | void> {
        try {
            const usuario = await this.UsuarioService.cadastraUsuario(dto);
            return success(201, new BasicResponseDto("Usuario cadastrado com sucesso!", usuario));
        } catch (error:any){
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Put()
    async atualizarUsuario(
        @Body() dto: UsuarioDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ) : Promise < | void> {
        try {
            const usuario = await this.UsuarioService.atualizaUsuario(dto);
            return success(200, new BasicResponseDto("Usuario atualizado com sucesso!", usuario));
        } catch (error:any){
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Delete()
    async deletarUsuario (
        @Body() dto: UsuarioDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ) : Promise < | void> {
        try {
            const usuario = await this.UsuarioService.deletaUsuario(dto);
            return success(200, new BasicResponseDto("Usuario deletado com sucesso!", usuario));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Get("id/{id}")
    async filtrarUsuario (
        @Path() id: number,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success : TsoaResponse<200, BasicResponseDto>
    ) : Promise < | void> {
        try {
            const usuario = await this.UsuarioService.filtraUsuario(id);
            return success(200, new BasicResponseDto("Usuario encontrado com sucesso!", usuario));
        } catch (error:any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Get("all")
    async listarUsuarios(
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ) : Promise < | void> {
        try {
            const usuarios: Usuario[] = await this.UsuarioService.filtrarUsuarios();
            return success(200, new BasicResponseDto("Usuarios listados com sucesso!", usuarios));
        } catch (error:any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    };

}