import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from './app.component';
import { PageDefault }    from './app.pagedefault';
import { PageAbout } from './app.about';
import { PageHome } from './app.home';
import { PageDetails }  from './app.details';
import { routing }        from './app.routing';

@NgModule({
    imports: [BrowserModule, FormsModule, routing],
    declarations: [AppComponent, PageDefault,
        PageAbout, PageHome, PageDetails],
    bootstrap: [AppComponent],
})
export class AppModule { }
