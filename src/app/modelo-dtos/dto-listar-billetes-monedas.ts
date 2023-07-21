import { DtoBillete } from "./dto-billete";
import { DtoMoneda } from "./dto-moneda";

export class DtoListarBilletesMonedas {

    public monedas: DtoMoneda[] | undefined;
    public billetes: DtoBillete [] | undefined;
    public total:number = 0;

}