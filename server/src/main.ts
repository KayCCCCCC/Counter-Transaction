import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.setGlobalPrefix("api/v3") // set same router
    app.enableCors()
    app.useGlobalPipes() // validation data
    // app.useGlobalFilters();

    // Swagger config
    const config = new DocumentBuilder()
        .setTitle('Counter Transaction API')
        .setDescription('API mô tả tính năng hệ thống quản lý thu nhập')
        .setVersion('1.0')
        .addBearerAuth() // nếu có auth
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/', app, document);
    await app.listen(3000)
}
bootstrap()
