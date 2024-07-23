import { Controller, Get, Post, UseGuards, Request } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { LocalAuthGuard } from "src/guards/local-auth.guard"
import { JwtAuthGuard } from "src/guards/jwt-auth.guard"

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(LocalAuthGuard) // execute validateUser and return user
    @Post("login")
    async login(@Request() req: any) {
        return this.authService.login(req.user)
    }

    @UseGuards(JwtAuthGuard)
    @Get("profile")
    getProfile(@Request() req: any) {
        return req.user
    }
}
