import { Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { Request } from 'express';

@Controller('user')
export class UserController {
    // @Get('users')
    // getUser(
    //     @Res() response: Response,
    //     @Req() request: Request
    // ) {
    //     console.log('Récupération de l\'utilisateur');
    //     response.status(200);
    //     response.json({
    //         content: 'part of response'
    //     })

    //     return response;
    // }
    @Get('users')
    getUser(
        @Res() response: Response,
        @Req() request: Request
    ) {
        console.log('Récupération de l\'utilisateur');
        response.status(200);
        response.json({
            content: 'part of response'
        })

        return response;
    }
    @Post('addUser')
    createUser(): any {
        return [
            { id: 1, name: 'John', age: 30 }
        ];
    }
    @Delete('deleteUser')
    deleteUser(): any {
        return [
            { id: 1, name: 'John', age: 30 }
        ];
    }
    @Put('updateUser')
    updateUser(): any {
        return [
            { id: 1, name: 'John', age: 30 }
        ];
    }
}
