import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.setGlobalPrefix("api/v3") // set same router
    app.enableCors()
    app.useGlobalPipes() // validation data
    // app.useGlobalFilters();
    await app.listen(3000)
}
bootstrap()
