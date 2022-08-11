import { Container, Input } from "./styles";
import { useContext, useState, useEffect } from "react";
import { SalesContext } from "../../../../contexts/Sales";

export default function Filter(){
    const { setFilter, setPage } = useContext(SalesContext);
    const [ minDate, setMinDate ] = useState<string>('');
    const [ maxDate, setMaxDate ] = useState<string>('');

    useEffect(() => {
        if(minDate !== '' && maxDate !== '' && (maxDate > minDate)){
            setPage('0');
            
            setFilter(`&min=${minDate}&max=${maxDate}`)
        }

        if(minDate !== '' && maxDate !== '' && (maxDate < minDate))
            alert('A data inicial precisa ser antes da final!');
    }, [minDate, maxDate]);

    return(
        <Container>
            <div>
                <Input>
                    <label htmlFor="date-min">Data mínima</label>
                    <input type="date" id="date-min" onChange={(e) => {setMinDate(e.target.value)}}/>
                </Input>
                <Input>
                    <label htmlFor="date-max">Data máxima</label>
                    <input type="date" id="date-max" onChange={(e) => {setMaxDate(e.target.value)}}/>
                </Input>
            </div>
            <a href="https://receive-smss.com/sms/33779279015/" target="blank">
                <button>Ver notificação</button>
            </a>
            {/*<Input>
                <label htmlFor="phone">Telefone destinatário</label>
                <input type="tel" placeholder="Ex: +5591912345678" id="phone" onChange={(e) => {
                    setPhone(e.target.value)
                    }}/>
                </Input>*/}
        </Container>
    );
}