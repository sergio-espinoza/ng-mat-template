import { NgModule } from "@angular/core";
import { JsonParsePipe } from "./json-parse.pipe";

@NgModule({
  declarations: [JsonParsePipe],
  exports: [JsonParsePipe]
})
export class JsonParseModule { }
