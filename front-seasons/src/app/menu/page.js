'use client'
import { useEffect, useState } from "react";
import Card from "../components/Card";
import api from "../utils/axios";


export default function menubar(){

    const [passagens, setPassagens] = useState([]);
    const [pacotes, setPacotes] = useState([]);
    const [passPac, setPassPac] = useState(true);
    

    async function getPassagem() {
        try {
            const dados = await api.get('/Passagem/');
            console.log(dados);
            setPassagens(dados.data)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
    getPassagem()
    }, []);

    console.log(getPassagem);
    
    console.log(passagens);
    
    const items = [{
        // id:'ida',
        // id:'volta',
        id:'valor',
        // id:'assento',
        // id:'origem',
        // id:'destino'
    }]

    return(
    <div className="fixed inset-0 flex justify-center items-start mt-50">
        <div>
            <Card
            passagens={passagens}
            titulo={passPac ? 'Passagem' : 'Pacote'}
            items={items}
            >
            
            </Card>
        </div>
        
    </div>
    );
}