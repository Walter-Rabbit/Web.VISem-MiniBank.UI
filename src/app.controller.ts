import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  index() {
    return;
  }

  @Get('footer')
  @Render('footer')
  footer() {
    return;
  }

  @Get('header')
  @Render('header')
  header() {
    return;
  }

  @Get('404')
  @Render('404')
  e404() {
    return;
  }

  @Get('accounts')
  @Render('accounts')
  accounts() {
    return;
  }

  @Get('credits')
  @Render('credits')
  credits() {
    return;
  }

  @Get('deposits')
  @Render('deposits')
  deposits() {
    return;
  }

  @Get('profiles')
  @Render('profiles')
  profiles() {
    return;
  }

  @Get('transactions')
  @Render('transactions')
  transactions() {
    return;
  }
}
