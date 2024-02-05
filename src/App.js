
import result0 from "./assets/images/result0.png";
import result1 from "./assets/images/result1.png";
import result2 from "./assets/images/result2.png";
import result3 from "./assets/images/result3.png";
import BackgroundImageQ1 from "./assets/images/Q1.jpg";
import BackgroundImageQ2 from "./assets/images/Q2.jpg";
import BackgroundImageQ3 from "./assets/images/Q3.jpg";
import BackgroundImageQ4 from "./assets/images/Q4.jpg";
import BackgroundImageQ5 from "./assets/images/Q5.jpg";
import BackgroundImageQ6 from "./assets/images/Q6.jpg";
import BackgroundImageQ7 from "./assets/images/Q7.jpg";
import BackgroundImageQ8 from "./assets/images/Q8.jpg";
import BackgroundImageQ9 from "./assets/images/Q9.jpg";
import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import "react-buzzfeed-quiz/lib/styles.css";

var color0= "#ffffff",color1= "#f0a1a5", color2="#fec1b2", color3="#fe7f6c", color4="#fbc8d6";
const App = () => {
  return (
    <div className="buzzfeed-quiz">
    <BuzzFeedQuiz
      title={<h1 >¿Qué deberías regalarle a tu pareja por San Valentín?</h1>}
      description={<h2>Descúbrelo con este test de personalidad</h2>}
      autoScroll={true}
      onRestart={() => alert("¿Quieres volver a hacer el test?")}
      onAnswerSelection={(questionIndex, answerIndex, resultID) =>
        console.log({
          questionIndex,
          answerIndex,
          resultID,
        })
      }
      facebookShareButton={false}
      facebookShareLink={"www.yourlink.com"}
      twitterShareButton={false}
      twitterShareLink={"www.yourlink.com"}
      copyShareButton={false}
      copyShareLink={"This text was copied using the copyShareLink prop."}
      
    questions={[ 
        { question: "Elige tu team:",
          questionRelativeToImage: "overlap",
          answerArrangement: "tile",
          fontColor: color0,
    	    backgroundImageSrc: BackgroundImageQ1,
          
          answers: [{
              answer: "BIO",
              resultID: 0,
              backgroundColor: color1,
              fontColor: "rgb(53,51,48)"
            },
            {
              answer: "TELECO",
              resultID: 1,
              backgroundColor: color3,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "DATOS",
              resultID: 3,
              backgroundColor: color4,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "No sé, no voy a clase",
              resultID: 2,
              backgroundColor: color2,
              fontColor: "rgb(53,51,48)",
            },],},
        { question: "Elige una asignatura:",
          questionRelativeToImage: "overlap",
          answerArrangement: "tile",
          backgroundImageSrc: BackgroundImageQ2,
          fontColor: color0,
          
          answers: [{
              answer: "MMAT",
              resultID: 0,
              backgroundColor: color3,
              fontColor: "rgb(53,51,48)"
            },
            {
              answer: "IACR",
              resultID: 1,
              backgroundColor: color1,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Fundamentos de Biomecánica",
              resultID: 2,
              backgroundColor: color2,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "INGLÉS",
              resultID: 3,
              backgroundColor: color4,
              fontColor: "rgb(53,51,48)",
            },],},
        { question: "¿Cuál es tú lugar favorito en la ETSIT?",
          questionRelativeToImage: "overlap",
          answerArrangement: "tile",
          backgroundImageSrc: BackgroundImageQ3,
          fontColor: color0,
          answers: [{
              answer: "Cafetería",
              resultID: 2,
              backgroundColor: color2,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Biblioteca",
              resultID: 1,
              backgroundColor: color4,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Puerta del A",
              resultID: 3,
              backgroundColor: color1,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Clubes",
              resultID: 0,
              backgroundColor: color3,
              fontColor: "rgb(53,51,48)",
            },],},
        { question: "¿Qué tal te ves en la carrera?",
          questionRelativeToImage: "overlap",
          answerArrangement: "tile",
          backgroundImageSrc: BackgroundImageQ4,
          fontColor: color0,
          
          answers: [{
              answer: "Acabo de entrar",
              resultID: 1,
              backgroundColor: color3,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Un 5.0 son 6 créditos",
              resultID: 3,
              backgroundColor: color2,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Mejor que en el amor",
              resultID: 0,
              backgroundColor: color1,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Me voy a Magisterio",
              resultID: 2,
              backgroundColor: color4,
              fontColor: "rgb(53,51,48)",
            },],},
        { question: "¿A quién le mandarias una piruleta?",
          questionRelativeToImage: "overlap",
          answerArrangement: "tile",
          backgroundImageSrc: BackgroundImageQ5,
          fontColor: color0,
          answers: [{
              answer: "Grajal",
              resultID: 0,
              backgroundColor: color4,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Nava",
              resultID: 3,
              backgroundColor: color1,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "A mi crush",
              resultID: 1,
              backgroundColor: color2,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Quique Cafeta",
              resultID: 2,
              backgroundColor: color3,
              fontColor: "rgb(53,51,48)",
            },],},
        { question: "¿Cuál es tu actividad favorita en la ETSIT?",
          questionRelativeToImage: "overlap",
          answerArrangement: "tile",
          backgroundImageSrc: BackgroundImageQ6,
          fontColor: color0,
          answers: [{
              answer: "Fumar",
              resultID: 3,
              backgroundColor: color1,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Ir al depor",
              resultID: 1,
              backgroundColor: color2,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Jugar al mus",
              resultID: 2,
              backgroundColor: color3,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Ir a clase",
              resultID: 0,
              backgroundColor: color4,
              fontColor: "rgb(53,51,48)",
            },],},
        { question: "¿Qué club es tu favorito?",
          questionRelativeToImage: "overlap",
          answerArrangement: "tile",
          backgroundImageSrc: BackgroundImageQ7,
          fontColor: color0,
          answers: [{
              answer: "Euri",
              resultID: 3,
              backgroundColor: color1,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Delta",
              resultID: 2,
              backgroundColor: color4,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "ECO  ",
              resultID: 0,
              backgroundColor: color2,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Depor",
              resultID: 1,
              backgroundColor: color3,
              fontColor: "rgb(53,51,48)",
            },],},

        {question: "¿Qué te gustaría que te regalasen por San Valentín?",
          questionRelativeToImage: "overlap",
          answerArrangement: "tile",
          backgroundImageSrc: BackgroundImageQ8,
          fontColor: color0,
          answers: [{
              answer: "Bombones",
              resultID: 2,
              backgroundColor: color2,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Flores",
              resultID: 1,
              backgroundColor: color1,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Piruletas",
              resultID: 3,
              backgroundColor: color3,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Pareja",
              resultID: 0,
              backgroundColor: color4,
              fontColor: "rgb(53,51,48)",
            },],},
        { question: "¿Cuál seria tu cita ideal en la ETSIT?",
          questionRelativeToImage: "overlap",
          answerArrangement: "tile",
          backgroundImageSrc: BackgroundImageQ9,
          fontColor: color0,
          answers: [{
              answer: "Fumarse un piti en la puerta del A",
              resultID: 3,
              backgroundColor: color1, 
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Ayudar a tu pareja con CELT",
              resultID: 0,
              backgroundColor: color2,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Tomarse algo en mesitas",
              resultID: 1,
              backgroundColor: color3,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Ciberteca & Chill",
              resultID: 2,
              backgroundColor: color4,
              fontColor: "rgb(53,51,48)",
            },],},
     ]}
     
      results={[
        {  //el tacaño/rata
          //description: Conseguir cubatas gratis de fiesta es tu pasatiempo favorito, tienes el arte de la seducción mas que dominado. Seamos honestos, el sueldo no te da ni para invitar a una cerve a tu crush y los pitis que le robas a tus amigos cada vez saben mejor.,
          resultImageSrc: result0,
          resultID: 0,
        },
        {  //El emprendedor                                                              
          //description: Te encanta buscar nuevas opciones y nuevas oportunidades en el amor, has tenido una época en la ETSIT donde el 3x2 de integra te ha salvado de muchas. Pretendes o pretendiste hacerte rico con el proyecto de empresa, no lo niegues,                                              
          resultImageSrc: result1,                              
          resultID: 1,                                                     
        },
        { 
           //Entregado en el amor
          //description: Eres una persona 10, igual que apruebas RDOR te entregas al amor. Andas en busca de alguien que no mienta principalmente pero siempre te estampas, no pierdes la fe aunque te osties.",
          resultImageSrc: result2,
          resultID: 2,
        },                                                               
        {  //El alternativo
          //description: "Te gusta arriesgar, y en el amor no iba a ser menos. ¿Quién quiere ir a la Tagliatella cuando puedes tener una cita superromántica en el museo del C? Cuidado!! Grajal estará mirando",
          resultImageSrc: result3,

          resultID: 3,
        },
      ]}
    />
    </div>
  );
};
export default App;