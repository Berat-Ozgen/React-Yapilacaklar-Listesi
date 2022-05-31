import {useEffect,useState} from 'react'
import './App.css';

const INITIAL_STATE = [
  {id: 1, baslik:"Alisveriş yap", tamamlandi: false},
  {id: 2, baslik:"Fatura öde", tamamlandi: true}
]


function App() {

  const [liste,setListe] = useState(INITIAL_STATE);

  const [yeniBaslik,setYeniBaslik] = useState("");


  return (
    <div className="App">

    <h1>yapılacaklar listesi</h1>
    <div className="ekleme_formu">
      <input value={yeniBaslik} onChange={(e) => setYeniBaslik(e.target.value) } placeholder='listeye ekle' />
      <button onClick={
        ()=> {
         if(yeniBaslik === "") {
         alert("boş deger girdiniz")
         } else { { setListe([...liste, {id: Date.now(), baslik: yeniBaslik, tamamlandi: false}])
         setYeniBaslik("")}}
         }}> ekle </button>

    </div>
    
    <div className="liste">

      {liste.map(item => <div key={item.id} onClick={()=>{
        setListe(liste.map(el => el.id === item.id ? {...el, tamamlandi:!el.tamamlandi}:el))
      }}
       className={item.tamamlandi ? "yapildi" :"" }>{item.baslik}
       </div>)}


     
    </div>

    <button onClick={()=> setListe(liste.filter(item => !item.tamamlandi))} className="temizle">tamamlanananları temizle</button>
     
    </div>
  );
}

export default App;
