import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  index() {
    const current_page = 'main_page';
    const start_time = new Date().getTime();
    return { current_page, start_time };
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

  @Get('functions_list')
  @Render('functions_list')
  functions_list() {
    return;
  }

  @Get('loading_time')
  @Render('loading_time')
  loading_time() {
    return;
  }

  @Get('e404')
  @Render('index')
  e404() {
    const current_page = 'e404';
    const start_time = new Date().getTime();
    return { current_page, start_time };
  }

  @Get('accounts')
  @Render('index')
  accounts() {
    const current_page = 'accounts';
    const start_time = new Date().getTime();
    return { current_page, start_time };
  }

  @Get('credits')
  @Render('index')
  credits() {
    const current_page = 'credits';
    const start_time = new Date().getTime();
    return { current_page, start_time };
  }

  @Get('deposits')
  @Render('index')
  deposits() {
    const current_page = 'deposits';
    const start_time = new Date().getTime();
    return { current_page, start_time };
  }

  @Get('profiles')
  @Render('index')
  profiles() {
    const current_page = 'profiles';
    const start_time = new Date().getTime();
    return { current_page, start_time };
  }

  @Get('transactions')
  @Render('index')
  transactions() {
    const current_page = 'transactions';
    const start_time = new Date().getTime();
    return { current_page, start_time };
  }
}
