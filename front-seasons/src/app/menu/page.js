'use client'
import { useEffect, useState, useMemo} from "react";
import Card from "../components/Card";
import api from "../utils/axios";
import { DataForm } from "../utils/DateFormat";
import { Passero_One } from "next/font/google";
import moment from "moment";

export default function menubar(){

    const [passagens, setPassagens] = useState([]);
    const [pacotes, setPacotes] = useState([]);
    const [origens, setOrigens] = useState([]);
    const [destinos, setDestinos] = useState([]);
    const [assentos, setAssentos] = useState([]);
    const [passPac, setPassPac] = useState(true);
    const [filtro, setFiltro] = useState('');

    async function getPassagem() {
        try {
            const passagem = await api.get('/Passagem/');
            console.log(passagem);
            setPassagens(passagem.data);

            const destino = await api.get('/Destino/');
            console.log(destino);
            setDestinos(destino.data)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
    getPassagem()
    }, []);

    const Filter = useMemo(() =>{
        const termo = filtro.trim().toLowerCase();
        console.log(termo);

        if(!termo){
            return passagens;
        }

        const fk_destino = passagens.map(passagens => {
            const destinoInfo = destinos.find(d => d.id === passagens.destino);
            return 
        });

        return passagens.filter((item) => 
        Object.values(item).some((value) => {
        if (typeof value === null || value === undefined) {
            return false;
        }

        if(typeof value === "string"){
            return value.toLowerCase().includes(termo);
        }

        if(typeof value === "number" || typeof value === "boolean"){
        return String(value).toLowerCase().includes(termo);
        }
        if(value instanceof Date){
            moment(value).format('MMMM Do YYYY, h:mm:ss a')
        }

        return false;
        
        })
    
    )},[passagens, filtro])
    
    
    const colunas = [
        {id: 'ida',},
        {id: 'volta'},
        // {id: 'valor'},
        // {id: 'assento'},
        // {id: 'origem'},
        // {id: 'destino'}
    ]

    return(
    <div className="fixed inset-0 flex justify-center items-start mt-50">
        <div>
            <Card
            filtro={Filter}
            titulo={passPac ? 'Passagem' : 'Pacote'}
            colunas={colunas}
            >
            </Card>
        </div>
        
    </div>
    );
}