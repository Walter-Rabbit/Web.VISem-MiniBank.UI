import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  index() {
    const current_page = 'main_page';
    return { current_page };
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

  @Get('e404')
  @Render('index')
  e404() {
    const current_page = 'e404';
    return { current_page };
  }

  @Get('accounts')
  @Render('index')
  accounts() {
    const current_page = 'accounts';
    return { current_page };
  }

  @Get('credits')
  @Render('index')
  credits() {
    const current_page = 'credits';
    return { current_page };
  }

  @Get('deposits')
  @Render('index')
  deposits() {
    const current_page = 'deposits';
    return { current_page };
  }

  @Get('profiles')
  @Render('index')
  profiles() {
    const current_page = 'profiles';
    return { current_page };
  }

  @Get('transactions')
  @Render('index')
  transactions() {
    const current_page = 'transactions';
    return { current_page };
  }
}
